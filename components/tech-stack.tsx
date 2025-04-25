"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Database, Server, Cloud, Globe, Lock, Terminal, BarChart } from "lucide-react"

const technologies = [
  { name: "React", icon: "/react.png", color: "#61DAFB", description: "Frontend library" },
  { name: "Node.js", icon: "/njs.png", color: "#339933", description: "Backend runtime" },
  { name: "Python", icon: "/python.jpeg", color: "#3776AB", description: "Versatile language" },
  { name: "JavaScript", icon: "/js.png", color: "#F7DF1E", description: "Web scripting" },
  { name: "TypeScript", icon: "/ts.png", color: "#3178C6", description: "Typed JavaScript" },
  { name: "Docker", icon: "/docker.webp", color: "#2496ED", description: "Containerization" },
  { name: "AWS", icon: "/aws.jpeg", color: "#FF9900", description: "Cloud services" },
  { name: "GraphQL", icon: "/gql.jpg", color: "#E10098", description: "API query language" },
  { name: "MongoDB", icon: "/mongo.png", color: "#47A248", description: "NoSQL database" },
  { name: "Next.js", icon: "/next.jpeg", color: "#000000", description: "React framework" },
  { name: "Angular", icon: "/angular.jpg", color: "#DD0031", description: "Web framework" },
  { name: "Vue.js", icon: "/vue.png", color: "#4FC08D", description: "Progressive framework" },
]

const categories = [
  { 
    name: "Frontend", 
    icon: Code,
    description: "Build modern, responsive user interfaces"
  },
  { 
    name: "Backend", 
    icon: Server,
    description: "Create robust server-side applications"
  },
  { 
    name: "Databases", 
    icon: Database,
    description: "Store and manage your data efficiently"
  },
  { 
    name: "Cloud", 
    icon: Cloud,
    description: "Deploy and scale with cloud technologies"
  },
  { 
    name: "Security", 
    icon: Lock,
    description: "Implement best practices for application security"
  },
  { 
    name: "DevOps", 
    icon: Terminal,
    description: "Streamline your development workflow"
  },
]

const zoomInVariants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.15, transition: { duration: 0.3 } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Master the Latest Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Gain expertise in the most in-demand programming languages, frameworks, and tools in the industry.</p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={zoomInVariants}
              initial="initial"
              whileHover="whileHover"
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="p-3 mb-4 rounded-full bg-blue-50">
                <category.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          {/* <h3 className="text-2xl font-bold text-center mb-10">Technologies You'll Learn</h3> */}
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="flex flex-col items-center group"
              >
                <motion.div 
                  className="relative mb-4 bg-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all"
                  style={{ borderTop: `3px solid ${tech.color}` }}
                  variants={zoomInVariants}
                  initial="initial"
                  whileHover="whileHover"
                >
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={60} 
                    height={60} 
                    className="rounded-md"
                    unoptimized
                  />
                </motion.div>
                <p className="text-lg font-semibold">{tech.name}</p>
                <p className="text-sm text-gray-600 text-center">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        
      </div>
    </section>
  )
}