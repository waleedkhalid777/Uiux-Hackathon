"use client"
import React, { useState } from 'react'

const All = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    { bgColor: 'bg-blue-300' },
    { bgColor: 'bg-green-300' },
    { bgColor: 'bg-yellow-300' },
    { bgColor: 'bg-pink-300' },
    { bgColor: 'bg-purple-300' }
  ]

  // Generic scroll function for both directions
  const scroll = (direction: number) => {
    const newIndex = activeIndex + direction
    // Ensure we don't scroll beyond the boundaries
    if (newIndex >= 0 && newIndex < slides.length) {
      setActiveIndex(newIndex)
      setScrollPosition(newIndex * -200) // Update scroll position when moving right or left
    }
  }

  // Go to specific slide
  const goToSlide = (index: React.SetStateAction<number>) => {
    setActiveIndex(index)
    setScrollPosition(index * -200)
  }

  return (
    <div>
      <div className="relative bg-orange-50 py-12 md:py-20">
        <div className="mx-6 sm:mx-12 md:mx-16 flex items-center justify-between">

          {/* Left Section: Heading and Description */}
          <div className="flex-1">
            <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-poppins font-bold">
              50+ beautiful Rooms <br /> inspiration
            </h1>
            <p className="text-gray-800 pt-4 sm:pt-6 md:pt-8">
              Over designers have already made a lot of beautiful <br /> prototypes of rooms that inspire you
            </p>
          </div>

          {/* Right Section: Sliding Boxes */}
          <div className="flex-1">
            <div className="mt-8 sm:mt-12 md:mt-16">
              <div className="flex items-center justify-center">
                <div className="relative w-full overflow-hidden">
                  <div
                    className="flex space-x-4 transition-transform duration-300"
                    style={{ transform: `translateX(${scrollPosition}px)` }}
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`w-full sm:w-48 md:w-64 h-48 sm:h-56 md:h-64 ${slide.bgColor} rounded-lg`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Scroll buttons */}
              <div className="flex justify-between mt-4 md:mt-6">
                <button
                  onClick={() => scroll(-1)} // Scroll left
                  aria-label="Scroll Left"
                  role="button"
                  className="text-gray-700 p-2 rounded-full hover:bg-gray-200"
                >
                  &#8592;
                </button>
                <button
                  onClick={() => scroll(1)} // Scroll right
                  aria-label="Scroll Right"
                  role="button"
                  className="text-gray-700 p-2 rounded-full hover:bg-gray-200"
                  disabled={activeIndex === slides.length - 1} // Disable button when at the last slide
                >
                  &#8594;
                </button>
              </div>

              {/* Dotted Navigation */}
              <div className="flex justify-center space-x-2 mt-4 md:mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-400'}`}
                  />
                ))}
              </div>

              {/* Explore More Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-red-500 text-white px-6 py-3  hover:bg-red-600 transition-colors">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All
