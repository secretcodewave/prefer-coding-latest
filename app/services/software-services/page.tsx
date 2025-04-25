"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Smartphone, Database, CheckCircle, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Development",
    description: "We build high-performance, scalable, and visually appealing websites using modern frameworks like React, Next.js, and Tailwind CSS.",
    benefits: [
      "Custom-built websites tailored to your needs",
      "Responsive and mobile-friendly designs",
      "SEO-optimized and high-speed performance",
    ],
    icon: Code,
    image: "/web.png",
  },
  {
    title: "App Development",
    description: "From idea to launch, we develop feature-rich mobile applications for iOS and Android using Flutter, React Native, and native technologies.",
    benefits: [
      "Cross-platform compatibility (iOS & Android)",
      "User-friendly and engaging UI/UX",
      "Scalable and secure app architecture",
    ],
    icon: Smartphone,
    image: "/app.png",
  },
  {
    title: "Other Technologies",
    description: "We specialize in AI, Blockchain, Cloud Computing, IoT, and more. If you have an idea, we have the expertise to bring it to life.",
    benefits: [
      "AI-driven automation and analytics",
      "Blockchain-powered secure transactions",
      "Cloud-based scalable architectures",
    ],
    icon: Database,
    image: "/tech.jpeg",
  },
]

const processSteps = [
  { title: "Understanding Your Requirements", description: "We start with a deep dive into your project needs, goals, and expectations." },
  { title: "Planning & Strategy", description: "We create a detailed roadmap, outlining the best approach and technology stack." },
  { title: "Development & Testing", description: "Our expert developers build your product with agile development and rigorous testing." },
  { title: "Launch & Support", description: "We deploy your solution and provide continuous support to ensure long-term success." },
]

const testimonials = [
  { 
    name: "Puneet Malva", 
    company: "EIT Global",
    rating: 5,
    feedback: "Secret codeweb provided outstanding web services that completed our IOT solutions perfectly. Their expertise and professionalism greatly enhanced our online presence.",
    avatar: "/user.png"
  },
  { 
    name: "Devendra Sahu", 
    company: "SD Craner Engineering",
    rating: 5,
    feedback: "Secret codeweb delivered a high-quality website with a great admin panel that exceeded our expectations. Their professionalism and technical skills were outstanding.",
    avatar: "/user.png"
  },
  { 
    name: "Ajay Singh", 
    company: "TechInnovate",
    rating: 5,
    feedback: "Working with Secret codeweb transformed our digital approach completely. Their team understood our vision and delivered a solution that perfectly aligned with our business goals.",
    avatar: "/user.png"
  },
  { 
    name: "Priya Sharma", 
    company: "NextGen Solutions",
    rating: 5,
    feedback: "The dedication and technical expertise of Secret codeweb is unmatched. They developed a highly intuitive app that has received excellent feedback from our users.",
    avatar: "/user.png"
  },
]

export default function SoftwareSolutions() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setActiveTestimonial(index);
  };

  // Fixed touch/drag interactions
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    
    const diff = dragStartX - e.changedTouches[0].clientX;
    
    if (Math.abs(diff) > 50) { // Minimum drag distance to trigger slide change
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    setDragStartX(null);
  };

  // Fixed mouse interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    
    const diff = dragStartX - e.clientX;
    
    if (Math.abs(diff) > 50) { // Minimum drag distance to trigger slide change
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    setDragStartX(null);
  };
  
  // Handle mouse leave to prevent issues when dragging outside the carousel
  const handleMouseLeave = () => {
    setDragStartX(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">End-to-End Software Solutions</h1>
          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            We provide high-quality, scalable, and innovative software solutions tailored to your business needs. From startups to enterprises, we help you build the future.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-flex items-center gap-2 bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    <service.icon className="h-4 w-4" />
                    {service.title}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How We Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Process</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A structured and efficient approach to delivering high-quality software solutions.</p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 md:w-5/6 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel Section - Fixed Implementation */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Don't just take our word for it — hear from some of our satisfied clients.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Carousel Container - FIXED IMPLEMENTATION */}
            <div 
              ref={carouselRef}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-full bg-gradient-to-br from-blue-50 to-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <Image 
                              src={testimonials[activeTestimonial].avatar} 
                              alt={testimonials[activeTestimonial].name} 
                              width={80} 
                              height={80}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                            <Quote className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-1 justify-center md:justify-start">
                          {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        
                        <p className="text-gray-700 italic text-lg mb-4">"{testimonials[activeTestimonial].feedback}"</p>
                        
                        <div className="text-center md:text-left">
                          <h3 className="font-semibold text-gray-800">{testimonials[activeTestimonial].name}</h3>
                          <p className="text-blue-600 text-sm">{testimonials[activeTestimonial].company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 border border-gray-200 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 border border-gray-200 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
            
            {/* Progress Bar Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group focus:outline-none"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div className="h-1 w-8 md:w-12 rounded-full overflow-hidden bg-gray-200">
                    <div 
                      className={`h-full bg-blue-500 transition-all duration-300 ${
                        activeTestimonial === index 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-1/3'
                      }`} 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            We're ready to bring your vision to life with cutting-edge technology and expert craftsmanship.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 font-semibold px-8 py-6 text-lg rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg">
              Get a Free Consultation
            </Button>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}