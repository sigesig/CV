'use client'

import { useState } from 'react'
import { timelineData } from '@/data/timelineData'

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState('')

  // Sort timeline data by sortOrder to ensure chronological order
  const sortedTimelineData = [...timelineData].sort((a, b) => a.sortOrder - b.sortOrder)

  const handleTimelineClick = (id: string) => {
    console.log('Timeline clicked:', id, 'Current selected:', selectedYear)
    setSelectedYear(selectedYear === id ? '' : id)
  }

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Experience <span className="text-teal-600">Timeline</span></h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          My professional journey through education and career milestones
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Timeline Visual */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal-200 to-teal-600 h-full hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {sortedTimelineData.map((data, index) => (
                <div 
                  key={data.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-16`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                    <button
                      onClick={() => handleTimelineClick(data.id)}
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                        selectedYear === data.id
                          ? 'bg-teal-600 border-teal-600 shadow-lg shadow-teal-200'
                          : 'bg-white border-teal-300 hover:border-teal-500'
                      }`}
                      aria-expanded={selectedYear === data.id}
                      aria-controls={`timeline-content-${data.id}`}
                      aria-label={`${data.year} - ${data.label}. Click to ${selectedYear === data.id ? 'collapse' : 'expand'} details.`}
                    >
                      <span className="sr-only">{data.year} - {data.label}</span>
                    </button>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                    <div 
                      className={`group cursor-pointer transition-all duration-300 ${
                        selectedYear === data.id ? '' : 'hover:scale-105'
                      }`}
                      onClick={() => handleTimelineClick(data.id)}
                    >
                      <div className={`relative rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
                        selectedYear === data.id 
                          ? 'bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 shadow-xl' 
                          : 'bg-white border border-gray-200 hover:shadow-xl hover:border-teal-100'
                      }`}>
                        {/* Card Arrow for Desktop */}
                        <div className={`absolute top-6 w-4 h-4 bg-white border transform rotate-45 hidden lg:block ${
                          index % 2 === 0 
                            ? '-right-2 border-r-0 border-b-0' 
                            : '-left-2 border-l-0 border-t-0'
                        } ${
                          selectedYear === data.id 
                            ? 'border-teal-200 bg-teal-50' 
                            : 'border-gray-200 group-hover:border-teal-100'
                        }`}></div>

                        {/* Card Header */}
                        <div className="p-6">
                          {/* Year Badge */}
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-3 ${
                            selectedYear === data.id
                              ? 'bg-teal-600 text-white'
                              : 'bg-gray-100 text-gray-700 group-hover:bg-teal-100 group-hover:text-teal-700'
                          }`}>
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {data.year}
                          </div>

                          {/* Title */}
                          <h3 className={`text-xl font-bold mb-3 transition-colors ${
                            selectedYear === data.id ? 'text-teal-800' : 'text-gray-800 group-hover:text-teal-700'
                          }`}>
                            {data.label}
                          </h3>

                          {/* Content - Always show, but expand when selected */}
                          <div 
                            id={`timeline-content-${data.id}`}
                            className={`transition-all duration-500 ease-in-out relative ${
                              selectedYear === data.id ? 'max-h-none' : 'max-h-16 overflow-hidden'
                            }`}
                            aria-expanded={selectedYear === data.id}
                          >
                            <p className="text-gray-700 leading-relaxed">
                              {data.description}
                            </p>
                            
                            {/* Gradient fade for collapsed content */}
                            {selectedYear !== data.id && (
                              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                            )}
                          </div>

                          {/* Expand/Collapse Indicator */}
                          <div className={`mt-4 text-sm font-medium transition-all duration-300 flex items-center ${
                            selectedYear === data.id ? 'text-teal-600' : 'text-gray-400 group-hover:text-teal-500'
                          } ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                            {selectedYear === data.id ? (
                              <>
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                Click to collapse
                              </>
                            ) : (
                              <>
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Read more
                              </>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden w-full flex justify-center my-4">
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      selectedYear === data.id ? 'bg-teal-600 scale-125' : 'bg-gray-300'
                    }`}></div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Hints */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              💡 Click on any timeline item to expand and read the full details
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}