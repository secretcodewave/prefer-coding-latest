"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, Megaphone, TrendingUp, Mail, PenTool, HelpCircle, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "SEO Optimization",
    description: "Improve search rankings with keyword research, backlinking, and on-page optimizations.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Grow your audience with targeted campaigns on Facebook, Instagram, LinkedIn, and more.",
    icon: Megaphone,
  },
  {
    title: "Pay-Per-Click (PPC)",
    description: "Maximize ROI with high-converting ads on Google, Facebook, and other platforms.",
    icon: TrendingUp,
  },
  {
    title: "Email Marketing",
    description: "Increase conversions with personalized email sequences and automation.",
    icon: Mail,
  },
  {
    title: "Content Marketing",
    description: "Attract, engage, and retain customers through high-quality blog posts, videos, and infographics.",
    icon: PenTool,
  },
]

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO improvements typically show results within 3-6 months, depending on competition and strategy.",
  },
  {
    question: "What is the best platform for running ads?",
    answer: "It depends on your audience. Google Ads is great for search intent, while Facebook/Instagram is ideal for brand awareness.",
  },
  {
    question: "How does content marketing help my business?",
    answer: "Quality content establishes trust, improves SEO, and drives organic traffic to your website.",
  },
]


export default function DigitalMarketing() {
  return (
    <div className="">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 font-medium rounded-full text-sm mb-4">
                Digital Solutions For Modern Businesses
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                <span className="text-blue-600">Grow</span> Your Business with Digital Marketing
              </h1>
              <p className="text-gray-600 mt-6 text-lg max-w-lg">
                From SEO to social media, we provide strategies that drive real results and maximize your online presence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2">
                    Get a Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg rounded-lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
                <Image
                  src="/digital.jpg"
                  alt="Digital Marketing"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl relative z-10 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar Section */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-6 lg:px-16">
          
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-20">
        {/* Feature List Section with Icons */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full text-sm mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Digital Marketing Solutions</h2>
            <p className="text-gray-600 mt-4">Tailored strategies for different industries and business goals.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="bg-blue-50 p-4 rounded-lg inline-block mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <Link href={`/services/${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section (New) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full text-sm mb-3">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Work</h2>
            <p className="text-gray-600 mt-4">Our proven four-step process for digital marketing success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Analyze", desc: "Deep research into your market, competitors, and audience" },
              { step: "2", title: "Strategize", desc: "Custom plan tailored to your specific business goals" },
              { step: "3", title: "Execute", desc: "Professional implementation across all relevant channels" },
              { step: "4", title: "Optimize", desc: "Continuous refinement based on performance data" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 relative"
              >
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block w-full h-1 bg-blue-200 absolute top-10 left-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study / Example Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-12 rounded-2xl shadow-xl text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Success Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Digital Marketing Transformed an E-Commerce Store</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  { metric: "300%", label: "Increase in Sales" },
                  { metric: "5x", label: "Return on Ad Spend" },
                  { metric: "65%", label: "Reduction in CAC" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 p-6 rounded-xl">
                    <p className="text-3xl font-bold">{item.metric}</p>
                    <p className="text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/case-studies/ecommerce">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg rounded-lg font-medium">
                    Read Full Case Study
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-3 text-lg rounded-lg">
                    Get Similar Results
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials (New) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full text-sm mb-3">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Their SEO strategy increased our organic traffic by 200% in just 6 months. The ROI has been incredible.",
                author: "Sarah Johnson",
                position: "Marketing Director, TechSolutions Inc."
              },
              {
                quote: "The PPC campaigns they created have been a game-changer for our e-commerce store. Conversion rates are up 45%.",
                author: "Michael Chen",
                position: "CEO, StyleBoutique"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full text-sm mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                View All FAQs
              </Button>
            </Link>
          </div> */}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 p-12 rounded-2xl shadow-xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-600">
            <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Digital Growth Today!</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your goals and create a custom strategy to boost your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 text-lg rounded-lg shadow-lg transition-all duration-300">
                  Schedule a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-3 text-lg rounded-lg">
                  Browse All Services
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {["No Contracts", "Results Guaranteed", "24/7 Support"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}