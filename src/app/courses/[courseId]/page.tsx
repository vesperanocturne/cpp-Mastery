"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LessonCard } from "@/components/LessonCard";
import { expandedCourses } from "@/lib/expandedCourseData";
import { downloadCourseCode, downloadCheatSheet } from "@/lib/downloadUtils";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const course = expandedCourses.find(c => c.id === courseId);

  const handleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const getCourseProgress = () => {
    if (!course || !course.lessons || course.lessons.length === 0) return 0;
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

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Course Not Found</h1>
          <p className="text-slate-600 mb-8">The course you're looking for doesn't exist.</p>
          <a href="/courses">
            <Button>Back to Courses</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <a href="/courses">
          <Button variant="outline" className="mb-6">
            ← Back to Courses
          </Button>
        </a>

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
                <div className="text-2xl font-bold text-slate-900">{course.lessons?.length || 0}</div>
                <div className="text-slate-600">Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">{course.duration}</div>
                <div className="text-slate-600">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">{getCourseProgress()}%</div>
                <div className="text-slate-600">Complete</div>
              </div>
            </div>

            <Progress value={getCourseProgress()} className="h-3 mb-6" />

            <Tabs defaultValue="lessons" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="lessons" className="mt-6">
                <div className="space-y-4">
                  {(course.lessons || []).map((lesson) => (
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
                        {(course.prerequisites || []).map((prereq, index) => (
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
                        {(course.learningOutcomes || []).map((outcome, index) => (
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
                <div className="space-y-6">
                  {/* Final Project */}
                  {course.finalProject && (
                    <Card className="border-2 border-green-200 bg-green-50">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl text-green-900">{course.finalProject.title}</CardTitle>
                            <CardDescription className="text-green-700 mt-2">{course.finalProject.description}</CardDescription>
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            Final Project
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-green-800">Estimated Time:</span>
                              <span className="text-green-700 ml-2">{course.finalProject.estimatedTime}</span>
                            </div>
                            <div>
                              <span className="font-medium text-green-800">Difficulty:</span>
                              <span className="text-green-700 ml-2 capitalize">{course.finalProject.difficulty}</span>
                            </div>
                          </div>
                          <div>
                            <span className="font-medium text-green-800 text-sm">Technologies:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {(course.finalProject.technologies || []).map((tech, index) => (
                                <Badge key={index} variant="outline" className="text-xs text-green-700 border-green-300">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <a href={`/projects/${course.finalProject.id}`}>
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                              Start Final Project
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Course Resources */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">Code Examples</CardTitle>
                        <CardDescription>Download all code examples from this course</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          className="w-full"
                          onClick={() => downloadCourseCode(course.title, course.lessons)}
                        >
                          Download ZIP
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">Cheat Sheet</CardTitle>
                        <CardDescription>Quick reference guide for this course</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          className="w-full"
                          onClick={() => downloadCheatSheet(`${course.title} Cheat Sheet`)}
                        >
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">Practice Exercises</CardTitle>
                        <CardDescription>Additional exercises to reinforce learning</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a href="/exercises">
                          <Button className="w-full">View Exercises</Button>
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}