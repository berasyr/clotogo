export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CloToGo',
  url: 'https://clotogo.com',
  logo: 'https://clotogo.com/logo.png',
  description: ' Clothing Delivery',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Syracuse',
    addressRegion: 'NY',
    addressCountry: 'US'
  },
  sameAs: [
    'https://facebook.com/clotogo',
    'https://twitter.com/clotogo',
    'https://instagram.com/clotogo'
  ]
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CloToGo Delivery',
  provider: {
    '@type': 'Organization',
    name: 'CloToGo'
  },
  description: 'Get your favorite clothing items delivered from your favorite stores right to your door.',
  areaServed: {
    '@type': 'City',
    name: 'Syracuse',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Syracuse',
      addressRegion: 'NY',
      addressCountry: 'US'
    }
  },
  serviceType: 'Clothing Delivery',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceType: 'Online',
    availableLanguage: ['English']
  }
} 