'use client'

import { useState } from 'react'

const leadershipRoles = [
  {
    id: 1,
    title: 'Treasurer',
    organization: 'Google Developer Group @ OSU',
    duration: 'April 2025 - Present',
    location: 'Oregon State University',
    description: 'Leading a community of 500+ computer science students, organizing technical workshops, hackathons, and networking events to foster innovation and collaboration.',
    achievements: [
      {
        label: 'Members',
        value: '500+',
        icon: '👥',
      },
      {
        label: 'Events',
        value: '24',
        icon: '🎯',
      },
      {
        label: 'Impact',
        value: '85%',
        icon: '📈',
      },
    ],
    responsibilities: [
      'Strategic planning and vision setting for the organization',
      'Managing executive board and coordinating team initiatives',
      'Building partnerships with tech companies and industry leaders',
      'Organizing large-scale events including annual hackathons',
      'Mentoring new members and fostering inclusive community culture',
    ],
    skills: ['Strategic Leadership', 'Team Management', 'Event Planning', 'Public Speaking', 'Community Building'],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: '🎓',
    color: 'blue',
  },
  {
    id: 2,
    title: 'Public Relations',
    organization: 'App Development Club',
    duration: 'January 2025 - Present',
    location: 'Oregon State University',
    description: 'Co-founded a nonprofit organization focused on providing free coding education to underprivileged students, leading technical curriculum development and volunteer coordination.',
    achievements: [
      {
        label: 'Students',
        value: '200+',
        icon: '🎓',
      },
      {
        label: 'Volunteers',
        value: '45',
        icon: '💪',
      },
      {
        label: 'Success Rate',
        value: '92%',
        icon: '⭐',
      },
    ],
    responsibilities: [
      'Developing comprehensive coding curriculum and learning materials',
      'Leading a team of 45 volunteer instructors and mentors',
      'Building partnerships with schools and community organizations',
      'Managing technical infrastructure and online learning platform',
      'Tracking student progress and program effectiveness metrics',
    ],
    skills: ['Educational Leadership', 'Curriculum Design', 'Volunteer Management', 'Nonprofit Operations', 'Impact Measurement'],
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    icon: '🚀',
    color: 'purple',
  },
]

export default function Leadership() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="leadership" className="relative min-h-screen bg-[#1a1a1a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-blob-reverse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-3xl animate-blob-slow"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
            <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Leading with vision, impact, and innovation
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leadershipRoles.map((role, index) => {
            const isHovered = hoveredCard === role.id

            return (
              <div
                key={role.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(role.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-gradient-to-r ${role.gradient}`}
                />

                {/* Main Card */}
                <div
                  className={`relative glass rounded-3xl p-6 sm:p-8 lg:p-10 border transition-all duration-500 overflow-hidden ${
                    isHovered
                      ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20 scale-[1.02]'
                      : 'border-gray-800/50'
                  }`}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`}
                  />

                  {/* Header Section */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center text-3xl sm:text-4xl shadow-lg`}
                        >
                          {role.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                            {role.title}
                          </h3>
                          <p className="text-lg text-gray-300">{role.organization}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {role.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {role.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mb-6">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="relative z-10 grid grid-cols-3 gap-4">
                    {role.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-2xl mb-2">{achievement.icon}</div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                          {achievement.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">{achievement.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                    <div className={`absolute inset-0 bg-gradient-to-tl ${role.gradient} rounded-full blur-2xl`} />
                  </div>
                </div>
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

