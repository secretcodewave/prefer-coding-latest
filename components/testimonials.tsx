"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Shravani kune",
    role: "Software Engineer ",
    image: "/testimonials/alex.jpg",
    quote:
      "The Advanced Full Stack course completely transformed my career. I went from a junior developer to leading complex projects at a major tech company in just a year.",
  },
  {
    name: "Mehul Singh",
    role: "Software Engineer",
    image: "/testimonials/sarah.jpg",
    quote:
      "The AI-Powered Digital Marketing program revolutionized our marketing strategies. We've seen a 300% increase in conversion rates since implementing the techniques I learned.",
  },
  {
    name: "Anand Raj",
    role: "Software Engineer",
    image: "/testimonials/michael.jpg",
    quote:
      "The Next-Gen HR Management course provided invaluable insights into modernizing our HR practices. We've significantly improved employee satisfaction and retention.",
  },
  {
    name: "Neetesh Prajapati",
    role: "Software Engineer",
    image: "/testimonials/emily.jpg",
    quote:
      "Thanks to the Blockchain Development course, I was able to transition into this exciting field and now work on cutting-edge decentralized applications.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers and made a significant impact in their
            industries.
          </p>
        </motion.div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white shadow-2xl mx-auto max-w-4xl">
                <CardContent className="p-12 flex flex-col md:flex-row items-center">
                  <div className="mb-8 md:mb-0 md:mr-12">
                    <Avatar className="h-32 w-32 border-4 border-indigo-500">
                      <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <Quote className="h-12 w-12 text-indigo-500 mb-6" />
                    <p className="text-xl mb-6 italic">{testimonials[currentIndex].quote}</p>
                    <h3 className="font-semibold text-2xl">{testimonials[currentIndex].name}</h3>
                    <p className="text-indigo-600">{testimonials[currentIndex].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-indigo-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-indigo-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

