"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code } from "lucide-react"

const projects = [
  {
    title: "Navshristi E-Commerce Website",
    description: "A full-featured online store with custom product filtering and secure checkout",
    image: "/pf1.png",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "/pf1.png",
    codeLink: "https://github.com/example/ecommerce",
    liveLink: "https://example-ecommerce.com",
  },
  {
    title: "Next-Gen CyberSafe Website",
    description: "Modern, responsive website for a services company",
    image: "/pa1.png",
    tags: ["React", "GSAP", "Styled Components"],
    link: "/pa.png",
    codeLink: "https://github.com/example/corporate",
    liveLink: "https://example-corporate.com",
  },
  {
    title: "E Commerce Website",
    description: "A full-featured online store with custom product filtering and secure checkout",
    // description: "Property search platform with interactive maps and filtering",
    image: "/pb1.png",
    tags: ["Next.js", "MongoDB", "Google Maps API"],
    link: "/pb1.png",
    codeLink: "https://github.com/example/realestate",
    liveLink: "https://example-realestate.com",
  },
]

export function ProjectShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-800 font-medium text-sm mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent work that has helped businesses transform their online presence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <Link href={project.liveLink} className="text-white hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                      <Link href={project.codeLink} className="text-white hover:text-blue-300 transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Code className="h-4 w-4 mr-1" />
                      <span>View Code</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.link}>Case Study</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
