"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"

interface RelatedProjectsProps {
  projects: Project[]
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative h-[400px] rounded-2xl overflow-hidden"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Background image with parallax effect */}
          <div className="absolute inset-0 w-full h-full transform group-hover:scale-110 transition-transform duration-700">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
            <motion.div
              animate={{
                y: hoveredId === project.id ? 0 : 10,
                opacity: hoveredId === project.id ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              <Badge className="mb-3 bg-blue-500 hover:bg-blue-600">{project.category}</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 2).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-white/30 bg-black/20 backdrop-blur-sm text-white"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 2 && (
                  <Badge variant="outline" className="border-white/30 bg-black/20 backdrop-blur-sm text-white">
                    +{project.technologies.length - 2}
                  </Badge>
                )}
              </div>

              <p className="text-white/80 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.description}
              </p>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 group-hover:translate-y-0 translate-y-10 transition-transform duration-300"
              >
                <Link href={`/projects/${project.id}`} className="flex items-center gap-2 w-full">
                  View Details
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
