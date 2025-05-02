'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';

// Component imports
import CountdownTimer from '../components/CountdownTimer';
import ImpactCounter from '../components/ImpactCounter';

// Create a typed motion div component with proper HTML attributes
const MotionDiv = motion.div as React.ComponentType<HTMLMotionProps<"div"> & { className?: string }>;

export default function Home() {
  // State for the video loaded status
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Tomorrow's date for the Get-Together event
  const getTogether = {
    title: 'KESS Annual Get-Together',
    date: new Date('2025-05-03T09:00:00'), // Using tomorrow's date
    description: 'Join us for our annual gathering of engineering students and alumni - a day of networking, fun activities, and strengthening our community bonds.',
    image: '/events/get together.webp',
    location: 'Galigamuwa Shans Hotel',
  };
  
  // Featured events that showcase your impact
  const impactEvents = [
    {
      title: 'Blood Donation Camp',
      date: 'January 2025',
      description:
        'Planning to organize a blood donation camp in collaboration with the National Blood Bank to support local healthcare needs.',
      image: '/events/blood donation.webp',
      location: 'Kegalle',
      impact: 'Target: 150+ donors',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Seminar Program for A-Level Students',
      date: 'May 2025',
      description:
        'Planning a comprehensive 4-week program to help A-Level students excel in physics and mathematics through expert-led sessions.',
      image: '/events/seminar.jpg',
      location: 'Kegalle',
      impact: 'Target: 400+ students',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Practical Camp',
      date: 'June 2025',
      description:
        'Organizing hands-on physics practical sessions to enhance students\' understanding and skills through interactive experiments.',
      image: '/events/practical.jpg',
      location: 'Kegalle',
      impact: 'Target: 250+ participants',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: 'Poson Perahera Dansala',
      date: 'June 2025',
      description:
        'Planning to organize a community service initiative during the Poson Perahera festival to serve the local community.',
      image: '/events/dansal.jpg',
      location: 'Kegalle',
    },
    {
      title: 'Annual Cricket Encounter',
      date: 'December 2025',
      description:
        'Preparing for our annual cricket tournament that will bring together engineering students from different years for friendly competition.',
      image: '/events/cricket.jpg',
      location: 'Bathabure Cricket Ground',
    },
  ];

  // Statistics to showcase impact
  const stats = [
    { label: 'Years Active', value: 15, prefix: '', suffix: '+' },
    { label: 'Students Supported', value: 5000, prefix: '', suffix: '+' },
    { label: 'Community Events', value: 50, prefix: '', suffix: '+' },
    { label: 'Volunteer Hours', value: 25000, prefix: '', suffix: '+' },
  ];

  // Load video
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with Fallback */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {videoLoaded ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/engineering-background.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-yellow-900 animate-gradient-shift"
          ></div>
        )}
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-300 to-yellow-500">
                KESS
              </span>
              <span className="block text-3xl sm:text-4xl font-light mt-2 tracking-wide">
                Kegalle Engineering Students' Society
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              <span className="text-yellow-400 font-normal">Volunteer-driven</span> collective of engineering students working to 
              <span className="text-yellow-400 font-normal"> empower our community</span> through knowledge and service
            </p>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Link href="#featured-event" className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-sm group-hover:blur transition-all duration-300"></div>
                <div className="relative border border-yellow-500/30 text-yellow-400 hover:text-yellow-300 px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-md z-10">
                  Join Our Event
                  <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 w-0 group-hover:w-full transition-all duration-700"></span>
                </div>
              </Link>
              
              <Link href="/support" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-sm group-hover:blur transition-all duration-300"></div>
                <div className="relative border border-yellow-500/30 text-yellow-400 hover:text-yellow-300 px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-md z-10">
                  Support Our Mission
                  <span className="absolute bottom-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 w-0 group-hover:w-full transition-all duration-700"></span>
                </div>
              </Link>
              </div>
            </MotionDiv>
          </MotionDiv>
          
          {/* Scrolling Prompt */}
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
            <MotionDiv 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Featured Event - Tomorrow's Get Together */}
      <section id="featured-event" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Featured Event
                </span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-8"></div>
            </MotionDiv>
            
            <div className="flex flex-col lg:flex-row gap-10 items-center bg-black/50 rounded-2xl p-6 lg:p-10 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)] backdrop-blur-sm">
              <MotionDiv 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 relative rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-lg z-20">
                  {new Date() > getTogether.date ? 'HAPPENING NOW' : 'TODAY'}
                </div>
                <Image 
                  src={getTogether.image}
                  alt={getTogether.title}
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <p className="text-yellow-400 text-sm mb-1">{getTogether.location}</p>
                </div>
              </MotionDiv>
              
              <MotionDiv 
                className="lg:w-1/2 flex flex-col items-start text-left space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold">{getTogether.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{getTogether.description}</p>
                
                <div className="w-full">
                  <p className="text-yellow-400 font-medium mb-3">Event Starts In:</p>
                  <CountdownTimer targetDate={getTogether.date} />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-gray-700 w-full">
                  {new Date() <= getTogether.date ? (
                    <Link href="/events/get-together" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                      Register Now
                    </Link>
                  ) : (
                    <div className="bg-yellow-500/20 text-yellow-400 font-semibold px-8 py-3 rounded-lg">
                      Registration Closed
                    </div>
                  )}
                  <Link href="/events" className="bg-white/5 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                    View All Events
                  </Link>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Impact */}
      <section className="py-20 relative overflow-hidden bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Our Mission & Impact
                </span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dedicated to empowering Kegalle through education, community service, and volunteerism.
              </p>
            </MotionDiv>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <MotionDiv 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 text-center hover:border-yellow-500/50 transition-all duration-500 shadow-lg hover:shadow-yellow-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-white mb-2">
                  <ImpactCounter prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
          
          {/* Impact events showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactEvents.map((event, index) => (
              <MotionDiv 
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-500 shadow-lg hover:shadow-yellow-500/10 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                  <Image 
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm text-yellow-400 py-1 px-3 rounded-full border border-yellow-500/30 z-20">
                    {event.icon}
                    <span className="text-sm font-medium">{event.impact}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-yellow-400 mb-4">{event.date} • {event.location}</p>
                  <p className="text-gray-400 flex-1">{event.description}</p>
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <Link href={`/#`} className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center">
                      Coming soon
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  More Upcoming Events
                </span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-8"></div>
            </MotionDiv>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {upcomingEvents.map((event, index) => (
              <MotionDiv 
                key={index}
                className="group bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/40 transition-all duration-500 shadow-lg hover:shadow-yellow-500/10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <Image 
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60 md:bg-gradient-to-b"></div>
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="inline-block bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-yellow-500/30">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">{event.title}</h3>
                    <p className="text-gray-400 mb-5">{event.description}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <div className="mt-6">
                      <Link href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center">
                        Event details
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/events" className="inline-block bg-white/5 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 hover:text-yellow-300 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Community Support */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/60">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[url('/gold.webp')] opacity-[0.02] pointer-events-none"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Join us in making Kegalle better
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              We can't do this alone. Our mission to empower our community through education and service needs your support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Link href="/contact" className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur-sm group-hover:blur-md transition-all duration-300 opacity-80"></div>
                <div className="relative border border-yellow-500/50 bg-black/80 text-yellow-400 hover:text-yellow-300 px-8 py-4 rounded-lg font-medium transition-all duration-300 z-10">
                  Volunteer With Us
                  <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 w-0 group-hover:w-full transition-all duration-700"></span>
                </div>
              </Link>
              
              <Link href="/support" className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm group-hover:blur transition-all duration-300"></div>
                <div className="relative border border-yellow-500/30 text-yellow-400 hover:text-yellow-300 px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-md z-10">
                  Support Our Projects
                  <span className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-yellow-400 to-yellow-600 w-0 group-hover:w-full transition-all duration-700"></span>
                </div>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }

        ::-webkit-scrollbar {
          width: 10px;
          background: #030712;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #eab308, #ca8a04);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ca8a04, #a16207);
        }
      `}</style>
    </div>
  );
}