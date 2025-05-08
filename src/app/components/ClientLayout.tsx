'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                CloToGo
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <Link 
                href="/order" 
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Order Now
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/order"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-indigo-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <p className="text-sm">© {new Date().getFullYear()} CloToGo. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              <a 
                href="https://www.linkedin.com/company/clotogo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-indigo-200 transition-colors text-sm font-medium"
              >
                <Image
                  src="/linkedin2.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="invert"
                />
                <span className="font-medium">LinkedIn</span>
              </a>
              <Link 
                href="/campus-ambassador"
                className="flex items-center space-x-2 hover:text-indigo-200 transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium">Campus Ambassador</span>
              </Link>
              <Link 
                href="/terms"
                className="hover:text-indigo-200 transition-colors text-sm font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy"
                className="hover:text-indigo-200 transition-colors text-sm font-medium"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 