"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Calendar, ExternalLink, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/lib/data"
import RelatedProjects from "@/components/related-projects"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  if (!project) {
    notFound()
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero section with parallax effect */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.div style={{ y: y1, opacity, scale }} className="absolute inset-0 w-full h-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container mx-auto"
          >
            <Link href="/portfolio" className="inline-flex items-center text-white mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Portfolio
            </Link>
            <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">{project.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Completed: {project.completionDate}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Client: {project.clientName}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project details with creative layout */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 -mt-32 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 rounded-full blur-xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-100 rounded-full blur-xl -z-10" />

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 text-gray-800">
                {tech}
              </Badge>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Project Overview
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">{project.description}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
              dapibus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-blue-50 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-200 rounded-full opacity-50" />
              <h3 className="text-xl font-semibold mb-4 text-blue-700">The Challenge</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                The client needed a comprehensive solution that would streamline their operations while providing an
                intuitive interface for their customers. The existing system was outdated and couldn't handle the
                growing demands of their business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-purple-50 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-200 rounded-full opacity-50" />
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                We developed a custom platform that integrated seamlessly with their existing workflows while
                introducing new features that enhanced user experience and operational efficiency. The solution was
                built with scalability in mind.
              </p>
            </motion.div>
          </div>

          {/* Project images with creative layout */}
          <motion.div
            className="grid md:grid-cols-12 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="md:col-span-7 rounded-2xl overflow-hidden h-80 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project screenshot 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-5 rounded-2xl overflow-hidden h-80 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project screenshot 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-5 rounded-2xl overflow-hidden h-80 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project screenshot 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7 rounded-2xl overflow-hidden h-80 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project screenshot 4"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-medium mb-2">Responsive Design</h4>
                <p className="text-gray-600 text-sm">
                  Optimized for all devices with fluid layouts and adaptive components
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-medium mb-2">Advanced Filtering</h4>
                <p className="text-gray-600 text-sm">
                  Powerful search capabilities with real-time results and smart suggestions
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h4 className="font-medium mb-2">Secure Authentication</h4>
                <p className="text-gray-600 text-sm">Multi-factor authentication with role-based access control</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h4 className="font-medium mb-2">Real-time Sync</h4>
                <p className="text-gray-600 text-sm">Instant data synchronization across all connected devices</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <h4 className="font-medium mb-2">Analytics Dashboard</h4>
                <p className="text-gray-600 text-sm">Comprehensive data visualization with customizable reports</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <h4 className="font-medium mb-2">Third-party Integration</h4>
                <p className="text-gray-600 text-sm">Seamless connection with popular services and APIs</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">Results & Impact</h3>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-gray-600">Increase in User Engagement</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                  <div className="text-gray-600">Reduction in Operational Costs</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The implementation of our solution resulted in a significant boost in user engagement and a substantial
                reduction in operational costs. The client reported improved customer satisfaction and a notable
                increase in productivity across their teams. The platform continues to evolve with regular updates and
                new features.
              </p>
            </div>
          </motion.div>

          <Separator className="my-12" />

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-14 rounded-full"
            >
              <Link href={`/projects/${project.id}/demo`} className="flex items-center gap-2">
                View Live Demo <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 rounded-full border-2">
              <Link href="/contact" className="flex items-center gap-2">
                Start a Similar Project
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Related projects */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Related <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore more of our work in {project.category}
          </p>
          <RelatedProjects projects={relatedProjects} />
        </motion.div>
      </div>
    </div>
  )
}
