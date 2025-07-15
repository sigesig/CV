'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Hello,
          </h1>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            My name is
          </h1>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            <span className="text-teal-600">Victor Kjelde</span>
          </h1>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/img/kjelde-pic.jpg"
            alt="Victor Kjelde profile picture"
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
