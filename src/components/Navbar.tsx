"use client";

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

// Configurable links
const navLinks = [
  { href: '/', label: 'Job Search' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-base-100 shadow-lg sticky w-full z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="text-primary">
              MySite NAME
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="block lg:hidden">
            <button 
              className="btn btn-primary" 
              type="button" 
              aria-label="Toggle menu" 
              onClick={toggleMenu}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex lg:space-x-4">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="btn btn-ghost">
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-base-200`}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`block px-4 py-2 text-primary ${index < navLinks.length - 1 ? 'border-b border-base-300' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
