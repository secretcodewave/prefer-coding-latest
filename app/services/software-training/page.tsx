"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Brain, Code, Blocks, Server, Terminal, Book, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const trainings = [
  {
    title: "Machine Learning",
    description:
      "Master AI and data-driven solutions using Python, TensorFlow, and Scikit-learn. Learn to build predictive models and deploy AI applications.",
    icon: Brain,
    image: "/ml.jpeg",
  },
  {
    title: "Full-Stack Development",
    description:
      "Become a proficient developer by mastering front-end, back-end, and databases. Work with React, Next.js, Node.js, and MongoDB to build scalable web applications.",
    icon: Code,
    image: "/dev.jpg",
  },
  {
    title: "Blockchain Development",
    description:
      "Explore smart contracts, decentralized applications (DApps), and Ethereum blockchain. Learn Solidity programming and build secure blockchain applications.",
    icon: Blocks,
    image: "/bc.jpeg",
  },
  {
    title: "DevOps & Cloud Computing",
    description:
      "Gain expertise in Docker, Kubernetes, AWS, and CI/CD pipelines. Automate workflows, deploy scalable applications, and manage cloud infrastructure efficiently.",
    icon: Server,
    image: "/devops.jpeg",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Enhance problem-solving skills with hands-on coding challenges, competitive programming, and technical interview preparation using Python and Java.",
    icon: Terminal,
    image: "/dsa.jpg",
  },
];

const learningApproach = [
  "Hands-on practical learning with real-world projects.",
  "Live coding sessions and interactive workshops.",
  "Mentorship from industry professionals and experts.",
  "Regular assessments and personalized feedback.",
  "Placement assistance and resume-building support.",
];

export default function SoftwareTraining() {
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
{/* <div className="md:w-1/2 md:ml-[100px] text-center md:text-left">*/}
<div className="md:w-1/2 md:ml-[100px] text-center md:text-left">

            <h1 className="text-4xl font-bold text-blue-600 leading-tight">
              Learn Industry-Ready Skills with Hands-on Training
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Get trained by experienced mentors in cutting-edge technologies. Whether you're a beginner or an experienced developer, our courses are designed to accelerate your career growth.
            </p>
            <Link href="/enroll">
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg">
                Start Learning Now
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/training.jpg" 
              alt="Software Training" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Training Programs Section */}
        <div className="p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Explore Our Training Programs</h2>
          <p className="text-center text-gray-700 mt-4">
            Our courses are designed to equip you with in-demand skills through expert-led sessions and real-world projects.
          </p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Image
                  src={training.image}
                  alt={training.title}
                  width={290}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <div className="mt-4 flex items-center gap-3">
                  <training.icon className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-800">{training.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{training.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Approach Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Our Learning Approach</h2>
          <p className="text-center text-gray-700 mt-4">We follow a structured and practical learning approach to ensure you gain real-world expertise.</p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {learningApproach.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-3">
                <Book className="h-6 w-6 text-blue-500" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
