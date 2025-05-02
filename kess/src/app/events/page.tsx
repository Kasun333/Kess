'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const events = [
  {
    title: 'Blood Donation Camp',
    date: 'January',
    description:
      'Successfully organized a blood donation camp in collaboration with the National Blood Bank.',
    image: '/events/blood donation.webp',
    location: 'Kegalle',
  },
  {
    title: 'Annual Get-Together',
    date: 'April',
    description:
      'Join us for our annual gathering of engineering students and alumni.',
    image: '/events/get together.webp',
    location: 'Kegalle',
  },
  {
    title: 'Seminar Program for A-Level Students',
    date: 'May',
    description:
      'A comprehensive 4-week program covering key topics in physics and mathematics for A-Level students.',
    image: '/events/seminar.jpg',
    location: 'Kegalle',
  },
  {
    title: 'Practical Camp',
    date: 'June',
    description:
      'Hands-on physics practical sessions for students to enhance their understanding and skills.',
    image: '/events/practical.jpg',
    location: 'Kegalle',
  },
  {
    title: 'Poson Perahera Dansala',
    date: 'June',
    description:
      'Community service initiative during the Asala Perahera festival.',
    image: '/events/dansal.jpg',
    location: 'Kegalle',
  },
  {
    title: 'Annual Cricket Encounter',
    date: 'December',
    description:
      'Annual cricket tournament bringing together engineering students from different years.',
    image: '/events/cricket.jpg',
    location: 'Kegalle',
  },
];

const monthOrder = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Sort events chronologically by month
const sortedEvents = [...events].sort(
  (a, b) => monthOrder.indexOf(a.date) - monthOrder.indexOf(b.date)
);

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Title */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">
          Our Events
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 mx-auto mt-4 shadow-lg shadow-yellow-500/20"></div>
      </div>
      
      {/* Central vertical line with neon glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800 z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-400 to-yellow-200 opacity-50 blur-sm"></div>
      </div>
      
      {/* Timeline dots with neon effect */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 h-[calc(100%-8rem)] flex flex-col justify-around z-20">
        {sortedEvents.map((_, index) => (
          <div 
            key={index}
            className={`w-4 h-4 rounded-full bg-black border border-yellow-400 cursor-pointer transform hover:scale-125 transition-transform duration-300 ${
              activeEvent === index ? 'ring-2 ring-yellow-300 ring-offset-2 ring-offset-black' : ''
            }`}
            style={{
              boxShadow: activeEvent === index ? '0 0 15px 2px rgba(251, 191, 36, 0.7)' : '0 0 10px 1px rgba(251, 191, 36, 0.3)'
            }}
            onClick={() => {
              const element = document.getElementById(`event-${index}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              setActiveEvent(index);
            }}
          />
        ))}
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-black border border-yellow-400 text-yellow-400 p-3 rounded-full z-50 shadow-lg shadow-yellow-400/20 transition-all duration-300 transform hover:scale-110 hover:shadow-yellow-400/40"
        style={{ boxShadow: '0 0 15px rgba(251, 191, 36, 0.5)' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <div className="space-y-24 z-20 relative max-w-6xl mx-auto">
        {sortedEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div
              id={`event-${index}`}
              key={index}
              className={`relative flex items-center w-full ${
                isLeft ? 'justify-start md:justify-end' : 'justify-start'
              }`}
              data-aos={isLeft ? 'fade-right' : 'fade-left'}
            >
              <div className={`w-full md:w-5/12 ${isLeft ? 'md:mr-16' : 'md:ml-16'}`}>
                <div 
                  className="relative bg-gray-900 rounded-xl border border-yellow-400/30 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 group"
                  style={{ boxShadow: '0 10px 30px -15px rgba(251, 191, 36, 0.3)' }}
                >
                  {/* Card glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/5 to-yellow-200/5"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-yellow-400 to-yellow-200 opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="relative w-full h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                      <img
                        src={event.image || "/api/placeholder/400/300"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute top-4 left-4 bg-black text-yellow-400 font-bold px-3 py-1 rounded-full text-sm z-20 flex items-center border border-yellow-400/50"
                        style={{ boxShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
                      >
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {event.date}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center text-yellow-400/80 text-sm">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connection dot with animated ping effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 flex items-center justify-center">
                <div className="absolute w-2 h-2 bg-yellow-400 rounded-full" style={{ boxShadow: '0 0 10px rgba(251, 191, 36, 0.7)' }}></div>
                <div className="absolute w-4 h-4 bg-yellow-400/50 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add custom keyframes for animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Timeline;