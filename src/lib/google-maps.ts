import { Loader } from '@googlemaps/js-api-loader'

// Initialize the Google Maps loader with proxy
export const initGoogleMaps = () => {
  return new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    version: 'weekly',
    libraries: ['places'],
    region: 'US',
    language: 'en',
  })
}

// Function to initialize the autocomplete with proxy
export const initAddressAutocomplete = (
  inputElement: HTMLInputElement,
  onPlaceChanged: (place: google.maps.places.PlaceResult) => void
) => {
  const autocomplete = new google.maps.places.Autocomplete(inputElement, {
    types: ['address'],
    componentRestrictions: { country: 'us' },
    fields: ['formatted_address', 'geometry', 'name'],
  })

  // Add debounce to the place_changed event
  let debounceTimeout: NodeJS.Timeout
  autocomplete.addListener('place_changed', () => {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      const place = autocomplete.getPlace()
      if (place.formatted_address) {
        onPlaceChanged(place)
      }
    }, 300) // 300ms debounce
  })

  return autocomplete
}

// Function to get place details through our proxy
export const getPlaceDetails = async (placeId: string) => {
  try {
    const response = await fetch(`/api/google-maps?endpoint=place/details&input=${placeId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch place details')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching place details:', error)
    throw error
  }
} 