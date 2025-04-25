"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/types"

interface FeaturedProjectsCarouselProps {
  projects: Project[]
}

export default function FeaturedProjectsCarousel({ projects }: FeaturedProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentProject = projects[currentIndex]

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [projects.length, isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 to-blue-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 text-white"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 text-white"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            } transition-all duration-300`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel content */}
      <div className="relative h-[600px] md:h-[700px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Project image */}
            <div className="relative w-full h-full">
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
                priority
              />

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="container mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 items-end">
                    <div>
                      <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">{currentProject.category}</Badge>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {currentProject.title}
                      </h2>
                      <p className="text-white/80 mb-6 text-lg max-w-xl">{currentProject.description}</p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {currentProject.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-white/30 bg-black/20 backdrop-blur-sm text-white"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
                        >
                          <Link href={`/projects/${currentProject.id}`}>View Details</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-black bg-white hover:shadow-lg">
                          <Link href={`/projects/${currentProject.id}/demo`} className="flex items-center gap-2">
                            Live Demo <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="hidden md:flex flex-col items-end justify-end">
                      <div className="flex items-center gap-4 text-white/80 mb-2">
                        <span>Client:</span>
                        <span className="font-semibold text-white">{currentProject.clientName}</span>
                      </div>
                      <div className="flex items-center gap-4 text-white/80">
                        <span>Completed:</span>
                        <span className="font-semibold text-white">{currentProject.completionDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
