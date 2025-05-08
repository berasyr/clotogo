'use client'

import React from 'react'

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-center font-medium text-white">
            <span className="md:hidden">Mother's Day Sale: 5% OFF! We pay the discount!</span>
            <span className="hidden md:inline">🎉 Mother's Day Special: Get 5% OFF on your purchase! We'll cover the discount! Sale ends Sunday.</span>
          </p>
        </div>
      </div>
    </div>
  )
} 