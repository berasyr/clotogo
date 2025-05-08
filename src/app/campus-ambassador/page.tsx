'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

export default function CampusAmbassador() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showSuccess, setShowSuccess] = useState(false)

  const onSubmit = async (data: any) => {
    try {
      // Add email addresses to the form data
      const formData = {
        ...data,
        _replyto: data.email, // This will be the reply-to email
        _cc: ['berafelouzjr@gmail.com', 'kiamesha2004@gmail.com'], // CC both of you
      }

      const response = await fetch('https://formspree.io/f/xwpobwvj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setShowSuccess(true)
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Thank You!</h2>
            <p className="text-xl text-black">We will contact you soon.</p>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <Image
                src="/7605885.jpg"
                alt="Campus Ambassador Program"
                width={800}
                height={1200}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-8">CloToGo Campus Ambassador Program</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="mb-4">
                Our Campus Ambassador Program empowers students to become the lead representative for CloToGo at their school. 
                As a campus lead, you'll oversee marketing efforts, help recruit drivers, and play a key role in growing our 
                presence locally. It's a paid opportunity and include bonus once specific orders and engagement goals are met, 
                you'll earn for your work.
              </p>
              
              <p className="mb-4">
                This summer, we're also offering the chance to bring CloToGo to your hometown. You'll get paid to help us 
                launch in your area no order minimums required.
              </p>
              
              <p className="mb-8">
                Interested in being a part of the future of fashion delivery? Fill out our interest form below!
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">👤 Basic Info</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    {...register('fullName', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  {errors.fullName && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    {...register('phone', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  {errors.phone && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">School Name</label>
                  <input
                    type="text"
                    {...register('school', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  {errors.school && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Graduation Year</label>
                  <input
                    type="number"
                    {...register('graduationYear', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  {errors.graduationYear && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">📍 Location & Availability</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-1">What city or town would you like to launch CloToGo in this summer?</label>
                  <input
                    type="text"
                    {...register('city', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  {errors.city && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Are you available to begin this summer or only in the fall?</label>
                  <select
                    {...register('availability', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select an option</option>
                    <option value="summer">This Summer</option>
                    <option value="fall">Fall Only</option>
                    <option value="both">Both Summer and Fall</option>
                  </select>
                  {errors.availability && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">How comfortable are you with promoting CloToGo on social media?</label>
                  <select
                    {...register('socialMediaComfort', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select an option</option>
                    <option value="very">Very comfortable</option>
                    <option value="somewhat">Somewhat comfortable</option>
                    <option value="not">Not comfortable</option>
                    <option value="notActive">Not active on social media</option>
                  </select>
                  {errors.socialMediaComfort && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">🚗 Logistics</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Do you have access to transportation in your area (car, bike, etc.)?</label>
                  <select
                    {...register('transportation', { required: true })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.transportation && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
} 