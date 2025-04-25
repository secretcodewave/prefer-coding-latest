"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Lock, User, Eye, EyeOff, Github} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="md:w-1/2 bg-blue-600 relative hidden md:block">
        <div className="absolute inset-0">
          
        </div>
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

      {/* Right side - Auth forms */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600">
              {activeTab === "login" ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-gray-600 mt-2">
              {activeTab === "login" 
                ? "Welcome back! Sign in to access your account" 
                : "Join our community of developers today"}
            </p>
          </motion.div>

          <Tabs defaultValue="login" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.div variants={itemVariants} className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="pl-10 pr-4 py-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="pl-10 pr-10 py-6"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                    Sign In
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="relative flex items-center gap-4 my-8">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm">or continue with</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center gap-2 py-5">
                    {/* <Google size={18} /> */}
                    <span>Google</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 py-5">
                    <Github size={18} />
                    <span>GitHub</span>
                  </Button>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Sign Up Form */}
            <TabsContent value="signup">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.div variants={itemVariants} className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    type="text" 
                    placeholder="Full Name" 
                    className="pl-10 pr-4 py-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="pl-10 pr-4 py-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="pl-10 pr-10 py-6"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                  </label>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                    Create Account
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="relative flex items-center gap-4 my-8">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm">or sign up with</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center gap-2 py-5">
                    {/* <Google size={18} /> */}
                    <span>Google</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 py-5">
                    <Github size={18} />
                    <span>GitHub</span>
                  </Button>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}