'use client'

import { useState, useEffect } from 'react'

const projects = [
    {
        id: 1,
        title: 'Expense Tracker',
        tech: 'Next.js, TypeScript, Tesseract.js, Tailwind CSS, ShadCN UI, MongoDB Atlas, Recharts',
        description: 'A modern personal finance web app for tracking and visualizing expenses — including automatic receipt scanning via OCR.',
        fullDescription: 'A streamlined expense-tracking app built with Next.js and TypeScript. Users can log expenses or scan receipts using Tesseract.js, with data stored in MongoDB Atlas. Features include date filtering, interactive category charts, summaries, and a clean Tailwind + ShadCN UI dashboard.',
        gradient: 'from-blue-500 to-cyan-500',
        size: 'large',
        technologies: ['Next.js', 'TypeScript', 'Tesseract.js', 'Tailwind CSS', 'ShadCN UI', 'MongoDB Atlas', 'Recharts'],
        features: [
          'Manual expense entry',
          'Receipt scanning / OCR via Tesseract.js',
          'Expense filtering by month/year',
          'Interactive charts (category breakdowns)',
          'Persistent storage via MongoDB Atlas',
          'Responsive dashboard UI'
        ],
        github: 'https://github.com/Splash791/expense-tracker',
      }
      ,
      {
        id: 2,
        title: 'Pomodoro Timer',
        tech: 'JavaScript, HTML, CSS, Node.js',
        description: 'A simple web app implementing the Pomodoro Technique to boost focus and productivity.',
        fullDescription: 'Pomodory is a web-based Pomodoro timer that cycles between Focus sessions (25 min) and Breaks (5 min), with start, pause, and reset controls. It automatically switches between work and break periods, tracks session history, and offers a dark-mode toggle. Built with plain HTML, CSS, and JavaScript on the frontend and a Node.js backend for session history.',
        gradient: 'from-green-500 to-yellow-500',
        size: 'small',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
        features: [
          'Start/Pause/Reset timer controls',
          'Automatic Focus ↔ Break cycles',
          'Save and view session history',
          'Dark mode toggle',
          'Multi-page navigation (Timer, History, Account)'
        ],
        github: 'https://github.com/Splash791/cs361-pomodory',
      }
      
,
{
    id: 3,
    title: 'Small Shell',
    tech: 'C',
    description: 'A custom Unix shell supporting command execution, redirection, and job control.',
    fullDescription: 'A compact POSIX-style shell written in C implementing command execution, pipelines, I/O redirection, background jobs, built-in commands (cd, exit), and signal handling for process management (SIGINT, SIGCHLD). Implemented as a class assignment; emphasizes process control, parsing, and robust error handling.',
    gradient: 'from-gray-700 to-gray-500',
    size: 'small',
    technologies: ['C', 'POSIX', 'Unix system calls', 'Makefile'],
    features: [
      'Command parsing and execution',
      'I/O redirection and pipelines',
      'Background job handling (&) and job control',
      'Built-in commands (cd, exit)',
      'Signal handling for process lifecycle (SIGINT, SIGCHLD)'
    ],
    github: 'Private / code not publicly available',
  }
  ,
  {
    id: 4,
    title: 'Spotify Album Finder',
    tech: 'JavaScript, HTML, CSS, Spotify API',
    description: 'Web app that searches for albums and displays details using the Spotify API.',
    fullDescription: 'Album Finder is a web application that allows users to search for albums and view detailed information including tracks, artist, and release data. Built with JavaScript, HTML, and CSS, it uses the Spotify API to fetch album data and features a clean, responsive, and user-friendly interface.',
    gradient: 'from-red-500 to-scarlet-500',
    size: 'small',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Spotify API'],
    features: [
      'Search for albums by name or artist',
      'View album details and tracks',
      'Responsive and clean UI',
      'Interactive search experience'
    ],
    github: 'https://github.com/Splash791/AlbumFinder',
  }
  ,
  {
    id: 5,
    title: 'NBA Player Efficiency Analysis',
    tech: 'Python, PostgreSQL',
    description: 'Fetched NBA player stats and calculated efficiency ratings.',
    fullDescription: 'A Python project to fetch NBA player stats for the 2022-2023 seaoson, calculate efficiency ratings, and store the data in a PostgreSQL database.',
    gradient: 'from-indigo-500 to-purple-500',
    size: 'small',
    technologies: ['Python', 'PostgreSQL'],
    features: ['Rate limiting', 'Request caching', 'Error handling', 'Comprehensive docs'],
    github: 'https://github.com/Splash791/nba-player-efficiency-index',
  },
  {
    id: 6,
    title: 'AI Hallucination Detector',
    tech: 'Next.js, TypeScript, OpenRouter, AWS',
    description: 'An AI-powered system that detects unreliable model outputs using multi-model verification.',
    fullDescription: 'Bastinel is a multi-model AI hallucination detector that validates responses instead of trusting a single LLM. Each query runs through two independent generator models and two judge models, which compare answers, evaluate factual grounding, and produce a final reliability score. Built on AWS with OpenRouter and optimized through modular prompt engineering, Bastinel provides transparent reasoning, side-by-side comparisons, and a polished UI built with Tailwind, ShadCN, and Framer Motion.',
    gradient: 'from-purple-500 to-pink-500',
    size: 'medium',
    technologies: [
      'Next.js',
      'TypeScript',
      'OpenRouter',
      'AWS',
      'Tailwind CSS',
      'ShadCN',
      'Framer Motion'
    ],
    features: [
      'Multi-model verification pipeline',
      'Hallucination scoring',
      'Side-by-side model comparison',
      'Transparent reasoning outputs',
      'Modern, animated UI'
    ],
    github: 'https://github.com/Splash791',
  }
  ,
  {
    id: 7,
    title: 'AI Quiz Generator',
    tech: 'React, Node, MongoDB, TypeScript, OpenRouter',
    description: 'Generate interactive quizzes from topics or uploaded documents using AI.',
    fullDescription: 'A full-stack app that uses AI to generate interactive quizzes from a topic or uploaded PDF/DOCX. Built with a React (Vite) frontend and a Node/Express + MongoDB backend, it supports multiple choice / true-false / hybrid quizzes, instant feedback with AI explanations, quiz history, theming, and a polished Tailwind + ShadCN UI.',
    gradient: 'from-orange-600 to-orange-300',
    size: 'large',
    technologies: [
      'React (Vite)',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN UI',
      'Node.js',
      'Express',
      'MongoDB (Mongoose)',
      'OpenRouter (LLM integration)',
      'Multer / PDF extraction / Mammoth'
    ],
    features: [
      'AI-powered quiz generation from topic or uploads',
      'Multiple-choice, True/False, and Hybrid modes',
      'Customizable question count (1–20)',
      'Immediate feedback with AI explanations',
      'Quiz history (view, retake, delete)',
      'Theming (dark mode + color picker) and animated UI'
    ],
    github: 'https://github.com/Splash791/AI-Quiz',
  }
  ,
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [expandedProject])

  const selectedProject = expandedProject ? projects.find(p => p.id === expandedProject) : null

  return (
    <section id="projects" className="relative min-h-screen bg-[#1a1a1a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing innovation and technical excellence.
          </p>
        </div>

        {/* Bento Grid */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr">
              {projects.map((project) => {
                const isLarge = project.size === 'large'
                const isMedium = project.size === 'medium'
                const colSpan = isLarge ? 'sm:col-span-2 md:col-span-2' : isMedium ? 'sm:col-span-2 md:col-span-2' : ''
                const rowSpan = isLarge ? 'md:row-span-2' : ''

                return (
                  <div
                    key={project.id}
                    className={`${colSpan} ${rowSpan} group cursor-pointer hover-scale`}
                    onClick={() => setExpandedProject(project.id)}
                  >
                    <div className="h-full min-h-[200px] sm:min-h-[240px] glass rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden border border-gray-800/50 hover:border-orange-500/30 flex flex-col">
                      {/* Project Image/Placeholder */}
                      <div
                        className={`flex-1 bg-gradient-to-br ${project.gradient} p-4 sm:p-6 flex flex-col justify-between`}
                      >
                        <div className="flex justify-end gap-2">
                          <button className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                            <svg
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              />
                            </svg>
                          </button>
                          <button className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                            <svg
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </button>
                        </div>
                        {isLarge && (
                          <div className="mt-auto">
                            <h4 className="text-white text-lg sm:text-xl font-bold">{project.title}</h4>
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-3 sm:p-4">
                        <h4 className="font-bold text-base sm:text-lg mb-1 text-white">{project.title}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm mb-2">{project.tech}</p>
                        {!isLarge && (
                          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>

      {/* Expanded Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setExpandedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#2a2a2a] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setExpandedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
              {/* Left - Image */}
              <div className={`relative h-64 lg:h-full min-h-[400px] bg-gradient-to-br ${selectedProject.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50"></div>
                </div>
              </div>

              {/* Right - Details */}
              <div className="p-6 lg:p-8 overflow-y-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-orange-500 text-lg mb-6">{selectedProject.tech}</p>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-orange-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Link */}
                {selectedProject.github && (
                  <div className="pt-4 border-t border-gray-700">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#333] hover:bg-[#444] text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

