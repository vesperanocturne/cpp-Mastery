"use client";

import { useState } from "react";
import { CodeEditor } from "./CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, FileCode, BookOpen } from "lucide-react";

interface IDEProps {
  initialCode?: string;
  problem?: string;
  hints?: string[];
  solution?: string;
  testCases?: { 
    input: string; 
    output?: string; 
    requiredConstructs?: string[];
    outputPattern?: string;
  }[];
  title?: string;
}

export function IDE({
  initialCode = `#include <iostream>
using namespace std;

int main() {
    // Write your code here
    return 0;
}`,
  problem,
  hints = [],
  solution,
  testCases = [],
  title = "Interactive Code Editor",
}: IDEProps) {
  const [activeTab, setActiveTab] = useState("editor");
  const ideId = `ide-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full space-y-4" data-exercise-id={ideId}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileCode className="w-5 h-5" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="editor" className="flex items-center space-x-2">
                <FileCode className="w-4 h-4" />
                <span>Editor</span>
              </TabsTrigger>
              {problem && (
                <TabsTrigger value="problem" className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Problem</span>
                </TabsTrigger>
              )}
              {solution && (
                <TabsTrigger value="solution" className="flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Solution</span>
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="editor" className="mt-4">
              <CodeEditor
                initialCode={initialCode}
                language="cpp"
                title="C++ Code Editor"
                executable={true}
                testCases={testCases}
              />
            </TabsContent>

            {problem && (
              <TabsContent value="problem" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Problem Statement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-slate max-w-none">
                      <pre className="whitespace-pre-wrap text-sm bg-slate-50 p-4 rounded">
                        {problem}
                      </pre>
                    </div>
                    {hints.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-medium text-slate-900 mb-3">Hints:</h4>
                        <div className="space-y-2">
                          {hints.map((hint, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                {index + 1}
                              </div>
                              <p className="text-sm text-slate-700">{hint}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {testCases.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-medium text-slate-900 mb-3">Test Cases:</h4>
                        <div className="space-y-2">
                          {testCases.map((testCase, index) => (
                            <div
                              key={index}
                              className="bg-slate-100 p-3 rounded text-sm"
                            >
                              <div>
                                <strong>Input:</strong> {testCase.input || "None"}
                              </div>
                              {testCase.output && (
                                <div>
                                  <strong>Expected Output:</strong> {testCase.output}
                                </div>
                              )}
                              {testCase.requiredConstructs && testCase.requiredConstructs.length > 0 && (
                                <div>
                                  <strong>Required Constructs:</strong> {testCase.requiredConstructs.join(', ')}
                                </div>
                              )}
                              {testCase.outputPattern && (
                                <div>
                                  <strong>Output Pattern:</strong> {testCase.outputPattern}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}

            {solution && (
              <TabsContent value="solution" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeEditor
                      initialCode={solution}
                      language="cpp"
                      title="Solution Code"
                      executable={false}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
