import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send to Formspree
    const response = await fetch('https://formspree.io/f/mldbbwyp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        _subject: 'New Newsletter Subscription',
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to add subscriber')
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { message: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
} 