"use client";

import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="mt-20 min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Left Side - Welcome Section */}
      <div className="lg:w-1/2 bg-blue-600 relative hidden lg:block">
        <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex flex-col justify-center items-center text-white p-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to PreferCoding</h1>
            <p className="text-lg mb-8">
              Join our community of developers and start building amazing projects today.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-1">200+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-1">1,500+</h3>
                <p>Developers Trained</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-1">50+</h3>
                <p>Team Members</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-1">25+</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Clerk Sign In */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <motion.div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600">Sign Up</h2>
            <p className="text-gray-600 mt-2">Welcome! Sign Up & create your account</p>
          </motion.div>

          {/* Clerk SignIn Component */}
            <div className="relative flex justify-center items-center h-full">
              <SignUp
              appearance={{
                elements: {
                footer: 'hidden'
                }
              }}
              />
            </div>
              <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/sign-in" className="text-blue-600 hover:underline">
                Sign In
                </a>
              </p>
              </div>
        </motion.div>
      </div>
    </div>
  );
}
