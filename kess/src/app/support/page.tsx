'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const DonationComponent = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('donate');

  // Bank account details
  const bankDetails = {
    accountName: "Engineering Students Association",
    accountNumber: "0123456789",
    bankName: "Bank of Ceylon",
    branch: "Kegalle Branch",
    swiftCode: "BCEYLKLX",
    reference: "ESA Donation"
  };

  // Upcoming events that need funding
  const upcomingEvents = [
    {
      title: "Annual Cricket Tournament",
      goal: 150000,
      raised: 82500,
      description: "Help us organize our annual cricket tournament for engineering students.",
      image: "/events/cricket.jpg"
    },
    {
      title: "Practical Camp 2025",
      goal: 200000,
      raised: 45000,
      description: "Support hands-on physics practical sessions for A-Level students.",
      image: "/events/practical.jpg"
    },
    {
      title: "Seminar Series",
      goal: 100000,
      raised: 70000,
      description: "Fund our comprehensive seminar program for aspiring engineers.",
      image: "/events/seminar.jpg"
    }
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  // Custom neon gold color values for dark theme
  const neonGold = {
    dark: '#121212', // Very dark background
    darkerGray: '#181818', // Darker gray for container backgrounds
    darkGray: '#222222', // Dark gray for card backgrounds
    border: '#FFD70030', // Semi-transparent gold for borders
    light: '#FFF9E680', // Very light gold with transparency
    pale: '#FFEEBB',  // Pale gold
    medium: '#FFD700', // Classic gold
    bright: '#FFCA28', // Brighter gold
    accent: '#FFB300', // Slightly deeper gold for accents
    gradient: 'linear-gradient(90deg, #FFD700, #FFC107, #FFD700)'
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 relative" style={{ backgroundColor: neonGold.dark }}>
      {/* Animated background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-900 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-700 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Support Our <span className="text-transparent bg-clip-text" style={{backgroundImage: neonGold.gradient}}>Initiatives</span>
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-6 shadow-lg" style={{
            backgroundImage: neonGold.gradient,
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.7)'
          }}></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your generous contributions help us continue our educational programs and community initiatives. 
            Every donation makes a difference in supporting future engineers.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex rounded-lg p-1 border border-yellow-900 shadow-lg" 
               style={{ backgroundColor: 'rgba(30, 30, 30, 0.6)', backdropFilter: 'blur(8px)' }}>
            <button 
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'donate' 
                  ? 'text-white border shadow-md' 
                  : 'text-gray-400 hover:text-yellow-200'
              }`}
              onClick={() => setActiveTab('donate')}
              style={activeTab === 'donate' ? {
                borderColor: neonGold.medium,
                backgroundColor: 'rgba(40, 40, 40, 0.8)',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
              } : {}}
            >
              Donate Now
            </button>
            <button 
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'projects' 
                  ? 'text-white border shadow-md' 
                  : 'text-gray-400 hover:text-yellow-200'
              }`}
              onClick={() => setActiveTab('projects')}
              style={activeTab === 'projects' ? {
                borderColor: neonGold.medium,
                backgroundColor: 'rgba(40, 40, 40, 0.8)',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
              } : {}}
            >
              Projects
            </button>
          </div>
        </div>

        {activeTab === 'donate' && (
          <div className="rounded-xl border shadow-xl p-6 md:p-8" style={{
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(255, 215, 0, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 215, 0, 0.2)'
          }}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4">Bank Transfer Details</h3>
                <p className="text-gray-300 mb-6">
                  Please use the following bank details to make your donation via direct bank transfer.
                </p>

                <div className="space-y-4 mb-6">
                  {Object.entries(bankDetails).map(([key, value], index) => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    return (
                      <div key={index} className="p-4 rounded-lg border transition-all duration-300 hover:border-yellow-500 group"
                           style={{
                             backgroundColor: 'rgba(40, 40, 40, 0.6)', 
                             borderColor: 'rgba(255, 215, 0, 0.2)',
                             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                           }}>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-400">{label}</p>
                            <p className="font-medium text-gray-200">{value}</p>
                          </div>
                          <button 
                            onClick={() => copyToClipboard(value, key)}
                            style={{color: copied === key ? '#22C55E' : neonGold.bright}}
                            className="hover:text-yellow-300 transition-colors duration-300"
                          >
                            {copied === key ? (
                              <span className="text-sm flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Copied
                              </span>
                            ) : (
                              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-sm text-gray-300 mt-4 p-4 border rounded-lg" 
                     style={{
                       backgroundColor: 'rgba(60, 60, 60, 0.6)',
                       borderColor: 'rgba(255, 215, 0, 0.3)',
                       boxShadow: '0 0 10px rgba(255, 215, 0, 0.1) inset'
                     }}>
                  <p className="font-medium text-yellow-200 mb-1">Important Note:</p>
                  <p>Please include the reference code when making your transfer to help us track your donation.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                <div className="rounded-lg p-6 border shadow-md" 
                     style={{
                       backgroundColor: 'rgba(35, 35, 35, 0.7)',
                       backdropFilter: 'blur(10px)',
                       borderColor: 'rgba(255, 215, 0, 0.2)',
                       boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)'
                     }}>
                  <h3 className="text-xl font-bold text-white mb-6">Other Ways to Support</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start group">
                      <div className="p-2 rounded-full mr-3 border" 
                           style={{
                             backgroundColor: 'rgba(40, 40, 40, 0.8)',
                             borderColor: neonGold.border,
                             boxShadow: '0 0 10px rgba(255, 215, 0, 0.2)'
                           }}> 
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             style={{color: neonGold.bright}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1 group-hover:text-yellow-300 transition-colors">Sponsor an Event</h4>
                        <p className="text-sm text-gray-300">Contact us directly to discuss sponsorship opportunities for our upcoming events.</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="p-2 rounded-full mr-3 border"
                           style={{
                             backgroundColor: 'rgba(40, 40, 40, 0.8)',
                             borderColor: neonGold.border,
                             boxShadow: '0 0 10px rgba(255, 215, 0, 0.2)'
                           }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             style={{color: neonGold.bright}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1 group-hover:text-yellow-300 transition-colors">Volunteer with Us</h4>
                        <p className="text-sm text-gray-300">Contribute your time and skills to help organize and run our educational programs.</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="p-2 rounded-full mr-3 border"
                           style={{
                             backgroundColor: 'rgba(40, 40, 40, 0.8)',
                             borderColor: neonGold.border,
                             boxShadow: '0 0 10px rgba(255, 215, 0, 0.2)'
                           }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             style={{color: neonGold.bright}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1 group-hover:text-yellow-300 transition-colors">In-Kind Donations</h4>
                        <p className="text-sm text-gray-300">Donate equipment, supplies, or services that can support our educational initiatives.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button 
                      className="w-full font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-px text-black border-2"
                      style={{
                        borderColor: neonGold.medium,
                        background: neonGold.gradient,
                        boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)'
                      }}>
                      Contact Us About Donations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => {
              const percentRaised = (event.raised / event.goal) * 100;
              
              return (
                <div key={index} className="rounded-xl border shadow-xl p-6 flex flex-col md:flex-row gap-6 hover:border-yellow-500 transition-all duration-300"
                     style={{
                       backgroundColor: 'rgba(30, 30, 30, 0.8)',
                       backdropFilter: 'blur(10px)',
                       borderColor: 'rgba(255, 215, 0, 0.2)',
                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 215, 0, 0.1)'
                     }}>
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden rounded-lg border"
                       style={{ borderColor: 'rgba(255, 215, 0, 0.2)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <img
                      src={event.image || "/api/placeholder/400/300"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300 mb-6">{event.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium" style={{color: neonGold.bright}}>
                            Rs. {event.raised.toLocaleString()}
                          </span>
                          <span className="text-gray-400">
                            Goal: Rs. {event.goal.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2.5 p-0.5">
                          <div 
                            className="h-1.5 rounded-full relative overflow-hidden"
                            style={{ 
                              width: `${percentRaised}%`,
                              backgroundImage: neonGold.gradient,
                              boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
                            }}
                          >
                            <span className="absolute inset-0 bg-yellow-400/30 animate-pulse"></span>
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-400 mt-1">
                          {percentRaised.toFixed(0)}% of goal raised
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <button 
                        className="flex-1 text-black font-medium py-3 px-4 rounded-lg transition-all duration-300 border-2 hover:shadow-lg hover:translate-y-px"
                        style={{
                          borderColor: neonGold.medium,
                          background: neonGold.gradient,
                          boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)'
                        }}>
                        Donate to This Project
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-lg border" 
               style={{
                 backgroundColor: 'rgba(40, 40, 40, 0.8)',
                 backdropFilter: 'blur(10px)',
                 borderColor: 'rgba(255, 215, 0, 0.3)',
                 boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
               }}>
            <p className="text-gray-300 mb-2">Have questions about donating? Contact our treasurer:</p>
            <p className="font-medium text-white flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                   style={{color: neonGold.bright}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-yellow-200 hover:text-yellow-300 transition-colors">treasurer@kegalleesa.org</span> 
              <span className="mx-2 text-gray-600">•</span> 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                   style={{color: neonGold.bright}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-yellow-200 hover:text-yellow-300 transition-colors">+94 71 234 5678</span>
            </p>
          </div>
        </div>
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
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default DonationComponent;