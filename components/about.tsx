'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react';


const imageGallery = [
  {
    id: 1,
    image: '/images/gallery-5.jpg',
    placeholder: 'bg-gradient-to-br from-blue-400 to-green-500',
    caption: 'First Day 🦫',
    description: 'First Day Of Sophmore Year At Oregon State University',
    size: 'large',
  },
  {
    id: 2,
    image: '/images/gallery-1.jpg',
    placeholder: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    caption: 'Yosemite National Park',
    description: 'Exploring Yosemite. Summer 2025',
    size: 'small',

  },
  {
    id: 3,
    image: '/images/gallery-3.jpg',
    placeholder: 'bg-gradient-to-br from-purple-400 to-pink-500',
    caption: 'SHPE 2025',
    description: 'Career Fair @ Society of Hispanic Professional Engineers Conference in Philadelphia',
    size: 'small',

  },
  {
    id: 4,
    image: '/images/gallery-2.jpg',
    placeholder: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    caption: 'Morning in Hanoi 🇻🇳',
    description: 'One of my many stops in Vietnam in 2023',
    size: 'medium',

  },
  {
    id: 5,
    image: '/images/gallery-4.jpg',
    placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
    caption: 'Football Game 🏈',
    description: 'OSU vs UNLV at Reser Stadium, Fall 2024',
    size: 'medium',

    },
    {
    id: 6,
    image: '/images/gallery-7.jpg',
    placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
    caption: 'Early Morning at the Gym',
    description: 'Post-gym sunrise picture',
    size: 'small',

    },
    {
        id: 7,
        image: '/images/gallery-8.jpg',
        placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
        caption: 'Portland Trailblazer Game🏀',
        description: 'Got to shoot a freethrow on my favorite NBA Court',
        size: 'small',
    
    },
    {
        id: 8,
        image: '/images/gallery-9.heic',
        placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
        caption: 'First Marathon 🏅',
        description: 'Ran the 50th Anniversary Portland Marathon',
        size: 'large',
    
    },
    {
        id: 9,
        image: '/images/gallery-10.jpg',
        placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
        caption: 'Swim Meet in Arizona 🏊‍♂️',
        description: 'Travel meet with my club swim team',
        size: 'small',
    
    },
    {
        id: 10,
        image: '/images/gallery-12.jpg',
        placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
        caption: 'Lake Day in Montana',
        description: 'Swimming in a lake in Montana during summer 2023',
        size: 'small',
    
    },
    {
        id: 11,
        image: '/images/gallery-11.heic',
        placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
        caption: 'Zion National Park',
        description: 'Hiking in Zion, May 2022',
        size: 'small',
    
    },
    {
        id: 12,
        image: '/images/gallery-14.jpg',
        placeholder: 'bg-gradient-to-br from-green-400 to-teal-500',
        caption: 'Running in Philly',
        description: '6 mile run in Philadelphia. Also ran across the Benjamin Franklin Bridge',
        size: 'small',
    
    },
]

export default function About() {
    const [hoveredGallery, setHoveredGallery] = useState<number | null>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
  
    // Group consecutive small images in pairs for stacking
    const groupGalleryItems = (items: typeof imageGallery) => {
      const grouped: Array<{ type: 'single' | 'stacked'; items: typeof imageGallery }> = []
      let i = 0
      
      while (i < items.length) {
        const current = items[i]
        if (current.size === 'small' && i + 1 < items.length && items[i + 1].size === 'small') {
          // Pair two small images
          grouped.push({ type: 'stacked', items: [current, items[i + 1]] })
          i += 2
        } else {
          // Single item (large, medium, or orphaned small)
          grouped.push({ type: 'single', items: [current] })
          i += 1
        }
      }
      
      return grouped
    }
  
    const groupedGallery = groupGalleryItems(imageGallery)
  
    useEffect(() => {
      if (!carouselRef.current) return
  
      const scrollSpeed = 0.8 // Auto scroll speed (pixels per frame)
      let animationFrameId: number
      let isPaused = false
  
      const scroll = () => {
        if (carouselRef.current && !isPaused) {
          const container = carouselRef.current
          const itemWidth = container.scrollWidth / 2 // Half because we duplicate items
          let newScroll = container.scrollLeft + scrollSpeed
  
          // Seamlessly loop back when reaching halfway (end of original items)
          if (newScroll >= itemWidth) {
            newScroll = newScroll - itemWidth
          }
  
          container.scrollLeft = newScroll
        }
        animationFrameId = requestAnimationFrame(scroll)
      }
  
      // Handle pause on hover
      const handleMouseEnter = () => {
        isPaused = true
      }
      const handleMouseLeave = () => {
        isPaused = false
      }
  
      if (carouselRef.current) {
        carouselRef.current.addEventListener('mouseenter', handleMouseEnter)
        carouselRef.current.addEventListener('mouseleave', handleMouseLeave)
      }
  
      animationFrameId = requestAnimationFrame(scroll)
  
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('mouseenter', handleMouseEnter)
          carouselRef.current.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }, [])
  
    return (
      <section id="about" className="relative min-h-screen bg-[#1a1a1a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        {/* Creative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Image */}
              <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden group hover-scale">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 animate-glow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/gallery-16.jpg"
                  alt="Tyler"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
  
              {/* Right - Text */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                    <span className="gradient-text">About Me</span>
                  </h1>
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-glow"></div>
                </div>
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                  I'm a Computer Science student at Oregon State University, passionate about building
                  innovative applications. Interested in working in Full Stack Development and Machine Learning.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  My journey in tech has been driven by curiosity and a desire to create solutions
                  that make a difference. Aside from tech I love weightlifitng, running, swimming and cooking/eating. Although my favorite thing to do is travel and explore new places and cultures. My biggest goal is to travel to all 195 countries. 
                </p>
              </div>
            </div>
          </div>
  
          {/* Image Gallery Carousel */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
              <span className="gradient-text">Moments</span>
            </h2>
            <div className="relative">
              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {groupedGallery.map((group, groupIndex) => {
                  if (group.type === 'stacked') {
                    // Render two small images stacked vertically
                    const [item1, item2] = group.items
                    return (
                      <div
                        key={`stacked-${item1.id}-${item2.id}`}
                        className="flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px] flex flex-col gap-4"
                      >
                        {/* Top image */}
                        <div
                          className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer hover-scale"
                          onMouseEnter={() => setHoveredGallery(item1.id)}
                          onMouseLeave={() => setHoveredGallery(null)}
                        >
                          <div className="absolute inset-0">
                            <Image
                              src={item1.image}
                              alt={item1.caption}
                              fill
                              className={`object-cover transition-all duration-500 ${
                                hoveredGallery === item1.id ? 'scale-110' : ''
                              }`}
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                            <div
                              className={`absolute inset-0 ${item1.placeholder} transition-all duration-500 ${
                                hoveredGallery === item1.id ? 'scale-110 opacity-0' : 'opacity-0'
                              }`}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-4xl opacity-50">📸</div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
                              hoveredGallery === item1.id
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }`}
                          >
                            <div className="text-center px-4">
                              <span className="text-white font-semibold text-lg md:text-xl block mb-2">
                                {item1.caption}
                              </span>
                              <p className="text-white/80 text-sm md:text-base">
                                {item1.description || 'Click to learn more'}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Bottom image */}
                        <div
                          className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer hover-scale"
                          onMouseEnter={() => setHoveredGallery(item2.id)}
                          onMouseLeave={() => setHoveredGallery(null)}
                        >
                          <div className="absolute inset-0">
                            <Image
                              src={item2.image}
                              alt={item2.caption}
                              fill
                              className={`object-cover transition-all duration-500 ${
                                hoveredGallery === item2.id ? 'scale-110' : ''
                              }`}
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                            <div
                              className={`absolute inset-0 ${item2.placeholder} transition-all duration-500 ${
                                hoveredGallery === item2.id ? 'scale-110 opacity-0' : 'opacity-0'
                              }`}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-4xl opacity-50">📸</div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
                              hoveredGallery === item2.id
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }`}
                          >
                            <div className="text-center px-4">
                              <span className="text-white font-semibold text-lg md:text-xl block mb-2">
                                {item2.caption}
                              </span>
                              <p className="text-white/80 text-sm md:text-base">
                                {item2.description || 'Click to learn more'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  } else {
                    // Render single item (large or medium)
                    const item = group.items[0]
                    const sizeClasses = {
                      large: 'w-full md:w-[600px]',
                      medium: 'w-[250px] sm:w-[300px] md:w-[400px]',
                      small: 'w-[200px] sm:w-[250px] md:w-[300px]',
                    }
                    return (
                      <div
                        key={item.id}
                        className={`relative flex-shrink-0 aspect-square rounded-2xl overflow-hidden group cursor-pointer hover-scale ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
                        onMouseEnter={() => setHoveredGallery(item.id)}
                        onMouseLeave={() => setHoveredGallery(null)}
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={item.image}
                            alt={item.caption}
                            fill
                            className={`object-cover transition-all duration-500 ${
                              hoveredGallery === item.id ? 'scale-110' : ''
                            }`}
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                          <div
                            className={`absolute inset-0 ${item.placeholder} transition-all duration-500 ${
                              hoveredGallery === item.id ? 'scale-110 opacity-0' : 'opacity-0'
                            }`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-4xl opacity-50">📸</div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
                            hoveredGallery === item.id
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-4'
                          }`}
                        >
                          <div className="text-center px-4">
                            <span className="text-white font-semibold text-lg md:text-xl block mb-2">
                              {item.caption}
                            </span>
                            <p className="text-white/80 text-sm md:text-base">
                              {item.description || 'Click to learn more'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}
                {/* Duplicate items for seamless loop */}
                {groupedGallery.map((group, groupIndex) => {
                  if (group.type === 'stacked') {
                    // Render two small images stacked vertically
                    const [item1, item2] = group.items
                    return (
                      <div
                        key={`duplicate-stacked-${item1.id}-${item2.id}`}
                        className="flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px] flex flex-col gap-4"
                      >
                        {/* Top image */}
                        <div
                          className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer hover-scale"
                          onMouseEnter={() => setHoveredGallery(item1.id)}
                          onMouseLeave={() => setHoveredGallery(null)}
                        >
                          <div className="absolute inset-0">
                            <Image
                              src={item1.image}
                              alt={item1.caption}
                              fill
                              className={`object-cover transition-all duration-500 ${
                                hoveredGallery === item1.id ? 'scale-110' : ''
                              }`}
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                            <div
                              className={`absolute inset-0 ${item1.placeholder} transition-all duration-500 ${
                                hoveredGallery === item1.id ? 'scale-110 opacity-0' : 'opacity-0'
                              }`}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-4xl opacity-50">📸</div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
                              hoveredGallery === item1.id
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }`}
                          >
                            <div className="text-center px-4">
                              <span className="text-white font-semibold text-lg md:text-xl block mb-2">
                                {item1.caption}
                              </span>
                              <p className="text-white/80 text-sm md:text-base">
                                {item1.description || 'Click to learn more'}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Bottom image */}
                        <div
                          className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer hover-scale"
                          onMouseEnter={() => setHoveredGallery(item2.id)}
                          onMouseLeave={() => setHoveredGallery(null)}
                        >
                          <div className="absolute inset-0">
                            <Image
                              src={item2.image}
                              alt={item2.caption}
                              fill
                              className={`object-cover transition-all duration-500 ${
                                hoveredGallery === item2.id ? 'scale-110' : ''
                              }`}
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                            <div
                              className={`absolute inset-0 ${item2.placeholder} transition-all duration-500 ${
                                hoveredGallery === item2.id ? 'scale-110 opacity-0' : 'opacity-0'
                              }`}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-4xl opacity-50">📸</div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
                              hoveredGallery === item2.id
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }`}
                          >
                            <div className="text-center px-4">
                              <span className="text-white font-semibold text-lg md:text-xl block mb-2">
                                {item2.caption}
                              </span>
                              <p className="text-white/80 text-sm md:text-base">
                                {item2.description || 'Click to learn more'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  } else {
                    // Render single item (large or medium)
                    const item = group.items[0]
                    const sizeClasses = {
                      large: 'w-full md:w-[600px]',
                      medium: 'w-[250px] sm:w-[300px] md:w-[400px]',
                      small: 'w-[200px] sm:w-[250px] md:w-[300px]',
                    }
                    return (
                      <div
                        key={`duplicate-${item.id}`}
                        className={`relative flex-shrink-0 aspect-square rounded-2xl overflow-hidden group cursor-pointer hover-scale ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
                        onMouseEnter={() => setHoveredGallery(item.id)}
                        onMouseLeave={() => setHoveredGallery(null)}
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={item.image}
                            alt={item.caption}
                            fill
                            className={`object-cover transition-all duration-500 ${
                              hoveredGallery === item.id ? 'scale-110' : ''
                            }`}
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                          <div
                            className={`absolute inset-0 ${item.placeholder} transition-all duration-500 ${
                              hoveredGallery === item.id ? 'scale-110 opacity-0' : 'opacity-0'
                            }`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-4xl opacity-50">📸</div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
                            hoveredGallery === item.id
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-4'
                          }`}
                        >
                          <div className="text-center px-4">
                            <span className="text-white font-semibold text-lg md:text-xl block mb-2">
                              {item.caption}
                            </span>
                            <p className="text-white/80 text-sm md:text-base">
                              {item.description || 'Click to learn more'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
  
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  