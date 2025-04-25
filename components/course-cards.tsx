"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Brain, Users, Zap } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    icon: Code,
    title: "Advanced Full Stack Development",
    description: "Master modern web technologies and build complex, scalable applications",
    duration: "24 Weeks",
    level: "Advanced",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    features: ["React", "Node.js", "GraphQL", "AWS"],
  },
  {
    icon: Brain,
    title: "AI-Powered Digital Marketing",
    description: "Leverage machine learning and data analytics for cutting-edge marketing strategies",
    duration: "16 Weeks",
    level: "Intermediate",
    color: "bg-gradient-to-r from-green-500 to-teal-500",
    features: ["Machine Learning", "Data Analytics", "SEO", "Content Strategy"],
  },
  {
    icon: Users,
    title: "Next-Gen HR Management",
    description: "Transform HR practices with AI, data-driven decisions, and modern leadership",
    duration: "20 Weeks",
    level: "Advanced",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    features: ["AI in HR", "People Analytics", "Digital Transformation", "Future of Work"],
  },
  {
    icon: Zap,
    title: "Blockchain Development",
    description: "Build decentralized applications and smart contracts for the Web3 ecosystem",
    duration: "22 Weeks",
    level: "Intermediate",
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    features: ["Ethereum", "Solidity", "DApps", "Smart Contracts"],
  },
]

export function CourseCards() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionary Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a transformative learning journey with our cutting-edge programs designed for the future of tech.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className={`p-0 ${course.color} text-white`}>
                  <div className="p-8">
                    <course.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">{course.title}</h3>
                    <p className="text-lg opacity-90 mb-6">{course.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-sm py-1 px-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-sm py-1 px-3">
                        {course.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-sm py-1 px-3">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 bg-white/10 backdrop-blur-md">
                    <Link
                      href={`/courses/${course.title.toLowerCase().replace(/ /g, "-")}`}
                      className="text-lg font-semibold flex items-center group-hover:underline"
                    >
                      Explore Course
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

