"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { IDE } from "@/components/IDE";
import { expandedCourses } from "@/lib/expandedCourseData";

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.lessonId as string;
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Find the lesson across all courses
  let lesson = null;
  let course = null;
  let currentLessonIndex = -1;
  
  for (const c of expandedCourses) {
    const foundLessonIndex = c.lessons.findIndex(l => l.id === lessonId);
    if (foundLessonIndex !== -1) {
      lesson = c.lessons[foundLessonIndex];
      course = c;
      currentLessonIndex = foundLessonIndex;
      break;
    }
  }

  // Find previous and next lessons
  const previousLesson = currentLessonIndex > 0 && course 
    ? course.lessons[currentLessonIndex - 1] 
    : null;
  const nextLesson = currentLessonIndex >= 0 && course && currentLessonIndex < course.lessons.length - 1
    ? course.lessons[currentLessonIndex + 1]
    : null;

  const handleMarkComplete = () => {
    setProgress(100);
    setCompleted(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
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

  if (!lesson || !course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Lesson Not Found</h1>
          <p className="text-slate-600 mb-8">The lesson you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href={`/courses/${course.id}`}>
          <Button variant="outline" className="mb-6">
            ← Back to {course.title}
          </Button>
        </Link>

        {/* Lesson Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-3xl font-bold text-slate-900">{lesson.title}</h1>
                <Badge className={getDifficultyColor(lesson.difficulty)}>
                  {lesson.difficulty}
                </Badge>
                {completed && (
                  <Badge className="bg-green-100 text-green-800">
                    Completed
                  </Badge>
                )}
              </div>
              <p className="text-lg text-slate-600 mb-4">{lesson.description}</p>
              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{lesson.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span>{lesson.topics.length} topics</span>
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">Progress</span>
              <span className="text-slate-900 font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => setProgress(Math.min(progress + 25, 100))}
            >
              {progress === 0 ? 'Start Lesson' : 'Continue'}
            </Button>
            {!completed && progress > 0 && (
              <Button 
                variant="outline"
                onClick={handleMarkComplete}
              >
                Mark as Complete
              </Button>
            )}
          </div>
        </div>

        {/* Lesson Content */}
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Lesson Content</TabsTrigger>
            <TabsTrigger value="code">Code Examples</TabsTrigger>
            <TabsTrigger value="editor">Try It Yourself</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Lesson Content</CardTitle>
                <CardDescription>Comprehensive learning material for this lesson</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Topics Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {lesson.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="font-medium text-slate-900">{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Lesson Content */}
                {lesson.content && (
                  <div className="prose prose-slate max-w-none mb-8">
                    <div className="bg-white border border-slate-200 rounded-lg p-6">
                      <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                        {lesson.content.split('\n').map((line, index) => {
                          if (line.startsWith('# ')) {
                            return <h1 key={index} className="text-2xl font-bold text-slate-900 mb-4 mt-6 first:mt-0">{line.substring(2)}</h1>;
                          } else if (line.startsWith('## ')) {
                            return <h2 key={index} className="text-xl font-semibold text-slate-800 mb-3 mt-5">{line.substring(3)}</h2>;
                          } else if (line.startsWith('### ')) {
                            return <h3 key={index} className="text-lg font-medium text-slate-800 mb-2 mt-4">{line.substring(4)}</h3>;
                          } else if (line.startsWith('- **')) {
                            const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
                            if (match) {
                              return (
                                <div key={index} className="flex items-start space-x-2 mb-2">
                                  <span className="text-blue-600 mt-1">•</span>
                                  <span><strong className="text-slate-900">{match[1]}</strong>: {match[2]}</span>
                                </div>
                              );
                            }
                          } else if (line.startsWith('- ')) {
                            return (
                              <div key={index} className="flex items-start space-x-2 mb-1">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{line.substring(2)}</span>
                              </div>
                            );
                          } else if (line.trim() === '') {
                            return <div key={index} className="mb-3"></div>;
                          } else if (line.startsWith('```')) {
                            return null; // Handle code blocks separately
                          } else {
                            return <p key={index} className="mb-3 text-slate-700">{line}</p>;
                          }
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="mt-6">
            {lesson.codeExample ? (
              <CodeBlock 
                code={lesson.codeExample}
                title={`${lesson.title} - Code Example`}
                description="Study this example to understand the concepts in practice"
              />
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-slate-600">No code examples available for this lesson.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="editor" className="mt-6">
            <IDE
              initialCode={lesson.codeExample || `#include <iostream>
using namespace std;

int main() {
    // Try modifying the code from the example above
    // Experiment and see what happens!
    cout << "Hello, C++!" << endl;
    return 0;
}`}
              title={`${lesson.title} - Interactive Editor`}
            />
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <div className="space-y-6">
              {lesson.practiceExercises && lesson.practiceExercises.length > 0 ? (
                lesson.practiceExercises.map((exercise) => (
                  <Card key={exercise.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{exercise.title}</CardTitle>
                          <CardDescription className="mt-2">{exercise.description}</CardDescription>
                        </div>
                        <Badge className={
                          exercise.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                          exercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }>
                          {exercise.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="problem" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="problem">Problem</TabsTrigger>
                          <TabsTrigger value="hints">Hints</TabsTrigger>
                          <TabsTrigger value="editor">Code Editor</TabsTrigger>
                          <TabsTrigger value="solution">Solution</TabsTrigger>
                        </TabsList>

                        <TabsContent value="problem" className="mt-4">
                          <div className="space-y-4">
                            <div className="bg-slate-50 p-4 rounded-lg">
                              <p className="text-slate-700">{exercise.description}</p>
                            </div>
                            
                            {exercise.testCases.length > 0 && (
                              <div>
                                <h4 className="font-medium text-slate-900 mb-2">Test Cases:</h4>
                                <div className="space-y-2">
                                  {exercise.testCases.map((testCase, testIndex) => (
                                    <div key={testIndex} className="bg-slate-100 p-3 rounded text-sm">
                                      <div><strong>Input:</strong> {testCase.input || 'None'}</div>
                                      {testCase.output && (
                                        <div><strong>Expected Output:</strong> {testCase.output}</div>
                                      )}
                                      {testCase.requiredConstructs && testCase.requiredConstructs.length > 0 && (
                                        <div><strong>Required Constructs:</strong> {testCase.requiredConstructs.join(', ')}</div>
                                      )}
                                      {testCase.outputPattern && (
                                        <div><strong>Output Pattern:</strong> {testCase.outputPattern}</div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </TabsContent>

                        <TabsContent value="hints" className="mt-4">
                          <div className="space-y-3">
                            {exercise.hints.map((hint, hintIndex) => (
                              <div key={hintIndex} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                  {hintIndex + 1}
                                </div>
                                <p className="text-sm text-slate-700">{hint}</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="editor" className="mt-4">
                          <IDE
                            initialCode={`#include <iostream>
using namespace std;

int main() {
    // Write your solution here
    // ${exercise.description}
    
    return 0;
}`}
                            problem={exercise.description}
                            hints={exercise.hints}
                            solution={exercise.solution}
                            testCases={exercise.testCases}
                            title={`${exercise.title} - Code Editor`}
                          />
                        </TabsContent>

                        <TabsContent value="solution" className="mt-4">
                          <CodeBlock 
                            code={exercise.solution}
                            title={`${exercise.title} - Solution`}
                            description="Study this solution to understand the approach"
                          />
                        </TabsContent>
                      </Tabs>

                      <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200">
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => {
                            // Switch to editor tab - this will be handled by the IDE component's internal tabs
                            const editorButton = document.querySelector(`[data-exercise-id="${exercise.id}"] [value="editor"]`) as HTMLElement;
                            if (editorButton) {
                              editorButton.click();
                            }
                          }}
                        >
                          Open in Editor
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => {
                            alert(`Exercise "${exercise.title}" marked as complete! ✅`);
                          }}
                        >
                          Mark Complete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-slate-600 mb-4">No practice exercises available for this lesson yet.</p>
                    <Link href="/exercises">
                      <Button>Browse All Exercises</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {previousLesson ? (
            <Button 
              variant="outline"
              onClick={() => router.push(`/lessons/${previousLesson.id}`)}
            >
              ← Previous Lesson
            </Button>
          ) : (
            <Button variant="outline" disabled>
              ← Previous Lesson
            </Button>
          )}
          {nextLesson ? (
            <Button
              onClick={() => router.push(`/lessons/${nextLesson.id}`)}
            >
              Next Lesson →
            </Button>
          ) : (
            <Button disabled>
              Next Lesson →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}