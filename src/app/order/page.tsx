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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-2 text-center">Place Your Order</h2>
        <p className="text-gray-600 mb-8 text-center">Fill out the form below to place your order. We'll handle the rest!</p>
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Store Name */}
          <div>
            <label htmlFor="store" className="block text-sm font-medium text-gray-700 mb-1">
              Store Name
            </label>
            <input
              type="text"
              id="store"
              name="store"
              required
              placeholder="Enter the store name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
            />
          </div>

          {/* Product Link */}
          <div>
            <label htmlFor="productLink" className="block text-sm font-medium text-gray-700 mb-1">
              Product Link
            </label>
            <textarea
              id="productLink"
              name="productLink"
              required
              rows={3}
              placeholder="Paste the product link or provide a detailed description"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Size */}
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                required
                placeholder="Enter the size"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              />
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                required
                defaultValue="1"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              />
            </div>
          </div>

          {/* Customer Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
            />
          </div>

          {/* Address Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Enter your street address (e.g., 123 Main St)"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              />
              <p className="text-xs text-gray-500 mt-1">
                Please enter your complete street address
              </p>
            </div>
            <div>
              <label htmlFor="aptNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Apartment Number
              </label>
              <input
                type="text"
                id="aptNumber"
                name="aptNumber"
                required
                placeholder="Enter your apartment number"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              />
              <p className="text-xs text-gray-500 mt-1">
                If you don't have an apartment number, enter "N/A"
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-lg font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 