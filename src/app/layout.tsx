import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C++ Mastery - Learn C++ Programming from Beginner to Expert",
  description: "Comprehensive C++ learning platform with structured courses, interactive examples, and hands-on projects. Master C++ programming from basics to advanced concepts.",
  keywords: "C++, programming, learn C++, coding, software development, tutorials, courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 antialiased")}>
        <div className="relative min-h-screen">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C++</span>
                  </div>
                  <span className="text-xl font-bold text-slate-800">C++ Mastery</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <a href="/courses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    Courses
                  </a>
                  <a href="/exercises" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    Exercises
                  </a>
                  <a href="/resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    Resources
                  </a>
                  <a href="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    Home
                  </a>
                  <a href="/courses" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-md hover:shadow-lg">
                    Get Started
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button className="text-slate-600 hover:text-blue-600 p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="relative">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-slate-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                  <a href="/" className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C++</span>
                    </div>
                    <span className="text-xl font-bold">C++ Mastery</span>
                  </a>
                  <p className="text-slate-400 max-w-md">
                    Master C++ programming with our comprehensive learning platform. From basics to advanced concepts, 
                    we provide structured courses and hands-on projects to accelerate your coding journey.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold mb-4">Learning</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li><a href="/courses" className="hover:text-white transition-colors">Beginner Course</a></li>
                    <li><a href="/courses" className="hover:text-white transition-colors">Intermediate Course</a></li>
                    <li><a href="/courses" className="hover:text-white transition-colors">Advanced Course</a></li>
                    <li><a href="/exercises" className="hover:text-white transition-colors">Practice Exercises</a></li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li><a href="/resources" className="hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="/resources" className="hover:text-white transition-colors">Code Examples</a></li>
                    <li><a href="/resources" className="hover:text-white transition-colors">Cheat Sheets</a></li>
                    <li><a href="/resources" className="hover:text-white transition-colors">Community</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                <p>&copy; 2024 C++ Mastery. All rights reserved. Built with passion for C++ education.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}