"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "React", icon: "/react.png", color: "#61DAFB", description: "Dynamic interfaces" },
  { name: "Next.js", icon: "/next.jpeg", color: "#000000", description: "Performance & SEO" },
  { name: "Node.js", icon: "/njs.png", color: "#339933", description: "Backend solutions" },
  { name: "WordPress", icon: "/wordpress.png", color: "#21759B", description: "CMS solutions" },
  { name: "Shopify", icon: "/shopify.png", color: "#7AB55C", description: "E-commerce" },
  { name: "TypeScript", icon: "/ts.png", color: "#3178C6", description: "Type safety" },
  { name: "AWS", icon: "/aws.jpeg", color: "#FF9900", description: "Cloud hosting" },
  { name: "Tailwind CSS", icon: "/tailwind.png", color: "#38B2AC", description: "Rapid styling" },
  { name: "MongoDB", icon: "/mongo.png", color: "#47A248", description: "NoSQL database" },
  { name: "Vercel", icon: "/vercel.png", color: "#000000", description: "Deployment" },
  { name: "Figma", icon: "/figma.png", color: "#F24E1E", description: "UI/UX design" },
  { name: "Stripe", icon: "/stripee.png", color: "#6772E5", description: "Payment processing" },
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
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] text-xs sm:text-sm md:text-base font-mono">
          &lt;div className="tech-stack"&gt;
        </div>
        <div className="absolute top-[20%] left-[10%] text-xs sm:text-sm md:text-base font-mono">
          const technologies = ['React', 'Next.js', 'Node'];
        </div>
        <div className="absolute top-[30%] left-[15%] text-xs sm:text-sm md:text-base font-mono">
          function TechStack() {"{"}
        </div>
        <div className="absolute top-[40%] left-[20%] text-xs sm:text-sm md:text-base font-mono">
          return technologies.map(tech =&gt; &lt;Tech key={"{"}tech{"}"} name={"{"}tech{"}"} /&gt;);
        </div>
        <div className="absolute top-[50%] left-[15%] text-xs sm:text-sm md:text-base font-mono">{"}"}</div>
        <div className="absolute top-[60%] left-[10%] text-xs sm:text-sm md:text-base font-mono">
          export default TechStack;
        </div>
        <div className="absolute top-[70%] left-[5%] text-xs sm:text-sm md:text-base font-mono">&lt;/div&gt;</div>

        <div className="absolute top-[15%] right-[5%] text-xs sm:text-sm md:text-base font-mono">
          import {"{"} useState {"}"} from 'react';
        </div>
        <div className="absolute top-[25%] right-[10%] text-xs sm:text-sm md:text-base font-mono">
          const [isAwesome, setIsAwesome] = useState(true);
        </div>
        <div className="absolute top-[35%] right-[15%] text-xs sm:text-sm md:text-base font-mono">
          useEffect(() ={">"} {"{"}
        </div>
        <div className="absolute top-[45%] right-[20%] text-xs sm:text-sm md:text-base font-mono">
          console.log('Technologies loaded!');
        </div>
        <div className="absolute top-[55%] right-[15%] text-xs sm:text-sm md:text-base font-mono">{"}"}, []);</div>
        <div className="absolute top-[65%] right-[10%] text-xs sm:text-sm md:text-base font-mono">
          &lt;section className="tech-stack"&gt;
        </div>
        <div className="absolute top-[75%] right-[5%] text-xs sm:text-sm md:text-base font-mono">&lt;/section&gt;</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 font-mono text-sm mb-4">
            &lt;technologies&gt;
          </div>
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Cutting-Edge Tech Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We leverage the latest web technologies to build fast, secure, and scalable websites for your business.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech) => (
            <motion.div key={tech.name} variants={itemVariants} className="flex flex-col items-center group">
              <motion.div
                className="relative mb-4 bg-slate-800 p-4 rounded-full shadow-md group-hover:shadow-lg transition-all border border-slate-700"
                style={{ borderTop: `3px solid ${tech.color}` }}
                variants={zoomInVariants}
                initial="initial"
                whileHover="whileHover"
              >
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                  unoptimized
                />
              </motion.div>
              <p className="text-lg font-semibold text-white">{tech.name}</p>
              <p className="text-sm text-gray-400 text-center">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium">
            We use the right technology for your specific project needs
          </div>
        </div>
      </div>
    </section>
  )
}
