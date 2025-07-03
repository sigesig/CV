'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function VictorCV() {
  const [selectedYear, setSelectedYear] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleTimelineClick = (key: string) => {
    console.log('Timeline clicked:', key, 'Current selected:', selectedYear)
    // Toggle the selection - if same item is clicked, collapse it; otherwise expand the new one
    setSelectedYear(selectedYear === key ? '' : key)
  }

  const timelineData = {
    '2014': {
      year: '2014',
      label: 'Libratone A/S',
      description: 'I stopped at Flex Trim A/S as a warehouse cleaner, and began working for Libratone A/S as a warehouse worker in some weekends/holidays. Being responsible for packing/repacking, testing and updating speakers.'
    },
    '2015': {
      year: '2015',
      label: 'Café Holmen & HTX',
      description: 'Started studying at Skive College HTX in the Mathematics/Physics class. I began working as a part-time job at Café Holmen in Nykøbing Mors as a dishwasher and kitchen helper.'
    },
    '2016': {
      year: '2016',
      label: 'Floorball Coach',
      description: 'After A year at Café Holmen I stopped working there. I got a part-time job at Libratone A/S as their warehouse janitor, while still doing the warehouse work in some holidays/weekends. Also, I started as a floorball coach for a youth team at Skive Floorbal.'
    },
    '2018': {
      year: '2018',
      label: 'B.Sc. in CS start',
      description: 'I finished studying at Skive College HTX, and moved to Aarhus to study a bachelors degree in Computer Science. I stopped working at Libratone A/S after I had developed a device for testing the battery quality in the wireless speakers.'
    },
    '2021': {
      year: '2021',
      label: 'M.Sc. in CS start',
      description: 'I finished my bachelors degree in Computer Science at Aarhus University. After finishing my bachelor degree, I began studying for a masters degree in Computer Science at Aarhus University.'
    },
    '2021-1': {
      year: '2021',
      label: 'Systematic A/S',
      description: 'Started working part-time at Systematic A/S as a Junior Software Developer, here I was part of the Studematic team, which organizes events for the company\'s student workers. Here time I got the opportunity to be an ambassador for Systematic at K-dag at Aarhus University, IT-day in Aalborg, and a few other events.'
    },
    '2023': {
      year: '2023',
      label: 'M.Sc in CS finished',
      description: 'I finished my masters degree in Computer Science at Aarhus University, with specialization in Algorithms, Cryptography, and Ubiquitous Computing and Interaction. My master\'s thesis was centered on light-weight cryptography.'
    }
  }

  return (
    <>
      {/* Header */}
      <header id="header" className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="#hero" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image 
                  src="/img/cvlogo.png" 
                  alt="logo" 
                  width={45} 
                  height={45} 
                  className="transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal-600/20 rounded-full scale-0 group-hover:scale-110 transition-all duration-300"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                <span className="text-teal-600">V</span>ictor{' '}
                <span className="text-teal-600">K</span>jelde
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { href: '#hero', label: 'Home' },
                { href: '#projects', label: 'Projects' },
                { href: '#about', label: 'About' },
                { href: '#timeline', label: 'Experience' },
                { href: '#contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 pt-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hello,<span className="text-teal-600">.</span>
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              My name is<span className="text-teal-600">.</span>
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              Victor Kjelde<span className="text-teal-600">.</span>
            </h1>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/img/kjelde-pic.jpg"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Re<span className="text-teal-600">c</span>ent Pro<span className="text-teal-600">j</span>ects
          </h2>
          
          <div className="space-y-16">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Electronic Voting System</h3>
                <h4 className="text-lg text-teal-600 mb-4">A centralized electronic voting system using ElGamal encryption for cryptographic security</h4>
                <p className="text-gray-600">
                  For my bachelor project, I developed a system for doing electronic voting safely in Golang. 
                  Using cryptographic techniques like ElGamal encryption scheme and secret sharing scheme to ensure confidentiality.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image src="/img/projects_imgs/evoting.jpg" alt="E-voting system" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Discord Bot and Monitoring</h3>
                <h4 className="text-lg text-teal-600 mb-4">Discord Bot for friends to play music etc.</h4>
                <p className="text-gray-600">
                  I developed a fully containerized Discord Bot using Typescript for me and my friends to use. 
                  I implemented a music player into the bot, by fetching music using YouTube. With support for Spotify links 
                  by fetching metadata using the Spotify API, then search YouTube with the fetched data. The bot has a full 
                  containerized monitoring system, using Prometheus and Prometheus exporters, Grafana, and with a Discord bot 
                  that fetch data from Discord about messages sent etc.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image src="/img/projects_imgs/discord-bot.png" alt="Discord bot" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Battery testing device</h3>
                <h4 className="text-lg text-teal-600 mb-4">A device for testing the quality of batteries in wireless speakers</h4>
                <p className="text-gray-600">
                  During my time at Libratone A/S, I developed a device for testing the battery capacity of speakers 
                  for use in the service and the development department. Created using an Arduino development board 
                  by measuring the current running through a shunt resistor, and a screen for the UI.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image src="/img/projects_imgs/battery-test.jpg" alt="Battery tester" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Omnidirectional RC car</h3>
                <h4 className="text-lg text-teal-600 mb-4">Omnidirectional RC car with an Arduino and Mecanum wheels</h4>
                <p className="text-gray-600">
                  As a final exam project at HTX, I created an RC car that used Mecanum wheels, and an Arduino 
                  development board as a brain. Control of the robot was done with Bluetooth through an app 
                  I developed for the purpose.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image src="/img/projects_imgs/HTX.jpg" alt="Omnidirectional RC car" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Project 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Measuring and handling indoor climate</h3>
                <h4 className="text-lg text-teal-600 mb-4">Using IoT, Cloud computing & Control theory</h4>
                <p className="text-gray-600">
                  I have developed an IoT system that can keep track of the indoor climate of a room, and regulate 
                  it with a fan. The system is connected to a web portal, such that users can monitor their indoor 
                  climate, and take action when needed. The system consists of a Raspberry Pi connected to a set of 
                  different sensors which together can measure temperature, humidity, pressure, gas, air quality, 
                  and light level. The Raspberry is also connected to an actuator, a fan for ventilation.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image src="/img/projects_imgs/indoor-climate.jpg" alt="Indoor climate control system" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Project 6 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Blendedspaces for HMDs and phones</h3>
                <h4 className="text-lg text-teal-600 mb-4">Using AR, Unity, Oculus Quest 2, and C#</h4>
                <p className="text-gray-600">
                  This is a system that connects head-mounted displays and mobile phones to the same blended space. 
                  Allowing them to interact with shared objects using a set of gestures. The system consists of two 
                  Unity applications, one made for mobile phone users and one for an Oculus Quest 2. In order to 
                  support Augmented Reality it relies on Unity&apos;s AR Foundation and for connecting the two applications 
                  it uses the Photon Engine to power the networking.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image src="/img/projects_imgs/blendedspaces.png" alt="Blended spaces sketch" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Project 7 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Deep learning for Medical Image Segmentation</h3>
                <h4 className="text-lg text-teal-600 mb-4">Using Python and the U-Net Model for detecting Pneumonia</h4>
                <p className="text-gray-600">
                  Developed and trained a deep learning model to predict and segment potential pneumonia infections 
                  in X-ray images. The U-net model was trained using X-ray images with bounding boxes describing 
                  where the pneumonia is located.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image src="/img/projects_imgs/Deeplearning.png" alt="Deep learning model results" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image src="/img/about-img.JPG" alt="About image" width={500} height={600} className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">About <span className="text-teal-600">me</span></h2>
              <h3 className="text-2xl font-semibold mb-4">Software Developer</h3>
              <p className="text-gray-600 mb-8">
                Software developer with some experience and a drive for clean code. In my spare time, I like to fiddle 
                with different software projects, other hobby projects, and hanging out with friends. Currently, I&apos;m 
                studying for a master&apos;s degree in computer science at Aarhus University with specialization in Algorithms, 
                Cryptography, and Ubiquitous Computing and Interaction. My master&apos;s thesis is centered on light-weight 
                cryptography, which entails the development/analysis of cryptographic algorithms and protocols optimized 
                for efficiency in computation, memory usage, power consumption, and code size.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Personal skills</h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {['Organized', 'Punctual', 'Good at cooperating', 'Detail-minded', 'Quick learner', 'Dutiful', 'Planning and executing', 'Social'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/data/CV-2023.pdf" download="Resume-Victor-Kjelde" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors inline-block">
                Download resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
                {Object.entries(timelineData).map(([key, data], index) => (
                  <div 
                    key={key}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:gap-16`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                      <button
                        onClick={() => handleTimelineClick(key)}
                        className={`w-6 h-6 rounded-full border-4 transition-all duration-300 hover:scale-125 ${
                          selectedYear === key
                            ? 'bg-teal-600 border-teal-600 shadow-lg shadow-teal-200'
                            : 'bg-white border-teal-300 hover:border-teal-500'
                        }`}
                      >
                        <span className="sr-only">{data.year} - {data.label}</span>
                      </button>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                      <div 
                        className={`group cursor-pointer transition-all duration-300 ${
                          selectedYear === key ? '' : 'hover:scale-105'
                        }`}
                        onClick={() => handleTimelineClick(key)}
                      >
                        <div className={`relative rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
                          selectedYear === key 
                            ? 'bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 shadow-xl' 
                            : 'bg-white border border-gray-200 hover:shadow-xl hover:border-teal-100'
                        }`}>
                          {/* Card Arrow for Desktop */}
                          <div className={`absolute top-6 w-4 h-4 bg-white border transform rotate-45 hidden lg:block ${
                            index % 2 === 0 
                              ? '-right-2 border-r-0 border-b-0' 
                              : '-left-2 border-l-0 border-t-0'
                          } ${
                            selectedYear === key 
                              ? 'border-teal-200 bg-teal-50' 
                              : 'border-gray-200 group-hover:border-teal-100'
                          }`}></div>

                          {/* Card Header */}
                          <div className="p-6">
                            {/* Year Badge */}
                            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-3 ${
                              selectedYear === key
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
                              selectedYear === key ? 'text-teal-800' : 'text-gray-800 group-hover:text-teal-700'
                            }`}>
                              {data.label}
                            </h3>

                            {/* Content - Always show, but expand when selected */}
                            <div className={`transition-all duration-500 ease-in-out relative ${
                              selectedYear === key ? 'max-h-none' : 'max-h-16 overflow-hidden'
                            }`}>
                              <p className="text-gray-700 leading-relaxed">
                                {data.description}
                              </p>
                              
                              {/* Gradient fade for collapsed content */}
                              {selectedYear !== key && (
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                              )}
                            </div>

                            {/* Expand/Collapse Indicator */}
                            <div className={`mt-4 text-sm font-medium transition-all duration-300 flex items-center ${
                              selectedYear === key ? 'text-teal-600' : 'text-gray-400 group-hover:text-teal-500'
                            } ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                              {selectedYear === key ? (
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
                        selectedYear === key ? 'bg-teal-600 scale-125' : 'bg-gray-300'
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Con<span className="text-teal-400">t</span>act i<span className="text-teal-400">n</span>fo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <Link href="mailto:victor@kjelde.dk" className="text-teal-400 hover:text-teal-300">
                Victor@kjelde.dk
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="space-y-1">
                <Link href="https://github.com/sigesig" className="block text-teal-400 hover:text-teal-300">GitHub</Link>
                <Link href="https://www.linkedin.com/in/victor-kjelde/" className="block text-teal-400 hover:text-teal-300">LinkedIn</Link>
                <Link href="https://gitlab.com/sigesig" className="block text-teal-400 hover:text-teal-300">GitLab</Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <Link href="https://goo.gl/maps/PAF1FRfQXMznMJZt9" className="text-teal-400 hover:text-teal-300">
                Aarhus C, Jutland, Denmark
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/img/cvlogo.png" 
                  alt="logo" 
                  width={40} 
                  height={40}
                  className="filter brightness-0 invert"
                />
                <h2 className="text-2xl font-bold">
                  <span className="text-teal-400">V</span>ictor <span className="text-teal-400">K</span>jelde
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Software Engineer specializing in algorithms, cryptography, and innovative solutions.
                Master&apos;s in Computer Science from Aarhus University.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-400">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: '#hero', label: 'Home' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#about', label: 'About' },
                  { href: '#timeline', label: 'Experience' },
                  { href: '#contact', label: 'Contact' },
                  { href: '/data/CV-2023.pdf', label: 'Resume' }
                ].map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-400">Let&apos;s Connect</h3>
              <p className="text-gray-300 mb-4">
                Feel free to reach out for collaborations or just to say hello!
              </p>
              <div className="flex space-x-4">
                {[
                  { 
                    href: 'https://github.com/sigesig', 
                    label: 'GitHub',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )
                  },
                  { 
                    href: 'https://www.linkedin.com/in/victor-kjelde/', 
                    label: 'LinkedIn',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  },
                  { 
                    href: 'https://gitlab.com/sigesig', 
                    label: 'GitLab',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
                      </svg>
                    )
                  },
                  { 
                    href: 'mailto:victor@kjelde.dk', 
                    label: 'Email',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    )
                  }
                ].map((social) => (
                  <Link 
                    key={social.href}
                    href={social.href} 
                    className="group p-3 bg-gray-700 hover:bg-teal-600 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>© 2024 Victor Kjelde. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <Link href="https://icons8.com/icons" className="hover:text-teal-400 transition-colors">
                  Icons by Icons8
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Built with</span>
                <div className="flex items-center space-x-2">
                  <span className="text-teal-400">Next.js</span>
                  <span>&</span>
                  <span className="text-teal-400">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}