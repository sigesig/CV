'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header id="header" className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
          <Link href="#hero" className="flex items-center space-x-3 group" aria-label="Victor Kjelde - Go to top">
            <div className="relative">
              <Image 
                src="/img/cvlogo.png" 
                alt="Victor Kjelde logo" 
                width={45} 
                height={45} 
                className="transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-teal-600/20 rounded-full scale-0 group-hover:scale-110 transition-all duration-300"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              <span className="text-teal-600">V</span>ictor{' '}
              <span className="text-teal-600">K</span>jelde
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" role="menubar">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden py-4 border-t border-gray-100"
            role="menu"
          >
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}