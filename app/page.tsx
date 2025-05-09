"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Rocket } from "lucide-react"
import Link from "next/link"
// import { ServiceCards } from "@/components/service-cards"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { TechStack } from "@/components/tech-stack"
// import { ProjectShowcase } from "@/components/project-showcase"
// import { DevProcess } from "@/components/dev-process"
import { CodeFeatures } from "@/components/code-features"
import { ProjectShowcase } from "@/components/project-showcase"

export default function Home() {
  // WhatsApp contact number - replace with your actual number
  const whatsappNumber = "6263873264"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <div className="flex flex-col pb-24">
      <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute top-[40%] right-[20%] w-[200px] h-[200px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '20s' }} />
        </div>
        
        {/* Floating code elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-[15%] left-[10%] text-xs sm:text-sm md:text-base font-mono text-blue-400">
            &lt;div className="hero"&gt;
          </div>
          <div className="absolute top-[25%] left-[15%] text-xs sm:text-sm md:text-base font-mono text-green-400">
            const [isAwesome, setIsAwesome] = useState(true);
          </div>
          <div className="absolute top-[35%] left-[5%] text-xs sm:text-sm md:text-base font-mono text-purple-400">
            function BuildAmazingWebsites() ;
          </div>
          <div className="absolute top-[60%] left-[20%] text-xs sm:text-sm md:text-base font-mono text-yellow-400">
            {/* return &lt;YourDreamWebsite /&gt;; */}
          </div>
          <div className="absolute top-[20%] right-[15%] text-xs sm:text-sm md:text-base font-mono text-cyan-400">
            // Removed unused import or define 'Success' if needed
          </div>
          <div className="absolute top-[40%] right-[10%] text-xs sm:text-sm md:text-base font-mono text-red-400">
            export default function GrowYourBusiness() ;
          </div>
          <div className="absolute top-[70%] right-[20%] text-xs sm:text-sm md:text-base font-mono text-orange-400">
            &lt;/div&gt;
          </div>
        </div>

        <div className="container mx-auto px-4 pt-16 pb-12 relative z-10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              <div className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 font-mono text-sm mb-2">
                &lt;code&gt; We build the web &lt;/code&gt;
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Code</span> Your Vision Into Reality
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                From concept to deployment, we transform your ideas into stunning, high-performance websites that drive results and elevate your online presence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 h-12 rounded-md" asChild>
                  <Link href="/portfolio">Explore Our Work</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 rounded-md border-gray-500 text-black hover:bg-black hover:text-white" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-gray-300 mt-4">
                <div className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-blue-400" />
                  100+ Websites Launched
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  98% Client Satisfaction
                </div>
              </div>
            </div>

            {/* Right Column - Code Editor Card */}
            <div className="relative hidden lg:block">
              <Card className="bg-slate-800 border-slate-700 shadow-xl overflow-hidden">
                <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm text-gray-400 font-mono">website-project.tsx</div>
                </div>
                <CardContent className="p-0">
                  <pre className="text-sm p-6 font-mono text-gray-300 overflow-x-auto">
                    <code>
                      <span className="text-blue-400">import</span> <span className="text-green-400">{"{ useState, useEffect }"}</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'react'</span>;<br/><br/>
                      
                      <span className="text-purple-400">function</span> <span className="text-yellow-400">YourAmazingWebsite</span>() {"{"}<br/>
                      {"  "}<span className="text-blue-400">const</span> [<span className="text-green-400">isLoading</span>, <span className="text-green-400">setIsLoading</span>] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">true</span>);<br/>
                      {"  "}<span className="text-blue-400">const</span> [<span className="text-green-400">data</span>, <span className="text-green-400">setData</span>] = <span className="text-yellow-400">useState</span>(<span className="text-blue-400">null</span>);<br/><br/>
                      
                      {"  "}<span className="text-yellow-400">useEffect</span>(() {"=>"} {"{"}<br/>
                      {"    "}<span className="text-purple-400">const</span> <span className="text-yellow-400">fetchData</span> = <span className="text-purple-400">async</span> () {"=>"} {"{"}<br/>
                      {"      "}<span className="text-blue-400">const</span> <span className="text-green-400">response</span> = <span className="text-purple-400">await</span> <span className="text-yellow-400">fetch</span>(<span className="text-orange-400">'/api/data'</span>);<br/>
                      {"      "}<span className="text-blue-400">const</span> <span className="text-green-400">result</span> = <span className="text-purple-400">await</span> <span className="text-green-400">response</span>.<span className="text-yellow-400">json</span>();<br/>
                      {"      "}<span className="text-yellow-400">setData</span>(<span className="text-green-400">result</span>);<br/>
                      {"      "}<span className="text-yellow-400">setIsLoading</span>(<span className="text-orange-400">false</span>);<br/>
                      {"    }"}<br/>
                      {"    "}<span className="text-yellow-400">fetchData</span>();<br/>
                      {"  }"}, []);<br/><br/>
                      
                      {"  "}<span className="text-purple-400">return</span> (<br/>
                      {"    "}&lt;<span className="text-red-400">div</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"container"</span>&gt;<br/>
                      {"      "}{"{"}<span className="text-green-400">isLoading</span> ? (<br/>
                      {"        "}&lt;<span className="text-red-400">Loader</span> /&gt;<br/>
                      {"      "}) : (<br/>
                      {"        "}&lt;<span className="text-red-400">Dashboard</span> <span className="text-green-400">data</span>={"{"}<span className="text-green-400">data</span>{"}"} /&gt;<br/>
                      {"      "}){"}"};<br/>
                      {"    "}&lt;/<span className="text-red-400">div</span>&gt;<br/>
                      {"  "});<br/>
                      {"}"}<br/><br/>
                      
                      <span className="text-blue-400">export</span> <span className="text-blue-400">default</span> <span className="text-yellow-400">YourAmazingWebsite</span>;
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CodeFeatures />
      {/* <ServiceCards /> */}
      {/* <DevProcess /> */}
      <ProjectShowcase />
      <TechStack />
      <Testimonials />
      <Stats />

      {/* WhatsApp Sticky Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <div className="flex items-center justify-center">
          <img src="/wsp.png" alt="WhatsApp" width={30} height={30} className="w-6 h-6" />
        </div>
      </a>
    </div>
  )
}
