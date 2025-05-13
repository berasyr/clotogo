'use client'

import React, { useState } from 'react'
import Link from 'next/link'

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

      <footer className="bg-white border-t mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Connect With Us</h3>
              <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-16">
                <a
                  href="https://example.com/campus-ambassador-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Our Campus Ambassador Program empowers students to become the lead representative for CloToGo at their school. As a campus lead, you'll oversee marketing efforts, help recruit drivers, and play a key role in growing our presence locally. It's a paid opportunity with bonuses for meeting goals. This summer, you can also help launch CloToGo in your hometown!"
                  className="flex items-center space-x-4 text-pink-600 hover:text-pink-800 transition-colors group font-bold border-2 border-pink-400 rounded-lg px-4 py-2 bg-pink-50 hover:bg-pink-100 shadow"
                >
                  <svg className="h-10 w-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 11-2 0v-.07A8.001 8.001 0 014.07 13H7a1 1 0 110 2H4.07A8.001 8.001 0 0111 4.07V7a1 1 0 112 0V4.07A8.001 8.001 0 0119.93 11H17a1 1 0 110-2h2.93A8.001 8.001 0 0113 19.93z"/>
                  </svg>
                  <span className="text-lg font-bold">CloToGo Campus Ambassador Program</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/berafelouz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-indigo-600 hover:text-indigo-800 transition-colors group"
                >
                  <svg className="h-16 w-16 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-xl font-semibold"></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kimesha-mcmillan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-indigo-600 hover:text-indigo-800 transition-colors group"
                >
                  <svg className="h-16 w-16 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-xl font-semibold">Kimesha McMillan</span>
                </a>
                <a
                  href="https://www.instagram.com/clotogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-indigo-600 hover:text-indigo-800 transition-colors group"
                >
                  <img 
                    src="/black-and-white-outline-instagram-app-logo-icon-7017516951369307x990iaok2.png" 
                    alt="Instagram" 
                    className="h-12 w-12 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-xl font-semibold">@clotogo</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/clotogo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-indigo-600 hover:text-indigo-800 transition-colors group"
                >
                  <svg className="h-16 w-16 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-xl font-semibold">CloToGo (Company)</span>
                </a>
                <a
                  href="https://www.clotogo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-indigo-600 hover:text-indigo-800 transition-colors group"
                >
                  <svg className="h-16 w-16 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3.156.672 4.242 1.758A5.978 5.978 0 0120 12c0 1.657-.672 3.156-1.758 4.242A5.978 5.978 0 0112 20a5.978 5.978 0 01-4.242-1.758A5.978 5.978 0 014 12c0-1.657.672-3.156 1.758-4.242A5.978 5.978 0 0112 4zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0112 8zm0 2a4 4 0 100 8 4 4 0 000-8z"/>
                  </svg>
                  <span className="text-xl font-semibold">CloToGo Website</span>
                </a>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} CloToGo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
} 