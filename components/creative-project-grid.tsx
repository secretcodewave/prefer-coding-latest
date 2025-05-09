"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/lib/types"

interface CreativeProjectGridProps {
  projects: Project[]
}

export default function CreativeProjectGrid({ projects }: CreativeProjectGridProps) {
  const [filter, setFilter] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Get unique categories
  const categories = Array.from(new Set(projects.map((project) => project.category)))

  // Filter projects based on selected category
  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects

  return (
    <div className="space-y-12" ref={containerRef}>
      {/* Filter buttons with animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          variant={filter === null ? "default" : "outline"}
          onClick={() => setFilter(null)}
          className="rounded-full"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Uniform grid with hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl h-[450px]"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            layoutId={`project-${project.id}`}
          >
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 p-6 flex flex-col  justify-end z-10 transition-transform duration-500">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0.8,
                  y: hoveredId === project.id ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <Badge className="mb-3 bg-blue-500 hover:bg-blue-600">{project.category}</Badge>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-white/30 bg-black/20 backdrop-blur-sm text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-white/30 bg-black/20 backdrop-blur-sm text-white">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <p className="text-white/80 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>

                <Button
                  variant="outline"
                  className="border-white text-black hover:shadow-lg bg-white group-hover:translate-y-0 translate-y-10 transition-transform duration-300"
                >
                  <Link href={`/projects/${project.id}`} className="flex items-center gap-2">
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
