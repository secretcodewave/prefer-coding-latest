'use client'
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { usePathname } from "next/navigation"

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname.startsWith("/login/")
  
  return (
    <>
      {!isAuthPage && <Navigation />}
      <div className={!isAuthPage ? "mt-10" : ""}>
        {children}
      </div>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default LayoutWrapper