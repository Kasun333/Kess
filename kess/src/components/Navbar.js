'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Events', path: '/events' },
    { name: 'Services', path: '/services' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Support Us', path: '/support' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 bg-primary-800 rounded-full opacity-20 animate-blob"></div>
              <div className="relative flex items-center justify-center h-full w-full">
                <span className="text-primary-800 font-bold text-xl">K</span>
              </div>
            </div>
            <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-primary-800' : 'text-primary-800'}`}>
              KESS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-800 hover:bg-blue-50'
                    : 'text-gray-800 hover:text-primary-800 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/membership"
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium ${
                isScrolled
                  ? 'bg-primary-800 text-white hover:bg-primary-700'
                  : 'bg-primary-800 text-white hover:bg-primary-700'
              } transition-colors duration-300`}
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-primary-800"
            >
              {isMobileMenuOpen ? (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ top: '0', paddingTop: '4rem' }}
      >
        <nav className="h-full flex flex-col px-4 py-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="py-3 px-4 text-gray-800 hover:bg-blue-50 hover:text-primary-800 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/membership"
            className="mt-4 py-3 px-4 bg-primary-800 text-white rounded-md font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Us
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}