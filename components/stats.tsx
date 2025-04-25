"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Award, Briefcase } from "lucide-react"

const stats = [
  {
    icon: Users,
    title: "1000+",
    description: "Students Enrolled",
  },
  {
    icon: BookOpen,
    title: "10+",
    description: "Expert-Led Courses",
  },
  {
    icon: Award,
    title: "100%",
    description: "Success Rate",
  },
  {
    icon: Briefcase,
    title: "5+",
    description: "Partner Companies",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full p-6 inline-block mb-6">
                <stat.icon className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2">{stat.title}</h3>
              <p className="text-xl text-indigo-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

