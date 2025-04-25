"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Book, Users, CheckCircle, Mail, Phone, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Computer Science",
  "English",
  "Biology",
  "Java",
  "Python",
  "Web Development",
  "App Development",
  "C & C++",
  "AI & ML"
]

const plans = [
  { title: "One-on-One Personalized Tutoring", description: "Focused, customized lessons tailored to individual student needs." },
  { title: "Group Sessions", description: "Interactive and collaborative learning with peers." },
  { title: "Crash Courses", description: "Intensive short-term courses for exam preparation." },
  { title: "Doubt Solving & Homework Help", description: "On-demand sessions for clearing doubts and assignments." },
]

const methodology = [
  "Concept-based learning with real-world examples",
  "Interactive and engaging teaching techniques",
  "Regular assessments and progress tracking",
  "Flexible timing and customized study plans",
]

const tutors = [
  {
    name: "Aakarsh Sahu",
    email: "aakarsh08@gmail.com",
    phone: "+91 62638 73264",
    // linkedin: "https://www.linkedin.com/in/aakarsh-sahu/",
  },
  {
    name: "Deepak Soni",
    email: "codingsecret15@gmail.com",
  
    // linkedin: "https://linkedin.com/in/janesmith",
  },
]

export default function HomeTuition() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
        >
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-600 leading-tight">
              Personalized Home Tutoring for Academic Success
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Get expert guidance, flexible learning plans, and one-on-one attention to help you achieve academic excellence.
            </p>
            <Link href="/contact">
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2">
            <Image 
              src="/tutor.jpg" 
              alt="Home Tutoring" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Subjects Offered */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Subjects We Teach</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-100 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Methodology */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Our Teaching Approach</h2>
          <p className="text-center text-gray-700 mt-4">We focus on clarity, understanding, and academic success with a well-structured learning methodology.</p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {methodology.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-3">
                <Book className="h-6 w-6 text-blue-500" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Study Plans */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Flexible Learning Plans</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">{plan.title}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Tutors Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-blue-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Get in Touch with Our Tutors</h2>
          <p className="text-center text-gray-700 mt-4">Connect with our experienced tutors for guidance and personalized learning support.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {tutors.map((tutor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-3">
                <Users className="h-10 w-10 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-800">{tutor.name}</h3>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">{tutor.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">{tutor.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <Linkedin className="h-5 w-5 text-blue-500" /> */}
                  {/* <Link href={tutor.linkedin} className="text-blue-600 underline">LinkedIn Profile</Link> */}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
