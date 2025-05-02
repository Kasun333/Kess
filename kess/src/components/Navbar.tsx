'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Support Us', path: '/support' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-yellow-900/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative w-10 h-10 overflow-hidden">
                <div className={`absolute inset-0 rounded-full ${scrolled ? 'bg-yellow-500/10' : 'bg-black/30'} group-hover:bg-yellow-500/20 transition-colors duration-300`}></div>
                <Image
                  src="/logo.svg"
                  alt="KESS Logo"
                  width={40}
                  height={40}
                  className="relative z-10 h-10 w-auto filter drop-shadow-glow"
                />
              </div>
              <div className="ml-3 flex flex-col">
                <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-white'} group-hover:text-yellow-400 transition-colors duration-300`}>
                  KESS
                </span>
                <span className={`text-[10px] uppercase tracking-widest ${scrolled ? 'text-yellow-500/80' : 'text-yellow-400/90'}`}>
                  Engineering Society
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 overflow-hidden group ${
                    isActive 
                      ? 'text-yellow-400' 
                      : 'text-gray-300 hover:text-yellow-300'
                  }`}
                >
                  {isActive && (
                    <motion.span 
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-yellow-900/20 rounded-md -z-10"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              )
            })}
            
            <Link
              href="/join"
              className="ml-3 relative group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full blur-[1px] group-hover:blur-[2px] opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative block px-5 py-2 bg-black/50 border border-yellow-500/50 text-yellow-400 rounded-full text-sm font-medium backdrop-blur-sm group-hover:text-yellow-300 transition-colors duration-300">
                Join Us
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors duration-300"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-yellow-900/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.path
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-yellow-400 bg-yellow-900/20 border-l-2 border-yellow-500' 
                          : 'text-gray-300 hover:text-yellow-300 hover:bg-yellow-900/10 hover:border-l-2 hover:border-yellow-500/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 + 0.1 }}
                className="pt-2 mt-3 border-t border-gray-800"
              >
                <Link
                  href="/join"
                  className="block mx-4 text-center px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-medium hover:shadow-lg hover:shadow-yellow-600/20 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom styles for filter effects */}
      <style jsx>{`
        .filter.drop-shadow-glow {
          filter: drop-shadow(0 0 8px rgba(234, 179, 8, 0.3));
        }
      `}</style>
    </nav>
  )
}

export default Navbar