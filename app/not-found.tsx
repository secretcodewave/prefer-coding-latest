"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-6 bg-blue-600 text-white hover:bg-blue-700">
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
