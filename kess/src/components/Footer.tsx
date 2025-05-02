'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

// Create a typed motion div component
const MotionDiv = motion.div as React.ComponentType<HTMLMotionProps<"div"> & { className?: string }>;

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [hovered, setHovered] = useState('')

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  }

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ) 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ) 
    },
  ]

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
    { name: 'Support', path: '/support' },
  ]

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-[100px] opacity-50"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[url('/patterns/noise.png')] opacity-[0.02] pointer-events-none"></div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          {/* About Section */}
          <MotionDiv 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full filter blur-sm"></div>
                <Image
                  src="/logo.png"
                  alt="KESS Logo"
                  width={48}
                  height={48}
                  className="relative h-12 w-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">KESS</h3>
                <p className="text-sm text-yellow-500">Engineering Students' Society</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Bringing Everyone Together, Sharing Knowledge, and Building Strong Connections.
              A volunteer-driven organization dedicated to empowering Kegalle through education and community service.
            </p>
            
            <div className="pt-2">
              <Link href="/about" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300">
                Learn more about us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></span>
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-gray-300 hover:text-yellow-400 flex items-center group transition-colors duration-300"
                    onMouseEnter={() => setHovered(link.name)}
                    onMouseLeave={() => setHovered('')}
                  >
                    <span className="mr-2 w-1.5 h-1.5 rounded-full bg-yellow-500 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className={`${hovered === link.name ? 'text-yellow-400' : ''} transition-colors duration-300`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Contact Info */}
          <MotionDiv 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-500/10 p-2 mt-1 rounded-full">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:info@kess.lk" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    info@kess.lk
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-500/10 p-2 mt-1 rounded-full">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+94XXXXXXXX" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    +94 XX XXX XXXX
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-500/10 p-2 mt-1 rounded-full">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Address</p>
                  <address className="not-italic text-gray-300">
                    Kegalle, Sri Lanka
                  </address>
                </div>
              </li>
            </ul>
          </MotionDiv>

          {/* Social Links & Newsletter */}
          <MotionDiv 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={3}
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-white relative inline-block">
              Connect With Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></span>
            </h3>
            
            {/* Social media icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-yellow-500/20 text-gray-300 hover:text-yellow-400 p-3 rounded-full border border-transparent hover:border-yellow-500/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Newsletter signup */}
            <div className="pt-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                <h4 className="text-sm font-medium text-white mb-3">Stay Updated</h4>
                <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for updates on events and opportunities.</p>
                
                <form className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full py-2 px-4 pr-10 bg-black/60 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium rounded-md transition-all duration-300 shadow-sm hover:shadow-yellow-500/20"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Bottom section with copyright and policy links */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} KESS - Kegalle Engineering Students Society. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for effects */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer