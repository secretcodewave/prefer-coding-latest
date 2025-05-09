"use client"

import { motion } from "framer-motion"
import { Code, Zap, Lock, Smartphone, Search, Sparkles } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "We write maintainable, well-structured code following best practices and modern standards.",
    color: "bg-blue-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with efficient code and the latest performance techniques.",
    color: "bg-yellow-500",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Built with security in mind to protect your data and your users.",
    color: "bg-green-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfectly adapted to all devices, from desktop to mobile.",
    color: "bg-purple-500",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Structured for maximum visibility in search engines.",
    color: "bg-red-500",
  },
  {
    icon: Sparkles,
    title: "Modern UX/UI",
    description: "Beautiful, intuitive interfaces that delight your users.",
    color: "bg-cyan-500",
  },
]

export function CodeFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-800 font-medium text-sm mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Code That Makes a Difference</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build websites, we craft digital experiences with clean, efficient code that drives results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100"
            >
              <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
