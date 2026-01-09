"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CodeBlock } from "./CodeBlock";
import { Lesson } from "@/lib/courseData";

interface LessonCardProps {
  lesson: Lesson;
  onComplete?: (lessonId: string) => void;
  isExpanded?: boolean;
}

export function LessonCard({ lesson, onComplete, isExpanded = false }: LessonCardProps) {
  const [expanded, setExpanded] = useState(isExpanded);
  const [progress, setProgress] = useState(lesson.completed ? 100 : 0);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMarkComplete = () => {
    setProgress(100);
    onComplete?.(lesson.id);
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

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${expanded ? 'ring-2 ring-blue-500' : ''}`}>
      <CardHeader className="cursor-pointer" onClick={handleToggleExpand}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <CardTitle className="text-lg font-semibold text-slate-900">
                {lesson.title}
              </CardTitle>
              <Badge className={getDifficultyColor(lesson.difficulty)}>
                {lesson.difficulty}
              </Badge>
              {lesson.completed && (
                <Badge className="bg-green-100 text-green-800">
                  Completed
                </Badge>
              )}
            </div>
            <CardDescription className="text-slate-600 mb-3">
              {lesson.description}
            </CardDescription>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
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
          <div className="flex-shrink-0 ml-4">
            <svg 
              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-600">Progress</span>
            <span className="text-slate-900 font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-6">
          {/* Topics */}
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Topics Covered</h4>
            <div className="flex flex-wrap gap-2">
              {lesson.topics.map((topic, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Code Example */}
          {lesson.codeExample && (
            <div>
              <h4 className="font-medium text-slate-900 mb-3">Code Example</h4>
              <CodeBlock 
                code={lesson.codeExample}
                title={`${lesson.title} - Example`}
                description="Practice this code example to understand the concepts better"
              />
            </div>
          )}

          {/* Learning Objectives */}
          <div>
            <h4 className="font-medium text-slate-900 mb-3">What You&apos;ll Learn</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Understand the fundamental concepts of {lesson.title.toLowerCase()}</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Apply practical examples in real-world scenarios</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Build confidence with hands-on coding exercises</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
            <Link href={`/lessons/${lesson.id}`} className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {lesson.completed ? 'Review Lesson' : 'Start Lesson'}
              </Button>
            </Link>
            {!lesson.completed && (
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleMarkComplete}
              >
                Mark as Complete
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm"
              className="sm:w-auto"
              onClick={() => {
                // Simulate practice mode
                console.log(`Practice mode for: ${lesson.id}`);
              }}
            >
              Practice
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
}