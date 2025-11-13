'use client';

import Link from 'next/link';
import { useState } from 'react';
import W3ForceLogo from './W3ForceLogo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <W3ForceLogo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold gradient-text leading-none">W3Force</span>
              <span className="text-[10px] text-gray-500 leading-none mt-0.5">AI-Powered Innovation</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-violet-600 transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-violet-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-violet-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 gradient-bg text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-violet-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mx-3 mt-2 px-6 py-2 gradient-bg text-white rounded-full text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
