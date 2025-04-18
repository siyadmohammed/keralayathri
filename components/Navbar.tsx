// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            TravelX
          </Link>

          {/* Hamburger for mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/packages" className="hover:text-blue-500">Packages</Link>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 space-y-2">
            <Link href="/" className="block">Home</Link>
            <Link href="/packages" className="block">Packages</Link>
            <Link href="/about" className="block">About</Link>
            <Link href="/contact" className="block">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
