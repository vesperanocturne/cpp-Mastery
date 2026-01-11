"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Copy, Download, RotateCcw, CheckCircle2, XCircle, Loader2 } from "lucide-react";

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-slate-900 flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
    </div>
  ),
});

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  title?: string;
  onCodeChange?: (code: string) => void;
  executable?: boolean;
  testCases?: { 
    input: string; 
    output?: string; 
    requiredConstructs?: string[];
    outputPattern?: string;
  }[];
}

export function CodeEditor({
  initialCode = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  language = "cpp",
  title = "Code Editor",
  onCodeChange,
  executable = true,
  testCases = [],
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const handleCodeChange = (value: string | undefined) => {
    const newCode = value || "";
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("");
    setExecutionResult(null);

    try {
      setOutput("Compiling...\n");

      // Use Piston API for code execution (free, no auth required)
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: "cpp",
          version: "10.2.0",
          files: [
            {
              content: code,
            },
          ],
          stdin: "",
          args: [],
        }),
      });

      if (!response.ok) {
        throw new Error(`Execution failed: ${response.statusText}`);
      }

      const data = await response.json();

      // Build output string
      let outputText = "Compiling...\n";
      
      if (data.compile && data.compile.stderr) {
        outputText += `\nCompilation Error:\n${data.compile.stderr}\n`;
        setOutput(outputText);
        setExecutionResult({
          success: false,
          message: "Compilation failed. Please check your code for errors.",
        });
        return;
      }

      if (data.compile && data.compile.stdout) {
        outputText += `Compilation Output:\n${data.compile.stdout}\n`;
      }

      outputText += "\nRunning...\n\n";

      if (data.run) {
        if (data.run.stderr) {
          outputText += `Runtime Error:\n${data.run.stderr}\n`;
        }
        if (data.run.stdout) {
          outputText += data.run.stdout;
        }
        if (!data.run.stdout && !data.run.stderr) {
          outputText += "(No output)\n";
        }
      }

      setOutput(outputText);

      // Check test cases if provided
      if (testCases.length > 0) {
        let allPassed = true;
        const failedTests: string[] = [];
        const codeLower = code.toLowerCase();

        for (const testCase of testCases) {
          let testPassed = true;
          const testErrors: string[] = [];

          // Check for required constructs in code
          if (testCase.requiredConstructs && testCase.requiredConstructs.length > 0) {
            for (const construct of testCase.requiredConstructs) {
              const constructLower = construct.toLowerCase();
              // Check for common C++ constructs
              if (constructLower === 'cout' && !codeLower.includes('cout')) {
                testPassed = false;
                testErrors.push(`Missing required construct: cout`);
              } else if (constructLower === 'cin' && !codeLower.includes('cin')) {
                testPassed = false;
                testErrors.push(`Missing required construct: cin`);
              } else if (constructLower === 'if' && !codeLower.includes('if') && !codeLower.includes('if(') && !codeLower.includes('if (')) {
                testPassed = false;
                testErrors.push(`Missing required construct: if statement`);
              } else if (constructLower === 'for' && !codeLower.includes('for') && !codeLower.includes('for(') && !codeLower.includes('for (')) {
                testPassed = false;
                testErrors.push(`Missing required construct: for loop`);
              } else if (constructLower === 'while' && !codeLower.includes('while') && !codeLower.includes('while(') && !codeLower.includes('while (')) {
                testPassed = false;
                testErrors.push(`Missing required construct: while loop`);
              } else if (constructLower === 'function' && !code.match(/\w+\s+\w+\s*\(/)) {
                testPassed = false;
                testErrors.push(`Missing required construct: function`);
              } else if (constructLower === 'array' && !code.match(/\[\s*\d*\s*\]/)) {
                testPassed = false;
                testErrors.push(`Missing required construct: array`);
              } else if (constructLower === 'class' && !codeLower.includes('class ')) {
                testPassed = false;
                testErrors.push(`Missing required construct: class`);
              } else if (constructLower === 'switch' && !codeLower.includes('switch')) {
                testPassed = false;
                testErrors.push(`Missing required construct: switch statement`);
              }
            }
          }

          // Check output if provided and code executed successfully
          if (testCase.output && data.run && data.run.stdout) {
            const actualOutput = data.run.stdout.trim();
            const expectedOutput = testCase.output.trim();
            
            // If outputPattern is provided, use flexible matching
            if (testCase.outputPattern) {
              const pattern = new RegExp(testCase.outputPattern, 'i');
              if (!pattern.test(actualOutput)) {
                testPassed = false;
                testErrors.push(`Output doesn't match pattern: ${testCase.outputPattern}`);
              }
            } else {
              // Otherwise, check if output contains expected text (flexible)
              if (!actualOutput.includes(expectedOutput) && expectedOutput !== '') {
                testPassed = false;
                testErrors.push(`Expected output to contain: "${expectedOutput}"`);
              }
            }
          }

          if (!testPassed) {
            allPassed = false;
            failedTests.push(testErrors.join('; '));
          }
        }

        if (allPassed) {
          setExecutionResult({
            success: true,
            message: "All test cases passed! ✅",
          });
        } else {
          setExecutionResult({
            success: false,
            message: `Some test cases failed. ${failedTests.join("; ")}`,
          });
        }
      } else if (data.run && !data.run.stderr) {
        setExecutionResult({
          success: true,
          message: "Code executed successfully!",
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: ${errorMessage}\n\nPlease check your code and try again.`);
      setExecutionResult({
        success: false,
        message: "Execution failed. Please check your code.",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
    setExecutionResult(null);
    if (editorRef.current) {
      editorRef.current.setValue(initialCode);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "code.cpp";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full overflow-hidden border border-slate-200 shadow-lg">
      <CardHeader className="bg-slate-50 border-b border-slate-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CardTitle className="text-lg font-semibold text-slate-800">
              {title}
            </CardTitle>
            <Badge variant="secondary" className="text-xs font-mono">
              {language.toUpperCase()}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="text-xs"
            >
              <Copy className="w-3 h-3 mr-1" />
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="text-xs"
            >
              <Download className="w-3 h-3 mr-1" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="text-xs"
            >
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset
            </Button>
            {executable && (
              <Button
                size="sm"
                onClick={handleRun}
                disabled={isRunning}
                className="bg-green-600 hover:bg-green-700 text-white text-xs"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 mr-1" />
                    Run Code
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="w-full rounded-none border-b">
            <TabsTrigger value="editor" className="flex-1">
              Editor
            </TabsTrigger>
            {executable && (
              <TabsTrigger value="output" className="flex-1">
                Output
                {executionResult && (
                  <span className="ml-2">
                    {executionResult.success ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                  </span>
                )}
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="editor" className="m-0">
            <div className="h-96 border-b">
              <MonacoEditor
                height="100%"
                language={language}
                value={code}
                onChange={handleCodeChange}
                theme="vs-dark"
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  readOnly: false,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: "on",
                  formatOnPaste: true,
                  formatOnType: true,
                }}
              />
            </div>
          </TabsContent>

          {executable && (
            <TabsContent value="output" className="m-0">
              <div className="h-96 bg-slate-900 text-slate-100 p-4 overflow-auto">
                {output ? (
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    {output}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-500">
                    <div className="text-center">
                      <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Click &quot;Run Code&quot; to execute your program</p>
                    </div>
                  </div>
                )}
                {executionResult && (
                  <div
                    className={`mt-4 p-3 rounded ${
                      executionResult.success
                        ? "bg-green-900/30 text-green-300 border border-green-700"
                        : "bg-red-900/30 text-red-300 border border-red-700"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {executionResult.success ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                      <span className="font-medium">{executionResult.message}</span>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          )}
        </Tabs>

        {testCases.length > 0 && (
          <div className="p-4 bg-slate-50 border-t">
            <h4 className="font-medium text-slate-900 mb-2 text-sm">Test Cases:</h4>
            <div className="space-y-2">
              {testCases.map((testCase, index) => (
                <div key={index} className="bg-white p-2 rounded text-xs">
                  <div>
                    <strong>Input:</strong> {testCase.input || "None"}
                  </div>
                  <div>
                    <strong>Expected Output:</strong> {testCase.output}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
