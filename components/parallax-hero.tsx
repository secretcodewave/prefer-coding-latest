"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div className="font-bold text-white text-center relative z-10" style={{ y: textY }}>
        <h1 className="text-6xl md:text-8xl mb-4">Tech Mastery</h1>
        <p className="text-2xl md:text-4xl">Elevate Your Skills</p>
      </motion.div>
    </div>
  )
}

