"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, Rocket, Target, Users } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Curriculum",
    description: "Stay ahead with courses designed around the latest industry trends and technologies.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry veterans with years of real-world experience.",
  },
  {
    icon: Rocket,
    title: "Hands-on Projects",
    description: "Build a professional portfolio with real-world projects and case studies.",
  },
  {
    icon: Target,
    title: "Career Support",
    description: "Get personalized career coaching and job placement assistance.",
  },
]

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  activeFeature === index ? 'bg-white/10 shadow-lg' : 'hover:bg-white/5'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-4">
                  {React.createElement(feature.icon, { className: "h-8 w-8 text-indigo-400" })}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative h-[400px] bg-white/10 rounded-lg p-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center">\
                  {React.createElement(features[activeFeature].icon, { className: "h-16 w-16 mx-auto mb-4 text-indigo-400" })}
                  <h4 className="text-2xl font-semibold mb-2">{features[activeFeature].title}</h4>
                  <p className="text-lg text-indigo-200">{features[activeFeature].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

