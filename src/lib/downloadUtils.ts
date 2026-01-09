// Utility functions for generating and downloading files

export interface DownloadFile {
  name: string;
  type: string;
  content: string | Blob;
}

/**
 * Downloads a file to the user's computer
 */
export function downloadFile(file: DownloadFile) {
  const blob = file.content instanceof Blob 
    ? file.content 
    : new Blob([file.content], { type: getMimeType(file.type) });
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Gets MIME type based on file extension
 */
function getMimeType(type: string): string {
  const mimeTypes: Record<string, string> = {
    'PDF': 'application/pdf',
    'CPP': 'text/plain',
    'ZIP': 'application/zip',
    'HTML': 'text/html',
    'TXT': 'text/plain'
  };
  return mimeTypes[type.toUpperCase()] || 'application/octet-stream';
}

/**
 * Generates a C++ code template based on the template name
 */
export function generateCodeTemplate(templateName: string): string {
  const templates: Record<string, string> = {
    'Class Template Boilerplate': `#include <iostream>
#include <string>
using namespace std;

class MyClass {
private:
    // Private member variables
    string name;
    int value;

public:
    // Constructor
    MyClass(string n, int v) : name(n), value(v) {}
    
    // Destructor
    ~MyClass() {
        cout << "Object destroyed" << endl;
    }
    
    // Getter methods
    string getName() const { return name; }
    int getValue() const { return value; }
    
    // Setter methods
    void setName(string n) { name = n; }
    void setValue(int v) { value = v; }
    
    // Member function
    void display() const {
        cout << "Name: " << name << ", Value: " << value << endl;
    }
};

int main() {
    MyClass obj("Example", 42);
    obj.display();
    return 0;
}`,
    'Algorithm Templates': `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Binary Search Template
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Quick Sort Template
void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr[i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[high]);
        int pi = i + 1;
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    quickSort(arr, 0, arr.size() - 1);
    for (int x : arr) cout << x << " ";
    return 0;
}`,
    'Data Structure Templates': `#include <iostream>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

// Linked List Node
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

// Binary Tree Node
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// Stack Implementation
class MyStack {
private:
    vector<int> data;
public:
    void push(int x) { data.push_back(x); }
    void pop() { data.pop_back(); }
    int top() { return data.back(); }
    bool empty() { return data.empty(); }
};

// Queue Implementation
class MyQueue {
private:
    vector<int> data;
public:
    void enqueue(int x) { data.push_back(x); }
    void dequeue() { data.erase(data.begin()); }
    int front() { return data.front(); }
    bool empty() { return data.empty(); }
};

int main() {
    MyStack s;
    s.push(1);
    s.push(2);
    cout << s.top() << endl;
    return 0;
}`
  };
  
  return templates[templateName] || `// ${templateName}\n// Template code here\n`;
}

/**
 * Generates a PDF-like text content for cheat sheets
 */
export function generateCheatSheetContent(sheetName: string): string {
  const sheets: Record<string, string> = {
    'Basic Syntax Cheat Sheet': `C++ BASIC SYNTAX CHEAT SHEET
=====================================

VARIABLES & DATA TYPES
----------------------
int age = 25;
float height = 5.9f;
double salary = 50000.50;
char grade = 'A';
bool isStudent = true;
string name = "John";

CONTROL FLOW
------------
if (condition) { }
else if (condition) { }
else { }

for (int i = 0; i < n; i++) { }
while (condition) { }
do { } while (condition);

switch (value) {
    case 1: break;
    default: break;
}

FUNCTIONS
---------
returnType functionName(params) {
    return value;
}

void functionName() { }

CLASSES
-------
class ClassName {
private:
    int privateVar;
public:
    ClassName() { }
    ~ClassName() { }
    void method() { }
};

POINTERS & REFERENCES
---------------------
int* ptr = &variable;
int& ref = variable;
*ptr = value;

STANDARD LIBRARY
----------------
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;`,
    'STL Containers Reference': `C++ STL CONTAINERS REFERENCE
=============================

VECTOR
------
vector<int> v;
v.push_back(10);
v.pop_back();
v.size();
v.empty();
v[i];

LIST
----
list<int> l;
l.push_back(10);
l.push_front(5);
l.pop_back();
l.pop_front();

MAP
---
map<string, int> m;
m["key"] = value;
m.find("key");
m.erase("key");

SET
---
set<int> s;
s.insert(10);
s.find(10);
s.erase(10);

QUEUE
-----
queue<int> q;
q.push(10);
q.pop();
q.front();
q.empty();

STACK
-----
stack<int> s;
s.push(10);
s.pop();
s.top();
s.empty();`,
    'OOP Concepts Guide': `C++ OBJECT-ORIENTED PROGRAMMING GUIDE
=====================================

ENCAPSULATION
-------------
- Private members: Only accessible within class
- Protected members: Accessible in class and derived classes
- Public members: Accessible everywhere

INHERITANCE
-----------
class Base {
    // base class members
};

class Derived : public Base {
    // derived class members
};

POLYMORPHISM
------------
- Function Overriding: Redefine base class function
- Virtual Functions: Enable runtime polymorphism
- Abstract Classes: Classes with pure virtual functions

ABSTRACTION
-----------
- Hide implementation details
- Show only essential features
- Use abstract classes and interfaces

KEYWORDS
--------
virtual: Enable polymorphism
override: Explicitly override base function
final: Prevent further overriding
abstract: Pure virtual functions`,
    'Modern C++ Features': `MODERN C++ FEATURES (C++11/14/17/20)
====================================

AUTO KEYWORD
------------
auto x = 10;
auto name = "C++";

RANGE-BASED FOR LOOP
--------------------
for (auto& item : container) {
    // process item
}

SMART POINTERS
--------------
unique_ptr<T> ptr = make_unique<T>();
shared_ptr<T> ptr = make_shared<T>();
weak_ptr<T> ptr;

LAMBDA EXPRESSIONS
------------------
auto lambda = [](int x) { return x * 2; };
sort(v.begin(), v.end(), [](int a, int b) {
    return a < b;
});

NULLPTR
-------
int* ptr = nullptr;  // instead of NULL

INITIALIZER LISTS
-----------------
vector<int> v = {1, 2, 3, 4};
map<string, int> m = {{"a", 1}, {"b", 2}};`
  };
  
  return sheets[sheetName] || `# ${sheetName}\n\nContent here...\n`;
}

/**
 * Generates a ZIP file content (simplified - creates a text representation)
 * Note: For actual ZIP files, you'd need a library like JSZip
 */
export function generateZipContent(items: string[]): string {
  return items.join('\n\n---FILE SEPARATOR---\n\n');
}

/**
 * Downloads a cheat sheet as PDF (text-based for now)
 */
export function downloadCheatSheet(sheetName: string) {
  const content = generateCheatSheetContent(sheetName);
  downloadFile({
    name: `${sheetName.replace(/\s+/g, '_')}.txt`,
    type: 'PDF',
    content: content
  });
}

/**
 * Downloads a code template
 */
export function downloadCodeTemplate(templateName: string) {
  const content = generateCodeTemplate(templateName);
  downloadFile({
    name: `${templateName.replace(/\s+/g, '_')}.cpp`,
    type: 'CPP',
    content: content
  });
}

/**
 * Downloads course code examples as ZIP
 */
export function downloadCourseCode(courseTitle: string, lessons: any[]) {
  const codeFiles = lessons
    .filter(lesson => lesson.codeExample)
    .map((lesson, index) => `// ${lesson.title}\n${lesson.codeExample}\n`);
  
  const content = codeFiles.join('\n\n// ============================================\n\n');
  downloadFile({
    name: `${courseTitle.replace(/\s+/g, '_')}_Code_Examples.txt`,
    type: 'ZIP',
    content: content
  });
}

/**
 * Downloads project starter code
 */
export function downloadProjectStarterCode(projectTitle: string, starterCode?: string) {
  // Escape quotes in project title for C++ string literal
  const escapedTitle = projectTitle.replace(/"/g, '\\"');
  const code = starterCode || `// ${projectTitle} Starter Code
#include <iostream>
using namespace std;

int main() {
    // Your code here
    cout << "Hello, ${escapedTitle}!" << endl;
    return 0;
}`;
  
  downloadFile({
    name: `${projectTitle.replace(/\s+/g, '_')}_starter.cpp`,
    type: 'CPP',
    content: code
  });
}
