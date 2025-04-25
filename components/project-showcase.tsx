"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Users } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-center">
      {/* Project preview - takes 3 columns on large screens */}
      <div className="lg:col-span-3 rounded-2xl overflow-hidden bg-white shadow-xl h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] w-full"
          >
            <Image
              src={activeProject.image || "/placeholder.svg"}
              alt={activeProject.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <Badge className="self-start mb-3 bg-blue-500 hover:bg-blue-600">{activeProject.category}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-white/30 bg-black/20 backdrop-blur-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {activeProject.completionDate}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {activeProject.clientName}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project selection and details - takes 2 columns on large screens */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
              <p className="text-gray-600 mb-6">{activeProject.description}</p>
              <div className="flex gap-3">
                <Button className="flex-1">
                  <Link href={`/projects/${activeProject.id}`} className="flex items-center justify-center w-full">
                    View Details
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1">
                  <Link
                    href={`/projects/${activeProject.id}/demo`}
                    className="flex items-center justify-center w-full gap-2"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project thumbnails */}
        <div className="grid grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-lg overflow-hidden aspect-video ${
                index === activeIndex ? "ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
