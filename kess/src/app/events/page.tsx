'use client';
import React, { useEffect, useState } from 'react';
// Custom SVG icons instead of lucide-react
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
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
          Our Events
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4"></div>
      </div>
      
      {/* Central vertical line with animated glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-400 to-purple-500 opacity-30 blur-sm"></div>
      </div>
      
      {/* Timeline dots */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 h-[calc(100%-8rem)] flex flex-col justify-around z-20">
        {sortedEvents.map((_, index) => (
          <div 
            key={index}
            className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-300/40 cursor-pointer transform hover:scale-125 transition-transform"
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
        className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white p-3 rounded-full z-50 shadow-lg shadow-purple-300/20 transition-all duration-300 transform hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <div className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-gray-200/40 p-6 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-200/30">
                  <div className="flex flex-col">
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                      <img
                        src={event.image || "/api/placeholder/400/300"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold px-3 py-1 rounded-full text-sm z-20 flex items-center">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {event.date}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center text-indigo-500 text-sm">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {event.location}
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              
              {/* Connection dot with animated ping effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="absolute w-5 h-5 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;