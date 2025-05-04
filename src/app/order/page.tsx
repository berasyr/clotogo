'use client'

import React from 'react'

export default function OrderPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Submit the form to Formspree
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    fetch('https://formspree.io/f/xanoegyy', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Redirect to Stripe checkout
        window.location.href = 'https://buy.stripe.com/aEU2b9aMFgeM2reeUU'
      } else {
        throw new Error('Form submission failed')
      }
    })
    .catch(error => {
      console.error('Error:', error)
      alert('Failed to submit form. Please try again.')
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Place Your Order
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Fill out the form below to place your order. We'll handle the rest!</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-6"
            >
              {/* Hidden input for Stripe redirect */}
              <input type="hidden" name="_next" value="https://buy.stripe.com/aEU2b9aMFgeM2reeUU" />
              
              {/* Store Name */}
              <div>
                <label htmlFor="store" className="block text-sm font-medium text-gray-700">
                  Store Name *
                </label>
                <input
                  type="text"
                  id="store"
                  name="store"
                  required
                  placeholder="Enter the store name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Product Link */}
              <div>
                <label htmlFor="productLink" className="block text-sm font-medium text-gray-700">
                  Product Link *
                </label>
                <textarea
                  id="productLink"
                  name="productLink"
                  required
                  rows={3}
                  placeholder="Paste the product link or provide a detailed description"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Size */}
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                    Size *
                  </label>
                  <input
                    type="text"
                    id="size"
                    name="size"
                    required
                    placeholder="Enter the size"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    required
                    defaultValue="1"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Customer Information */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Enter your street address (e.g., 123 Main St)"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Please enter your complete street address
                  </p>
                </div>

                <div>
                  <label htmlFor="aptNumber" className="block text-sm font-medium text-gray-700">
                    Apartment Number *
                  </label>
                  <input
                    type="text"
                    id="aptNumber"
                    name="aptNumber"
                    required
                    placeholder="Enter your apartment number"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    If you don't have an apartment number, enter "N/A"
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Proceed to Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 