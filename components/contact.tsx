'use client'

import { useState } from 'react'

const contactMethods = [
  {
    id: 1,
    name: 'Email',
    value: 'tylerquach@example.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: 'mailto:tylerquach@example.com',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    color: 'blue',
    action: 'copy',
  },
  {
    id: 2,
    name: 'LinkedIn',
    value: 'tylerquach',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: 'https://linkedin.com/in/tylerquach',
    gradient: 'from-blue-600 via-blue-500 to-blue-700',
    color: 'blue',
    action: 'link',
  },
  {
    id: 3,
    name: 'GitHub',
    value: 'tylerquach',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    href: 'https://github.com/tylerquach',
    gradient: 'from-gray-700 via-gray-600 to-gray-800',
    color: 'gray',
    action: 'link',
  },
  {
    id: 4,
    name: 'Resume',
    value: 'Download PDF',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/resume.pdf',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    color: 'orange',
    action: 'download',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleCopy = async (value: string, id: number) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleClick = (contact: typeof contactMethods[0]) => {
    if (contact.action === 'copy') {
      handleCopy(contact.value, contact.id)
    } else if (contact.action === 'download') {
      window.open(contact.href, '_blank')
    } else {
      window.open(contact.href, '_blank')
    }
  }

  return (
    <section id="contact" className="relative min-h-screen bg-[#1a1a1a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-blob-reverse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-3xl animate-blob-slow"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6">
            Let's connect and create something amazing together
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Contact Cards Grid - 1 Row, 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactMethods.map((contact, index) => {
            const isHovered = hoveredCard === contact.id
            const isCopied = copied === contact.id

            return (
              <div
                key={contact.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(contact.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-gradient-to-r ${contact.gradient}`}
                />

                {/* Main Card */}
                <button
                  onClick={() => handleClick(contact)}
                  className={`relative w-full glass rounded-2xl p-6 sm:p-8 border transition-all duration-500 overflow-hidden ${
                    isHovered
                      ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20 scale-[1.02]'
                      : 'border-gray-800/50'
                  }`}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {contact.icon}
                      </div>

                      {/* Copy/Check Icon */}
                      {contact.action === 'copy' && (
                        <div className="text-gray-400 group-hover:text-orange-500 transition-colors">
                          {isCopied ? (
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                      )}

                      {/* External link icon */}
                      {(contact.action === 'link' || contact.action === 'download') && (
                        <div className="text-gray-400 group-hover:text-orange-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {contact.name}
                    </h3>

                    {/* Value */}
                    <p className="text-gray-400 text-sm sm:text-base">
                      {contact.action === 'copy' && isCopied ? 'Copied!' : contact.value}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                    <div className={`absolute inset-0 bg-gradient-to-tl ${contact.gradient} rounded-full blur-2xl`} />
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

