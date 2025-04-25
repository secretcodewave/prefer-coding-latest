"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ygecevj",
        "template_pj25gva",
        form.current!,
        "yxwlblu3oSqcK4wp6"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current?.reset();
        },
        (error: any) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-50 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 max-w-3xl mx-auto px-6"
      >
        <h1 className="text-4xl font-bold text-blue-600">Get in Touch with Us</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Whether you have a question or want to start a project, we'd love to hear from you. Reach out today!
        </p>
      </motion.div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-h-96 lg:max-h-full">
              <Image
                src="/call.png"
                alt="Contact Us"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md lg:col-span-7"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Send us a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <Input placeholder="Your Name" name="user_name" required />
              <Input type="email" placeholder="Your Email" name="user_email" required />
              <Input placeholder="Subject" name="subject" />
              <Textarea placeholder="Your Message" name="message" required className="h-32" />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {sent && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center px-6"
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Contact Details</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Mail className="text-blue-500" /> codingsecret15@gmail.com
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Phone className="text-blue-500" /> +91 62638 73264
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="text-blue-500" /> Sagar, MP
          </div>
        </div>
      </motion.div>
    </div>
  );
}
