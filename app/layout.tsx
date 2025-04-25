import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type React from "react";
import { usePathname } from "next/navigation";
import LayoutWrapper from "./LayoutWrapper";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PreferCoding - Transform Your Future with Tech Excellence",
  description:
    "Master web development, digital marketing, and HR skills with industry experts",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This is a client component
  return (
    <ClerkProvider>
    
      <html lang="en">
        <body className={inter.className}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
