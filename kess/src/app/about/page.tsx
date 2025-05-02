'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

// Create a typed motion div component
const MotionDiv = motion.div as React.ComponentType<HTMLMotionProps<"div"> & { className?: string }>;

export default function About() {
  const teamMembers = [
    {
      name: 'Channa',
      role: 'President',
      year: '20',
      image: '/Channa (1).webp',
    },
    {
      name: 'Nipun',
      role: 'Vice President',
      year: '21',
      image: '/Nipun.webp',
    },
    {
      name: 'Madushanka',
      role: 'Secretary',
      year: '20',
      image: '/Madushanka.webp',
    },
    {
      name: 'Piyumantha',
      role: 'Assistant Secretary',
      year: '21',
      image: '/Piyumantha.webp',
    },
    {
      name: 'Nadeesha',
      role: 'Treasurer',
      year: '20',
      image: '/Nadeesha.webp',
    },
    {
      name: 'Sandaru',
      role: 'Junior Treasurer',
      year: '21',
      image: '/Sandaru.webp',
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gold.webp')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              About KESS
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Empowering engineering students through knowledge sharing, community service,
              and professional development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our Mission</h2>
        <p className="text-lg text-gray-300 mb-12">
          To create a vibrant community of engineering students who support each other
          in their academic and professional journeys, while contributing positively
          to society through various initiatives and programs.
        </p>
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our Vision</h2>
        <p className="text-lg text-gray-300">
          To be the leading student society that nurtures future engineering leaders
          through knowledge sharing, skill development, and community engagement.
        </p>
      </motion.div>
      <MotionDiv 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:block"
        style={{ position: 'relative', height: '500px', borderRadius: '0.5rem', overflow: 'hidden', border: '2px solid rgba(234, 179, 8, 0.3)' }}
      >
        <Image
          src="/1.webp"
          alt="KESS Mission"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </MotionDiv>
    </div>
  </div>
</section>

      {/* History */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our History</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Founded with the vision of bringing together engineering students from
              Kegalle, KESS has grown into a vibrant community that supports academic
              excellence and professional development while serving the community.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: '2018', title: 'Foundation', desc: 'KESS was established to support engineering students in Kegalle' },
              { year: '2020', title: 'Growth', desc: 'Expanded programs and initiatives to serve more students' },
              { year: '2024', title: 'Innovation', desc: 'Launching new initiatives and expanding community impact' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ 
                  backgroundColor: 'black',
                  padding: '2rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(234, 179, 8, 0.3)',
                  transition: 'border-color 0.3s'
                }}
              >
                <div className="text-4xl font-bold text-yellow-400 mb-4">{item.year}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-yellow-400 mb-8">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated individuals who lead KESS and work tirelessly to support
              our community
            </p>
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                {/* Simple Photo Frame without gold effect */}
                <div className="relative mb-6">
                  {/* Photo container with clean border */}
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Member Info Card - kept the same */}
                <div className="text-center bg-gray-900 rounded-xl p-6 w-full shadow-xl border border-yellow-900/30 transform group-hover:translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-3"></div>
                  <p className="text-yellow-400 font-medium text-lg mb-1">{member.role}</p>
                  <p className="text-gray-400">Year {member.year}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 