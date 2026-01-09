"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { codeExamples } from "@/lib/courseData";
import { downloadCheatSheet, downloadCodeTemplate, generateCodeTemplate, generateZipContent, downloadFile } from "@/lib/downloadUtils";

export default function ResourcesPage() {
  const resources = [
    {
      id: 'cheat-sheets',
      title: 'C++ Cheat Sheets',
      description: 'Quick reference guides for C++ syntax and concepts',
      items: [
        { name: 'Basic Syntax Cheat Sheet', type: 'PDF', size: '2.1 MB' },
        { name: 'STL Containers Reference', type: 'PDF', size: '1.8 MB' },
        { name: 'OOP Concepts Guide', type: 'PDF', size: '3.2 MB' },
        { name: 'Modern C++ Features', type: 'PDF', size: '2.7 MB' }
      ]
    },
    {
      id: 'code-templates',
      title: 'Code Templates',
      description: 'Ready-to-use code templates for common patterns',
      items: [
        { name: 'Class Template Boilerplate', type: 'CPP', size: '1.2 KB' },
        { name: 'Algorithm Templates', type: 'CPP', size: '3.4 KB' },
        { name: 'Data Structure Templates', type: 'CPP', size: '5.1 KB' },
        { name: 'Design Pattern Examples', type: 'ZIP', size: '12.3 KB' }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation & Guides',
      description: 'Comprehensive guides and documentation',
      items: [
        { name: 'Complete C++ Reference', type: 'HTML', size: 'Online' },
        { name: 'Best Practices Guide', type: 'PDF', size: '4.5 MB' },
        { name: 'Debugging Techniques', type: 'PDF', size: '2.9 MB' },
        { name: 'Performance Optimization', type: 'PDF', size: '3.8 MB' }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      description: 'Recommended tools and IDE configurations',
      items: [
        { name: 'VS Code C++ Setup Guide', type: 'PDF', size: '1.5 MB' },
        { name: 'GCC Compiler Guide', type: 'PDF', size: '2.2 MB' },
        { name: 'CMake Tutorial', type: 'PDF', size: '3.1 MB' },
        { name: 'Debugging with GDB', type: 'PDF', size: '2.8 MB' }
      ]
    }
  ];

  const quickReference = {
    dataTypes: `// Fundamental Data Types
int age = 25;                    // Integer
float height = 5.9f;             // Single precision float
double salary = 50000.50;        // Double precision float
char grade = 'A';                // Single character
bool isStudent = true;           // Boolean
string name = "John";            // String (requires #include <string>)

// Type modifiers
unsigned int count = 100;        // Only positive values
long long bigNumber = 1234567890LL;
const int MAX_SIZE = 100;        // Constant`,

    controlFlow: `// If-else statements
if (score >= 90) {
    cout << "Grade A";
} else if (score >= 80) {
    cout << "Grade B";
} else {
    cout << "Grade C";
}

// For loop
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}

// While loop
int count = 0;
while (count < 5) {
    cout << count << endl;
    count++;
}

// Switch statement
switch (choice) {
    case 1:
        cout << "Option 1";
        break;
    case 2:
        cout << "Option 2";
        break;
    default:
        cout << "Invalid option";
}`,

    functions: `// Function declaration and definition
int add(int a, int b) {
    return a + b;
}

// Function with default parameters
void greet(string name = "World") {
    cout << "Hello, " << name << "!" << endl;
}

// Function overloading
int multiply(int a, int b) {
    return a * b;
}

double multiply(double a, double b) {
    return a * b;
}

// Pass by reference
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}`,

    classes: `// Class definition
class Student {
private:
    string name;
    int age;
    float gpa;

public:
    // Constructor
    Student(string n, int a, float g) : name(n), age(a), gpa(g) {}
    
    // Destructor
    ~Student() {
        cout << "Student object destroyed" << endl;
    }
    
    // Getter methods
    string getName() const { return name; }
    int getAge() const { return age; }
    float getGPA() const { return gpa; }
    
    // Setter methods
    void setGPA(float newGPA) {
        if (newGPA >= 0.0 && newGPA <= 4.0) {
            gpa = newGPA;
        }
    }
    
    // Member function
    void displayInfo() const {
        cout << "Name: " << name << ", Age: " << age << ", GPA: " << gpa << endl;
    }
};`
  };

  const getFileTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'bg-red-100 text-red-800';
      case 'cpp':
        return 'bg-blue-100 text-blue-800';
      case 'zip':
        return 'bg-purple-100 text-purple-800';
      case 'html':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            C++ Learning Resources
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive collection of cheat sheets, code examples, documentation, 
            and tools to accelerate your C++ learning journey.
          </p>
        </div>

        <Tabs defaultValue="downloads" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
            <TabsTrigger value="reference">Quick Reference</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="downloads" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-slate-900">{item.name}</div>
                              <div className="text-sm text-slate-500">{item.size}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getFileTypeColor(item.type)}>
                              {item.type}
                            </Badge>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                if (item.type === 'PDF') {
                                  downloadCheatSheet(item.name);
                                } else if (item.type === 'CPP' || item.type === 'ZIP') {
                                  if (item.name.includes('Template') || item.name.includes('Boilerplate')) {
                                    downloadCodeTemplate(item.name);
                                  } else {
                                    downloadFile({
                                      name: `${item.name.replace(/\s+/g, '_')}.${item.type.toLowerCase()}`,
                                      type: item.type,
                                      content: `// ${item.name}\n// Generated content for ${item.name}\n`
                                    });
                                  }
                                } else {
                                  downloadFile({
                                    name: `${item.name.replace(/\s+/g, '_')}.${item.type.toLowerCase()}`,
                                    type: item.type,
                                    content: `Content for ${item.name}`
                                  });
                                }
                              }}
                            >
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Resources */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Featured Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">Complete C++ Course</CardTitle>
                    <CardDescription>Comprehensive PDF guide covering all topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-blue-800">
                      <div>• 200+ pages of content</div>
                      <div>• Beginner to advanced topics</div>
                      <div>• Code examples included</div>
                      <div>• Regular updates</div>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      onClick={() => downloadCheatSheet('Complete C++ Course Guide')}
                    >
                      Download (15.2 MB)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">Project Templates</CardTitle>
                    <CardDescription>Ready-to-use project structures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-green-800">
                      <div>• Console applications</div>
                      <div>• GUI applications</div>
                      <div>• Game development</div>
                      <div>• CMake configurations</div>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        const templates = [
                          'Class Template Boilerplate',
                          'Algorithm Templates',
                          'Data Structure Templates',
                          'Design Pattern Examples'
                        ];
                        const content = generateZipContent(templates.map(t => generateCodeTemplate(t)));
                        downloadFile({
                          name: 'Project_Templates.zip',
                          type: 'ZIP',
                          content: content
                        });
                      }}
                    >
                      Download (8.7 MB)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900">Interview Prep</CardTitle>
                    <CardDescription>C++ interview questions and solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-purple-800">
                      <div>• 100+ interview questions</div>
                      <div>• Detailed explanations</div>
                      <div>• Coding challenges</div>
                      <div>• Company-specific tips</div>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
                      onClick={() => downloadCheatSheet('C++ Interview Prep Guide')}
                    >
                      Download (6.3 MB)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reference" className="mt-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Data Types & Variables</CardTitle>
                  <CardDescription>Fundamental data types and variable declarations</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={quickReference.dataTypes}
                    title="Data Types Reference"
                    description="Common data types and their usage in C++"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Control Flow Statements</CardTitle>
                  <CardDescription>Conditional statements and loops</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={quickReference.controlFlow}
                    title="Control Flow Reference"
                    description="If-else, loops, and switch statements"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Functions</CardTitle>
                  <CardDescription>Function declaration, definition, and advanced features</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={quickReference.functions}
                    title="Functions Reference"
                    description="Function syntax, overloading, and parameter passing"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Classes & Objects</CardTitle>
                  <CardDescription>Object-oriented programming fundamentals</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={quickReference.classes}
                    title="Classes Reference"
                    description="Class definition, constructors, destructors, and member functions"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="mt-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Hello World Program</CardTitle>
                  <CardDescription>Your first C++ program</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={codeExamples.helloWorld}
                    title="Hello World"
                    description="Basic program structure and output"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Variables and Data Types</CardTitle>
                  <CardDescription>Working with different data types</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={codeExamples.variables}
                    title="Variables Example"
                    description="Declaring and using variables of different types"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Functions Example</CardTitle>
                  <CardDescription>Creating and using functions</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={codeExamples.functions}
                    title="Functions Example"
                    description="Function definition, recursion, and practical examples"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Classes and Objects</CardTitle>
                  <CardDescription>Object-oriented programming example</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock 
                    code={codeExamples.classes}
                    title="Bank Account Class"
                    description="Complete class example with encapsulation and methods"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Additional Resources */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                External Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">cppreference.com</CardTitle>
                    <CardDescription>Comprehensive C++ reference</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      Complete reference for C++ standard library, language features, and examples.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://cppreference.com', '_blank')}
                    >
                      Visit Site
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">C++ Core Guidelines</CardTitle>
                    <CardDescription>Best practices and guidelines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      Official guidelines for writing modern, safe, and efficient C++ code.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines', '_blank')}
                    >
                      Visit Site
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Compiler Explorer</CardTitle>
                    <CardDescription>Online C++ compiler and analyzer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      Compile and analyze C++ code online with multiple compilers and optimization levels.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://godbolt.org', '_blank')}
                    >
                      Visit Site
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}