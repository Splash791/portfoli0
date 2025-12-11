'use client'

const experiences = [
  {
    id: 1,
    company: 'Oregon State University',
    role: 'Machine Learning Research Assistant',
    duration: 'December 2025 - Present',
    location: 'Corvallis, OR',
    description: 'Data Cleaning for Machine Learning and Foundation Models.',
    technologies: ['Swift', 'SwiftUI', 'Xcode', 'iOS'],
    achievements: [
      'Developed and shipped new features for iOS apps',
      'Optimized app performance, reducing load time by 30%',
      'Collaborated with designers and product managers',
    ],
  },
  {
    id: 2,
    company: 'Oregon State University',
    role: 'Undergraduate Learning Assistant',
    duration: 'December 2025 - Present',
    location: 'Corvallis, OR',
    description: 'Led recitations for Introduction to Computer Science II (CS162), held office hours and grading appointments.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
    achievements: [
      'Published research paper in AI conference',
      'Built ML models with 95% accuracy',
      'Mentored undergraduate students',
    ],
  },
  {
    id: 3,
    company: 'Oregon State University',
    role: 'Community Relations Representative',
    duration: 'May 2025 - Present',
    location: 'Corvallis, OR',
    description: 'Built responsive web applications using React and Next.js. Worked closely with the design team to implement pixel-perfect UI components and optimize user interfaces.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    achievements: [
      'Redesigned company website, increasing engagement by 40%',
      'Improved page load speed by 50%',
      'Implemented responsive design for mobile devices',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen bg-[#1a1a1a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative glass rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-800/50 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover-scale animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Date & Company */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-orange-500 font-semibold text-sm sm:text-base">
                      {experience.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-xl text-gray-300 mb-2">{experience.company}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{experience.location}</p>
                </div>

                {/* Right Column - Description & Details */}
                <div className="lg:col-span-8">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-orange-500 mt-1">✓</span>
                          <span className="text-sm sm:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

