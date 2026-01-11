"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const learningPaths = [
    {
      id: 1,
      title: "Complete Beginner",
      description: "Start your C++ journey from absolute basics",
      duration: "0-3 months",
      lessons: 24,
      difficulty: "Beginner",
      topics: ["Syntax Basics", "Variables", "Control Flow", "Functions"],
      progress: 0,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0c17167-81d0-4a89-8deb-a95098661119.png",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Intermediate Developer",
      description: "Master object-oriented programming and advanced concepts",
      duration: "3-8 months",
      lessons: 32,
      difficulty: "Intermediate",
      topics: ["OOP", "Memory Management", "STL", "Pointers"],
      progress: 0,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ccc705ea-7710-4ab6-bb6b-0db5cd79aae1.png",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Advanced Practitioner",
      description: "Explore templates, concurrency, and modern C++ features",
      duration: "8+ months",
      lessons: 28,
      difficulty: "Advanced",
      topics: ["Templates", "Concurrency", "Design Patterns", "Modern C++"],
      progress: 0,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3a71d94-beec-4713-86ab-3b4aee52dfe2.png",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const features = [
    {
      title: "Interactive Code Examples",
      description: "Learn with hands-on coding exercises and real-time feedback",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e83b44d-bfce-40ec-9874-b262c952227b.png"
    },
    {
      title: "Project-Based Learning",
      description: "Build real applications while mastering C++ concepts",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/794cda80-5ef8-425d-9dfc-b08e01ef5027.png"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress analytics",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70dd2966-c5dd-46c9-a13a-3ed665aa49bc.png"
    }
  ];

  const stats = [
    { label: "Students Enrolled", value: "50,000+" },
    { label: "Lessons Available", value: "84" },
    { label: "Code Examples", value: "500+" },
    { label: "Success Rate", value: "94%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-purple-600/10 dark:from-blue-600/20 dark:via-cyan-500/10 dark:to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                  New: Modern C++20 Features Added
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  Master <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">C++</span> Programming
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  From absolute beginner to advanced developer. Learn C++ with our comprehensive, 
                  hands-on curriculum designed by industry experts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                    Start Learning Free
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 text-lg font-medium">
                    View Course Preview
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4fa9f88-43bf-4b6b-9be2-476e1fb6ac36.png" 
                  alt="Modern C++ development environment with code editor interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl transform rotate-6 opacity-20 dark:opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section id="courses" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Structured courses designed to take you from beginner to expert, 
              with hands-on projects and real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map((path) => (
              <Link key={path.id} href={`/courses/${path.id === 1 ? 'beginner-cpp' : path.id === 2 ? 'intermediate-cpp' : 'advanced-cpp'}`}>
                <Card 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                    hoveredCard === path.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(path.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={path.image} 
                    alt={`${path.title} course preview showing ${path.topics.join(', ')}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${path.color} opacity-80`}></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-800">
                      {path.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {path.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>{path.lessons} lessons</span>
                    <span>{path.duration}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Progress</span>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {path.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full mt-4 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white">
                    Start Course
                  </Button>
                </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Choose C++ Mastery?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our platform combines proven teaching methods with modern technology 
              to deliver the most effective C++ learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your C++ Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of developers who have mastered C++ with our comprehensive learning platform. 
            Start with our free beginner course today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                Get Started Free
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-medium">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}