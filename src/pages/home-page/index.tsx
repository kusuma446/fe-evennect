'use client'
import React from 'react'

export default function HomeMain() {
  return (
    <div className="home-page container mx-auto px-4 py-8">
      <section className="upcoming-events mb-8 bg-gray-100 py-12 px-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">Upcoming Events</h2>
        {/* Map through upcoming events data and display each event */}
        <div className="event-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example event item */}
          <div className="event-item bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">Event Name</h3>
            <p className="text-gray-600">Date: 2023-12-01</p>
            <p className="text-gray-600">Location: Event Location</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-lg">View Details</button>
          </div>
        </div>
      </section>

      <section className="featured-events mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
        {/* Map through featured events data and display each event */}
        <div className="event-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example featured event item */}
          <div className="event-item bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Featured Event Name</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Featured</span>
            </div>
            <p className="text-gray-600">Date: 2023-11-15</p>
            <p className="text-gray-600">Location: Featured Event Location</p>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm">View Details</button>
          </div>
        </div>
      </section>

      <section className="promotions">
        <h2 className="text-2xl font-bold mb-4">Promotions & Vouchers</h2>
        {/* Display promotional content or advertisements */}
        <div className="promo-items grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="promo-item bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Promo Title</h3>
            <p className="mt-2">Details about the promotion or voucher.</p>
            <button className="mt-4 bg-white text-indigo-600 hover:bg-gray-100 py-2 px-4 rounded font-medium">Claim Now</button>
          </div>
          <div className="promo-item bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Special Offer</h3>
            <p className="mt-2">Limited time discount on premium events.</p>
            <button className="mt-4 bg-white text-pink-600 hover:bg-gray-100 py-2 px-4 rounded font-medium">Get Discount</button>
          </div>
        </div>
      </section>
    </div>
  )
}
