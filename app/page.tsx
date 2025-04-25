import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Users, MessageCircle } from "lucide-react"
import Link from "next/link"
import { CourseCards } from "@/components/course-cards"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { TechStack } from "@/components/tech-stack"
import { Navigation } from "@/components/navigation"

export default function Home() {
  // WhatsApp contact number - replace with your actual number
  const whatsappNumber = "6263873264";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="flex flex-col pb-24">
      <section className="w-full min-h-screen bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
        {/* Blue blur effect */}
        <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 pt-16 pb-12">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                Transform Your Future with <span className="text-blue-500">Tech Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                Master web development, digital marketing, and HR skills with industry experts. Join thousands of
                successful graduates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8 h-12 rounded-md" asChild>
                  <Link href="/courses">Explore Courses →</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 rounded-md" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-gray-600 mt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  3000+ Students
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  95% Success Rate
                </div>
              </div>
            </div>

            {/* Right Column - Staggered Cards */}
            <div className="relative h-[600px] hidden lg:block">
              <Card className="absolute top-0 right-0 w-[380px] bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-4 text-3xl font-mono">{"</>"}</div>
                  <h3 className="text-xl font-semibold mb-2">Software Training</h3>
                  <p className="text-gray-600">Full-stack development with modern technologies</p>
                </CardContent>
              </Card>

              <Card className="absolute top-1/3 right-16 w-[380px] bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <Code className="mb-4 h-10 w-10 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
                  <p className="text-gray-600">Full-stack development with modern technologies</p>
                </CardContent>
              </Card>

              <Card className="absolute top-2/3 right-0 w-[380px] bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <Brain className="mb-4 h-10 w-10 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                  <p className="text-gray-600">Strategic marketing for the digital age</p>
                </CardContent>
              </Card>
            </div>

            {/* Mobile cards - shown only on small screens */}
            <div className="grid gap-6 lg:hidden">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 text-3xl font-mono">{"</>"}</div>
                  <h3 className="text-xl font-semibold mb-2">Software Training</h3>
                  <p className="text-gray-600">Full-stack development with modern technologies</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <Code className="mb-4 h-10 w-10 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
                  <p className="text-gray-600">Full-stack development with modern technologies</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <Brain className="mb-4 h-10 w-10 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                  <p className="text-gray-600">Strategic marketing for the digital age</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CourseCards />
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
    <img 
      src="/wsp.png" 
      alt="WhatsApp"
      width={30}
      height={30}
      className="w-6 h-6"
    />
  </div>
</a>
    </div>
  );
}