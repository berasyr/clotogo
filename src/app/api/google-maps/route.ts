import { NextResponse } from 'next/server'

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const GOOGLE_MAPS_BASE_URL = 'https://maps.googleapis.com/maps/api'

// Simple in-memory rate limiting
const requestCounts = new Map<string, number>()
const RATE_LIMIT = 50 // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const count = requestCounts.get(ip) || 0
  const windowStart = now - RATE_LIMIT_WINDOW

  // Clean up old entries
  for (const [key, timestamp] of requestCounts.entries()) {
    if (timestamp < windowStart) {
      requestCounts.delete(key)
    }
  }

  if (count >= RATE_LIMIT) {
    return true
  }

  requestCounts.set(ip, count + 1)
  return false
}

export async function GET(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    const { searchParams } = new URL(request.url)
    const endpoint = searchParams.get('endpoint')
    const input = searchParams.get('input')

    if (!endpoint || !input) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // Validate the endpoint to prevent abuse
    const allowedEndpoints = ['place/autocomplete', 'place/details']
    if (!allowedEndpoints.includes(endpoint)) {
      return NextResponse.json(
        { error: 'Invalid endpoint' },
        { status: 400 }
      )
    }

    // Validate input length to prevent abuse
    if (input.length > 1000) {
      return NextResponse.json(
        { error: 'Input too long' },
        { status: 400 }
      )
    }

    // Construct the Google Maps API URL
    const url = new URL(`${GOOGLE_MAPS_BASE_URL}/${endpoint}/json`)
    url.searchParams.append('input', input)
    url.searchParams.append('key', GOOGLE_MAPS_API_KEY!)
    url.searchParams.append('types', 'address')
    url.searchParams.append('components', 'country:us')

    // Make the request to Google Maps API with timeout
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    try {
      const response = await fetch(url.toString(), {
        signal: controller.signal,
      })
      clearTimeout(timeout)

      if (!response.ok) {
        throw new Error(`Google Maps API returned ${response.status}`)
      }

      const data = await response.json()

      // Check for Google Maps API errors
      if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
        throw new Error(data.error_message || 'Google Maps API error')
      }

      return NextResponse.json(data)
    } catch (error) {
      clearTimeout(timeout)
      throw error
    }
  } catch (error) {
    console.error('Error in Google Maps proxy:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 