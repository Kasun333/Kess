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

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text mb-4">
            Support Our Initiatives
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your generous contributions help us continue our educational programs and community initiatives. 
            Every donation makes a difference in supporting future engineers.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'donate' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('donate')}
            >
              Donate Now
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'projects' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </div>
        </div>

        {activeTab === 'donate' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bank Transfer Details</h3>
                <p className="text-gray-600 mb-6">
                  Please use the following bank details to make your donation via direct bank transfer.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Account Name</p>
                        <p className="font-medium text-gray-800">{bankDetails.accountName}</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        {copied === 'accountName' ? (
                          <span className="text-green-500 text-sm">Copied ✓</span>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Account Number</p>
                        <p className="font-medium text-gray-800">{bankDetails.accountNumber}</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        {copied === 'accountNumber' ? (
                          <span className="text-green-500 text-sm">Copied ✓</span>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Bank Name</p>
                        <p className="font-medium text-gray-800">{bankDetails.bankName}</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.bankName, 'bankName')}
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        {copied === 'bankName' ? (
                          <span className="text-green-500 text-sm">Copied ✓</span>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Branch</p>
                        <p className="font-medium text-gray-800">{bankDetails.branch}</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.branch, 'branch')}
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        {copied === 'branch' ? (
                          <span className="text-green-500 text-sm">Copied ✓</span>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Reference</p>
                        <p className="font-medium text-gray-800">{bankDetails.reference}</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.reference, 'reference')}
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        {copied === 'reference' ? (
                          <span className="text-green-500 text-sm">Copied ✓</span>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                  <p className="font-medium text-gray-700 mb-1">Important Note:</p>
                  <p>Please include the reference code when making your transfer to help us track your donation.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Other Ways to Support</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Sponsor an Event</h4>
                        <p className="text-sm text-gray-600">Contact us directly to discuss sponsorship opportunities for our upcoming events.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Volunteer with Us</h4>
                        <p className="text-sm text-gray-600">Contribute your time and skills to help organize and run our educational programs.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">In-Kind Donations</h4>
                        <p className="text-sm text-gray-600">Donate equipment, supplies, or services that can support our educational initiatives.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                      Contact Us About Donations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => {
              const percentRaised = (event.raised / event.goal) * 100;
              
              return (
                <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-lg p-6 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden rounded-lg">
                    <img
                      src={event.image || "/api/placeholder/400/300"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">
                            Rs. {event.raised.toLocaleString()}
                          </span>
                          <span className="text-gray-500">
                            Goal: Rs. {event.goal.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
                            style={{ width: `${percentRaised}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-xs text-gray-500 mt-1">
                          {percentRaised.toFixed(0)}% of goal raised
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
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
        <div className="mt-12 text-center">
          <p className="text-gray-600">Have questions about donating? Contact our treasurer:</p>
          <p className="font-medium text-indigo-600 mt-1">treasurer@kegalleesa.org • +94 71 234 5678</p>
        </div>
      </div>
    </div>
  );
};

export default DonationComponent;