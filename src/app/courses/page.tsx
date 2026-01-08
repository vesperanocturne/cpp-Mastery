"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LessonCard } from "@/components/LessonCard";
import { courses } from "@/lib/courseData";

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const handleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const getCourseProgress = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    const completedCount = course.lessons.filter(lesson => 
      completedLessons.has(lesson.id)
    ).length;
    
    return Math.round((completedCount / course.lessons.length) * 100);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'from-green-500 to-emerald-600';
      case 'intermediate':
        return 'from-blue-500 to-cyan-600';
      case 'advanced':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  if (selectedCourse) {
    const course = courses.find(c => c.id === selectedCourse);
    if (!course) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => setSelectedCourse(null)}
            className="mb-6"
          >
            ← Back to Courses
          </Button>

          {/* Course Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={course.image} 
                alt={`${course.title} course preview`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${getLevelColor(course.level)} opacity-80`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
                  <p className="text-xl opacity-90">{course.description}</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{course.lessons.length}</div>
                  <div className="text-slate-600">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{course.duration}</div>
                  <div className="text-slate-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{getCourseProgress(course.id)}%</div>
                  <div className="text-slate-600">Complete</div>
                </div>
              </div>

              <Progress value={getCourseProgress(course.id)} className="h-3 mb-6" />

              <Tabs defaultValue="lessons" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="lessons">Lessons</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>

                <TabsContent value="lessons" className="mt-6">
                  <div className="space-y-4">
                    {course.lessons.map((lesson, index) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={{
                          ...lesson,
                          completed: completedLessons.has(lesson.id)
                        }}
                        onComplete={handleLessonComplete}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Prerequisites</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {course.prerequisites.map((prereq, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-slate-700">{prereq}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Learning Outcomes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {course.learningOutcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <span className="text-slate-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">Code Examples</CardTitle>
                        <CardDescription>Download all code examples from this course</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">Download ZIP</Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">Cheat Sheet</CardTitle>
                        <CardDescription>Quick reference guide for C++ syntax</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">Download PDF</Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">Practice Exercises</CardTitle>
                        <CardDescription>Additional exercises to reinforce learning</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">View Exercises</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            C++ Learning Courses
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Master C++ programming with our comprehensive, structured courses. 
            From beginner fundamentals to advanced concepts.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <a key={course.id} href={`/courses/${course.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={`${course.title} course preview`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getLevelColor(course.level)} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <Badge className={getLevelBadgeColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                </div>
              </div>

              <CardHeader>
                <CardDescription className="text-slate-600">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{course.lessons.length} lessons</span>
                  <span>{course.duration}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="text-slate-900 font-medium">{getCourseProgress(course.id)}%</span>
                  </div>
                  <Progress value={getCourseProgress(course.id)} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900 text-sm">Prerequisites:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.prerequisites.slice(0, 2).map((prereq, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {prereq}
                      </Badge>
                    ))}
                    {course.prerequisites.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.prerequisites.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white">
                  {getCourseProgress(course.id) > 0 ? 'Continue Course' : 'Start Course'}
                </Button>
              </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Learning Path Recommendation */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Recommended Learning Path
            </h2>
            <p className="text-lg text-slate-600">
              Follow this structured path for the most effective learning experience
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            {courses.map((course, index) => (
              <div key={course.id} className="flex items-center">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getLevelColor(course.level)} flex items-center justify-center text-white font-bold text-lg mb-2`}>
                    {index + 1}
                  </div>
                  <h3 className="font-medium text-slate-900">{course.title}</h3>
                  <p className="text-sm text-slate-600">{course.duration}</p>
                </div>
                {index < courses.length - 1 && (
                  <div className="hidden md:block ml-8">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}