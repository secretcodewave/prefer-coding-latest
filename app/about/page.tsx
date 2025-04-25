"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Briefcase, BookOpen, Target, History } from "lucide-react";

export default function AboutUs() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Company stats
  const stats = [
    { icon: <Users size={24} />, value: "10+", label: "Team Members" },
    { icon: <Briefcase size={24} />, value: "20+", label: "Projects Completed" },
    { icon: <BookOpen size={24} />, value: "1,000+", label: "People Trained" },
    { icon: <Award size={24} />, value: "5+", label: "Awards Won" }
  ];

  // Team members
  const teamMembers = [
    { name: "Eng. Akarsh Sahu", role: "Founder & CEO", image: "/user.png" },
    { name: "Shravani Kuna", role: "Co-Founder", image: "/user.png" },
    { name: "Yashika Kumari", role: "CTO", image: "/user.png" },
    { name: "Mehul Singh", role: "Lead Developer", image: "/user.png" }
  ];

  return (
    <div className="bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">About PreferCoding</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into impactful digital solutions.
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative h-96 lg:h-full">
            <Image 
              src="/team.avif" 
              alt="Our Team" 
              width={600} 
              height={500} 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-blue-700">Our Mission</h2>
            <p className="text-gray-600">
              At PreferCoding, we believe that technology should empower, not complicate. Our mission is to develop elegant, efficient solutions that solve real-world problems and help businesses thrive in the digital landscape.
            </p>
            <p className="text-gray-600">
              Since our founding in 2015, we've grown from a small startup of 5 developers to an industry-recognized team of over 50 professionals, all united by our passion for code and commitment to excellence.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-3">
                <Target className="text-blue-500" size={20} />
                <span className="text-gray-700 font-medium">Innovation-driven development</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Target className="text-blue-500" size={20} />
                <span className="text-gray-700 font-medium">Client-focused approach</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Target className="text-blue-500" size={20} />
                <span className="text-gray-700 font-medium">Continuous learning culture</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-md mb-20"
        >
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-10">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-lg bg-blue-50">
                <div className="flex justify-center mb-3 text-blue-500">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* History */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-10">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-blue-200 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <div className="flex items-center md:justify-end gap-2 mb-2">
                      <History className="text-blue-500" />
                      <h3 className="text-xl font-semibold text-blue-700">2024</h3>
                    </div>
                    <p className="text-gray-600">Founded as a small web development shop with 5 team members</p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <div className="flex items-center gap-2 mb-2">
                      <History className="text-blue-500" />
                      <h3 className="text-xl font-semibold text-blue-700">2025</h3>
                    </div>
                    <p className="text-gray-600">Expanded to 15 team members and opened our first office</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <div className="flex items-center md:justify-end gap-2 mb-2">
                      <History className="text-blue-500" />
                      <h3 className="text-xl font-semibold text-blue-700">2019</h3>
                    </div>
                    <p className="text-gray-600">Launched our training program and received industry recognition</p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <div className="flex items-center gap-2 mb-2">
                      <History className="text-blue-500" />
                      <h3 className="text-xl font-semibold text-blue-700">2022</h3>
                    </div>
                    <p className="text-gray-600">Reached 50+ team members and expanded globally</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-10">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Top Development Agency</h3>
              <p className="text-gray-600">Recognized as a top web development agency by TechReview for 3 consecutive years (2024-2025).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Innovation Award 2024</h3>
              <p className="text-gray-600">Received the Digital Innovation Award for our work in educational technology solutions in 2024.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Training Excellence</h3>
              <p className="text-gray-600">Our training program has been certified for excellence by the Coding Education Association.</p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-10">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={400} 
                    height={400} 
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}