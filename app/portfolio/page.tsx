"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import CreativeProjectGrid from "@/components/creative-project-grid"
// import HeroCanvas from "@/components/hero-canvas"
import FeaturedProjectsCarousel from "@/components/featured-projects-carousel"

export default function PortfolioPage() {
  // Filter featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  // Refs for scroll animations
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  // Mouse position for hero section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Immersive Hero Section with Canvas Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <HeroCanvas mousePosition={mousePosition} /> */}

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-blue-200/30 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-[15%] w-40 h-40 rounded-full bg-purple-200/20 blur-xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-blue-600 font-medium">Transforming Ideas into Digital Reality</span>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creative Portfolio
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-10 leading-relaxed backdrop-blur-sm bg-white/30 p-4 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore our innovative projects and discover how we transform ideas into exceptional digital experiences
              that drive business growth
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 hover:bg-blue-50/50 backdrop-blur-sm"
              >
                Explore Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10"
          style={{ y: y1, rotate }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-3xl -z-10"
          style={{ y: y2 }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                Featured Projects
              </h2>
              <p className="text-gray-600 max-w-xl">
                Our most impactful work that demonstrates our expertise and creativity
              </p>
            </div>
            <Button variant="ghost" className="gap-2 group">
              View All Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <FeaturedProjectsCarousel projects={featuredProjects} />
        </div>
      </section>

      {/* Creative Project Grid */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl -z-10"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100/10 rounded-full blur-3xl -z-10"
          style={{ y: y1 }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our <span className="text-blue-600">Complete Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our diverse range of projects across different industries and technologies
            </p>
          </motion.div>

          <CreativeProjectGrid projects={projects} />
        </div>
      </section>

      {/* 3D Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 -z-10" />

        {/* Animated shapes */}
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-100/40 blur-3xl -z-10"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-[15%] w-80 h-80 rounded-full bg-purple-100/30 blur-3xl -z-10"
          animate={{
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl transform rotate-2 scale-[1.02] blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl transform -rotate-1 scale-[1.01] blur-sm" />

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 text-center relative overflow-hidden border border-white/50">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/80 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50/80 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 left-0 w-16 h-16 bg-teal-50/80 rounded-full -translate-x-1/2" />
                <div className="absolute bottom-1/4 right-0 w-20 h-20 bg-blue-50/80 rounded-full translate-x-1/2" />

                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Ready to Transform Your Vision?
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Let's collaborate to create innovative digital solutions that elevate your brand and drive business
                  growth.
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center gap-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 rounded-full border-2 hover:bg-blue-50/50">
                    <Link href="/services">View Our Services</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-blue-50 rounded-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-6xl font-bold text-blue-600 mb-2 relative z-10">25+</div>
            <div className="text-gray-600 font-medium text-lg relative z-10">Projects Completed</div>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-purple-50 rounded-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <div className="text-6xl font-bold text-purple-600 mb-2 relative z-10">20+</div>
            <div className="text-gray-600 font-medium text-lg relative z-10">Happy Clients</div>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-teal-50 rounded-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-6xl font-bold text-teal-600 mb-2 relative z-10">5+</div>
            <div className="text-gray-600 font-medium text-lg relative z-10">Industry Sectors</div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
