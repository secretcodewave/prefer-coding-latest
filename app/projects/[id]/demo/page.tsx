"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { projects } from "@/lib/data"

interface DemoPageProps {
  params: {
    id: string
  }
}

export default function DemoPage({ params }: DemoPageProps) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation bar with glass effect */}
      <motion.div
        className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Project
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500">Live Demo:</span>
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {project.title}
            </span>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>

      {/* Demo content with loading state */}
      <div className="flex-grow flex items-center justify-center p-4">
        {isLoading ? (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-gray-600">Loading demo environment...</p>
          </div>
        ) : (
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Interactive Demo
              </h1>
              <div className="w-full h-[400px] bg-gray-100 rounded-xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <ExternalLink className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    This is where an interactive demo of the {project.title} would be displayed.
                  </p>
                  <p className="text-gray-500 text-sm">
                    In a real implementation, this would contain a functional preview of the project.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link href={`/projects/${project.id}`}>Return to Project Details</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/contact">Request Custom Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
