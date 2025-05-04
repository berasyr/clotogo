import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Fashion shopping"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Fashion Delivery Service
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Get your favorite fashion items from your favorite stores delivered directly to your door. 
          </p>
          <div className="mt-10">
            <Link
              href="/order"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                1. Choose Your Items
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Browse your favorite stores and select the items you want. Share the product links or descriptions with us!
              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                2. Place Your Order
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Fill out our simple order form with your delivery details (Syracuse, NY Area Only)
              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                3. Get Delivered 
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                We'll handle the shopping and deliver your items directly to your location. Pay online with a one-time link or in cash at delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-600">Place your first order today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/order"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 