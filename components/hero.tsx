'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Creative animated background with moving blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving gradient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-500/6 rounded-full blur-3xl animate-blob-reverse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-orange-400/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl animate-blob-slow"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo/Name with Dropdown */}
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-orange-500/50">
              T
            </div>
            <span className="text-white font-medium text-sm sm:text-base">Tyler Quach</span>
            <svg
              className={`w-4 h-4 text-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Menu */}
              <nav className="absolute left-0 top-full mt-2 w-48 glass rounded-lg shadow-2xl border border-gray-700 overflow-hidden z-50">
                <ul className="py-2">
                  <li>
                    <button
                      onClick={() => scrollToSection('home')}
                      className="text-white hover:bg-white/10 hover:text-orange-500 font-medium text-base transition-colors w-full text-left px-4 py-3"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="text-white hover:bg-white/10 hover:text-orange-500 font-medium text-base transition-colors w-full text-left px-4 py-3"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="text-white hover:bg-white/10 hover:text-orange-500 font-medium text-base transition-colors w-full text-left px-4 py-3"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('experience')}
                      className="text-white hover:bg-white/10 hover:text-orange-500 font-medium text-base transition-colors w-full text-left px-4 py-3"
                    >
                      Experience
                    </button>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left - Text Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Main Title */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="font-bold leading-[1.1] text-white animate-fade-in-up">
                  <span className="block gradient-text mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Tyler Quach</span>
                  <span className="block text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-3">
                    Computer Science
                  </span>
                  <span className="block text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
                    Student at <span className="gradient-text">Oregon State University</span>
                  </span>
                </h1>
              </div>

              {/* Description and CTA */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Hi, I'm <span className="text-white font-semibold">Tyler</span>. I'm a Computer Science student passionate about creating real world projects that will benefit the world positively.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="group relative bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover-scale"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View My Work
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="glass border border-gray-700 hover:border-orange-500/50 text-white rounded-full px-8 py-4 font-semibold text-base sm:text-lg transition-all duration-300 hover-scale"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative w-full aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              <div className="relative w-full h-full rounded-3xl overflow-hidden group hover-scale">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700/50">
                  {/* Replace with your actual image */}
                  <Image
                    src="/images/.jpg"
                    alt="Tyler Quach"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg
                        className="w-24 h-24 mx-auto mb-4 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <p className="text-sm">Your Photo</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
