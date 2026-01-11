export interface PracticeExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  solution: string;
  testCases: { 
    input: string; 
    output?: string; 
    requiredConstructs?: string[]; // e.g., ['cout', 'cin', 'if', 'for', 'function']
    outputPattern?: string; // Pattern to match in output (flexible matching)
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  features: string[];
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  technologies: string[];
  starterCode?: string;
}

export interface ExpandedLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  content: string;
  codeExample?: string;
  practiceExercises: PracticeExercise[];
  project?: Project;
  completed: boolean;
}

export interface ExpandedCourse {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: ExpandedLesson[];
  prerequisites: string[];
  learningOutcomes: string[];
  image: string;
  finalProject: Project;
}

export const expandedCourses: ExpandedCourse[] = [
  {
    id: 'beginner-cpp',
    title: 'C++ Fundamentals',
    description: 'Master the basics of C++ programming from variables to functions',
    level: 'beginner',
    duration: '6-8 weeks',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop',
    prerequisites: ['Basic computer literacy'],
    learningOutcomes: [
      'Understand C++ syntax and structure',
      'Work with variables and data types',
      'Implement control flow statements',
      'Create and use functions',
      'Handle basic input/output operations',
      'Build simple console applications'
    ],
    lessons: [
      {
        id: 'intro-cpp',
        title: 'Introduction to C++',
        description: 'Learn about C++ history, features, and development environment setup',
        duration: '45 min',
        difficulty: 'beginner',
        topics: ['History', 'Features', 'Setup', 'First Program'],
        content: `# Introduction to C++

## What is C++?
C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It's known for its performance, flexibility, and wide range of applications.

## Key Features:
- **Object-Oriented Programming**: Supports classes, objects, inheritance, and polymorphism
- **Low-Level Control**: Direct memory management and hardware access
- **High Performance**: Compiled language with minimal runtime overhead
- **Standard Library**: Rich set of built-in functions and data structures
- **Platform Independent**: Code can run on multiple operating systems

## Applications:
- System/OS development
- Game development
- Embedded systems
- High-performance applications
- Desktop applications

## Development Environment Setup:
1. **Compiler**: GCC, Clang, or Visual Studio
2. **IDE**: Visual Studio Code, Code::Blocks, or CLion
3. **Build Tools**: Make, CMake, or IDE built-in tools

## Your First Program:
Every C++ program starts with the main() function. The #include directive tells the preprocessor to include the contents of another file.`,
        codeExample: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++ World!" << endl;
    return 0;
}`,
        practiceExercises: [
          {
            id: 'hello-world-practice',
            title: 'Your First C++ Program',
            description: 'Write a program that displays your name and favorite programming language',
            difficulty: 'easy',
            hints: [
              'Use cout to display text',
              'Remember to include <iostream>',
              'Use endl or \\n for new lines'
            ],
            solution: `#include <iostream>
using namespace std;

int main() {
    cout << "My name is John Doe" << endl;
    cout << "My favorite language is C++" << endl;
    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['cout'],
                outputPattern: '.*' // Any output is acceptable as long as cout is used
              }
            ]
          },
          {
            id: 'multiple-outputs',
            title: 'Multiple Output Statements',
            description: 'Create a program that displays information about yourself using multiple cout statements',
            difficulty: 'easy',
            hints: [
              'Use multiple cout statements',
              'Try different ways to format output',
              'Experiment with spaces and new lines'
            ],
            solution: `#include <iostream>
using namespace std;

int main() {
    cout << "Name: Alice Johnson" << endl;
    cout << "Age: 22" << endl;
    cout << "Major: Computer Science" << endl;
    cout << "University: Tech University" << endl;
    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['cout'],
                outputPattern: '.*' // Any output is acceptable as long as cout is used
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'variables-datatypes',
        title: 'Variables and Data Types',
        description: 'Understanding different data types and variable declarations',
        duration: '60 min',
        difficulty: 'beginner',
        topics: ['int', 'float', 'char', 'string', 'bool', 'Variable Declaration', 'Initialization'],
        content: `# Variables and Data Types

## What are Variables?
Variables are containers that store data values. In C++, every variable has a specific type that determines what kind of data it can hold.

## Fundamental Data Types:

### Integer Types:
- **int**: Whole numbers (-2,147,483,648 to 2,147,483,647)
- **short**: Smaller integers (-32,768 to 32,767)
- **long**: Larger integers
- **unsigned**: Only positive numbers

### Floating-Point Types:
- **float**: Single precision (7 decimal digits)
- **double**: Double precision (15 decimal digits)

### Character Types:
- **char**: Single character ('A', 'x', '5')
- **string**: Sequence of characters ("Hello World")

### Boolean Type:
- **bool**: true or false values

## Variable Declaration and Initialization:
\`\`\`cpp
int age = 25;                    // Declaration with initialization
float height;                   // Declaration only
height = 5.9;                   // Assignment later
\`\`\`

## Naming Rules:
- Must start with letter or underscore
- Can contain letters, digits, underscores
- Case sensitive
- Cannot use C++ keywords`,
        codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Integer variables
    int age = 25;
    int score = 95;
    
    // Floating-point variables
    float height = 5.9f;
    double salary = 50000.50;
    
    // Character variables
    char grade = 'A';
    string name = "John Doe";
    
    // Boolean variable
    bool isStudent = true;
    
    // Display all variables
    cout << "Employee Information:" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Height: " << height << " feet" << endl;
    cout << "Salary: $" << salary << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Student: " << (isStudent ? "Yes" : "No") << endl;
    
    return 0;
}`,
        practiceExercises: [
          {
            id: 'variable-practice',
            title: 'Personal Information Program',
            description: 'Create variables to store and display your personal information',
            difficulty: 'easy',
            hints: [
              'Use appropriate data types for each piece of information',
              'Initialize variables when declaring them',
              'Use descriptive variable names'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "Alice";
    string lastName = "Smith";
    int age = 20;
    float gpa = 3.85f;
    char letterGrade = 'A';
    bool isEnrolled = true;
    
    cout << "Student Information:" << endl;
    cout << "Name: " << firstName << " " << lastName << endl;
    cout << "Age: " << age << endl;
    cout << "GPA: " << gpa << endl;
    cout << "Letter Grade: " << letterGrade << endl;
    cout << "Enrolled: " << (isEnrolled ? "Yes" : "No") << endl;
    
    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['cout'],
                outputPattern: '.*' // Should use cout to display student information
              }
            ]
          },
          {
            id: 'calculator-variables',
            title: 'Simple Calculator Variables',
            description: 'Create variables for two numbers and perform basic arithmetic',
            difficulty: 'medium',
            hints: [
              'Use appropriate numeric data types',
              'Perform multiple operations',
              'Display results clearly'
            ],
            solution: `#include <iostream>
using namespace std;

int main() {
    double num1 = 15.5;
    double num2 = 4.2;
    
    cout << "Number 1: " << num1 << endl;
    cout << "Number 2: " << num2 << endl;
    cout << "Addition: " << (num1 + num2) << endl;
    cout << "Subtraction: " << (num1 - num2) << endl;
    cout << "Multiplication: " << (num1 * num2) << endl;
    cout << "Division: " << (num1 / num2) << endl;
    
    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['cout'],
                outputPattern: '.*' // Should use cout to display arithmetic operations
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'input-output',
        title: 'Input and Output Operations',
        description: 'Learn how to get user input and display formatted output',
        duration: '50 min',
        difficulty: 'beginner',
        topics: ['cin', 'cout', 'getline', 'Input Validation', 'Formatting'],
        content: `# Input and Output Operations

## Output with cout
The cout object is used to display output to the console. It's part of the iostream library.

### Basic Output:
\`\`\`cpp
cout << "Hello World";
cout << variable_name;
cout << "Value: " << number << endl;
\`\`\`

## Input with cin
The cin object is used to read input from the user.

### Basic Input:
\`\`\`cpp
int age;
cout << "Enter your age: ";
cin >> age;
\`\`\`

### Multiple Inputs:
\`\`\`cpp
int x, y;
cin >> x >> y;  // Reads two integers
\`\`\`

## String Input with getline
For strings with spaces, use getline():

\`\`\`cpp
string fullName;
cout << "Enter your full name: ";
getline(cin, fullName);
\`\`\`

## Input Validation
Always validate user input to prevent errors:

\`\`\`cpp
if (cin.fail()) {
    cout << "Invalid input!" << endl;
    cin.clear();
    cin.ignore();
}
\`\`\`

## Formatting Output
- **endl**: New line and flush buffer
- **\\n**: New line only
- **\\t**: Tab character
- **setw()**: Set field width (requires <iomanip>)`,
        codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    float height;
    char grade;
    
    // Get user input
    cout << "Enter your name: ";
    getline(cin, name);
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your height (in feet): ";
    cin >> height;
    
    cout << "Enter your grade: ";
    cin >> grade;
    
    // Display formatted output
    cout << "\\n--- User Information ---" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << " years old" << endl;
    cout << "Height: " << height << " feet" << endl;
    cout << "Grade: " << grade << endl;
    
    return 0;
}`,
        practiceExercises: [
          {
            id: 'user-input-practice',
            title: 'Interactive User Profile',
            description: 'Create a program that asks for user information and displays it nicely',
            difficulty: 'easy',
            hints: [
              'Use getline for strings with spaces',
              'Use cin for single values',
              'Format output nicely'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName, lastName, city;
    int age;
    float salary;
    
    cout << "=== User Profile Creator ===" << endl;
    cout << "Enter your first name: ";
    cin >> firstName;
    
    cout << "Enter your last name: ";
    cin >> lastName;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your salary: ";
    cin >> salary;
    
    cin.ignore(); // Clear buffer
    cout << "Enter your city: ";
    getline(cin, city);
    
    cout << "\\n=== Your Profile ===" << endl;
    cout << "Full Name: " << firstName << " " << lastName << endl;
    cout << "Age: " << age << endl;
    cout << "Salary: $" << salary << endl;
    cout << "City: " << city << endl;
    
    return 0;
}`,
            testCases: [
              { 
                input: 'John\nDoe\n25\n50000\nNew York', 
                requiredConstructs: ['cin', 'cout'],
                outputPattern: '.*' // Should use cin for input and cout for output
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'operators',
        title: 'Operators in C++',
        description: 'Learn arithmetic, comparison, and logical operators',
        duration: '55 min',
        difficulty: 'beginner',
        topics: ['Arithmetic', 'Comparison', 'Logical', 'Assignment', 'Increment/Decrement'],
        content: `# Operators in C++

## Arithmetic Operators
Used to perform mathematical operations:

- **+** : Addition
- **-** : Subtraction
- ***** : Multiplication
- **/** : Division
- **%** : Modulus (remainder)

## Comparison Operators
Used to compare values:

- **==** : Equal to
- **!=** : Not equal to
- **>** : Greater than
- **<** : Less than
- **>=** : Greater than or equal to
- **<=** : Less than or equal to

## Logical Operators
Used to combine conditions:

- **&&** : AND (both conditions must be true)
- **||** : OR (at least one condition must be true)
- **!** : NOT (reverses the condition)

## Assignment Operators
Used to assign values:

- **=** : Simple assignment
- **+=** : Add and assign
- **-=** : Subtract and assign
- ***=** : Multiply and assign
- **/=** : Divide and assign

## Increment/Decrement Operators
- **++** : Increment by 1
- **--** : Decrement by 1
- **Pre-increment**: ++x (increment first, then use)
- **Post-increment**: x++ (use first, then increment)`,
        codeExample: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    cout << "=== Arithmetic Operators ===" << endl;
    cout << "a = " << a << ", b = " << b << endl;
    cout << "a + b = " << (a + b) << endl;
    cout << "a - b = " << (a - b) << endl;
    cout << "a * b = " << (a * b) << endl;
    cout << "a / b = " << (a / b) << endl;
    cout << "a % b = " << (a % b) << endl;
    
    cout << "\\n=== Comparison Operators ===" << endl;
    cout << "a > b: " << (a > b) << endl;
    cout << "a < b: " << (a < b) << endl;
    cout << "a == b: " << (a == b) << endl;
    cout << "a != b: " << (a != b) << endl;
    
    cout << "\\n=== Logical Operators ===" << endl;
    bool x = true, y = false;
    cout << "x && y: " << (x && y) << endl;
    cout << "x || y: " << (x || y) << endl;
    cout << "!x: " << (!x) << endl;
    
    cout << "\\n=== Increment/Decrement ===" << endl;
    int count = 5;
    cout << "Original count: " << count << endl;
    cout << "Pre-increment: " << (++count) << endl;
    cout << "Post-increment: " << (count++) << endl;
    cout << "Final count: " << count << endl;
    
    return 0;
}`,
        practiceExercises: [
          {
            id: 'calculator-operators',
            title: 'Advanced Calculator',
            description: 'Build a calculator that performs various operations and comparisons',
            difficulty: 'medium',
            hints: [
              'Use all types of operators',
              'Include comparison results',
              'Show increment/decrement examples'
            ],
            solution: `#include <iostream>
using namespace std;

int main() {
    double num1, num2;
    
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    
    cout << "\\n=== Arithmetic Results ===" << endl;
    cout << num1 << " + " << num2 << " = " << (num1 + num2) << endl;
    cout << num1 << " - " << num2 << " = " << (num1 - num2) << endl;
    cout << num1 << " * " << num2 << " = " << (num1 * num2) << endl;
    
    if (num2 != 0) {
        cout << num1 << " / " << num2 << " = " << (num1 / num2) << endl;
    } else {
        cout << "Cannot divide by zero!" << endl;
    }
    
    cout << "\\n=== Comparisons ===" << endl;
    cout << num1 << " > " << num2 << ": " << (num1 > num2) << endl;
    cout << num1 << " < " << num2 << ": " << (num1 < num2) << endl;
    cout << num1 << " == " << num2 << ": " << (num1 == num2) << endl;
    
    return 0;
}`,
            testCases: [
              { 
                input: '10 5', 
                requiredConstructs: ['cin', 'cout'],
                outputPattern: '.*' // Should use operators and display results
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'control-flow',
        title: 'Control Flow Statements',
        description: 'Master if-else statements, loops, and switch cases',
        duration: '75 min',
        difficulty: 'beginner',
        topics: ['if-else', 'for loops', 'while loops', 'do-while', 'switch', 'break', 'continue'],
        content: `# Control Flow Statements

## Conditional Statements

### if-else Statement
Controls program flow based on conditions:

\`\`\`cpp
if (condition) {
    // Execute if condition is true
} else if (another_condition) {
    // Execute if another_condition is true
} else {
    // Execute if all conditions are false
}
\`\`\`

### switch Statement
Efficient for multiple conditions on the same variable:

\`\`\`cpp
switch (variable) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Default code
        break;
}
\`\`\`

## Loop Statements

### for Loop
Best when you know the number of iterations:

\`\`\`cpp
for (initialization; condition; increment) {
    // Loop body
}
\`\`\`

### while Loop
Continues while condition is true:

\`\`\`cpp
while (condition) {
    // Loop body
    // Don't forget to update condition!
}
\`\`\`

### do-while Loop
Executes at least once, then checks condition:

\`\`\`cpp
do {
    // Loop body
} while (condition);
\`\`\`

## Loop Control
- **break**: Exit the loop immediately
- **continue**: Skip current iteration, go to next`,
        codeExample: `#include <iostream>
using namespace std;

int main() {
    // if-else example
    int score;
    cout << "Enter your test score (0-100): ";
    cin >> score;
    
    if (score >= 90) {
        cout << "Grade: A (Excellent!)" << endl;
    } else if (score >= 80) {
        cout << "Grade: B (Good job!)" << endl;
    } else if (score >= 70) {
        cout << "Grade: C (Average)" << endl;
    } else if (score >= 60) {
        cout << "Grade: D (Below average)" << endl;
    } else {
        cout << "Grade: F (Need improvement)" << endl;
    }
    
    // for loop example
    cout << "\\nCountdown: ";
    for (int i = 5; i >= 1; i--) {
        cout << i << " ";
    }
    cout << "Go!" << endl;
    
    // while loop example
    cout << "\\nNumbers 1-5: ";
    int num = 1;
    while (num <= 5) {
        cout << num << " ";
        num++;
    }
    cout << endl;
    
    // switch example
    int choice;
    cout << "\\nChoose an option (1-3): ";
    cin >> choice;
    
    switch (choice) {
        case 1:
            cout << "You chose Option 1" << endl;
            break;
        case 2:
            cout << "You chose Option 2" << endl;
            break;
        case 3:
            cout << "You chose Option 3" << endl;
            break;
        default:
            cout << "Invalid choice!" << endl;
            break;
    }
    
    return 0;
}`,
        practiceExercises: [
          {
            id: 'grade-calculator',
            title: 'Student Grade Calculator',
            description: 'Create a program that calculates letter grades and GPA',
            difficulty: 'medium',
            hints: [
              'Use if-else for grade ranges',
              'Consider edge cases',
              'Add input validation'
            ],
            solution: `#include <iostream>
using namespace std;

int main() {
    int numSubjects;
    cout << "Enter number of subjects: ";
    cin >> numSubjects;
    
    if (numSubjects <= 0) {
        cout << "Invalid number of subjects!" << endl;
        return 1;
    }
    
    double totalMarks = 0;
    
    for (int i = 1; i <= numSubjects; i++) {
        double marks;
        cout << "Enter marks for subject " << i << ": ";
        cin >> marks;
        
        if (marks < 0 || marks > 100) {
            cout << "Invalid marks! Please enter 0-100." << endl;
            i--; // Repeat this iteration
            continue;
        }
        
        totalMarks += marks;
    }
    
    double average = totalMarks / numSubjects;
    char grade;
    
    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';
    
    cout << "\\n=== Results ===" << endl;
    cout << "Total Marks: " << totalMarks << endl;
    cout << "Average: " << average << "%" << endl;
    cout << "Grade: " << grade << endl;
    
    return 0;
}`,
            testCases: [
              { 
                input: '3\n85\n92\n78', 
                requiredConstructs: ['cin', 'cout', 'if', 'for'],
                outputPattern: '.*' // Should use loops and conditionals for grade calculation
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'functions',
        title: 'Functions in C++',
        description: 'Create reusable code with functions and understand scope',
        duration: '65 min',
        difficulty: 'beginner',
        topics: ['Function Declaration', 'Parameters', 'Return Values', 'Scope', 'Overloading'],
        content: `# Functions in C++

## What are Functions?
Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.

## Function Structure:
\`\`\`cpp
return_type function_name(parameter_list) {
    // Function body
    return value; // if return_type is not void
}
\`\`\`

## Function Declaration vs Definition
- **Declaration**: Tells compiler about function (prototype)
- **Definition**: Contains the actual code

\`\`\`cpp
// Declaration (prototype)
int add(int a, int b);

// Definition
int add(int a, int b) {
    return a + b;
}
\`\`\`

## Types of Functions:

### 1. Functions with Return Value:
\`\`\`cpp
int multiply(int x, int y) {
    return x * y;
}
\`\`\`

### 2. Void Functions (no return):
\`\`\`cpp
void greetUser(string name) {
    cout << "Hello, " << name << "!" << endl;
}
\`\`\`

### 3. Functions with Default Parameters:
\`\`\`cpp
void displayInfo(string name, int age = 18) {
    cout << name << " is " << age << " years old" << endl;
}
\`\`\`

## Variable Scope:
- **Local Variables**: Declared inside functions
- **Global Variables**: Declared outside all functions
- **Function Parameters**: Local to the function

## Function Overloading:
Multiple functions with same name but different parameters:

\`\`\`cpp
int add(int a, int b);
double add(double a, double b);
int add(int a, int b, int c);
\`\`\``,
        codeExample: `#include <iostream>
#include <string>
using namespace std;

// Function declarations
int add(int a, int b);
double calculateArea(double radius);
void greetUser(string name);
bool isPrime(int number);
void displayMenu();

int main() {
    displayMenu();
    
    int choice;
    cout << "Enter your choice: ";
    cin >> choice;
    
    switch (choice) {
        case 1: {
            int x, y;
            cout << "Enter two numbers: ";
            cin >> x >> y;
            cout << "Sum: " << add(x, y) << endl;
            break;
        }
        case 2: {
            double radius;
            cout << "Enter radius: ";
            cin >> radius;
            cout << "Area: " << calculateArea(radius) << endl;
            break;
        }
        case 3: {
            string name;
            cout << "Enter your name: ";
            cin >> name;
            greetUser(name);
            break;
        }
        case 4: {
            int num;
            cout << "Enter a number: ";
            cin >> num;
            if (isPrime(num)) {
                cout << num << " is prime!" << endl;
            } else {
                cout << num << " is not prime." << endl;
            }
            break;
        }
        default:
            cout << "Invalid choice!" << endl;
    }
    
    return 0;
}

// Function definitions
int add(int a, int b) {
    return a + b;
}

double calculateArea(double radius) {
    const double PI = 3.14159;
    return PI * radius * radius;
}

void greetUser(string name) {
    cout << "Hello, " << name << "! Welcome to C++ programming!" << endl;
}

bool isPrime(int number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 == 0 || number % 3 == 0) return false;
    
    for (int i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

void displayMenu() {
    cout << "=== Function Demo Menu ===" << endl;
    cout << "1. Add two numbers" << endl;
    cout << "2. Calculate circle area" << endl;
    cout << "3. Greet user" << endl;
    cout << "4. Check if number is prime" << endl;
}`,
        practiceExercises: [
          {
            id: 'function-library',
            title: 'Math Function Library',
            description: 'Create a library of mathematical functions',
            difficulty: 'medium',
            hints: [
              'Create separate functions for each operation',
              'Use appropriate return types',
              'Add input validation'
            ],
            solution: `#include <iostream>
#include <cmath>
using namespace std;

// Function declarations
double power(double base, int exponent);
double factorial(int n);
bool isEven(int number);
double average(double a, double b, double c);
int gcd(int a, int b);

int main() {
    cout << "=== Math Library Demo ===" << endl;
    
    cout << "Power: 2^5 = " << power(2, 5) << endl;
    cout << "Factorial: 5! = " << factorial(5) << endl;
    cout << "Is 8 even? " << (isEven(8) ? "Yes" : "No") << endl;
    cout << "Average of 10, 20, 30: " << average(10, 20, 30) << endl;
    cout << "GCD of 48 and 18: " << gcd(48, 18) << endl;
    
    return 0;
}

double power(double base, int exponent) {
    return pow(base, exponent);
}

double factorial(int n) {
    if (n <= 1) return 1;
    double result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

bool isEven(int number) {
    return number % 2 == 0;
}

double average(double a, double b, double c) {
    return (a + b + c) / 3.0;
}

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['function', 'cout'],
                outputPattern: '.*' // Should define and use functions
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'arrays-basics',
        title: 'Introduction to Arrays',
        description: 'Learn to work with arrays and collections of data',
        duration: '70 min',
        difficulty: 'beginner',
        topics: ['Array Declaration', 'Initialization', 'Accessing Elements', 'Array Loops', 'Multi-dimensional Arrays'],
        content: `# Introduction to Arrays

## What are Arrays?
Arrays are collections of elements of the same data type stored in contiguous memory locations.

## Array Declaration and Initialization:

### Declaration:
\`\`\`cpp
int numbers[5];           // Array of 5 integers
double prices[10];        // Array of 10 doubles
char letters[26];         // Array of 26 characters
\`\`\`

### Initialization:
\`\`\`cpp
int scores[5] = {85, 92, 78, 96, 88};
int values[] = {1, 2, 3, 4, 5};  // Size determined automatically
int data[5] = {0};               // All elements initialized to 0
\`\`\`

## Accessing Array Elements:
Arrays use zero-based indexing:

\`\`\`cpp
int arr[5] = {10, 20, 30, 40, 50};
cout << arr[0];  // Prints 10 (first element)
cout << arr[4];  // Prints 50 (last element)
arr[2] = 35;     // Changes third element to 35
\`\`\`

## Array Operations:

### Finding Array Size:
\`\`\`cpp
int arr[5];
int size = sizeof(arr) / sizeof(arr[0]);
\`\`\`

### Looping Through Arrays:
\`\`\`cpp
// Using for loop
for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
}

// Using range-based for loop (C++11)
for (int element : arr) {
    cout << element << " ";
}
\`\`\`

## Multi-dimensional Arrays:
\`\`\`cpp
int matrix[3][4];  // 3 rows, 4 columns
int table[2][3] = {{1, 2, 3}, {4, 5, 6}};
\`\`\`

## Common Array Operations:
- Finding maximum/minimum
- Calculating sum/average
- Searching for elements
- Sorting elements`,
        codeExample: `#include <iostream>
using namespace std;

int main() {
    // Array declaration and initialization
    int scores[5] = {85, 92, 78, 96, 88};
    int size = sizeof(scores) / sizeof(scores[0]);
    
    cout << "=== Student Scores ===" << endl;
    
    // Display all scores
    cout << "Scores: ";
    for (int i = 0; i < size; i++) {
        cout << scores[i] << " ";
    }
    cout << endl;
    
    // Calculate sum and average
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += scores[i];
    }
    double average = (double)sum / size;
    
    cout << "Sum: " << sum << endl;
    cout << "Average: " << average << endl;
    
    // Find maximum and minimum
    int maxScore = scores[0];
    int minScore = scores[0];
    
    for (int i = 1; i < size; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
        }
    }
    
    cout << "Highest Score: " << maxScore << endl;
    cout << "Lowest Score: " << minScore << endl;
    
    // Count scores above average
    int aboveAverage = 0;
    for (int i = 0; i < size; i++) {
        if (scores[i] > average) {
            aboveAverage++;
        }
    }
    
    cout << "Scores above average: " << aboveAverage << endl;
    
    // 2D array example
    cout << "\\n=== Grade Matrix ===" << endl;
    int grades[3][4] = {
        {85, 90, 78, 92},
        {88, 76, 95, 89},
        {91, 83, 87, 94}
    };
    
    for (int i = 0; i < 3; i++) {
        cout << "Student " << (i + 1) << ": ";
        for (int j = 0; j < 4; j++) {
            cout << grades[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
        practiceExercises: [
          {
            id: 'array-operations',
            title: 'Array Statistics Calculator',
            description: 'Create a program that performs various statistical operations on an array',
            difficulty: 'medium',
            hints: [
              'Use loops to process array elements',
              'Keep track of multiple statistics',
              'Consider edge cases like empty arrays'
            ],
            solution: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    const int SIZE = 10;
    int numbers[SIZE];
    
    cout << "Enter " << SIZE << " numbers: ";
    for (int i = 0; i < SIZE; i++) {
        cin >> numbers[i];
    }
    
    // Calculate statistics
    int sum = 0;
    int maxNum = numbers[0];
    int minNum = numbers[0];
    
    for (int i = 0; i < SIZE; i++) {
        sum += numbers[i];
        if (numbers[i] > maxNum) maxNum = numbers[i];
        if (numbers[i] < minNum) minNum = numbers[i];
    }
    
    double average = (double)sum / SIZE;
    
    // Count even and odd numbers
    int evenCount = 0, oddCount = 0;
    for (int i = 0; i < SIZE; i++) {
        if (numbers[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    // Display results
    cout << "\\n=== Statistics ===" << endl;
    cout << "Sum: " << sum << endl;
    cout << "Average: " << average << endl;
    cout << "Maximum: " << maxNum << endl;
    cout << "Minimum: " << minNum << endl;
    cout << "Even numbers: " << evenCount << endl;
    cout << "Odd numbers: " << oddCount << endl;
    
    return 0;
}`,
            testCases: [
              { 
                input: '1 2 3 4 5 6 7 8 9 10', 
                requiredConstructs: ['cin', 'cout', 'for', 'array', 'if'],
                outputPattern: '.*' // Should use arrays and loops to process input
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'pointers-basics',
        title: 'Pointers and Memory Addresses',
        description: 'Understanding memory addresses, pointer syntax, and dereferencing',
        duration: '80 min',
        difficulty: 'beginner',
        topics: ['Memory addresses', 'Pointer declaration', 'Dereferencing', 'nullptr', 'Pointer safety'],
        content: `# Pointers and Memory Addresses

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand what pointers are and why they're important
- Declare and initialize pointers correctly
- Use the address-of (&) and dereference (*) operators
- Recognize and avoid common pointer mistakes
- Apply pointers to solve real-world programming problems

## Why This Matters
Pointers are one of C++'s most powerful features, giving you direct control over computer memory. While they can seem intimidating at first, understanding pointers is essential for:
- **Dynamic memory management**: Creating data structures that can grow and shrink
- **Efficient function parameters**: Passing large objects without copying
- **Data structures**: Building linked lists, trees, and graphs
- **System programming**: Interacting with hardware and operating systems
- **Performance**: Avoiding unnecessary data copying

Think of pointers as giving you the "address" of data rather than the data itself - like knowing someone's home address versus visiting their home.

## What are Pointers?

A **pointer** is a variable that stores a memory address. Instead of holding a value like 42 or "hello", a pointer holds the location where that value is stored in memory.

### The House Address Analogy
Imagine computer memory as a street of houses:
- Each house (memory location) has an address (like "123 Main St")
- Each house contains residents (data values)
- A pointer is like writing down the house address on paper
- You can use that address to visit the house and interact with the residents

In code:
\`\`\`cpp
int age = 25;        // A house containing the value 25
int* ptr = &age;     // Paper with the house's address written on it
\`\`\`

## Pointer Syntax

### Declaration
\`\`\`cpp
int* ptr;       // Pointer to an integer
double* dptr;   // Pointer to a double
char* cptr;     // Pointer to a character
string* sptr;   // Pointer to a string
\`\`\`

**Important**: The asterisk (*) makes it a pointer. The type before the asterisk tells you what kind of data the pointer points to.

Style note: These are all equivalent:
\`\`\`cpp
int* ptr;    // Asterisk near type (recommended)
int *ptr;    // Asterisk near variable name
int * ptr;   // Asterisk in the middle
\`\`\`

## The Address-Of Operator (&)

The **&** operator gets the memory address of a variable:

\`\`\`cpp
int score = 95;
cout << "Value: " << score << endl;        // Prints: 95
cout << "Address: " << &score << endl;     // Prints: 0x7ffd5e3c9a4c (example)
\`\`\`

Think of & as "address of" - it answers "where is this stored in memory?"

### Storing Addresses in Pointers
\`\`\`cpp
int age = 25;
int* ptr = &age;  // ptr now holds the address of age

cout << "Value of age: " << age << endl;       // 25
cout << "Address of age: " << &age << endl;    // 0x7ffd... (some address)
cout << "Value of ptr: " << ptr << endl;       // 0x7ffd... (same address)
\`\`\`

Memory visualization:
\`\`\`
Memory Address  |  Variable  |  Value
----------------|------------|--------
0x7ffd5e3c9a4c  |    age     |   25
0x7ffd5e3c9a50  |    ptr     |   0x7ffd5e3c9a4c  (points to age)
\`\`\`

## The Dereference Operator (*)

The **\*** operator (when used with an existing pointer) accesses the value at the address:

\`\`\`cpp
int value = 42;
int* ptr = &value;

cout << ptr << endl;   // Prints address: 0x7ffd...
cout << *ptr << endl;  // Prints value: 42 (dereferences the pointer)
\`\`\`

Think of *ptr as "go to the address and get the value stored there."

### Modifying Through Pointers
You can change the original variable through a pointer:

\`\`\`cpp
int number = 10;
int* ptr = &number;

cout << "Before: " << number << endl;  // 10

*ptr = 20;  // Changes number through the pointer

cout << "After: " << number << endl;   // 20
\`\`\`

This is powerful! You're modifying the original variable indirectly.

## nullptr vs NULL

In modern C++ (C++11 and later), use **nullptr** for null pointers:

\`\`\`cpp
int* ptr = nullptr;  // Modern C++ way (recommended)
int* oldPtr = NULL;  // Old C way (avoid)
int* badPtr;         // Uninitialized (dangerous!)
\`\`\`

**nullptr** is safer because it has a specific type (nullptr_t) and won't be confused with the integer 0.

### Checking for nullptr
Always check if a pointer is valid before dereferencing:

\`\`\`cpp
int* ptr = nullptr;

if (ptr != nullptr) {
    cout << *ptr << endl;  // Safe to dereference
} else {
    cout << "Pointer is null!" << endl;
}
\`\`\`

## Common Pointer Mistakes

### 1. Dereferencing Uninitialized Pointers
\`\`\`cpp
// WRONG - Undefined behavior!
int* ptr;
*ptr = 10;  // ptr points to random memory!

// RIGHT - Initialize first
int* ptr = nullptr;
int value = 0;
ptr = &value;
*ptr = 10;  // Now it's safe
\`\`\`

### 2. Dangling Pointers
\`\`\`cpp
int* ptr;
{
    int temp = 42;
    ptr = &temp;
}  // temp is destroyed here!
// ptr now points to invalid memory - DANGER!
\`\`\`

### 3. Memory Leaks
When using \`new\` (covered in later lessons), you must \`delete\`:

\`\`\`cpp
// WRONG - Memory leak!
int* ptr = new int(42);
// Forgot to delete!

// RIGHT
int* ptr = new int(42);
// ... use ptr ...
delete ptr;  // Free the memory
ptr = nullptr;  // Good practice
\`\`\`

### 4. Dereferencing nullptr
\`\`\`cpp
// WRONG - Crash!
int* ptr = nullptr;
cout << *ptr << endl;  // Undefined behavior!

// RIGHT - Check first
int* ptr = nullptr;
if (ptr != nullptr) {
    cout << *ptr << endl;
}
\`\`\`

## Step-by-Step Example: Swapping with Pointers

Let's trace through a complete example:

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    // Step 1: Create two variables
    int x = 5;
    int y = 10;

    cout << "Initial: x = " << x << ", y = " << y << endl;

    // Step 2: Create pointers to these variables
    int* px = &x;  // px points to x
    int* py = &y;  // py points to y

    cout << "Addresses: px = " << px << ", py = " << py << endl;

    // Step 3: Access values through pointers
    cout << "Values through pointers: *px = " << *px << ", *py = " << *py << endl;

    // Step 4: Swap values using a temporary variable
    int temp = *px;  // temp = 5
    *px = *py;       // x becomes 10
    *py = temp;      // y becomes 5

    cout << "After swap: x = " << x << ", y = " << y << endl;

    return 0;
}
\`\`\`

Output:
\`\`\`
Initial: x = 5, y = 10
Addresses: px = 0x7ffd5e3c9a4c, py = 0x7ffd5e3c9a50
Values through pointers: *px = 5, *py = 10
After swap: x = 10, y = 5
\`\`\`

## Best Practices

1. **Always initialize pointers**: Use nullptr if you don't have an address yet
2. **Check before dereferencing**: Verify pointer is not nullptr
3. **Use meaningful names**: \`studentPtr\` is better than \`p\`
4. **Set to nullptr after delete**: Prevents using freed memory
5. **Prefer references when possible**: References are safer for many use cases
6. **Document ownership**: Make it clear who's responsible for cleaning up memory

## Real-World Applications

### 1. Function Parameters
Pass large objects by pointer to avoid copying:
\`\`\`cpp
void processLargeData(LargeObject* objPtr) {
    // Works with original object, no copying
}
\`\`\`

### 2. Optional Parameters
Use nullptr to indicate "no value provided":
\`\`\`cpp
void printName(string* namePtr) {
    if (namePtr != nullptr) {
        cout << *namePtr << endl;
    } else {
        cout << "Anonymous" << endl;
    }
}
\`\`\`

### 3. Data Structures
Build linked lists where each node points to the next:
\`\`\`cpp
struct Node {
    int data;
    Node* next;  // Points to the next node
};
\`\`\`

## Summary

- **Pointers store memory addresses**, not values directly
- Use **&** to get an address, **\*** to access the value at an address
- **Always initialize pointers** to nullptr or a valid address
- **Check for nullptr** before dereferencing
- Pointers enable **dynamic memory** and **efficient function parameters**
- With great power comes great responsibility - use pointers carefully!

In the next lesson, we'll explore pointer arithmetic and the relationship between pointers and arrays.`,
        codeExample: `#include <iostream>
using namespace std;

int main() {
    cout << "=== Pointer Basics Demo ===" << endl;

    // Basic pointer declaration and use
    int age = 25;
    int* ptr = &age;  // ptr holds address of age

    cout << "\\n1. Basic Pointer Usage:" << endl;
    cout << "Value of age: " << age << endl;
    cout << "Address of age: " << &age << endl;
    cout << "Value of ptr (address it stores): " << ptr << endl;
    cout << "Value pointed to by ptr: " << *ptr << endl;

    // Modifying through pointer
    cout << "\\n2. Modifying Through Pointer:" << endl;
    cout << "Before: age = " << age << endl;
    *ptr = 30;  // Changes age through the pointer
    cout << "After *ptr = 30: age = " << age << endl;

    // Multiple pointers to same location
    cout << "\\n3. Multiple Pointers:" << endl;
    int* ptr2 = &age;
    cout << "ptr points to: " << *ptr << endl;
    cout << "ptr2 points to: " << *ptr2 << endl;
    *ptr2 = 35;
    cout << "After *ptr2 = 35:" << endl;
    cout << "  age = " << age << endl;
    cout << "  *ptr = " << *ptr << endl;

    // nullptr example
    cout << "\\n4. nullptr Safety:" << endl;
    int* nullPtr = nullptr;
    cout << "nullPtr value: " << nullPtr << endl;

    if (nullPtr == nullptr) {
        cout << "Pointer is null - safe to check before using!" << endl;
    }

    // Pointer reassignment
    cout << "\\n5. Pointer Reassignment:" << endl;
    int score1 = 95;
    int score2 = 87;
    int* scorePtr = &score1;

    cout << "scorePtr points to score1: " << *scorePtr << endl;
    scorePtr = &score2;  // Now points to score2
    cout << "scorePtr now points to score2: " << *scorePtr << endl;

    return 0;
}`,
        practiceExercises: [
          {
            id: 'pointer-basics-practice',
            title: 'Swap Two Numbers Using Pointers',
            description: 'Create a function that swaps two integers using pointers',
            difficulty: 'easy',
            hints: [
              'Use pointers as function parameters',
              'Dereference to access and modify values',
              'Use a temporary variable for swapping'
            ],
            solution: `#include <iostream>
using namespace std;

// Function to swap two integers using pointers
void swap(int* a, int* b) {
    int temp = *a;  // Store value pointed to by a
    *a = *b;        // Copy value pointed to by b into location pointed to by a
    *b = temp;      // Copy temp into location pointed to by b
}

int main() {
    int x = 5;
    int y = 10;

    cout << "Before swap: x = " << x << ", y = " << y << endl;

    // Pass addresses of x and y
    swap(&x, &y);

    cout << "After swap: x = " << x << ", y = " << y << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['function', 'cout'],
                outputPattern: '.*' // Should use functions with pointers/references
              }
            ]
          },
          {
            id: 'pointer-arithmetic-intro',
            title: 'Array Access with Pointers',
            description: 'Access array elements using pointer notation instead of array indexing',
            difficulty: 'medium',
            hints: [
              '*(ptr + i) is equivalent to arr[i]',
              'Pointer arithmetic moves by element size automatically',
              'Loop through array using pointer incrementationation'
            ],
            solution: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int size = sizeof(arr) / sizeof(arr[0]);

    // Method 1: Array notation
    cout << "Using array notation:" << endl;
    for (int i = 0; i < size; i++) {
        cout << "Element " << i << ": " << arr[i] << endl;
    }

    // Method 2: Pointer notation
    cout << "\\nUsing pointer notation:" << endl;
    int* ptr = arr;  // Array name is pointer to first element
    for (int i = 0; i < size; i++) {
        cout << "Element " << i << ": " << *(ptr + i) << endl;
    }

    // Method 3: Incrementing pointer
    cout << "\\nUsing pointer incrementation:" << endl;
    ptr = arr;  // Reset to beginning
    for (int i = 0; i < size; i++) {
        cout << "Element " << i << ": " << *ptr << endl;
        ptr++;  // Move to next element
    }

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['array', 'cout'],
                outputPattern: '.*' // Should use pointer arithmetic to access arrays
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'pointer-arithmetic',
        title: 'Pointer Arithmetic and Array Pointers',
        description: 'Master pointer arithmetic, array-pointer relationship, and pointer navigation',
        duration: '70 min',
        difficulty: 'beginner',
        topics: ['Pointer arithmetic', 'Array pointers', 'Pointer comparison', 'Dynamic arrays'],
        content: `# Pointer Arithmetic and Array Pointers

## Learning Objectives
- Understand how pointer arithmetic works in C++
- Master the relationship between arrays and pointers
- Navigate through arrays using pointer operations
- Compare pointers and calculate distances between them
- Apply pointer arithmetic to solve practical problems

## Why This Matters
Pointer arithmetic is fundamental for:
- **Efficient array processing**: Navigate arrays without indexing overhead
- **Data structure implementation**: Build linked lists, trees, and custom containers
- **Low-level programming**: Interact with memory at the byte level
- **Performance optimization**: Sometimes faster than array indexing
- **Understanding how C++ works**: Arrays decay to pointers in many contexts

Understanding pointer arithmetic helps you write efficient code and understand how arrays really work under the hood.

## Arrays and Pointers: The Connection

In C++, arrays and pointers are intimately related. When you use an array name, it **decays** to a pointer to its first element.

\`\`\`cpp
int arr[5] = {10, 20, 30, 40, 50};
int* ptr = arr;  // arr decays to pointer to arr[0]

// These are equivalent:
cout << arr[0] << endl;    // Prints 10
cout << *arr << endl;      // Prints 10
cout << *ptr << endl;      // Prints 10
\`\`\`

### Memory Layout Visualization
\`\`\`
Array in memory:
Index:      0    1    2    3    4
Value:     10   20   30   40   50
Address: 0x100 0x104 0x108 0x10C 0x110  (each int is 4 bytes)
         ^
         ptr points here
\`\`\`

## Pointer Arithmetic Rules

When you perform arithmetic on pointers, C++ automatically scales by the size of the pointed-to type.

### Adding to a Pointer
\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int* ptr = arr;

ptr + 0  →  points to arr[0] (address 0x100)
ptr + 1  →  points to arr[1] (address 0x104) - moved by sizeof(int) bytes
ptr + 2  →  points to arr[2] (address 0x108) - moved by 2*sizeof(int) bytes
\`\`\`

**Key Point**: \`ptr + n\` moves the pointer forward by \`n * sizeof(type)\` bytes, not n bytes!

### Accessing Elements
\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int* ptr = arr;

// These are equivalent ways to access arr[2]:
arr[2]        // Array subscript notation
*(arr + 2)    // Pointer arithmetic on array name
ptr[2]        // Array subscript on pointer
*(ptr + 2)    // Pointer arithmetic on pointer variable
\`\`\`

### The [] Operator is Just Syntactic Sugar
The expression \`arr[i]\` is actually compiled as \`*(arr + i)\`. Array indexing is pointer arithmetic in disguise!

## Pointer Arithmetic Operations

### 1. Incrementing Pointers
\`\`\`cpp
int arr[] = {10, 20, 30};
int* ptr = arr;

cout << *ptr << endl;   // 10
ptr++;                  // Move to next element
cout << *ptr << endl;   // 20
ptr++;                  // Move to next element
cout << *ptr << endl;   // 30
\`\`\`

### 2. Decrementing Pointers
\`\`\`cpp
int* ptr = &arr[2];     // Point to last element
cout << *ptr << endl;   // 30
ptr--;                  // Move backward
cout << *ptr << endl;   // 20
\`\`\`

### 3. Adding/Subtracting Integers
\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int* ptr = arr;

int* ptr2 = ptr + 3;    // Points to arr[3]
int* ptr3 = ptr2 - 1;   // Points to arr[2]
\`\`\`

### 4. Pointer Difference
You can subtract two pointers to find the number of elements between them:

\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int* start = arr;
int* end = arr + 5;

int distance = end - start;  // Result: 5 elements
cout << "Array has " << distance << " elements" << endl;
\`\`\`

### 5. Pointer Comparison
\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int* ptr1 = &arr[1];
int* ptr2 = &arr[3];

if (ptr1 < ptr2) {
    cout << "ptr1 comes before ptr2 in memory" << endl;
}

if (ptr1 != ptr2) {
    cout << "Pointers point to different locations" << endl;
}
\`\`\`

## Iterating Through Arrays with Pointers

### Traditional For Loop with Indexing
\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int size = 5;

for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
}
\`\`\`

### Using Pointer Arithmetic
\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int* end = arr + 5;  // One past the last element

for (int* ptr = arr; ptr < end; ptr++) {
    cout << *ptr << " ";
}
\`\`\`

### Why Use Pointers?
In some cases, pointer iteration can be slightly faster because:
- No multiplication for index calculation
- Direct memory access
- Better optimization by some compilers

However, for most code, readability matters more than micro-optimizations!

## Common Pitfalls

### 1. Out-of-Bounds Access
\`\`\`cpp
int arr[5] = {10, 20, 30, 40, 50};
int* ptr = arr + 10;  // DANGER! Points beyond array
cout << *ptr << endl;  // Undefined behavior!
\`\`\`

**Fix**: Always ensure pointer stays within valid range:
\`\`\`cpp
int* end = arr + 5;
if (ptr < end) {
    cout << *ptr << endl;  // Safe
}
\`\`\`

### 2. Pointer Arithmetic on Different Arrays
\`\`\`cpp
int arr1[5] = {1, 2, 3, 4, 5};
int arr2[5] = {10, 20, 30, 40, 50};

int* p1 = arr1;
int* p2 = arr2;

int diff = p2 - p1;  // UNDEFINED! Different arrays
\`\`\`

### 3. Forgetting Array Bounds
\`\`\`cpp
int arr[5];
int* ptr = arr;

while (*ptr != 0) {  // DANGER! What if no 0 in array?
    cout << *ptr << " ";
    ptr++;
}
\`\`\`

**Fix**: Always track the size:
\`\`\`cpp
int size = 5;
int* end = arr + size;

while (ptr < end) {
    cout << *ptr << " ";
    ptr++;
}
\`\`\`

## Step-by-Step Example: Finding Maximum

Let's use pointer arithmetic to find the maximum value in an array:

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int numbers[] = {45, 12, 78, 23, 89, 34};
    int size = 6;

    // Start with first element as max
    int* ptr = numbers;
    int maxValue = *ptr;
    int* maxPtr = ptr;

    // Iterate through array
    ptr++;  // Move to second element
    int* end = numbers + size;

    while (ptr < end) {
        if (*ptr > maxValue) {
            maxValue = *ptr;
            maxPtr = ptr;
        }
        ptr++;
    }

    cout << "Maximum value: " << maxValue << endl;
    cout << "At index: " << (maxPtr - numbers) << endl;

    return 0;
}
\`\`\`

## Best Practices

1. **Always check bounds**: Use size or end pointer to prevent overruns
2. **Use const for read-only access**: \`const int* ptr\` prevents modifications
3. **Prefer range-based for when possible**: More readable for simple iteration
4. **Document pointer ownership**: Make it clear what data pointer refers to
5. **Use array notation when clearer**: \`arr[i]\` is often more readable than \`*(arr + i)\`

## Real-World Applications

### 1. String Processing
C-style strings are just char arrays, processed with pointer arithmetic:
\`\`\`cpp
char str[] = "Hello";
char* ptr = str;
while (*ptr != '\\0') {  // Until null terminator
    cout << *ptr;
    ptr++;
}
\`\`\`

### 2. Buffer Manipulation
Processing binary data efficiently:
\`\`\`cpp
void processBuffer(unsigned char* buffer, int size) {
    unsigned char* end = buffer + size;
    for (unsigned char* ptr = buffer; ptr < end; ptr++) {
        *ptr = (*ptr) ^ 0xFF;  // XOR each byte
    }
}
\`\`\`

### 3. Data Structure Navigation
Moving through linked list or tree nodes using pointers.

## Summary

- **Pointer arithmetic scales automatically** by the size of the pointed-to type
- **Arrays and pointers are related**: Array names decay to pointers
- **ptr + n** moves n elements forward, not n bytes
- **ptr1 - ptr2** gives the number of elements between pointers
- **Always check bounds** to avoid undefined behavior
- **Pointer arithmetic enables efficient** array and memory manipulation
- **Readability often trumps micro-optimizations**: Use clear code first

Mastering pointer arithmetic gives you powerful tools for efficient data manipulation and a deeper understanding of how C++ manages memory.`,
        codeExample: `#include <iostream>
using namespace std;

int main() {
    cout << "=== Pointer Arithmetic Demo ===" << endl;

    // Array setup
    int numbers[] = {10, 20, 30, 40, 50};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    // 1. Basic pointer arithmetic
    cout << "\\n1. Array Elements via Pointer Arithmetic:" << endl;
    int* ptr = numbers;
    for (int i = 0; i < size; i++) {
        cout << "*(ptr + " << i << ") = " << *(ptr + i) << endl;
    }

    // 2. Pointer increment
    cout << "\\n2. Using Pointer Increment:" << endl;
    ptr = numbers;  // Reset to start
    for (int i = 0; i < size; i++) {
        cout << *ptr << " ";
        ptr++;
    }
    cout << endl;

    // 3. Pointer addresses
    cout << "\\n3. Memory Addresses:" << endl;
    ptr = numbers;
    cout << "Base address: " << ptr << endl;
    cout << "ptr + 1: " << (ptr + 1) << " (+" << sizeof(int) << " bytes)" << endl;
    cout << "ptr + 2: " << (ptr + 2) << " (+" << 2*sizeof(int) << " bytes)" << endl;

    // 4. Pointer subtraction
    cout << "\\n4. Pointer Difference:" << endl;
    int* start = numbers;
    int* end = numbers + size;
    cout << "Distance from start to end: " << (end - start) << " elements" << endl;

    // 5. Finding maximum with pointers
    cout << "\\n5. Finding Maximum:" << endl;
    ptr = numbers;
    int maxVal = *ptr;
    int* maxPtr = ptr;

    for (ptr = numbers; ptr < numbers + size; ptr++) {
        if (*ptr > maxVal) {
            maxVal = *ptr;
            maxPtr = ptr;
        }
    }

    cout << "Maximum value: " << maxVal << endl;
    cout << "At index: " << (maxPtr - numbers) << endl;

    // 6. Reverse traversal
    cout << "\\n6. Reverse Traversal:" << endl;
    cout << "Array in reverse: ";
    for (ptr = numbers + size - 1; ptr >= numbers; ptr--) {
        cout << *ptr << " ";
    }
    cout << endl;

    return 0;
}`,
        practiceExercises: [
          {
            id: 'find-max-pointer',
            title: 'Find Maximum Using Pointers',
            description: 'Implement a function that finds the maximum value in an array using only pointer arithmetic',
            difficulty: 'medium',
            hints: [
              'Use a pointer to traverse the array',
              'Keep track of the maximum value found so far',
              'Use pointer comparison to know when to stop'
            ],
            solution: `#include <iostream>
using namespace std;

int findMax(int* arr, int size) {
    if (size <= 0) return 0;  // Handle empty array

    int* ptr = arr;
    int maxValue = *ptr;  // Start with first element
    int* end = arr + size;

    // Iterate through array using pointer arithmetic
    ptr++;  // Move to second element
    while (ptr < end) {
        if (*ptr > maxValue) {
            maxValue = *ptr;
        }
        ptr++;
    }

    return maxValue;
}

int main() {
    int numbers[] = {45, 78, 23, 89, 12, 67, 34};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    cout << "Array: ";
    for (int i = 0; i < size; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;

    int maximum = findMax(numbers, size);
    cout << "Maximum value: " << maximum << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['array', 'function', 'for', 'cout'],
                outputPattern: '.*' // Should use functions with arrays
              }
            ]
          },
          {
            id: 'reverse-array-pointers',
            title: 'Reverse Array In-Place with Pointers',
            description: 'Reverse an array in-place using two pointers (one at start, one at end)',
            difficulty: 'medium',
            hints: [
              'Use two pointers: one at beginning, one at end',
              'Swap elements and move pointers toward each other',
              'Stop when pointers meet in the middle'
            ],
            solution: `#include <iostream>
using namespace std;

void reverseArray(int* arr, int size) {
    int* left = arr;              // Pointer to first element
    int* right = arr + size - 1;  // Pointer to last element

    // Swap elements while moving pointers toward center
    while (left < right) {
        // Swap values
        int temp = *left;
        *left = *right;
        *right = temp;

        // Move pointers
        left++;
        right--;
    }
}

void printArray(int* arr, int size) {
    int* end = arr + size;
    for (int* ptr = arr; ptr < end; ptr++) {
        cout << *ptr << " ";
    }
    cout << endl;
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    cout << "Original array: ";
    printArray(numbers, size);

    reverseArray(numbers, size);

    cout << "Reversed array: ";
    printArray(numbers, size);

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['array', 'function', 'for', 'cout'],
                outputPattern: '.*' // Should use functions to manipulate arrays
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'references',
        title: 'References and Pass by Reference',
        description: 'Learn reference variables and how to pass by reference to functions',
        duration: '65 min',
        difficulty: 'beginner',
        topics: ['Reference declaration', 'Pass by reference', 'Reference vs pointer', 'Const references', 'Reference rules'],
        content: `# References and Pass by Reference

## Learning Objectives
- Understand what references are and how they differ from regular variables
- Use references to create aliases for existing variables
- Pass parameters by reference to functions efficiently
- Recognize when to use references vs pointers vs pass-by-value
- Apply const references for read-only function parameters

## Why This Matters
References are essential for:
- **Efficient function parameters**: Avoid copying large objects
- **Modifying variables through functions**: Return multiple values indirectly
- **Cleaner syntax than pointers**: No dereferencing needed
- **Safer than pointers**: Cannot be null or reassigned
- **Modern C++ style**: Preferred over pointers in many situations

Understanding references makes your code more efficient and easier to read.

## What are References?

A **reference** is an alias (another name) for an existing variable. Once created, any operation on the reference actually operates on the original variable.

\`\`\`cpp
int age = 25;
int& ageRef = age;  // ageRef is a reference to age

ageRef = 30;  // Changes age to 30
cout << age << endl;  // Prints 30
\`\`\`

Think of a reference as a nickname - when you talk to "Bob" or "Robert", you're talking to the same person.

### References Must Be Initialized
Unlike pointers, references MUST be initialized when declared and cannot be changed to refer to something else:

\`\`\`cpp
int x = 10;
int& ref = x;    // ✓ Correct - initialized immediately

int& badRef;     // ✗ ERROR - must initialize!
ref = y;         // This assigns y's value to x, doesn't change what ref refers to
\`\`\`

## Reference Syntax

\`\`\`cpp
int number = 42;
int& ref = number;  // ref is a reference to number

// Now ref and number are the same thing
cout << number << endl;  // 42
cout << ref << endl;     // 42

ref = 100;  // Changes number
cout << number << endl;  // 100
\`\`\`

**Key difference from pointers**: No dereferencing needed! Just use the reference like a regular variable.

## References vs Pointers

| Feature | Reference | Pointer |
|---------|-----------|---------|
| Must be initialized | Yes | No |
| Can be null | No | Yes (nullptr) |
| Can be reassigned | No | Yes |
| Syntax | Clean (no \*) | Requires \* to dereference |
| Can do arithmetic | No | Yes |
| Memory address | Hidden | Visible |

### When to Use Each

**Use references when:**
- You need an alias for a variable
- Passing parameters to functions (most common use)
- You want clean syntax without null checks

**Use pointers when:**
- You need to reassign to point to different objects
- You need to represent "optional" (can be nullptr)
- You need pointer arithmetic
- Working with dynamic memory (new/delete)

## Pass by Value vs Pass by Reference

### Pass by Value (Default)
\`\`\`cpp
void increment(int x) {
    x++;  // Only modifies the copy!
}

int main() {
    int num = 10;
    increment(num);
    cout << num << endl;  // Still 10 - original unchanged
}
\`\`\`

**Problem**: Function gets a copy. Changes don't affect original. Copying large objects is slow!

### Pass by Reference
\`\`\`cpp
void increment(int& x) {  // & makes it a reference parameter
    x++;  // Modifies the original!
}

int main() {
    int num = 10;
    increment(num);
    cout << num << endl;  // Now 11 - original changed
}
\`\`\`

**Benefit**: Function works with original. No copying. Changes affect original.

### Visual Comparison

**Pass by Value:**
\`\`\`
main's memory:        function's memory:
  num = 10    -->     x = 10 (copy)
                      x++ makes it 11
  num still 10        (copy discarded)
\`\`\`

**Pass by Reference:**
\`\`\`
main's memory:        function's memory:
  num = 10    <--     x is alias for num
                      x++ changes num to 11
  num now 11
\`\`\`

## Const References

Use **const** references when you want efficiency without modification:

\`\`\`cpp
void printStudent(const Student& s) {
    cout << s.name << endl;  // ✓ Can read
    s.name = "New Name";     // ✗ ERROR - cannot modify const reference
}
\`\`\`

### Why Use Const References?

1. **Efficiency**: No copying (like references)
2. **Safety**: Cannot accidentally modify (like const)
3. **Flexibility**: Can accept temporary values

\`\`\`cpp
void display(const string& str) {
    cout << str << endl;
}

display("Hello");  // ✓ Works - can pass temporary!

void modify(string& str) {
    str += "!";
}

modify("Hello");  // ✗ ERROR - cannot bind non-const reference to temporary
\`\`\`

**Best Practice**: Use const references for function parameters unless you need to modify them.

## Common Use Cases

### 1. Returning Multiple Values
\`\`\`cpp
void getDimensions(int& width, int& height) {
    width = 1920;
    height = 1080;
}

int main() {
    int w, h;
    getDimensions(w, h);
    cout << "Resolution: " << w << "x" << h << endl;
}
\`\`\`

### 2. Swapping Variables
\`\`\`cpp
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}
\`\`\`

### 3. Efficient Parameter Passing
\`\`\`cpp
struct LargeData {
    int data[1000];
};

// Bad - copies entire struct (slow!)
void processSlow(LargeData data) {
    // ...
}

// Good - works with original (fast!)
void processFast(const LargeData& data) {
    // ...
}
\`\`\`

## Reference Rules and Restrictions

### 1. Must Initialize
\`\`\`cpp
int& ref;  // ✗ ERROR
int& ref = someVar;  // ✓ OK
\`\`\`

### 2. Cannot Be Reassigned
\`\`\`cpp
int x = 10, y = 20;
int& ref = x;
ref = y;  // Assigns y's VALUE to x, doesn't change what ref refers to!

cout << x << endl;  // 20 (x was changed)
cout << ref << endl;  // 20 (ref still refers to x)
\`\`\`

### 3. No "Reference to Reference"
\`\`\`cpp
int x = 10;
int& ref = x;
int& refRef = ref;  // This is just another reference to x, not reference to reference
\`\`\`

### 4. No Arrays of References
\`\`\`cpp
int& refs[10];  // ✗ ERROR - cannot have array of references
\`\`\`

## Common Mistakes

### Mistake 1: Returning Reference to Local Variable
\`\`\`cpp
int& badFunction() {
    int local = 42;
    return local;  // ✗ DANGER! local is destroyed after function returns
}  // Returns reference to destroyed variable - undefined behavior!
\`\`\`

**Fix**: Return by value or ensure the referred-to object outlives the function:
\`\`\`cpp
int& goodFunction(int& param) {
    return param;  // ✓ OK - param lives outside function
}
\`\`\`

### Mistake 2: Forgetting const for Read-Only
\`\`\`cpp
void print(string& s) {  // Should be const&
    cout << s << endl;
}

print("Hello");  // ✗ ERROR - cannot bind to temporary
\`\`\`

**Fix**:
\`\`\`cpp
void print(const string& s) {  // Now works with temporaries
    cout << s << endl;
}
\`\`\`

## Best Practices

1. **Use const references for read-only parameters** - Efficient and safe
2. **Use references for output parameters** - Clearer than pointers
3. **Never return references to local variables** - Always destroyed!
4. **Prefer references over pointers** when null isn't needed
5. **Name reference parameters clearly** - Indicate they'll be modified
6. **Document side effects** - Make it clear when functions modify parameters

## Step-by-Step Example

\`\`\`cpp
#include <iostream>
#include <string>
using namespace std;

// Read-only access - const reference
void displayInfo(const string& name, const int& age) {
    cout << name << " is " << age << " years old" << endl;
    // name = "New";  // ERROR - cannot modify const
}

// Modify parameters - non-const references
void updateInfo(string& name, int& age) {
    name = "Updated Name";
    age++;
}

// Return multiple values
void getStats(const int arr[], int size, int& sum, double& average) {
    sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    average = static_cast<double>(sum) / size;
}

int main() {
    string name = "Alice";
    int age = 25;

    cout << "=== Original ===" << endl;
    displayInfo(name, age);

    cout << "\\n=== After Update ===" << endl;
    updateInfo(name, age);
    displayInfo(name, age);

    cout << "\\n=== Array Stats ===" << endl;
    int numbers[] = {10, 20, 30, 40, 50};
    int total;
    double avg;
    getStats(numbers, 5, total, avg);
    cout << "Sum: " << total << ", Average: " << avg << endl;

    return 0;
}
\`\`\`

## Summary

- **References are aliases** for existing variables
- **Must be initialized** and cannot be reassigned
- **Pass by reference** avoids copying and allows modification
- **Const references** provide efficiency without modification risk
- **Cleaner syntax than pointers** - no dereferencing needed
- **Use for function parameters** - most common and useful application
- **Never return references to local variables** - undefined behavior!

References are a cornerstone of efficient C++ programming. Master them for cleaner, faster code!`,
        codeExample: `#include <iostream>
#include <string>
using namespace std;

// Function demonstrating const reference (read-only)
void displayPerson(const string& name, const int& age) {
    cout << "Name: " << name << ", Age: " << age << endl;
    // name = "Test";  // Would cause ERROR - const reference
}

// Function demonstrating non-const reference (can modify)
void makeOlder(string& name, int& age) {
    age += 10;
    name = "Senior " + name;
}

// Function demonstrating multiple return values via references
void divideWithRemainder(int dividend, int divisor, int& quotient, int& remainder) {
    quotient = dividend / divisor;
    remainder = dividend % divisor;
}

// Swap function using references
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    cout << "=== References Demo ===" << endl;

    // 1. Basic reference usage
    cout << "\\n1. Reference as Alias:" << endl;
    int score = 95;
    int& scoreRef = score;

    cout << "score = " << score << ", scoreRef = " << scoreRef << endl;
    scoreRef = 100;
    cout << "After scoreRef = 100:" << endl;
    cout << "score = " << score << ", scoreRef = " << scoreRef << endl;

    // 2. Pass by reference - modifying
    cout << "\\n2. Pass by Reference (Modify):" << endl;
    string name = "Alice";
    int age = 25;
    cout << "Before: "; displayPerson(name, age);
    makeOlder(name, age);
    cout << "After: "; displayPerson(name, age);

    // 3. Multiple return values
    cout << "\\n3. Multiple Return Values:" << endl;
    int q, r;
    divideWithRemainder(17, 5, q, r);
    cout << "17 / 5 = " << q << " remainder " << r << endl;

    // 4. Swap function
    cout << "\\n4. Swap Function:" << endl;
    int x = 10, y = 20;
    cout << "Before swap: x = " << x << ", y = " << y << endl;
    swap(x, y);
    cout << "After swap: x = " << x << ", y = " << y << endl;

    return 0;
}`,
        practiceExercises: [
          {
            id: 'reference-swap-practice',
            title: 'Enhanced Swap Function',
            description: 'Create functions to swap different types of variables using references',
            difficulty: 'easy',
            hints: [
              'Use reference parameters for both variables',
              'Create separate functions for different types',
              'Test with multiple data types'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

// Swap integers
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// Swap doubles
void swap(double& a, double& b) {
    double temp = a;
    a = b;
    b = temp;
}

// Swap strings
void swap(string& a, string& b) {
    string temp = a;
    a = b;
    b = temp;
}

int main() {
    cout << "=== Swap Functions Demo ===" << endl;

    // Test with integers
    int x = 10, y = 20;
    cout << "\\nIntegers before: x = " << x << ", y = " << y << endl;
    swap(x, y);
    cout << "Integers after: x = " << x << ", y = " << y << endl;

    // Test with doubles
    double d1 = 3.14, d2 = 2.71;
    cout << "\\nDoubles before: d1 = " << d1 << ", d2 = " << d2 << endl;
    swap(d1, d2);
    cout << "Doubles after: d1 = " << d1 << ", d2 = " << d2 << endl;

    // Test with strings
    string s1 = "Hello", s2 = "World";
    cout << "\\nStrings before: s1 = " << s1 << ", s2 = " << s2 << endl;
    swap(s1, s2);
    cout << "Strings after: s1 = " << s1 << ", s2 = " << s2 << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['function', 'cout'],
                outputPattern: '.*' // Should use function overloading
              }
            ]
          },
          {
            id: 'reference-stats',
            title: 'Array Statistics with References',
            description: 'Calculate min, max, and average of an array, returning all values via references',
            difficulty: 'medium',
            hints: [
              'Use reference parameters for min, max, and average',
              'Pass array as const pointer or const reference',
              'Iterate through array to find values'
            ],
            solution: `#include <iostream>
using namespace std;

void calculateStats(const int arr[], int size, int& minVal, int& maxVal, double& avg) {
    if (size <= 0) {
        minVal = maxVal = 0;
        avg = 0.0;
        return;
    }

    // Initialize with first element
    minVal = maxVal = arr[0];
    int sum = arr[0];

    // Process remaining elements
    for (int i = 1; i < size; i++) {
        if (arr[i] < minVal) minVal = arr[i];
        if (arr[i] > maxVal) maxVal = arr[i];
        sum += arr[i];
    }

    avg = static_cast<double>(sum) / size;
}

int main() {
    int numbers[] = {45, 12, 78, 23, 89, 34, 67, 91};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    cout << "Array: ";
    for (int i = 0; i < size; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;

    int min, max;
    double average;

    calculateStats(numbers, size, min, max, average);

    cout << "\\nStatistics:" << endl;
    cout << "Minimum: " << min << endl;
    cout << "Maximum: " << max << endl;
    cout << "Average: " << average << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['array', 'function', 'for', 'cout'],
                outputPattern: '.*' // Should use functions with reference parameters
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'strings',
        title: 'Strings and String Manipulation',
        description: 'Master C++ string class and common string operations',
        duration: '75 min',
        difficulty: 'beginner',
        topics: ['string class', 'String methods', 'String concatenation', 'Substring', 'Find and replace', 'String comparison'],
        content: `# Strings and String Manipulation

## Learning Objectives
- Understand the C++ string class and its advantages
- Perform common string operations efficiently
- Compare, search, and modify strings
- Handle string input and output properly
- Apply string methods to solve practical problems

## Why This Matters
Strings are fundamental in programming:
- **User interaction**: Reading names, messages, commands
- **Data processing**: Parsing files, processing text
- **Web development**: Handling URLs, HTML, JSON
- **Application logic**: Validating input, formatting output
- **Real-world applications**: Nearly every program uses strings

Mastering string manipulation is essential for building practical applications.

## The C++ String Class

C++ provides the \`string\` class in the \`<string>\` header, offering powerful and safe string operations.

\`\`\`cpp
#include <string>
using namespace std;

string name = "Alice";
string greeting = "Hello, " + name + "!";
\`\`\`

### Why Use string Over char Arrays?
- **Automatic memory management**: No manual memory allocation
- **Dynamic sizing**: Grows and shrinks automatically
- **Rich functionality**: Built-in methods for common operations
- **Safer**: No buffer overflows or null terminator issues
- **Easier to use**: Intuitive syntax with operators

## String Creation and Initialization

\`\`\`cpp
// Different ways to create strings
string s1;                          // Empty string
string s2 = "Hello";                // From string literal
string s3("World");                 // Constructor syntax
string s4(5, 'A');                  // "AAAAA" - 5 copies of 'A'
string s5 = s2;                     // Copy constructor
string s6(s2, 1, 3);                // Substring: "ell"
\`\`\`

## String Concatenation

\`\`\`cpp
string first = "Hello";
string last = "World";

// Using + operator
string full = first + " " + last;   // "Hello World"

// Using += operator
first += " ";
first += last;                       // first is now "Hello World"

// Using append method
string msg = "Hi";
msg.append(" there");                // "Hi there"
\`\`\`

## Accessing String Characters

\`\`\`cpp
string str = "Hello";

// Using [] operator
char first = str[0];                 // 'H'
str[0] = 'J';                        // str is now "Jello"

// Using at() method (with bounds checking)
char second = str.at(1);             // 'e'
// str.at(10) = 'X';                 // Throws out_of_range exception

// First and last characters
char front = str.front();            // 'J'
char back = str.back();              // 'o'
\`\`\`

## String Length and Capacity

\`\`\`cpp
string str = "Hello";

// Get length
int len = str.length();              // 5
int size = str.size();               // 5 (same as length())

// Check if empty
bool isEmpty = str.empty();          // false

// Modify size
str.resize(10, 'X');                 // "HelloXXXXX"
str.clear();                         // Empty string

// Capacity (allocated memory)
int cap = str.capacity();            // Implementation-defined
str.reserve(100);                    // Reserve space for 100 chars
\`\`\`

## String Searching

\`\`\`cpp
string text = "Hello World";

// Find substring
size_t pos = text.find("World");     // Returns 6
size_t notFound = text.find("xyz");  // Returns string::npos

// Find from position
pos = text.find("o", 5);             // Find 'o' starting at index 5

// Find last occurrence
pos = text.rfind("o");               // Returns 7 (last 'o')

// Find first of any character
pos = text.find_first_of("aeiou");   // Returns 1 ('e')

// Find first NOT of
pos = text.find_first_not_of("Hel"); // Returns 4 ('o')
\`\`\`

## Substring Operations

\`\`\`cpp
string str = "Hello World";

// Extract substring
string sub = str.substr(0, 5);       // "Hello" (start at 0, length 5)
string rest = str.substr(6);         // "World" (from index 6 to end)

// Insert
str.insert(5, " Beautiful");         // "Hello Beautiful World"

// Erase
str.erase(5, 10);                    // "Hello World" (remove 10 chars at pos 5)

// Replace
str.replace(6, 5, "C++");            // "Hello C++"
\`\`\`

## String Comparison

\`\`\`cpp
string s1 = "apple";
string s2 = "banana";
string s3 = "apple";

// Using == operator
bool equal = (s1 == s3);             // true
bool notEqual = (s1 != s2);          // true

// Using compare method (returns int)
int result = s1.compare(s2);         // negative (s1 < s2)
result = s1.compare(s3);             // 0 (equal)
result = s2.compare(s1);             // positive (s2 > s1)

// Comparison operators
bool less = (s1 < s2);               // true
bool greater = (s2 > s1);            // true
\`\`\`

## String Conversion

\`\`\`cpp
#include <string>
using namespace std;

// String to number
string numStr = "123";
int num = stoi(numStr);              // String to int
double d = stod("3.14");             // String to double
long l = stol("1000000");            // String to long

// Number to string
int value = 42;
string str = to_string(value);       // "42"
double pi = 3.14159;
string piStr = to_string(pi);        // "3.141590"
\`\`\`

## String Iteration

\`\`\`cpp
string str = "Hello";

// Using index
for (int i = 0; i < str.length(); i++) {
    cout << str[i] << " ";
}

// Using range-based for loop
for (char c : str) {
    cout << c << " ";
}

// Using iterators
for (auto it = str.begin(); it != str.end(); ++it) {
    cout << *it << " ";
}
\`\`\`

## Common String Methods

\`\`\`cpp
string str = "  Hello World  ";

// Note: C++ strings don't have built-in trim
// But we can do other operations:

// Convert to C-string
const char* cstr = str.c_str();

// Get specific character position
size_t pos = str.find("World");
if (pos != string::npos) {
    cout << "Found at: " << pos << endl;
}

// Swap strings
string other = "Goodbye";
str.swap(other);                     // str is now "Goodbye"
\`\`\`

## Best Practices

1. **Use string over char arrays** for most cases
2. **Check find() results** against string::npos
3. **Use at() for safer access** with bounds checking
4. **Reserve space** if you know the approximate size
5. **Use const string&** for function parameters
6. **Avoid unnecessary copies** with move semantics

## Common Use Cases

### 1. Input Validation
\`\`\`cpp
bool isValidEmail(const string& email) {
    return email.find('@') != string::npos &&
           email.find('.') != string::npos;
}
\`\`\`

### 2. String Parsing
\`\`\`cpp
// Split string by delimiter
string data = "John,Doe,25";
size_t pos = 0;
while ((pos = data.find(',')) != string::npos) {
    string token = data.substr(0, pos);
    cout << token << endl;
    data.erase(0, pos + 1);
}
cout << data << endl;  // Last token
\`\`\`

### 3. String Building
\`\`\`cpp
string buildReport(const string& name, int score) {
    string report = "Student: " + name + "\\n";
    report += "Score: " + to_string(score) + "\\n";
    report += "Grade: " + (score >= 90 ? "A" : "B");
    return report;
}
\`\`\`

## Summary

- **string class** provides safe and powerful string operations
- **Concatenation** with + and += operators
- **Searching** with find(), rfind(), and related methods
- **Substring operations** for extracting and modifying parts
- **Comparison** with ==, !=, <, >, and compare()
- **Conversion** between strings and numbers
- **Iteration** using various loop styles
- Always check **string::npos** when using find methods

Master string manipulation for effective text processing in your programs!`,
        codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "=== String Operations Demo ===" << endl;

    // 1. Creation and concatenation
    cout << "\\n1. String Creation:" << endl;
    string firstName = "John";
    string lastName = "Doe";
    string fullName = firstName + " " + lastName;
    cout << "Full name: " << fullName << endl;

    // 2. String properties
    cout << "\\n2. String Properties:" << endl;
    string msg = "Hello World";
    cout << "Length: " << msg.length() << endl;
    cout << "First char: " << msg[0] << endl;
    cout << "Last char: " << msg[msg.length() - 1] << endl;

    // 3. Searching
    cout << "\\n3. String Searching:" << endl;
    size_t pos = msg.find("World");
    if (pos != string::npos) {
        cout << "'World' found at position: " << pos << endl;
    }

    // 4. Substring
    cout << "\\n4. Substring:" << endl;
    string part = msg.substr(0, 5);
    cout << "First 5 chars: " << part << endl;

    // 5. Modification
    cout << "\\n5. String Modification:" << endl;
    string text = "C++ Programming";
    text.replace(4, 11, "Language");
    cout << "After replace: " << text << endl;

    text.insert(3, " is awesome");
    cout << "After insert: " << text << endl;

    // 6. Comparison
    cout << "\\n6. String Comparison:" << endl;
    string s1 = "apple";
    string s2 = "banana";
    cout << "apple < banana: " << (s1 < s2 ? "true" : "false") << endl;
    cout << "apple == apple: " << (s1 == "apple" ? "true" : "false") << endl;

    // 7. Conversion
    cout << "\\n7. String Conversion:" << endl;
    string numStr = "42";
    int num = stoi(numStr);
    cout << "String '42' as int: " << num << endl;
    cout << "Number 100 as string: " << to_string(100) << endl;

    // 8. Iteration
    cout << "\\n8. Character Iteration:" << endl;
    string word = "Hello";
    cout << "Characters: ";
    for (char c : word) {
        cout << c << " ";
    }
    cout << endl;

    return 0;
}`,
        practiceExercises: [
          {
            id: 'string-reversal',
            title: 'String Reversal',
            description: 'Write a function to reverse a string without using built-in reverse',
            difficulty: 'easy',
            hints: [
              'Use two pointers or indices',
              'Swap characters from ends moving inward',
              'Stop when indices meet in middle'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

string reverseString(string str) {
    int left = 0;
    int right = str.length() - 1;

    while (left < right) {
        // Swap characters
        char temp = str[left];
        str[left] = str[right];
        str[right] = temp;

        left++;
        right--;
    }

    return str;
}

int main() {
    string original = "Hello World";
    cout << "Original: " << original << endl;

    string reversed = reverseString(original);
    cout << "Reversed: " << reversed << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['function', 'cout'],
                outputPattern: '.*' // Should use string functions
              }
            ]
          },
          {
            id: 'palindrome-checker',
            title: 'Palindrome Checker',
            description: 'Check if a string is a palindrome (reads same forwards and backwards)',
            difficulty: 'easy',
            hints: [
              'Compare characters from both ends',
              'Move inward and check equality',
              'Ignore case for better palindrome detection'
            ],
            solution: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isPalindrome(string str) {
    // Convert to lowercase for case-insensitive comparison
    transform(str.begin(), str.end(), str.begin(), ::tolower);

    int left = 0;
    int right = str.length() - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

int main() {
    string test1 = "radar";
    string test2 = "hello";
    string test3 = "A man a plan a canal Panama";

    cout << "'" << test1 << "' is palindrome: " << (isPalindrome(test1) ? "Yes" : "No") << endl;
    cout << "'" << test2 << "' is palindrome: " << (isPalindrome(test2) ? "Yes" : "No") << endl;

    // Remove spaces for test3
    string test3NoSpace = test3;
    test3NoSpace.erase(remove(test3NoSpace.begin(), test3NoSpace.end(), ' '), test3NoSpace.end());
    cout << "'" << test3 << "' is palindrome: " << (isPalindrome(test3NoSpace) ? "Yes" : "No") << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['function', 'cout', 'if', 'while'],
                outputPattern: '.*' // Should use functions with loops for palindrome check
              }
            ]
          },
          {
            id: 'word-counter',
            title: 'Word Counter',
            description: 'Count the number of words in a string (words separated by spaces)',
            difficulty: 'medium',
            hints: [
              'Count transitions from space to non-space',
              'Handle multiple consecutive spaces',
              'Consider leading and trailing spaces'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

int countWords(const string& str) {
    int count = 0;
    bool inWord = false;

    for (char c : str) {
        if (c == ' ' || c == '\\t' || c == '\\n') {
            inWord = false;
        } else if (!inWord) {
            inWord = true;
            count++;
        }
    }

    return count;
}

int main() {
    string text1 = "Hello World";
    string text2 = "  C++  is   awesome  ";
    string text3 = "OneWord";

    cout << "'" << text1 << "' has " << countWords(text1) << " words" << endl;
    cout << "'" << text2 << "' has " << countWords(text2) << " words" << endl;
    cout << "'" << text3 << "' has " << countWords(text3) << " words" << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['function', 'cout', 'for', 'if'],
                outputPattern: '.*' // Should use string manipulation functions
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'structures',
        title: 'Structures (Structs)',
        description: 'Learn to group related data using structures',
        duration: '70 min',
        difficulty: 'beginner',
        topics: ['Struct definition', 'Member access', 'Arrays of structs', 'Nested structs', 'Structs vs classes', 'Pass struct to function'],
        content: `# Structures (Structs)

## Learning Objectives
- Define and use structures to group related data
- Access and modify struct members
- Create arrays and vectors of structs
- Pass structs to functions efficiently
- Understand when to use structs vs classes
- Build practical data models with structures

## Why This Matters
Structures allow you to:
- **Model real-world entities**: Students, products, coordinates
- **Organize related data**: Keep related information together
- **Improve code clarity**: One struct instead of many variables
- **Build complex data structures**: Lists, trees, databases
- **Bridge to OOP**: Foundation for understanding classes

Structures are essential for organizing data in meaningful ways.

## What are Structures?

A **structure** (struct) is a user-defined data type that groups related variables of different types under one name.

\`\`\`cpp
// Define a structure
struct Student {
    string name;
    int age;
    double gpa;
};

// Create instances
Student alice = {"Alice", 20, 3.8};
Student bob = {"Bob", 21, 3.6};
\`\`\`

Think of a struct as a container that holds related pieces of information together.

## Defining Structures

\`\`\`cpp
// Structure definition
struct Point {
    int x;
    int y;
};

// With typedef (optional)
typedef struct {
    double latitude;
    double longitude;
} Location;

// Modern C++ - using keyword
using Coordinate = struct {
    float x;
    float y;
    float z;
};
\`\`\`

## Creating Struct Variables

\`\`\`cpp
struct Book {
    string title;
    string author;
    int year;
    double price;
};

// Different initialization methods
Book book1;                                    // Uninitialized
Book book2 = {"1984", "Orwell", 1949, 15.99}; // Aggregate initialization
Book book3{"Brave New World", "Huxley", 1932, 14.99}; // C++11 uniform initialization

// Member initialization
Book book4;
book4.title = "The Hobbit";
book4.author = "Tolkien";
book4.year = 1937;
book4.price = 12.99;
\`\`\`

## Accessing Struct Members

Use the dot (.) operator to access members:

\`\`\`cpp
struct Rectangle {
    double length;
    double width;
};

Rectangle rect = {5.0, 3.0};

// Access members
cout << "Length: " << rect.length << endl;
cout << "Width: " << rect.width << endl;

// Modify members
rect.length = 7.0;
rect.width = 4.0;

// Calculate area
double area = rect.length * rect.width;
\`\`\`

## Arrays of Structures

\`\`\`cpp
struct Product {
    string name;
    double price;
    int quantity;
};

// Array of structs
Product inventory[3] = {
    {"Laptop", 899.99, 5},
    {"Mouse", 25.99, 50},
    {"Keyboard", 79.99, 20}
};

// Access elements
for (int i = 0; i < 3; i++) {
    cout << inventory[i].name << ": $" << inventory[i].price << endl;
}
\`\`\`

## Nested Structures

Structures can contain other structures:

\`\`\`cpp
struct Date {
    int day;
    int month;
    int year;
};

struct Employee {
    string name;
    int id;
    Date birthDate;     // Nested struct
    Date hireDate;      // Nested struct
};

// Usage
Employee emp;
emp.name = "John Doe";
emp.id = 12345;
emp.birthDate = {15, 6, 1990};
emp.hireDate = {1, 3, 2020};

cout << "Hired on: " << emp.hireDate.day << "/"
     << emp.hireDate.month << "/" << emp.hireDate.year << endl;
\`\`\`

## Passing Structs to Functions

### Pass by Value
\`\`\`cpp
void displayBook(Book book) {
    cout << book.title << " by " << book.author << endl;
}
// Makes a copy - okay for small structs
\`\`\`

### Pass by Reference (Preferred for large structs)
\`\`\`cpp
void updatePrice(Book& book, double newPrice) {
    book.price = newPrice;
}
// Modifies original, no copying
\`\`\`

### Pass by Const Reference (For read-only)
\`\`\`cpp
double calculateDiscount(const Book& book, double percent) {
    return book.price * (percent / 100.0);
}
// Efficient and safe - cannot modify
\`\`\`

## Returning Structures

\`\`\`cpp
struct Point {
    double x;
    double y;
};

Point createPoint(double x, double y) {
    Point p;
    p.x = x;
    p.y = y;
    return p;
}

// Or with C++11
Point createPoint2(double x, double y) {
    return {x, y};  // Uniform initialization
}
\`\`\`

## Structures with Functions (Member Functions)

In C++, structs can have functions (methods):

\`\`\`cpp
struct Circle {
    double radius;

    // Member function
    double area() {
        return 3.14159 * radius * radius;
    }

    double circumference() {
        return 2 * 3.14159 * radius;
    }
};

Circle c = {5.0};
cout << "Area: " << c.area() << endl;
\`\`\`

## Structs vs Classes

In C++, the only difference is default access:
- **struct**: Members are public by default
- **class**: Members are private by default

\`\`\`cpp
struct Point {
    int x, y;  // Public by default
};

class PointClass {
    int x, y;  // Private by default
public:
    // Need public section for access
};
\`\`\`

**Convention**: Use struct for simple data containers, class for objects with behavior and encapsulation.

## Practical Examples

### 1. Student Record System
\`\`\`cpp
struct Student {
    int id;
    string name;
    double grades[5];

    double calculateAverage() {
        double sum = 0;
        for (int i = 0; i < 5; i++) {
            sum += grades[i];
        }
        return sum / 5.0;
    }
};
\`\`\`

### 2. Inventory Management
\`\`\`cpp
struct Product {
    string sku;
    string name;
    double price;
    int stock;

    double totalValue() {
        return price * stock;
    }

    bool needsReorder() {
        return stock < 10;
    }
};
\`\`\`

### 3. Coordinate System
\`\`\`cpp
struct Point3D {
    double x, y, z;

    double distanceFrom(Point3D other) {
        double dx = x - other.x;
        double dy = y - other.y;
        double dz = z - other.z;
        return sqrt(dx*dx + dy*dy + dz*dz);
    }
};
\`\`\`

## Best Practices

1. **Use meaningful names** for structs and members
2. **Group related data** in one struct
3. **Pass by const reference** for read-only operations
4. **Use member functions** for operations specific to the struct
5. **Initialize structs** to avoid garbage values
6. **Consider classes** when you need encapsulation
7. **Use structs for POD** (Plain Old Data) types

## Common Patterns

### Pattern 1: Configuration Struct
\`\`\`cpp
struct AppConfig {
    int windowWidth;
    int windowHeight;
    string title;
    bool fullscreen;
};

AppConfig config = {1920, 1080, "My App", false};
\`\`\`

### Pattern 2: Return Multiple Values
\`\`\`cpp
struct Statistics {
    double mean;
    double median;
    double stdDev;
};

Statistics calculateStats(const vector<double>& data) {
    // Calculate values
    return {mean, median, stdDev};
}
\`\`\`

### Pattern 3: Linked Data
\`\`\`cpp
struct Node {
    int data;
    Node* next;  // Pointer to next node
};
\`\`\`

## Summary

- **Structures group related data** of different types
- **Use dot operator** to access members
- **Can contain any types** including other structs
- **Pass by reference** for efficiency
- **Can have member functions** like classes
- **Public by default** unlike classes
- **Perfect for data modeling** and organization
- **Foundation for OOP** concepts

Structures are a powerful tool for organizing data and building more complex programs!`,
        codeExample: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Define a Book structure
struct Book {
    string title;
    string author;
    int year;
    double price;

    // Member function
    void display() {
        cout << title << " by " << author
             << " (" << year << ") - $" << price << endl;
    }
};

// Define a Student structure
struct Student {
    int id;
    string name;
    double gpa;
};

// Function to find highest GPA
Student findBestStudent(const vector<Student>& students) {
    Student best = students[0];
    for (const Student& s : students) {
        if (s.gpa > best.gpa) {
            best = s;
        }
    }
    return best;
}

// Rectangle with member functions
struct Rectangle {
    double length;
    double width;

    double area() {
        return length * width;
    }

    double perimeter() {
        return 2 * (length + width);
    }
};

int main() {
    cout << "=== Structures Demo ===" << endl;

    // 1. Create and display books
    cout << "\\n1. Books:" << endl;
    Book book1 = {"1984", "George Orwell", 1949, 15.99};
    Book book2 = {"To Kill a Mockingbird", "Harper Lee", 1960, 18.99};

    book1.display();
    book2.display();

    // 2. Array of structs
    cout << "\\n2. Student Records:" << endl;
    vector<Student> students = {
        {101, "Alice", 3.8},
        {102, "Bob", 3.6},
        {103, "Charlie", 3.9}
    };

    for (const Student& s : students) {
        cout << "ID: " << s.id << ", Name: " << s.name
             << ", GPA: " << s.gpa << endl;
    }

    // Find best student
    Student best = findBestStudent(students);
    cout << "Best student: " << best.name << " with GPA " << best.gpa << endl;

    // 3. Rectangle operations
    cout << "\\n3. Rectangle:" << endl;
    Rectangle rect = {5.0, 3.0};
    cout << "Length: " << rect.length << ", Width: " << rect.width << endl;
    cout << "Area: " << rect.area() << endl;
    cout << "Perimeter: " << rect.perimeter() << endl;

    return 0;
}`,
        practiceExercises: [
          {
            id: 'employee-struct',
            title: 'Employee Management',
            description: 'Create an employee structure and functions to manage employee data',
            difficulty: 'easy',
            hints: [
              'Define struct with id, name, department, salary',
              'Create function to display employee info',
              'Create function to give raise (percentage increase)'
            ],
            solution: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Employee {
    int id;
    string name;
    string department;
    double salary;

    void display() {
        cout << "ID: " << id << ", Name: " << name
             << ", Dept: " << department << ", Salary: $" << salary << endl;
    }

    void giveRaise(double percentage) {
        salary += salary * (percentage / 100.0);
    }
};

int main() {
    Employee emp1 = {101, "John Doe", "Engineering", 75000};
    Employee emp2 = {102, "Jane Smith", "Marketing", 65000};

    cout << "Before raises:" << endl;
    emp1.display();
    emp2.display();

    emp1.giveRaise(10);  // 10% raise
    emp2.giveRaise(15);  // 15% raise

    cout << "\\nAfter raises:" << endl;
    emp1.display();
    emp2.display();

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'cout'],
                outputPattern: '.*' // Should use classes and objects
              }
            ]
          },
          {
            id: 'point-distance',
            title: 'Point Distance Calculator',
            description: 'Create a Point struct and calculate distance between two points',
            difficulty: 'medium',
            hints: [
              'Use struct with x and y coordinates',
              'Distance formula: sqrt((x2-x1)² + (y2-y1)²)',
              'Include cmath for sqrt function'
            ],
            solution: `#include <iostream>
#include <cmath>
using namespace std;

struct Point {
    double x;
    double y;

    double distanceTo(Point other) {
        double dx = x - other.x;
        double dy = y - other.y;
        return sqrt(dx * dx + dy * dy);
    }

    void display() {
        cout << "(" << x << ", " << y << ")";
    }
};

int main() {
    Point p1 = {0, 0};
    Point p2 = {3, 4};
    Point p3 = {6, 8};

    cout << "Point 1: "; p1.display(); cout << endl;
    cout << "Point 2: "; p2.display(); cout << endl;
    cout << "Point 3: "; p3.display(); cout << endl;

    cout << "\\nDistances:" << endl;
    cout << "P1 to P2: " << p1.distanceTo(p2) << endl;
    cout << "P1 to P3: " << p1.distanceTo(p3) << endl;
    cout << "P2 to P3: " << p2.distanceTo(p3) << endl;

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'function', 'cout'],
                outputPattern: '.*' // Should use classes with member functions
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'c-style-strings',
        title: 'C-Style Strings',
        description: 'Work with character arrays and C-style strings',
        duration: '55 min',
        difficulty: 'beginner',
        topics: ['char arrays', 'cstring library', 'String functions'],
        content: `# C-Style Strings

C-style strings are null-terminated character arrays. Understanding them helps with legacy code and system programming.

## Key Concepts
- Null terminator ('\\0') marks end
- Fixed size character arrays
- cstring library functions: strlen, strcpy, strcat, strcmp

## Example
\`\`\`cpp
char str[] = "Hello";  // Stored as: 'H','e','l','l','o','\\0'
\`\`\``,
        codeExample: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char str1[50] = "Hello";
    char str2[50] = "World";

    cout << "Length: " << strlen(str1) << endl;
    strcat(str1, " ");
    strcat(str1, str2);
    cout << "Result: " << str1 << endl;

    return 0;
}`,
        practiceExercises: [{
          id: 'cstring-copy',
          title: 'String Copy',
          description: 'Copy one C-string to another',
          difficulty: 'easy',
          hints: ['Use strcpy or manual loop'],
          solution: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char source[] = "Hello";
    char dest[50];
    strcpy(dest, source);
    cout << dest << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use C-style strings
          }]
        }],
        completed: false
      },
      {
        id: 'file-input',
        title: 'File Input',
        description: 'Read data from files using ifstream',
        duration: '60 min',
        difficulty: 'beginner',
        topics: ['ifstream', 'File reading', 'getline'],
        content: `# File Input

Reading from files allows programs to process external data.

## Key Concepts
- Use ifstream for input
- Check if file opened successfully
- Read with >> or getline()
- Close files when done

## Example
\`\`\`cpp
ifstream file("data.txt");
if (file.is_open()) {
    string line;
    while (getline(file, line)) {
        cout << line << endl;
    }
    file.close();
}
\`\`\``,
        codeExample: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream inFile("test.txt");

    if (!inFile) {
        cerr << "Error opening file!" << endl;
        return 1;
    }

    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }

    inFile.close();
    return 0;
}`,
        practiceExercises: [{
          id: 'count-lines',
          title: 'Count File Lines',
          description: 'Count lines in a text file',
          difficulty: 'easy',
          hints: ['Use getline in loop', 'Increment counter'],
          solution: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream file("input.txt");
    string line;
    int count = 0;

    while (getline(file, line)) {
        count++;
    }

    cout << "Lines: " << count << endl;
    file.close();
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use file input operations
          }]
        }],
        completed: false
      },
      {
        id: 'file-output',
        title: 'File Output',
        description: 'Write data to files using ofstream',
        duration: '55 min',
        difficulty: 'beginner',
        topics: ['ofstream', 'File writing', 'Append mode'],
        content: `# File Output

Writing to files enables data persistence.

## Key Concepts
- Use ofstream for output
- Default mode overwrites
- ios::app for append mode
- Format output with iomanip

## Example
\`\`\`cpp
ofstream file("output.txt");
file << "Hello World" << endl;
file.close();
\`\`\``,
        codeExample: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("output.txt");

    if (!outFile) {
        cerr << "Error creating file!" << endl;
        return 1;
    }

    outFile << "Name: Alice" << endl;
    outFile << "Score: 95" << endl;

    outFile.close();
    cout << "Data written successfully" << endl;

    return 0;
}`,
        practiceExercises: [{
          id: 'write-numbers',
          title: 'Write Numbers',
          description: 'Write numbers 1-10 to file',
          difficulty: 'easy',
          hints: ['Use loop', 'Write each number'],
          solution: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream file("numbers.txt");

    for (int i = 1; i <= 10; i++) {
        file << i << endl;
    }

    file.close();
    cout << "Numbers written" << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout', 'for'],
            outputPattern: '.*' // Should use file output operations
          }]
        }],
        completed: false
      }
    ],
    finalProject: {
      id: 'beginner-final-project',
      title: 'Personal Finance Calculator',
      description: 'Build a comprehensive personal finance calculator that helps users manage their budget, calculate savings, and track expenses.',
      requirements: [
        'Create a menu-driven program with multiple options',
        'Implement functions for different calculations',
        'Use arrays to store multiple entries',
        'Include input validation and error handling',
        'Provide formatted output with clear results'
      ],
      features: [
        'Budget calculator with income and expenses',
        'Savings goal calculator with timeline',
        'Loan payment calculator',
        'Expense tracker with categories',
        'Monthly budget summary',
        'Data persistence between menu selections'
      ],
      estimatedTime: '4-6 hours',
      difficulty: 'beginner',
      technologies: ['C++ Fundamentals', 'Functions', 'Arrays', 'Control Flow', 'Input/Output'],
      starterCode: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

// Function declarations
void displayMenu();
void budgetCalculator();
void savingsCalculator();
void loanCalculator();
void expenseTracker();

int main() {
    int choice;
    
    do {
        displayMenu();
        cout << "Enter your choice (0 to exit): ";
        cin >> choice;
        
        switch (choice) {
            case 1:
                budgetCalculator();
                break;
            case 2:
                savingsCalculator();
                break;
            case 3:
                loanCalculator();
                break;
            case 4:
                expenseTracker();
                break;
            case 0:
                cout << "Thank you for using Personal Finance Calculator!" << endl;
                break;
            default:
                cout << "Invalid choice! Please try again." << endl;
        }
        
        if (choice != 0) {
            cout << "\\nPress Enter to continue...";
            cin.ignore();
            cin.get();
        }
        
    } while (choice != 0);
    
    return 0;
}

void displayMenu() {
    cout << "\\n=== Personal Finance Calculator ===" << endl;
    cout << "1. Budget Calculator" << endl;
    cout << "2. Savings Calculator" << endl;
    cout << "3. Loan Calculator" << endl;
    cout << "4. Expense Tracker" << endl;
    cout << "0. Exit" << endl;
}

// TODO: Implement the remaining functions
void budgetCalculator() {
    // Your implementation here
}

void savingsCalculator() {
    // Your implementation here
}

void loanCalculator() {
    // Your implementation here
}

void expenseTracker() {
    // Your implementation here
}`
    }
  },
  {
    id: 'intermediate-cpp',
    title: 'Object-Oriented Programming',
    description: 'Learn OOP concepts, classes, inheritance, and polymorphism',
    level: 'intermediate',
    duration: '8-10 weeks',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c902507c-d2d9-4ac3-b37a-09ad25c2a7ac.png',
    prerequisites: ['C++ Fundamentals', 'Basic programming concepts'],
    learningOutcomes: [
      'Design and implement classes',
      'Understand inheritance and polymorphism',
      'Work with constructors and destructors',
      'Implement operator overloading',
      'Use advanced OOP patterns'
    ],
    lessons: [
      {
        id: 'classes-objects',
        title: 'Classes and Objects Fundamentals',
        description: 'Deep dive into object-oriented programming with classes, objects, and encapsulation',
        duration: '90 min',
        difficulty: 'intermediate',
        topics: ['Class definition', 'Objects', 'Constructors', 'Destructors', 'Member functions', 'Access specifiers', 'Encapsulation', 'this pointer'],
        content: `# Classes and Objects Fundamentals

## Learning Objectives
- Understand the fundamental principles of Object-Oriented Programming
- Learn to define and use classes and objects in C++
- Master encapsulation and access control
- Implement constructors and destructors
- Work with the 'this' pointer effectively

## Why This Matters

Object-Oriented Programming (OOP) is a paradigm shift from procedural programming. Instead of thinking about programs as a series of instructions operating on data, OOP encourages you to think about programs as collections of objects that interact with each other.

Think of a car: In procedural programming, you might have separate variables for color, speed, fuel, and separate functions to accelerate(), brake(), and refuel(). In OOP, all these are bundled together into a Car object that knows how to manage its own state and behavior.

This bundling makes code more maintainable, reusable, and intuitive. Real-world software systems—from web browsers to operating systems to games—are built using OOP principles because they help manage complexity.

## The Philosophy of Object-Oriented Programming

**Encapsulation**: Bundling data and the methods that operate on that data together. A class is like a capsule that contains both data (member variables) and functions (member functions).

**Data Hiding**: Restricting direct access to some of an object's components. This is achieved through access specifiers (private, public, protected). Users of your class don't need to know *how* it works internally, only *what* it can do.

**Real-World Modeling**: OOP lets you model real-world entities naturally. A BankAccount class models a real bank account with balance, deposits, and withdrawals.

## Classes vs Structs in C++

In C++, both \`class\` and \`struct\` can be used to define objects. The only difference:
- **struct**: Members are public by default
- **class**: Members are private by default

**Convention**: Use \`struct\` for simple data holders (POD - Plain Old Data). Use \`class\` for objects with behavior and encapsulation.

## Access Specifiers Deep Dive

C++ provides three access specifiers:

**private**: Members are accessible only within the class itself. This is the default for classes.
\`\`\`cpp
class Example {
private:  // optional, private by default
    int secretData;  // Only Example member functions can access this
};
\`\`\`

**public**: Members are accessible from anywhere the object is accessible.
\`\`\`cpp
class Example {
public:
    void doSomething() { }  // Anyone can call this
};
\`\`\`

**protected**: Members are accessible within the class and by derived classes (we'll cover this in inheritance).

## The 'this' Pointer

Every member function has access to a special pointer called \`this\` that points to the object that called the function.

\`\`\`cpp
class Person {
private:
    string name;
public:
    void setName(string name) {
        this->name = name;  // 'this->name' is the member, 'name' is the parameter
    }
};
\`\`\`

The \`this\` pointer is useful when:
1. Parameter names shadow member variable names
2. You need to return the object itself
3. You want to pass the current object to another function

## Constructors: Initializing Objects

A **constructor** is a special member function that's automatically called when an object is created. It has the same name as the class and no return type.

**Types of Constructors**:

1. **Default Constructor**: Takes no parameters
\`\`\`cpp
class Box {
public:
    Box() {
        // Initialize with default values
    }
};
\`\`\`

2. **Parameterized Constructor**: Takes parameters to initialize the object
\`\`\`cpp
class Box {
public:
    Box(int w, int h) : width(w), height(h) {
        // Member initialization list (preferred)
    }
private:
    int width, height;
};
\`\`\`

3. **Initialization Lists**: The preferred way to initialize members (especially for const members and references)
\`\`\`cpp
Box(int w, int h) : width(w), height(h) { }
// Better than:
// Box(int w, int h) { width = w; height = h; }
\`\`\`

## Destructors: Cleanup

A **destructor** is called automatically when an object is destroyed (goes out of scope or is deleted). It has the same name as the class with a \`~\` prefix.

\`\`\`cpp
class FileHandler {
public:
    FileHandler(string filename) {
        // Open file
    }

    ~FileHandler() {
        // Close file automatically when object is destroyed
    }
};
\`\`\`

This is the foundation of RAII (Resource Acquisition Is Initialization)—resources are tied to object lifetime.

## Step-by-Step Example: Building a BankAccount Class

Let's build a BankAccount class from scratch:

**Step 1: Define the class structure**
\`\`\`cpp
class BankAccount {
private:
    string accountNumber;
    string holderName;
    double balance;

public:
    // Constructor
    BankAccount(string accNum, string name, double initialBalance);

    // Member functions
    void deposit(double amount);
    bool withdraw(double amount);
    double getBalance() const;
    void displayInfo() const;
};
\`\`\`

**Step 2: Implement the constructor**
\`\`\`cpp
BankAccount::BankAccount(string accNum, string name, double initialBalance)
    : accountNumber(accNum), holderName(name), balance(initialBalance) {
    if (balance < 0) {
        balance = 0;  // Ensure non-negative balance
    }
}
\`\`\`

**Step 3: Implement member functions**
\`\`\`cpp
void BankAccount::deposit(double amount) {
    if (amount > 0) {
        balance += amount;
        cout << "Deposited: $" << amount << endl;
    }
}

bool BankAccount::withdraw(double amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        cout << "Withdrawn: $" << amount << endl;
        return true;
    }
    return false;
}

double BankAccount::getBalance() const {
    return balance;  // const means this doesn't modify the object
}
\`\`\`

## Common OOP Mistakes

**Mistake 1: Forgetting access specifiers**
\`\`\`cpp
class Bad {
    int value;  // Private by default, inaccessible!
};
// Fix: Add 'public:' before members you want accessible
\`\`\`

**Mistake 2: Not using const for getter functions**
\`\`\`cpp
double getBalance() { return balance; }  // Should be const
// Fix:
double getBalance() const { return balance; }
\`\`\`

**Mistake 3: Public data members (breaking encapsulation)**
\`\`\`cpp
class Bad {
public:
    double balance;  // Anyone can modify directly!
};
// Fix: Make private, provide controlled access through methods
\`\`\`

## Best Practices

1. **Keep data members private**: Provide public getter/setter methods for controlled access
2. **Use initialization lists**: They're more efficient than assignment in constructor body
3. **Mark const methods as const**: If a method doesn't modify the object, mark it const
4. **Single Responsibility**: Each class should have one clear purpose
5. **Constructor validation**: Validate parameters in constructors to ensure valid state
6. **RAII**: Use constructors to acquire resources, destructors to release them

## Real-World Applications

**Game Development**: Player, Enemy, Weapon classes encapsulate game entity behavior
**Banking Software**: Account, Transaction, Customer classes model banking operations
**GUI Applications**: Button, Window, Menu classes represent UI components
**Database Systems**: Connection, Query, ResultSet classes manage database operations

## Summary

Classes are the foundation of OOP in C++. They allow you to:
- Bundle data and functions together (encapsulation)
- Hide implementation details (data hiding)
- Model real-world entities naturally
- Create reusable, maintainable code

Key concepts:
- Classes define blueprints, objects are instances
- Access specifiers control visibility (private, public, protected)
- Constructors initialize objects
- Destructors clean up resources
- The 'this' pointer refers to the current object
- Const member functions promise not to modify the object`,
        codeExample: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountNumber;
    string holderName;
    double balance;

public:
    // Constructor with initialization list
    BankAccount(string accNum, string name, double initialBalance)
        : accountNumber(accNum), holderName(name), balance(initialBalance) {
        if (balance < 0) {
            balance = 0;
        }
        cout << "Account created for " << holderName << endl;
    }

    // Destructor
    ~BankAccount() {
        cout << "Account " << accountNumber << " closed" << endl;
    }

    // Deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: $" << amount << endl;
        } else {
            cout << "Invalid deposit amount" << endl;
        }
    }

    // Withdraw money
    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn: $" << amount << endl;
            return true;
        }
        cout << "Insufficient funds or invalid amount" << endl;
        return false;
    }

    // Get balance (const method)
    double getBalance() const {
        return balance;
    }

    // Display account info
    void displayInfo() const {
        cout << "\\n=== Account Information ===" << endl;
        cout << "Account Number: " << accountNumber << endl;
        cout << "Holder Name: " << holderName << endl;
        cout << "Balance: $" << balance << endl;
    }

    // Transfer money to another account
    bool transferTo(BankAccount& other, double amount) {
        if (withdraw(amount)) {
            other.deposit(amount);
            return true;
        }
        return false;
    }
};

int main() {
    // Create accounts
    BankAccount alice("ACC001", "Alice Johnson", 1000.0);
    BankAccount bob("ACC002", "Bob Smith", 500.0);

    // Perform operations
    alice.displayInfo();
    bob.displayInfo();

    alice.deposit(200);
    alice.withdraw(150);

    cout << "\\nTransferring $300 from Alice to Bob..." << endl;
    alice.transferTo(bob, 300);

    alice.displayInfo();
    bob.displayInfo();

    return 0;
}`,
        practiceExercises: [
          {
            id: 'book-class',
            title: 'Create a Book Class',
            description: 'Design a Book class with title, author, ISBN, and availability status',
            difficulty: 'easy',
            hints: [
              'Use private members for all data',
              'Create a constructor to initialize all fields',
              'Add methods to check out and return the book',
              'Include a method to display book information'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

class Book {
private:
    string title;
    string author;
    string isbn;
    bool isAvailable;

public:
    Book(string t, string a, string i)
        : title(t), author(a), isbn(i), isAvailable(true) { }

    bool checkOut() {
        if (isAvailable) {
            isAvailable = false;
            cout << "Book checked out successfully" << endl;
            return true;
        }
        cout << "Book is not available" << endl;
        return false;
    }

    void returnBook() {
        isAvailable = true;
        cout << "Book returned successfully" << endl;
    }

    void display() const {
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
        cout << "ISBN: " << isbn << endl;
        cout << "Available: " << (isAvailable ? "Yes" : "No") << endl;
    }
};

int main() {
    Book book("The C++ Programming Language", "Bjarne Stroustrup", "978-0321563842");
    book.display();
    book.checkOut();
    book.display();
    book.returnBook();
    book.display();
    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'cout'],
                outputPattern: '.*' // Should use classes with member functions
              }
            ]
          },
          {
            id: 'rectangle-class',
            title: 'Rectangle Class with Area and Perimeter',
            description: 'Create a Rectangle class that calculates area and perimeter',
            difficulty: 'easy',
            hints: [
              'Store length and width as private members',
              'Area = length * width',
              'Perimeter = 2 * (length + width)',
              'Add validation in constructor'
            ],
            solution: `#include <iostream>
using namespace std;

class Rectangle {
private:
    double length;
    double width;

public:
    Rectangle(double l, double w) : length(l), width(w) {
        if (length <= 0) length = 1;
        if (width <= 0) width = 1;
    }

    double area() const {
        return length * width;
    }

    double perimeter() const {
        return 2 * (length + width);
    }

    void display() const {
        cout << "Rectangle: " << length << " x " << width << endl;
        cout << "Area: " << area() << endl;
        cout << "Perimeter: " << perimeter() << endl;
    }
};

int main() {
    Rectangle rect(5.0, 3.0);
    rect.display();
    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'cout'],
                outputPattern: '.*' // Should use classes with constructors
              }
            ]
          },
          {
            id: 'student-class',
            title: 'Student Class with GPA Calculation',
            description: 'Build a Student class that stores grades and calculates GPA',
            difficulty: 'medium',
            hints: [
              'Use an array to store multiple grades',
              'Add a counter for number of grades',
              'GPA = sum of grades / number of grades',
              'Include methods to add grades and display info'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int studentId;
    double grades[10];
    int gradeCount;

public:
    Student(string n, int id) : name(n), studentId(id), gradeCount(0) { }

    void addGrade(double grade) {
        if (gradeCount < 10 && grade >= 0 && grade <= 100) {
            grades[gradeCount++] = grade;
        }
    }

    double calculateGPA() const {
        if (gradeCount == 0) return 0.0;
        double sum = 0;
        for (int i = 0; i < gradeCount; i++) {
            sum += grades[i];
        }
        return sum / gradeCount / 25.0;  // Convert to 4.0 scale
    }

    void display() const {
        cout << "Student: " << name << " (ID: " << studentId << ")" << endl;
        cout << "Grades: ";
        for (int i = 0; i < gradeCount; i++) {
            cout << grades[i] << " ";
        }
        cout << "\\nGPA: " << calculateGPA() << endl;
    }
};

int main() {
    Student student("John Doe", 12345);
    student.addGrade(85.0);
    student.addGrade(90.0);
    student.addGrade(78.0);
    student.display();
    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'cout'],
                outputPattern: '.*' // Should use classes with member functions
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'inheritance',
        title: 'Inheritance and Code Reusability',
        description: 'Master inheritance hierarchies, base and derived classes, and method overriding',
        duration: '85 min',
        difficulty: 'intermediate',
        topics: ['Base classes', 'Derived classes', 'Protected members', 'Method overriding', 'Constructor chaining', 'is-a relationship'],
        content: `# Inheritance and Code Reusability

## Learning Objectives
- Understand inheritance and the is-a relationship
- Learn to create base and derived classes
- Master protected access specifier
- Implement method overriding
- Understand constructor and destructor order in inheritance
- Apply inheritance to real-world problems

## Why This Matters

Inheritance is one of the fundamental pillars of Object-Oriented Programming. It allows you to create new classes based on existing ones, promoting code reusability and establishing hierarchical relationships between classes.

Think of biological classification: A Dog is an Animal. A Dog inherits characteristics from Animal (breathing, eating, moving) but adds its own specific behaviors (barking, wagging tail). Similarly in programming, inheritance lets you build specialized classes from general ones without rewriting common functionality.

This principle dramatically reduces code duplication and makes your codebase more maintainable. When you fix a bug or add a feature to the base class, all derived classes automatically benefit.

## The IS-A Relationship

Inheritance represents an "is-a" relationship:
- A Dog **is an** Animal
- A Car **is a** Vehicle
- A SavingsAccount **is a** BankAccount
- A Manager **is an** Employee

This is different from composition ("has-a" relationship) which we'll cover later. If you can say "X is a Y," inheritance might be appropriate.

## Basic Inheritance Syntax

\`\`\`cpp
// Base class (also called parent or superclass)
class Animal {
protected:  // Accessible in derived classes
    string name;
    int age;

public:
    Animal(string n, int a) : name(n), age(a) { }

    void eat() {
        cout << name << " is eating" << endl;
    }

    void sleep() {
        cout << name << " is sleeping" << endl;
    }
};

// Derived class (also called child or subclass)
class Dog : public Animal {  // public inheritance
private:
    string breed;

public:
    Dog(string n, int a, string b) : Animal(n, a), breed(b) { }

    // Dog-specific method
    void bark() {
        cout << name << " says: Woof!" << endl;
    }
};
\`\`\`

## Access Specifiers in Inheritance

**protected**: The key to inheritance. Protected members are:
- Accessible within the class itself
- Accessible in derived classes
- **Not** accessible from outside the class

\`\`\`cpp
class Base {
private:
    int privateData;    // Derived classes CANNOT access
protected:
    int protectedData;  // Derived classes CAN access
public:
    int publicData;     // Everyone can access
};
\`\`\`

## Types of Inheritance Access

When inheriting, you specify the access level:

**public inheritance** (most common):
- Public members remain public
- Protected members remain protected
- Used for is-a relationships

\`\`\`cpp
class Dog : public Animal { };  // Dog IS AN Animal
\`\`\`

**protected inheritance**:
- Public and protected members become protected
- Rarely used

**private inheritance**:
- All members become private
- Rarely used; composition is often better

## Constructor Chaining

When you create a derived class object, constructors are called in this order:
1. Base class constructor
2. Derived class constructor

Destructors are called in reverse order:
1. Derived class destructor
2. Base class destructor

\`\`\`cpp
class Vehicle {
public:
    Vehicle() {
        cout << "Vehicle constructor" << endl;
    }

    ~Vehicle() {
        cout << "Vehicle destructor" << endl;
    }
};

class Car : public Vehicle {
public:
    Car() {
        cout << "Car constructor" << endl;
    }

    ~Car() {
        cout << "Car destructor" << endl;
    }
};

// Creating Car prints:
// Vehicle constructor
// Car constructor
// (then when destroyed)
// Car destructor
// Vehicle destructor
\`\`\`

## Method Overriding

Derived classes can override (replace) base class methods:

\`\`\`cpp
class Animal {
public:
    void makeSound() {
        cout << "Some generic animal sound" << endl;
    }
};

class Dog : public Animal {
public:
    void makeSound() {  // Overrides Animal::makeSound()
        cout << "Woof! Woof!" << endl;
    }
};

Dog d;
d.makeSound();  // Prints: Woof! Woof!
\`\`\`

Note: This is different from **overloading** (multiple functions with same name but different parameters in the same class). This is **overriding** (replacing a base class method in a derived class).

## Calling Base Class Methods

Sometimes you want to call the base class version of an overridden method:

\`\`\`cpp
class Employee {
public:
    void displayInfo() {
        cout << "Employee information" << endl;
    }
};

class Manager : public Employee {
public:
    void displayInfo() {
        Employee::displayInfo();  // Call base class version
        cout << "Manager-specific information" << endl;
    }
};
\`\`\`

## Multiple Levels of Inheritance

You can create inheritance hierarchies:

\`\`\`cpp
class LivingThing {  // Base
    // ...
};

class Animal : public LivingThing {  // Derived from LivingThing
    // ...
};

class Dog : public Animal {  // Derived from Animal
    // ...
};
// Dog inherits from both Animal and LivingThing
\`\`\`

## Common Mistakes

**Mistake 1: Using private instead of protected**
\`\`\`cpp
class Base {
private:
    int value;  // Derived classes CANNOT access!
};

class Derived : public Base {
    void test() {
        value = 10;  // ERROR! value is private
    }
};
\`\`\`
Fix: Use \`protected\` for data you want derived classes to access.

**Mistake 2: Forgetting to call base constructor**
\`\`\`cpp
class Derived : public Base {
public:
    Derived() {  // Base constructor not called explicitly!
        // If Base has parameterized constructor, this won't compile
    }
};
\`\`\`
Fix: Use initialization list to call base constructor.

**Mistake 3: Confusing overriding with hiding**
\`\`\`cpp
class Base {
public:
    void func(int x) { }
};

class Derived : public Base {
public:
    void func() { }  // Hides Base::func(int), doesn't override!
};
\`\`\`

## Best Practices

1. **Use public inheritance for is-a relationships**: This is the most common and intuitive use
2. **Mark base class destructors as virtual**: We'll cover this in polymorphism, but it's crucial
3. **Use protected for data meant for derived classes**: Don't make everything public
4. **Call base constructors explicitly**: Use initialization lists
5. **Override thoughtfully**: Only override when derived class truly needs different behavior
6. **Document inheritance hierarchies**: Comment why classes inherit and what they add

## Real-World Applications

**Game Development**:
- Entity → Player, Enemy, NPC
- Weapon → Sword, Gun, Bow

**UI Frameworks**:
- Widget → Button, TextBox, Slider

**Employee Management**:
- Employee → Manager, Engineer, Intern

**Banking Systems**:
- Account → SavingsAccount, CheckingAccount, InvestmentAccount

## Summary

Inheritance is a powerful tool for code reuse and creating hierarchical relationships. Key points:
- Derived classes inherit members from base classes
- Use **public** inheritance for is-a relationships
- **Protected** members are accessible in derived classes
- Constructors are called base-to-derived, destructors derived-to-base
- Derived classes can **override** base class methods
- Use inheritance when there's a clear is-a relationship

In the next lesson, we'll explore polymorphism, which makes inheritance even more powerful through virtual functions.`,
        codeExample: `#include <iostream>
#include <string>
using namespace std;

// Base class
class Vehicle {
protected:
    string brand;
    int year;
    double price;

public:
    Vehicle(string b, int y, double p)
        : brand(b), year(y), price(p) {
        cout << "Vehicle constructor called" << endl;
    }

    virtual ~Vehicle() {
        cout << "Vehicle destructor called" << endl;
    }

    void displayInfo() {
        cout << "Brand: " << brand << endl;
        cout << "Year: " << year << endl;
        cout << "Price: $" << price << endl;
    }

    void start() {
        cout << brand << " is starting..." << endl;
    }
};

// Derived class
class Car : public Vehicle {
private:
    int numDoors;
    string fuelType;

public:
    Car(string b, int y, double p, int doors, string fuel)
        : Vehicle(b, y, p), numDoors(doors), fuelType(fuel) {
        cout << "Car constructor called" << endl;
    }

    ~Car() {
        cout << "Car destructor called" << endl;
    }

    // Override displayInfo to add car-specific details
    void displayInfo() {
        Vehicle::displayInfo();  // Call base class version
        cout << "Doors: " << numDoors << endl;
        cout << "Fuel: " << fuelType << endl;
    }

    void honk() {
        cout << brand << " goes beep beep!" << endl;
    }
};

// Another derived class
class Motorcycle : public Vehicle {
private:
    string type;

public:
    Motorcycle(string b, int y, double p, string t)
        : Vehicle(b, y, p), type(t) {
        cout << "Motorcycle constructor called" << endl;
    }

    ~Motorcycle() {
        cout << "Motorcycle destructor called" << endl;
    }

    void displayInfo() {
        Vehicle::displayInfo();
        cout << "Type: " << type << endl;
    }

    void wheelie() {
        cout << brand << " is doing a wheelie!" << endl;
    }
};

int main() {
    cout << "=== Creating a Car ===" << endl;
    Car myCar("Toyota", 2023, 25000, 4, "Gasoline");
    myCar.displayInfo();
    myCar.start();
    myCar.honk();

    cout << "\\n=== Creating a Motorcycle ===" << endl;
    Motorcycle myBike("Harley", 2022, 15000, "Cruiser");
    myBike.displayInfo();
    myBike.start();
    myBike.wheelie();

    cout << "\\n=== Objects being destroyed ===" << endl;
    return 0;
}`,
        practiceExercises: [
          {
            id: 'shape-inheritance',
            title: 'Shape Hierarchy',
            description: 'Create a Shape base class and derive Circle and Rectangle classes',
            difficulty: 'medium',
            hints: [
              'Shape should have protected name member',
              'Each derived class should calculate its own area',
              'Use constructors to initialize the shape name',
              'Override a display method in each derived class'
            ],
            solution: `#include <iostream>
#include <string>
#include <cmath>
using namespace std;

class Shape {
protected:
    string name;

public:
    Shape(string n) : name(n) { }

    virtual void displayInfo() {
        cout << "Shape: " << name << endl;
    }

    virtual double area() = 0;  // Pure virtual (covered later)
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : Shape("Circle"), radius(r) { }

    double area() {
        return 3.14159 * radius * radius;
    }

    void displayInfo() {
        Shape::displayInfo();
        cout << "Radius: " << radius << endl;
        cout << "Area: " << area() << endl;
    }
};

class Rectangle : public Shape {
private:
    double length, width;

public:
    Rectangle(double l, double w) : Shape("Rectangle"), length(l), width(w) { }

    double area() {
        return length * width;
    }

    void displayInfo() {
        Shape::displayInfo();
        cout << "Length: " << length << ", Width: " << width << endl;
        cout << "Area: " << area() << endl;
    }
};

int main() {
    Circle c(5.0);
    Rectangle r(4.0, 6.0);

    c.displayInfo();
    cout << endl;
    r.displayInfo();

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'cout'],
                outputPattern: '.*' // Should use inheritance
              }
            ]
          },
          {
            id: 'employee-hierarchy',
            title: 'Employee Management System',
            description: 'Create Employee base class and Manager/Engineer derived classes',
            difficulty: 'medium',
            hints: [
              'Employee should have name, ID, and base salary',
              'Manager gets bonus percentage',
              'Engineer gets specialization',
              'Each calculates total compensation differently'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

class Employee {
protected:
    string name;
    int employeeId;
    double baseSalary;

public:
    Employee(string n, int id, double salary)
        : name(n), employeeId(id), baseSalary(salary) { }

    virtual void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "ID: " << employeeId << endl;
        cout << "Base Salary: $" << baseSalary << endl;
    }

    virtual double calculatePay() {
        return baseSalary;
    }
};

class Manager : public Employee {
private:
    double bonusPercentage;

public:
    Manager(string n, int id, double salary, double bonus)
        : Employee(n, id, salary), bonusPercentage(bonus) { }

    void displayInfo() {
        Employee::displayInfo();
        cout << "Role: Manager" << endl;
        cout << "Bonus: " << bonusPercentage << "%" << endl;
        cout << "Total Pay: $" << calculatePay() << endl;
    }

    double calculatePay() {
        return baseSalary * (1 + bonusPercentage / 100);
    }
};

class Engineer : public Employee {
private:
    string specialization;

public:
    Engineer(string n, int id, double salary, string spec)
        : Employee(n, id, salary), specialization(spec) { }

    void displayInfo() {
        Employee::displayInfo();
        cout << "Role: Engineer" << endl;
        cout << "Specialization: " << specialization << endl;
    }
};

int main() {
    Manager mgr("Alice", 101, 80000, 20);
    Engineer eng("Bob", 102, 70000, "Software");

    mgr.displayInfo();
    cout << endl;
    eng.displayInfo();

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'cout'],
                outputPattern: '.*' // Should use inheritance with polymorphism
              }
            ]
          },
          {
            id: 'account-inheritance',
            title: 'Bank Account Types',
            description: 'Create Account base class with SavingsAccount and CheckingAccount derived classes',
            difficulty: 'hard',
            hints: [
              'Base Account should have balance and account number',
              'SavingsAccount earns interest',
              'CheckingAccount has overdraft limit',
              'Override withdraw method for different behavior'
            ],
            solution: `#include <iostream>
#include <string>
using namespace std;

class Account {
protected:
    string accountNumber;
    double balance;

public:
    Account(string accNum, double bal)
        : accountNumber(accNum), balance(bal) { }

    virtual void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: $" << amount << endl;
        }
    }

    virtual bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn: $" << amount << endl;
            return true;
        }
        return false;
    }

    virtual void displayInfo() {
        cout << "Account: " << accountNumber << endl;
        cout << "Balance: $" << balance << endl;
    }
};

class SavingsAccount : public Account {
private:
    double interestRate;

public:
    SavingsAccount(string accNum, double bal, double rate)
        : Account(accNum, bal), interestRate(rate) { }

    void addInterest() {
        double interest = balance * interestRate / 100;
        balance += interest;
        cout << "Interest added: $" << interest << endl;
    }

    void displayInfo() {
        Account::displayInfo();
        cout << "Interest Rate: " << interestRate << "%" << endl;
    }
};

class CheckingAccount : public Account {
private:
    double overdraftLimit;

public:
    CheckingAccount(string accNum, double bal, double limit)
        : Account(accNum, bal), overdraftLimit(limit) { }

    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance + overdraftLimit) {
            balance -= amount;
            cout << "Withdrawn: $" << amount << endl;
            if (balance < 0) {
                cout << "Overdraft used: $" << -balance << endl;
            }
            return true;
        }
        cout << "Exceeds overdraft limit" << endl;
        return false;
    }

    void displayInfo() {
        Account::displayInfo();
        cout << "Overdraft Limit: $" << overdraftLimit << endl;
    }
};

int main() {
    SavingsAccount savings("SAV001", 1000, 2.5);
    CheckingAccount checking("CHK001", 500, 200);

    savings.displayInfo();
    savings.addInterest();
    cout << endl;

    checking.displayInfo();
    checking.withdraw(600);
    checking.displayInfo();

    return 0;
}`,
            testCases: [
              { 
                input: '', 
                requiredConstructs: ['class', 'cout'],
                outputPattern: '.*' // Should use inheritance with virtual functions
              }
            ]
          }
        ],
        completed: false
      },
      {
        id: 'constructors-destructors',
        title: 'Constructors and Destructors Mastery',
        description: 'Deep dive into constructor types, initialization lists, and RAII pattern',
        duration: '85 min',
        difficulty: 'intermediate',
        topics: ['Default constructors', 'Parameterized constructors', 'Initialization lists', 'Delegating constructors', 'Destructor order', 'RAII pattern', 'Rule of Zero'],
        content: `# Constructors and Destructors Mastery

Constructors and destructors are fundamental to C++ object lifetime management. This lesson explores all constructor types, initialization techniques, and the crucial RAII pattern that makes C++ unique among programming languages.

## Constructor Types

**Default Constructor**: No parameters, provides default initialization
**Parameterized Constructor**: Takes arguments to customize initialization
**Copy Constructor**: Creates object as copy of existing object
**Initialization Lists**: The most efficient way to initialize members

## RAII Pattern

Resource Acquisition Is Initialization - resources are tied to object lifetime. When object is created, resources are acquired. When object is destroyed, resources are automatically released. This prevents resource leaks.

## Best Practices

- Use initialization lists instead of assignment in constructor body
- Mark single-parameter constructors as explicit to prevent implicit conversions
- Follow Rule of Zero: if you can avoid custom destructors, do so
- Use RAII for all resource management (files, memory, locks, etc.)`,
        codeExample: `#include <iostream>
using namespace std;

class Resource {
private:
    int* data;
    int size;

public:
    // Constructor with initialization list
    Resource(int s) : size(s), data(new int[s]) {
        cout << "Resource acquired" << endl;
        for (int i = 0; i < size; i++) data[i] = 0;
    }

    // Destructor (RAII cleanup)
    ~Resource() {
        delete[] data;
        cout << "Resource released" << endl;
    }

    void set(int index, int value) {
        if (index >= 0 && index < size) {
            data[index] = value;
        }
    }
};

int main() {
    Resource r(10);
    r.set(0, 42);
    return 0;  // Destructor called automatically
}`,
        practiceExercises: [{
          id: 'file-handler-raii',
          title: 'RAII File Handler',
          description: 'Create a file handler class using RAII pattern',
          difficulty: 'medium',
          hints: ['Open file in constructor', 'Close file in destructor', 'Use fstream', 'Handle errors'],
          solution: `#include <fstream>
#include <iostream>
using namespace std;

class FileHandler {
private:
    fstream file;
public:
    FileHandler(string filename) {
        file.open(filename, ios::out);
        if (file.is_open()) cout << "File opened" << endl;
    }
    ~FileHandler() {
        if (file.is_open()) {
            file.close();
            cout << "File closed" << endl;
        }
    }
    void write(string text) {
        if (file.is_open()) file << text;
    }
};

int main() {
    FileHandler fh("test.txt");
    fh.write("Hello RAII");
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use file operations
          }]
        }],
        completed: false
      },
      {
        id: 'copy-assignment',
        title: 'Copy Constructors and Assignment Operators',
        description: 'Understand deep vs shallow copying and the Rule of Three/Five',
        duration: '90 min',
        difficulty: 'intermediate',
        topics: ['Copy constructor', 'Assignment operator', 'Deep copy', 'Shallow copy', 'Rule of Three', 'Rule of Five'],
        content: `# Copy Constructors and Assignment Operators

When objects contain dynamically allocated resources, proper copying becomes critical. Without custom copy operations, C++ performs shallow copies that can lead to double deletion and memory corruption.

## Deep vs Shallow Copy

**Shallow Copy**: Copies pointer values (both objects point to same memory)
**Deep Copy**: Allocates new memory and copies the actual data

## Rule of Three

If you need one of these, you probably need all three:
1. Destructor
2. Copy constructor
3. Copy assignment operator

## Rule of Five (C++11)

Add move operations for better performance:
4. Move constructor
5. Move assignment operator`,
        codeExample: `#include <iostream>
#include <cstring>
using namespace std;

class String {
private:
    char* data;
    int length;

public:
    String(const char* str) {
        length = strlen(str);
        data = new char[length + 1];
        strcpy(data, str);
    }

    // Copy constructor (deep copy)
    String(const String& other) {
        length = other.length;
        data = new char[length + 1];
        strcpy(data, other.data);
    }

    // Copy assignment operator
    String& operator=(const String& other) {
        if (this != &other) {
            delete[] data;
            length = other.length;
            data = new char[length + 1];
            strcpy(data, other.data);
        }
        return *this;
    }

    ~String() {
        delete[] data;
    }

    void print() const {
        cout << data << endl;
    }
};

int main() {
    String s1("Hello");
    String s2 = s1;  // Copy constructor
    String s3("World");
    s3 = s1;  // Copy assignment
    s1.print();
    s2.print();
    return 0;
}`,
        practiceExercises: [{
          id: 'dynamic-array-copy',
          title: 'Dynamic Array with Deep Copy',
          description: 'Implement dynamic array class with proper copy semantics',
          difficulty: 'hard',
          hints: ['Allocate new memory in copy constructor', 'Handle self-assignment', 'Delete old data in assignment'],
          solution: `#include <iostream>
using namespace std;

class DynamicArray {
private:
    int* arr;
    int size;
public:
    DynamicArray(int s) : size(s), arr(new int[s]) {
        for (int i = 0; i < size; i++) arr[i] = 0;
    }
    DynamicArray(const DynamicArray& other) : size(other.size), arr(new int[other.size]) {
        for (int i = 0; i < size; i++) arr[i] = other.arr[i];
    }
    DynamicArray& operator=(const DynamicArray& other) {
        if (this != &other) {
            delete[] arr;
            size = other.size;
            arr = new int[size];
            for (int i = 0; i < size; i++) arr[i] = other.arr[i];
        }
        return *this;
    }
    ~DynamicArray() { delete[] arr; }
    void set(int i, int v) { if (i >= 0 && i < size) arr[i] = v; }
    int get(int i) const { return (i >= 0 && i < size) ? arr[i] : 0; }
};

int main() {
    DynamicArray a1(5);
    a1.set(0, 10);
    DynamicArray a2 = a1;
    cout << a2.get(0) << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use constructors/destructors
          }]
        }],
        completed: false
      },
      {
        id: 'polymorphism',
        title: 'Polymorphism and Virtual Functions',
        description: 'Master runtime polymorphism, virtual functions, and dynamic dispatch',
        duration: '90 min',
        difficulty: 'intermediate',
        topics: ['Virtual functions', 'Override keyword', 'Virtual destructors', 'Dynamic binding', 'Vtable', 'Polymorphic behavior'],
        content: `# Polymorphism and Virtual Functions

Polymorphism ("many forms") allows objects of different types to be treated uniformly through a common interface. In C++, this is achieved through virtual functions and inheritance.

## Virtual Functions

The \`virtual\` keyword enables runtime polymorphism. When you call a virtual function through a base class pointer/reference, the correct derived class version is called.

## How It Works: Virtual Tables

The compiler creates a vtable (virtual table) for each class with virtual functions. Each object contains a hidden vptr (virtual pointer) to its class's vtable. When a virtual function is called, the vptr is used to look up the correct function.

## Virtual Destructors

CRITICAL: Base classes used polymorphically must have virtual destructors. Otherwise, deleting a derived object through a base pointer won't call the derived destructor, causing resource leaks.`,
        codeExample: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() const = 0;  // Pure virtual
    virtual void draw() const {
        cout << "Drawing shape" << endl;
    }
    virtual ~Shape() { }  // Virtual destructor
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) { }
    double area() const override {
        return 3.14159 * radius * radius;
    }
    void draw() const override {
        cout << "Drawing circle" << endl;
    }
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) { }
    double area() const override {
        return width * height;
    }
    void draw() const override {
        cout << "Drawing rectangle" << endl;
    }
};

void printArea(const Shape& s) {  // Polymorphic parameter
    s.draw();
    cout << "Area: " << s.area() << endl;
}

int main() {
    Circle c(5.0);
    Rectangle r(4.0, 6.0);
    printArea(c);  // Calls Circle methods
    printArea(r);  // Calls Rectangle methods
    return 0;
}`,
        practiceExercises: [{
          id: 'animal-polymorphism',
          title: 'Animal Sounds with Polymorphism',
          description: 'Create animal hierarchy with polymorphic makeSound method',
          difficulty: 'medium',
          hints: ['Base Animal class with virtual makeSound', 'Derive Dog, Cat, Cow', 'Override makeSound in each', 'Use base class pointers'],
          solution: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void makeSound() const {
        cout << "Some generic sound" << endl;
    }
    virtual ~Animal() { }
};

class Dog : public Animal {
public:
    void makeSound() const override {
        cout << "Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() const override {
        cout << "Meow!" << endl;
    }
};

int main() {
    Animal* animals[3];
    animals[0] = new Dog();
    animals[1] = new Cat();
    animals[2] = new Dog();
    for (int i = 0; i < 3; i++) {
        animals[i]->makeSound();
        delete animals[i];
    }
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use polymorphism
          }]
        }],
        completed: false
      },
      {
        id: 'abstract-classes',
        title: 'Abstract Classes and Interfaces',
        description: 'Create abstract base classes and interface-like designs in C++',
        duration: '80 min',
        difficulty: 'intermediate',
        topics: ['Pure virtual functions', 'Abstract classes', 'Interfaces', 'Contract-based design'],
        content: `# Abstract Classes and Interfaces

Abstract classes define interfaces that derived classes must implement. They cannot be instantiated directly and serve as contracts for derived classes.

## Pure Virtual Functions

A pure virtual function has no implementation in the base class:
\`\`\`cpp
virtual void func() = 0;  // Pure virtual
\`\`\`

Any class with at least one pure virtual function is abstract.

## Interfaces in C++

C++ doesn't have an interface keyword like Java. Instead, create classes with only pure virtual functions to simulate interfaces.`,
        codeExample: `#include <iostream>
using namespace std;

class Drawable {
public:
    virtual void draw() const = 0;  // Pure virtual
    virtual ~Drawable() { }
};

class Serializable {
public:
    virtual string serialize() const = 0;
    virtual ~Serializable() { }
};

class Document : public Drawable, public Serializable {
private:
    string content;
public:
    Document(string c) : content(c) { }
    void draw() const override {
        cout << "Drawing: " << content << endl;
    }
    string serialize() const override {
        return "DOC:" + content;
    }
};

int main() {
    Document doc("Hello");
    doc.draw();
    cout << doc.serialize() << endl;
    return 0;
}`,
        practiceExercises: [{
          id: 'logger-interface',
          title: 'Logger Interface Implementation',
          description: 'Create abstract Logger and implement FileLogger, ConsoleLogger',
          difficulty: 'medium',
          hints: ['Logger base with pure virtual log()', 'FileLogger writes to file', 'ConsoleLogger writes to cout'],
          solution: `#include <iostream>
#include <fstream>
using namespace std;

class Logger {
public:
    virtual void log(const string& msg) = 0;
    virtual ~Logger() { }
};

class ConsoleLogger : public Logger {
public:
    void log(const string& msg) override {
        cout << "[Console] " << msg << endl;
    }
};

class FileLogger : public Logger {
private:
    string filename;
public:
    FileLogger(string f) : filename(f) { }
    void log(const string& msg) override {
        ofstream file(filename, ios::app);
        file << "[File] " << msg << endl;
        file.close();
    }
};

int main() {
    ConsoleLogger console;
    console.log("Test message");
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use abstract classes/interfaces
          }]
        }],
        completed: false
      },
      {
        id: 'operator-overloading',
        title: 'Operator Overloading',
        description: 'Overload operators to make custom types behave like built-in types',
        duration: '85 min',
        difficulty: 'intermediate',
        topics: ['Operator overloading', 'Member vs friend functions', 'Stream operators', 'Arithmetic operators', 'Comparison operators'],
        content: `# Operator Overloading

Operator overloading allows custom types to use standard operators (+, -, *, ==, <<, etc.) making them more intuitive to use.

## Which Operators Can Be Overloaded

Most operators can be overloaded: arithmetic (+, -, *, /), comparison (==, !=, <, >), stream (<<, >>), subscript ([]), and more.

Cannot overload: :: (scope), . (member access), .* (pointer-to-member), ?: (ternary)

## Member vs Friend Functions

- Member functions: Good for unary operators and when left operand is your class
- Friend functions: Good for binary operators where left operand might not be your class (e.g., cout << obj)`,
        codeExample: `#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) { }

    // Arithmetic operators (member functions)
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    Complex operator*(const Complex& other) const {
        return Complex(
            real * other.real - imag * other.imag,
            real * other.imag + imag * other.real
        );
    }

    // Comparison operator
    bool operator==(const Complex& other) const {
        return real == other.real && imag == other.imag;
    }

    // Stream operator (friend function)
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real;
        if (c.imag >= 0) os << "+";
        os << c.imag << "i";
        return os;
    }
};

int main() {
    Complex c1(3, 4);
    Complex c2(1, 2);
    Complex c3 = c1 + c2;
    cout << c1 << " + " << c2 << " = " << c3 << endl;
    return 0;
}`,
        practiceExercises: [{
          id: 'fraction-class',
          title: 'Fraction Class with Operators',
          description: 'Create Fraction class with +, -, *, / operators',
          difficulty: 'hard',
          hints: ['Store numerator and denominator', 'Implement operator+, -, *, /', 'Simplify fractions'],
          solution: `#include <iostream>
using namespace std;

class Fraction {
private:
    int num, den;
    int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    void simplify() {
        int g = gcd(abs(num), abs(den));
        num /= g;
        den /= g;
    }
public:
    Fraction(int n = 0, int d = 1) : num(n), den(d) {
        if (den == 0) den = 1;
        simplify();
    }
    Fraction operator+(const Fraction& other) const {
        return Fraction(num * other.den + other.num * den, den * other.den);
    }
    Fraction operator*(const Fraction& other) const {
        return Fraction(num * other.num, den * other.den);
    }
    friend ostream& operator<<(ostream& os, const Fraction& f) {
        os << f.num << "/" << f.den;
        return os;
    }
};

int main() {
    Fraction f1(1, 2);
    Fraction f2(1, 3);
    cout << f1 << " + " << f2 << " = " << (f1 + f2) << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use operator overloading
          }]
        }],
        completed: false
      },
      {
        id: 'exception-handling',
        title: 'Exception Handling in C++',
        description: 'Handle errors gracefully with try-catch-throw mechanism',
        duration: '85 min',
        difficulty: 'intermediate',
        topics: ['try-catch-throw', 'Exception types', 'Standard exceptions', 'Custom exceptions', 'Stack unwinding', 'noexcept'],
        content: `# Exception Handling in C++

Exceptions provide a structured way to handle errors that's superior to error codes. When an exception is thrown, control transfers to the nearest matching catch block, unwinding the stack and calling destructors along the way.

## Basic Syntax

\`\`\`cpp
try {
    // Code that might throw
    throw runtime_error("Something went wrong");
}
catch (const exception& e) {
    // Handle error
    cout << e.what() << endl;
}
\`\`\`

## Standard Exception Hierarchy

All standard exceptions derive from std::exception. Common ones:
- runtime_error
- logic_error
- invalid_argument
- out_of_range

## RAII and Exceptions

One of C++'s greatest strengths: destructors are called during stack unwinding, so RAII objects automatically clean up resources even when exceptions occur.`,
        codeExample: `#include <iostream>
#include <exception>
#include <stdexcept>
using namespace std;

class DivisionByZeroError : public exception {
public:
    const char* what() const noexcept override {
        return "Division by zero attempted";
    }
};

double safeDivide(double a, double b) {
    if (b == 0) {
        throw DivisionByZeroError();
    }
    return a / b;
}

int main() {
    try {
        cout << safeDivide(10, 2) << endl;
        cout << safeDivide(10, 0) << endl;  // Throws
        cout << "This won't print" << endl;
    }
    catch (const DivisionByZeroError& e) {
        cout << "Error: " << e.what() << endl;
    }
    catch (const exception& e) {
        cout << "Unknown error: " << e.what() << endl;
    }
    return 0;
}`,
        practiceExercises: [{
          id: 'safe-array-access',
          title: 'Safe Array with Exceptions',
          description: 'Create array class that throws on out-of-bounds access',
          difficulty: 'medium',
          hints: ['Check bounds in operator[]', 'Throw out_of_range exception', 'Provide const and non-const versions'],
          solution: `#include <iostream>
#include <stdexcept>
using namespace std;

class SafeArray {
private:
    int* data;
    int size;
public:
    SafeArray(int s) : size(s), data(new int[s]) {
        for (int i = 0; i < size; i++) data[i] = 0;
    }
    ~SafeArray() { delete[] data; }
    int& operator[](int index) {
        if (index < 0 || index >= size) {
            throw out_of_range("Index out of range");
        }
        return data[index];
    }
    int getSize() const { return size; }
};

int main() {
    SafeArray arr(5);
    try {
        arr[2] = 42;
        cout << arr[2] << endl;
        cout << arr[10] << endl;  // Throws
    }
    catch (const out_of_range& e) {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use exception handling
          }]
        }],
        completed: false
      },
      {
        id: 'const-correctness',
        title: 'Const Correctness and Const Member Functions',
        description: 'Master const keyword for better code safety and expressiveness',
        duration: '75 min',
        difficulty: 'intermediate',
        topics: ['const variables', 'const member functions', 'const parameters', 'mutable keyword'],
        content: `# Const Correctness

Const correctness is a design principle where const is used to indicate what can and cannot be modified. It helps catch errors at compile time and communicates intent clearly.

## Const Member Functions

Member functions marked const promise not to modify the object:
\`\`\`cpp
class Point {
    int x, y;
public:
    int getX() const { return x; }  // Doesn't modify
    void setX(int val) { x = val; }  // Modifies
};
\`\`\`

## Const Parameters

Pass by const reference for efficiency without allowing modification:
\`\`\`cpp
void display(const string& str);  // Can't modify str
\`\`\``,
        codeExample: `#include <iostream>
using namespace std;

class Counter {
private:
    int value;
    mutable int accessCount;  // Can be modified in const functions
public:
    Counter() : value(0), accessCount(0) { }
    void increment() { value++; }
    int getValue() const {
        accessCount++;  // OK: mutable
        return value;
    }
    int getAccessCount() const { return accessCount; }
};

void printValue(const Counter& c) {  // const reference
    cout << c.getValue() << endl;  // OK: getValue is const
    // c.increment();  // ERROR: increment is not const
}

int main() {
    Counter c;
    c.increment();
    printValue(c);
    return 0;
}`,
        practiceExercises: [{
          id: 'const-string-class',
          title: 'String Class with Const Correctness',
          description: 'Implement string class with const-correct methods',
          difficulty: 'medium',
          hints: ['Getter methods should be const', 'Setters should not be const', 'Provide const operator[]'],
          solution: `#include <iostream>
#include <cstring>
using namespace std;

class String {
private:
    char* data;
public:
    String(const char* s) {
        data = new char[strlen(s) + 1];
        strcpy(data, s);
    }
    ~String() { delete[] data; }
    int length() const { return strlen(data); }
    const char* c_str() const { return data; }
    char operator[](int i) const {
        return (i >= 0 && i < length()) ? data[i] : '\\0';
    }
};

int main() {
    const String s("Hello");
    cout << s.length() << endl;
    cout << s[0] << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use templates
          }]
        }],
        completed: false
      },
      {
        id: 'static-friend',
        title: 'Static Members and Friend Functions',
        description: 'Understand class-level data and breaking encapsulation carefully',
        duration: '75 min',
        difficulty: 'intermediate',
        topics: ['Static data members', 'Static member functions', 'Friend functions', 'Friend classes'],
        content: `# Static Members and Friend Functions

## Static Members

Static members belong to the class itself, not to individual objects. All objects share the same static member.

**Static Data Members**: Shared across all instances
**Static Member Functions**: Can be called without an object, can only access static members

## Friend Functions

Friend functions are not members of a class but have access to its private members. Use sparingly as they break encapsulation.

Common use: Overloading operators where the left operand isn't your class (like operator<<)`,
        codeExample: `#include <iostream>
using namespace std;

class Counter {
private:
    int value;
    static int objectCount;  // Shared by all objects
public:
    Counter() : value(0) {
        objectCount++;
    }
    ~Counter() {
        objectCount--;
    }
    static int getObjectCount() {  // Static function
        return objectCount;
    }
    void increment() { value++; }
    friend ostream& operator<<(ostream& os, const Counter& c) {
        os << "Value: " << c.value;  // Can access private value
        return os;
    }
};

// Static member initialization
int Counter::objectCount = 0;

int main() {
    cout << "Objects: " << Counter::getObjectCount() << endl;
    Counter c1, c2;
    cout << "Objects: " << Counter::getObjectCount() << endl;
    c1.increment();
    cout << c1 << endl;
    return 0;
}`,
        practiceExercises: [{
          id: 'id-generator',
          title: 'Auto-Incrementing ID Generator',
          description: 'Create class that assigns unique IDs using static counter',
          difficulty: 'easy',
          hints: ['Static counter variable', 'Increment in constructor', 'Store ID in each object'],
          solution: `#include <iostream>
using namespace std;

class Entity {
private:
    int id;
    static int nextId;
public:
    Entity() : id(nextId++) { }
    int getId() const { return id; }
    static int getNextId() { return nextId; }
};

int Entity::nextId = 1;

int main() {
    Entity e1, e2, e3;
    cout << e1.getId() << endl;
    cout << e2.getId() << endl;
    cout << e3.getId() << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use STL containers
          }]
        }],
        completed: false
      },
      {
        id: 'composition-inheritance',
        title: 'Composition vs Inheritance',
        description: 'Learn when to use has-a vs is-a relationships',
        duration: '80 min',
        difficulty: 'intermediate',
        topics: ['Composition', 'Aggregation', 'has-a relationship', 'is-a relationship', 'Design principles'],
        content: `# Composition vs Inheritance

Two fundamental ways to build relationships between classes:

## Inheritance (is-a)
A Dog **is an** Animal. Use public inheritance.

## Composition (has-a)
A Car **has an** Engine. The car contains an engine object.

## When to Use Which

**Use Inheritance when:**
- Clear is-a relationship exists
- You need polymorphic behavior
- Derived class is a specialized version of base

**Use Composition when:**
- Has-a relationship exists
- You want more flexibility (can swap components)
- Avoiding deep inheritance hierarchies
- "Favor composition over inheritance" - GoF

## Benefits of Composition

- More flexible (can change components at runtime)
- Easier to test (can mock components)
- Avoids fragile base class problem
- Clearer dependencies`,
        codeExample: `#include <iostream>
using namespace std;

// Composition example
class Engine {
public:
    void start() { cout << "Engine started" << endl; }
    void stop() { cout << "Engine stopped" << endl; }
};

class Car {
private:
    Engine engine;  // Composition: Car HAS-AN Engine
    string model;
public:
    Car(string m) : model(m) { }
    void start() {
        cout << model << " starting..." << endl;
        engine.start();
    }
    void stop() {
        engine.stop();
        cout << model << " stopped" << endl;
    }
};

int main() {
    Car car("Toyota");
    car.start();
    car.stop();
    return 0;
}`,
        practiceExercises: [{
          id: 'computer-composition',
          title: 'Computer System with Components',
          description: 'Model computer as composition of CPU, RAM, Storage',
          difficulty: 'medium',
          hints: ['Create component classes', 'Computer contains components', 'Delegate operations to components'],
          solution: `#include <iostream>
using namespace std;

class CPU {
private:
    string model;
public:
    CPU(string m) : model(m) { }
    void process() { cout << model << " processing" << endl; }
};

class RAM {
private:
    int sizeGB;
public:
    RAM(int s) : sizeGB(s) { }
    void load() { cout << sizeGB << "GB RAM loading" << endl; }
};

class Computer {
private:
    CPU cpu;
    RAM ram;
public:
    Computer(string cpuModel, int ramSize) : cpu(cpuModel), ram(ramSize) { }
    void boot() {
        cout << "Booting computer..." << endl;
        ram.load();
        cpu.process();
    }
};

int main() {
    Computer pc("Intel i7", 16);
    pc.boot();
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use multiple inheritance
          }]
        }],
        completed: false
      },
      {
        id: 'multiple-inheritance',
        title: 'Multiple Inheritance and Virtual Inheritance',
        description: 'Understand multiple inheritance, diamond problem, and virtual base classes',
        duration: '85 min',
        difficulty: 'intermediate',
        topics: ['Multiple inheritance', 'Diamond problem', 'Virtual inheritance', 'Ambiguity resolution'],
        content: `# Multiple Inheritance

C++ allows a class to inherit from multiple base classes. This is powerful but can lead to complications.

## Diamond Problem

When a class inherits from two classes that share a common base:

\`\`\`
    A
   / \\
  B   C
   \\ /
    D
\`\`\`

D inherits A twice (through B and C), causing ambiguity and duplication.

## Virtual Inheritance Solution

Use virtual inheritance to share a single instance of the base class:

\`\`\`cpp
class B : virtual public A { };
class C : virtual public A { };
class D : public B, public C { };  // Only one A instance
\`\`\`

## When to Use

Multiple inheritance is appropriate for:
- Interface-like classes (pure virtual functions only)
- Mix-in classes (small, focused functionality)

Avoid for complex hierarchies - composition is often clearer.`,
        codeExample: `#include <iostream>
using namespace std;

class Animal {
protected:
    string name;
public:
    Animal(string n) : name(n) {
        cout << "Animal: " << name << endl;
    }
};

class LandAnimal : virtual public Animal {
public:
    LandAnimal(string n) : Animal(n) {
        cout << "LandAnimal" << endl;
    }
    void walk() { cout << name << " walking" << endl; }
};

class WaterAnimal : virtual public Animal {
public:
    WaterAnimal(string n) : Animal(n) {
        cout << "WaterAnimal" << endl;
    }
    void swim() { cout << name << " swimming" << endl; }
};

class Amphibian : public LandAnimal, public WaterAnimal {
public:
    Amphibian(string n) : Animal(n), LandAnimal(n), WaterAnimal(n) {
        cout << "Amphibian" << endl;
    }
};

int main() {
    Amphibian frog("Frog");
    frog.walk();
    frog.swim();
    return 0;
}`,
        practiceExercises: [{
          id: 'flying-car',
          title: 'Flying Car with Multiple Inheritance',
          description: 'Create FlyingCar inheriting from Car and Aircraft',
          difficulty: 'hard',
          hints: ['Use virtual inheritance if needed', 'Handle constructor calls', 'Implement methods from both bases'],
          solution: `#include <iostream>
using namespace std;

class Vehicle {
protected:
    string name;
public:
    Vehicle(string n) : name(n) { }
};

class Car : virtual public Vehicle {
public:
    Car(string n) : Vehicle(n) { }
    void drive() { cout << name << " driving" << endl; }
};

class Aircraft : virtual public Vehicle {
public:
    Aircraft(string n) : Vehicle(n) { }
    void fly() { cout << name << " flying" << endl; }
};

class FlyingCar : public Car, public Aircraft {
public:
    FlyingCar(string n) : Vehicle(n), Car(n), Aircraft(n) { }
};

int main() {
    FlyingCar fc("SkyRacer");
    fc.drive();
    fc.fly();
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['class', 'cout'],
            outputPattern: '.*' // Should use multiple inheritance
          }]
        }],
        completed: false
      }
    ],
    finalProject: {
      id: 'intermediate-final-project',
      title: 'Library Management System',
      description: 'Build a comprehensive library management system using OOP principles including inheritance, polymorphism, and exception handling',
      requirements: [
        'Implement Book, Member, and Library classes with proper encapsulation',
        'Use inheritance for different book types (TextBook, Novel, Reference)',
        'Implement polymorphism for different member types (Student, Faculty, Guest)',
        'Use exception handling for error cases (book not found, already checked out)',
        'Implement operator overloading where appropriate',
        'Include file I/O for data persistence'
      ],
      features: [
        'Add and remove books from library catalog',
        'Register and manage library members',
        'Check out and return books with due date tracking',
        'Search functionality (by title, author, ISBN)',
        'Late fee calculation for overdue books',
        'Generate reports (popular books, member activity)',
        'Save and load library data from files'
      ],
      estimatedTime: '8-12 hours',
      difficulty: 'intermediate',
      technologies: ['OOP', 'Inheritance', 'Polymorphism', 'Exception Handling', 'File I/O', 'STL Vectors'],
      starterCode: `#include <iostream>
#include <string>
#include <vector>
#include <fstream>
using namespace std;

// Base Book class
class Book {
protected:
    string isbn;
    string title;
    string author;
    bool isAvailable;

public:
    Book(string i, string t, string a)
        : isbn(i), title(t), author(a), isAvailable(true) { }

    virtual void displayInfo() = 0;  // Pure virtual
    virtual string getType() = 0;
    // TODO: Add more methods
};

// Derived book types
class TextBook : public Book {
private:
    string subject;
    int edition;

public:
    TextBook(string i, string t, string a, string s, int e)
        : Book(i, t, a), subject(s), edition(e) { }

    void displayInfo() override {
        // TODO: Implement
    }

    string getType() override { return "TextBook"; }
};

// TODO: Implement Novel and Reference classes

// Base Member class
class Member {
protected:
    int memberId;
    string name;
    int maxBooks;

public:
    Member(int id, string n, int max)
        : memberId(id), name(n), maxBooks(max) { }

    virtual void displayInfo() = 0;
    // TODO: Add methods for checkouts
};

// TODO: Implement Student, Faculty, Guest classes

// Library class
class Library {
private:
    vector<Book*> books;
    vector<Member*> members;

public:
    void addBook(Book* book) {
        // TODO: Implement
    }

    void registerMember(Member* member) {
        // TODO: Implement
    }

    // TODO: Implement checkout, return, search, etc.

    ~Library() {
        // TODO: Clean up dynamic memory
    }
};

int main() {
    Library library;

    // TODO: Create books and members
    // TODO: Implement menu system
    // TODO: Test all functionality

    return 0;
}`
    }
  },
  {
    id: 'advanced-cpp',
    title: 'Advanced C++ and Modern Features',
    description: 'Master templates, STL, memory management, and modern C++ features',
    level: 'advanced',
    duration: '10-12 weeks',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7f68398-e374-4230-bf9d-1f90266d9bac.png',
    prerequisites: ['Object-Oriented Programming', 'Data structures knowledge'],
    learningOutcomes: [
      'Create and use templates effectively',
      'Master STL containers and algorithms',
      'Understand smart pointers and memory management',
      'Implement concurrent programming',
      'Use modern C++ features (C++11/14/17/20)'
    ],
    lessons: [
      {
        id: 'templates',
        title: 'Template Programming Fundamentals',
        description: 'Master function and class templates for generic programming',
        duration: '95 min',
        difficulty: 'advanced',
        topics: ['Function templates', 'Class templates', 'Template parameters', 'Type deduction', 'Template instantiation'],
        content: `# Template Programming

Templates enable generic programming - writing code that works with any type. They're the foundation of the STL and essential for modern C++.

## Function Templates
\`\`\`cpp
template<typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}
\`\`\`

## Class Templates
\`\`\`cpp
template<typename T>
class Stack {
private:
    T data[100];
    int top;
public:
    void push(T value) { data[++top] = value; }
    T pop() { return data[top--]; }
};
\`\`\`

Templates are instantiated at compile time, generating specific code for each type used.`,
        codeExample: `#include <iostream>
using namespace std;

template<typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

template<typename T>
class Box {
private:
    T value;
public:
    Box(T v) : value(v) { }
    T getValue() const { return value; }
    void setValue(T v) { value = v; }
};

int main() {
    cout << findMax(10, 20) << endl;
    cout << findMax(3.14, 2.71) << endl;

    Box<int> intBox(42);
    Box<string> strBox("Hello");

    cout << intBox.getValue() << endl;
    cout << strBox.getValue() << endl;
    return 0;
}`,
        practiceExercises: [{
          id: 'generic-swap',
          title: 'Generic Swap Function',
          description: 'Create template function to swap any two values',
          difficulty: 'easy',
          hints: ['Use template<typename T>', 'Use reference parameters', 'Use temporary variable'],
          solution: `#include <iostream>
using namespace std;

template<typename T>
void swap(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    swap(x, y);
    cout << x << " " << y << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL algorithms
          }]
        }],
        completed: false
      },
      {
        id: 'stl-containers-1',
        title: 'STL Sequence Containers',
        description: 'Master vector, deque, list, and array containers',
        duration: '100 min',
        difficulty: 'advanced',
        topics: ['std::vector', 'std::deque', 'std::list', 'std::array', 'Container operations'],
        content: `# STL Sequence Containers

The Standard Template Library provides powerful containers for data storage.

## Vector
Dynamic array with O(1) random access, O(1) amortized push_back.

## Deque
Double-ended queue with O(1) operations at both ends.

## List
Doubly-linked list with O(1) insertion/deletion anywhere, but O(n) access.

## Array (C++11)
Fixed-size array with bounds checking.`,
        codeExample: `#include <iostream>
#include <vector>
#include <deque>
#include <list>
using namespace std;

int main() {
    vector<int> vec = {1, 2, 3};
    vec.push_back(4);

    deque<int> deq = {1, 2, 3};
    deq.push_front(0);
    deq.push_back(4);

    list<int> lst = {1, 2, 3};
    lst.push_front(0);

    for (int x : vec) cout << x << " ";
    cout << endl;

    return 0;
}`,
        practiceExercises: [{
          id: 'vector-ops',
          title: 'Vector Operations',
          description: 'Practice vector manipulations',
          difficulty: 'easy',
          hints: ['Use push_back, pop_back', 'Use size(), empty()', 'Use iterators or range-based for'],
          solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v;
    for (int i = 1; i <= 5; i++) v.push_back(i);
    for (int x : v) cout << x << " ";
    cout << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL iterators
          }]
        }],
        completed: false
      },
      {
        id: 'stl-containers-2',
        title: 'STL Associative Containers',
        description: 'Master set, map, multiset, multimap, and unordered containers',
        duration: '105 min',
        difficulty: 'advanced',
        topics: ['std::set', 'std::map', 'std::unordered_map', 'Hash tables', 'Custom comparators'],
        content: `# STL Associative Containers

Associative containers store elements in sorted order (set/map) or hashed order (unordered_set/unordered_map).

## Map
Key-value pairs, sorted by key. O(log n) operations.

## Unordered Map
Hash table implementation. O(1) average case operations.

## Set
Unique sorted elements. Perfect for membership testing.`,
        codeExample: `#include <iostream>
#include <map>
#include <set>
#include <unordered_map>
using namespace std;

int main() {
    map<string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;

    set<int> unique = {3, 1, 4, 1, 5, 9, 2, 6};

    unordered_map<string, string> phone;
    phone["Alice"] = "555-1234";

    for (auto& p : ages) {
        cout << p.first << ": " << p.second << endl;
    }

    return 0;
}`,
        practiceExercises: [{
          id: 'word-frequency',
          title: 'Word Frequency Counter',
          description: 'Count word occurrences using map',
          difficulty: 'medium',
          hints: ['Use map<string, int>', 'Increment count for each word', 'Print results'],
          solution: `#include <iostream>
#include <map>
#include <sstream>
using namespace std;

int main() {
    string text = "hello world hello";
    map<string, int> freq;
    stringstream ss(text);
    string word;
    while (ss >> word) freq[word]++;
    for (auto& p : freq) {
        cout << p.first << ": " << p.second << endl;
    }
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL maps
          }]
        }],
        completed: false
      },
      {
        id: 'stl-algorithms',
        title: 'STL Algorithms and Iterators',
        description: 'Master STL algorithms and iterator categories',
        duration: '110 min',
        difficulty: 'advanced',
        topics: ['Iterator categories', 'sort', 'find', 'transform', 'for_each', 'accumulate'],
        content: `# STL Algorithms

The STL provides 100+ algorithms that work with iterators. They're generic, efficient, and battle-tested.

## Common Algorithms
- **Searching**: find, binary_search, find_if
- **Sorting**: sort, stable_sort, partial_sort
- **Modifying**: transform, replace, remove
- **Numeric**: accumulate, inner_product

All algorithms work through iterators, making them container-agnostic.`,
        codeExample: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9};

    sort(v.begin(), v.end());

    auto it = find(v.begin(), v.end(), 8);
    if (it != v.end()) cout << "Found 8" << endl;

    int sum = accumulate(v.begin(), v.end(), 0);
    cout << "Sum: " << sum << endl;

    transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 2; });

    for (int x : v) cout << x << " ";
    return 0;
}`,
        practiceExercises: [{
          id: 'custom-sort',
          title: 'Custom Sorting',
          description: 'Sort with custom comparator',
          difficulty: 'medium',
          hints: ['Use sort with lambda', 'Lambda: [](int a, int b) { return ...}', 'Sort descending'],
          solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9};
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
    for (int x : v) cout << x << " ";
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL sorting
          }]
        }],
        completed: false
      },
      {
        id: 'smart-pointers',
        title: 'Smart Pointers and Automatic Memory Management',
        description: 'Master unique_ptr, shared_ptr, and weak_ptr for safe memory management',
        duration: '95 min',
        difficulty: 'advanced',
        topics: ['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'RAII', 'Reference counting'],
        content: `# Smart Pointers

Smart pointers automate memory management, preventing leaks and dangling pointers.

## unique_ptr
Exclusive ownership. Cannot be copied, only moved. Zero overhead.

## shared_ptr
Shared ownership via reference counting. Object deleted when last shared_ptr destroyed.

## weak_ptr
Non-owning reference to shared_ptr. Breaks circular references.

Never use raw new/delete with smart pointers available.`,
        codeExample: `#include <iostream>
#include <memory>
using namespace std;

class Resource {
public:
    Resource() { cout << "Resource acquired" << endl; }
    ~Resource() { cout << "Resource released" << endl; }
    void use() { cout << "Using resource" << endl; }
};

int main() {
    unique_ptr<Resource> ptr1 = make_unique<Resource>();
    ptr1->use();

    shared_ptr<Resource> ptr2 = make_shared<Resource>();
    shared_ptr<Resource> ptr3 = ptr2;
    cout << "Ref count: " << ptr2.use_count() << endl;

    return 0;
}`,
        practiceExercises: [{
          id: 'unique-ptr-practice',
          title: 'Resource Manager with unique_ptr',
          description: 'Manage resources using unique_ptr',
          difficulty: 'medium',
          hints: ['Use make_unique', 'Transfer ownership with move', 'Access with -> operator'],
          solution: `#include <iostream>
#include <memory>
using namespace std;

class File {
public:
    File(string n) : name(n) { cout << "Opened " << name << endl; }
    ~File() { cout << "Closed " << name << endl; }
private:
    string name;
};

int main() {
    auto file = make_unique<File>("data.txt");
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use file I/O with STL
          }]
        }],
        completed: false
      },
      {
        id: 'move-semantics',
        title: 'Move Semantics and Rvalue References',
        description: 'Master move constructors, move assignment, and perfect forwarding',
        duration: '105 min',
        difficulty: 'advanced',
        topics: ['Lvalue vs rvalue', 'Rvalue references', 'Move constructor', 'std::move', 'Rule of Five'],
        content: `# Move Semantics

Move semantics enable efficient transfer of resources without copying. Essential for performance in modern C++.

## Rvalue References
\`\`\`cpp
void func(int&& x) { }  // Accepts rvalues (temporaries)
\`\`\`

## Move Constructor
Transfers ownership instead of copying:
\`\`\`cpp
String(String&& other) : data(other.data) {
    other.data = nullptr;  // Steal resources
}
\`\`\`

Use std::move to cast lvalue to rvalue.`,
        codeExample: `#include <iostream>
#include <utility>
using namespace std;

class Buffer {
private:
    int* data;
    int size;
public:
    Buffer(int s) : size(s), data(new int[s]) {
        cout << "Allocated" << endl;
    }

    ~Buffer() {
        delete[] data;
        cout << "Freed" << endl;
    }

    // Move constructor
    Buffer(Buffer&& other) : data(other.data), size(other.size) {
        other.data = nullptr;
        cout << "Moved" << endl;
    }

    Buffer(const Buffer&) = delete;  // Prevent copying
};

Buffer createBuffer() {
    return Buffer(100);  // Move, not copy
}

int main() {
    Buffer buf = createBuffer();
    return 0;
}`,
        practiceExercises: [{
          id: 'move-class',
          title: 'Implement Move Operations',
          description: 'Add move constructor and move assignment',
          difficulty: 'hard',
          hints: ['Transfer ownership of pointers', 'Set source pointers to nullptr', 'Use std::move'],
          solution: `#include <iostream>
#include <utility>
using namespace std;

class Array {
private:
    int* data;
    int size;
public:
    Array(int s) : size(s), data(new int[s]) { }
    ~Array() { delete[] data; }

    Array(Array&& other) : data(other.data), size(other.size) {
        other.data = nullptr;
    }

    Array& operator=(Array&& other) {
        if (this != &other) {
            delete[] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
        }
        return *this;
    }
};

int main() {
    Array a1(10);
    Array a2 = move(a1);
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use advanced STL features
          }]
        }],
        completed: false
      },
      {
        id: 'lambda-expressions',
        title: 'Lambda Expressions and Functional Programming',
        description: 'Master lambda syntax, captures, and functional programming in C++',
        duration: '90 min',
        difficulty: 'advanced',
        topics: ['Lambda syntax', 'Capture clauses', 'mutable lambdas', 'std::function'],
        content: `# Lambda Expressions

Lambdas are anonymous functions that can capture variables from their enclosing scope. Perfect for callbacks and STL algorithms.

## Syntax
\`\`\`cpp
[captures](parameters) -> return_type { body }
\`\`\`

## Capture Modes
- \`[=]\`: Capture all by value
- \`[&]\`: Capture all by reference
- \`[x, &y]\`: Capture x by value, y by reference

Lambdas make code more concise and expressive.`,
        codeExample: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4, 5};

    // Simple lambda
    for_each(v.begin(), v.end(), [](int x) {
        cout << x << " ";
    });
    cout << endl;

    // Capture by value
    int multiplier = 2;
    transform(v.begin(), v.end(), v.begin(), [multiplier](int x) {
        return x * multiplier;
    });

    // Capture by reference
    int sum = 0;
    for_each(v.begin(), v.end(), [&sum](int x) {
        sum += x;
    });
    cout << "Sum: " << sum << endl;

    return 0;
}`,
        practiceExercises: [{
          id: 'lambda-sort',
          title: 'Sort with Lambda',
          description: 'Use lambda to sort by custom criteria',
          difficulty: 'easy',
          hints: ['Lambda as third argument to sort', 'Return comparison result', 'Capture if needed'],
          solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9};
    sort(v.begin(), v.end(), [](int a, int b) {
        return abs(a - 5) < abs(b - 5);
    });
    for (int x : v) cout << x << " ";
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL algorithms
          }]
        }],
        completed: false
      },
      {
        id: 'multithreading-basics',
        title: 'Multithreading and Concurrency Basics',
        description: 'Learn to create threads, use mutexes, and handle race conditions',
        duration: '110 min',
        difficulty: 'advanced',
        topics: ['std::thread', 'std::mutex', 'std::lock_guard', 'Race conditions', 'Thread safety'],
        content: `# Multithreading Basics

Modern C++ provides powerful threading primitives in the standard library.

## Creating Threads
\`\`\`cpp
std::thread t(functionName, arg1, arg2);
t.join();  // Wait for completion
\`\`\`

## Mutexes
Protect shared data from race conditions:
\`\`\`cpp
std::mutex mtx;
std::lock_guard<std::mutex> lock(mtx);  // RAII locking
// Critical section
\`\`\`

Always protect shared mutable state with mutexes.`,
        codeExample: `#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

mutex mtx;
int counter = 0;

void increment(int times) {
    for (int i = 0; i < times; i++) {
        lock_guard<mutex> lock(mtx);
        counter++;
    }
}

int main() {
    thread t1(increment, 1000);
    thread t2(increment, 1000);

    t1.join();
    t2.join();

    cout << "Counter: " << counter << endl;
    return 0;
}`,
        practiceExercises: [{
          id: 'parallel-sum',
          title: 'Parallel Sum Calculation',
          description: 'Calculate sum using multiple threads',
          difficulty: 'hard',
          hints: ['Each thread sums part of array', 'Use mutex to add to total', 'Join all threads'],
          solution: `#include <iostream>
#include <thread>
#include <vector>
#include <mutex>
using namespace std;

mutex mtx;
int total = 0;

void sum(vector<int>& v, int start, int end) {
    int local = 0;
    for (int i = start; i < end; i++) local += v[i];
    lock_guard<mutex> lock(mtx);
    total += local;
}

int main() {
    vector<int> v(1000, 1);
    thread t1(sum, ref(v), 0, 500);
    thread t2(sum, ref(v), 500, 1000);
    t1.join();
    t2.join();
    cout << total << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL numeric algorithms
          }]
        }],
        completed: false
      },
      {
        id: 'concurrency-patterns',
        title: 'Advanced Concurrency Patterns',
        description: 'Master std::async, futures, promises, and condition variables',
        duration: '105 min',
        difficulty: 'advanced',
        topics: ['std::async', 'std::future', 'std::promise', 'std::condition_variable'],
        content: `# Advanced Concurrency

## Async and Future
Launch async tasks and retrieve results:
\`\`\`cpp
auto future = std::async(std::launch::async, expensiveFunction);
// Do other work
int result = future.get();  // Blocks until ready
\`\`\`

## Condition Variables
Coordinate threads efficiently:
\`\`\`cpp
condition_variable cv;
unique_lock<mutex> lock(mtx);
cv.wait(lock, []{ return ready; });
\`\`\``,
        codeExample: `#include <iostream>
#include <future>
#include <chrono>
using namespace std;

int compute(int x) {
    this_thread::sleep_for(chrono::seconds(1));
    return x * x;
}

int main() {
    auto f1 = async(launch::async, compute, 5);
    auto f2 = async(launch::async, compute, 10);

    cout << "Computing..." << endl;

    cout << "Results: " << f1.get() << " " << f2.get() << endl;
    return 0;
}`,
        practiceExercises: [{
          id: 'async-tasks',
          title: 'Async Task Processing',
          description: 'Process tasks asynchronously',
          difficulty: 'medium',
          hints: ['Use async for each task', 'Store futures in vector', 'Call get() on each'],
          solution: `#include <iostream>
#include <future>
#include <vector>
using namespace std;

int process(int x) { return x * 2; }

int main() {
    vector<future<int>> futures;
    for (int i = 1; i <= 5; i++) {
        futures.push_back(async(launch::async, process, i));
    }
    for (auto& f : futures) {
        cout << f.get() << " ";
    }
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL functional programming
          }]
        }],
        completed: false
      },
      {
        id: 'modern-cpp-features',
        title: 'Modern C++ Features (C++11/14/17/20)',
        description: 'Master auto, range-based for, nullptr, and other modern features',
        duration: '100 min',
        difficulty: 'advanced',
        topics: ['auto keyword', 'nullptr', 'Range-based for', 'constexpr', 'std::optional'],
        content: `# Modern C++ Features

C++11 and beyond introduced many quality-of-life improvements.

## Auto
Type deduction for cleaner code:
\`\`\`cpp
auto x = 42;  // int
auto ptr = make_unique<Widget>();
\`\`\`

## Range-based For
\`\`\`cpp
for (const auto& item : container) { }
\`\`\`

## Optional (C++17)
Represent optional values without pointers:
\`\`\`cpp
optional<int> find(string key);
\`\`\``,
        codeExample: `#include <iostream>
#include <vector>
#include <optional>
using namespace std;

optional<int> divide(int a, int b) {
    if (b == 0) return nullopt;
    return a / b;
}

int main() {
    vector<int> v = {1, 2, 3, 4, 5};

    for (const auto& x : v) {
        cout << x << " ";
    }
    cout << endl;

    auto result = divide(10, 2);
    if (result) {
        cout << "Result: " << *result << endl;
    }

    auto result2 = divide(10, 0);
    cout << (result2 ? "Has value" : "No value") << endl;

    return 0;
}`,
        practiceExercises: [{
          id: 'modern-features',
          title: 'Use Modern C++ Features',
          description: 'Refactor code with modern features',
          difficulty: 'easy',
          hints: ['Replace explicit types with auto', 'Use range-based for', 'Use nullptr instead of NULL'],
          solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    auto v = vector<int>{1, 2, 3, 4, 5};
    auto sum = 0;
    for (const auto& x : v) {
        sum += x;
    }
    cout << sum << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL algorithms
          }]
        }],
        completed: false
      },
      {
        id: 'design-patterns',
        title: 'Common Design Patterns in C++',
        description: 'Implement classic design patterns using modern C++',
        duration: '110 min',
        difficulty: 'advanced',
        topics: ['Singleton', 'Factory', 'Observer', 'Strategy', 'RAII pattern'],
        content: `# Design Patterns in C++

Design patterns are reusable solutions to common problems.

## Singleton
Ensure only one instance exists:
\`\`\`cpp
class Singleton {
private:
    Singleton() { }
public:
    static Singleton& instance() {
        static Singleton inst;  // Thread-safe in C++11+
        return inst;
    }
    Singleton(const Singleton&) = delete;
};
\`\`\`

## Factory
Create objects without specifying exact class:
\`\`\`cpp
unique_ptr<Shape> createShape(string type);
\`\`\`

## Observer
Notify multiple objects of state changes.`,
        codeExample: `#include <iostream>
#include <memory>
#include <vector>
using namespace std;

class Observer {
public:
    virtual void update(int value) = 0;
    virtual ~Observer() = default;
};

class Subject {
private:
    vector<Observer*> observers;
    int state;
public:
    void attach(Observer* obs) {
        observers.push_back(obs);
    }
    void setState(int s) {
        state = s;
        notify();
    }
    void notify() {
        for (auto obs : observers) {
            obs->update(state);
        }
    }
};

class ConcreteObserver : public Observer {
public:
    void update(int value) override {
        cout << "State changed to: " << value << endl;
    }
};

int main() {
    Subject subject;
    ConcreteObserver obs;
    subject.attach(&obs);
    subject.setState(42);
    return 0;
}`,
        practiceExercises: [{
          id: 'singleton-logger',
          title: 'Singleton Logger',
          description: 'Implement thread-safe singleton logger',
          difficulty: 'medium',
          hints: ['Static local variable', 'Delete copy constructor', 'Provide instance() method'],
          solution: `#include <iostream>
using namespace std;

class Logger {
private:
    Logger() { }
public:
    static Logger& instance() {
        static Logger inst;
        return inst;
    }
    Logger(const Logger&) = delete;
    void log(string msg) {
        cout << "[LOG] " << msg << endl;
    }
};

int main() {
    Logger::instance().log("Test");
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use advanced STL features
          }]
        }],
        completed: false
      },
      {
        id: 'template-metaprogramming',
        title: 'Template Metaprogramming Basics',
        description: 'Learn compile-time computation and template specialization',
        duration: '95 min',
        difficulty: 'advanced',
        topics: ['Template specialization', 'SFINAE', 'Compile-time computation', 'Type traits'],
        content: `# Template Metaprogramming

Templates can perform computations at compile time, generating optimized code.

## Template Specialization
Provide specific implementations for certain types:
\`\`\`cpp
template<typename T>
struct IsPointer { static const bool value = false; };

template<typename T>
struct IsPointer<T*> { static const bool value = true; };
\`\`\`

## Compile-Time Factorial
\`\`\`cpp
template<int N>
struct Factorial {
    static const int value = N * Factorial<N-1>::value;
};

template<>
struct Factorial<0> {
    static const int value = 1;
};
\`\`\``,
        codeExample: `#include <iostream>
using namespace std;

template<int N>
struct Factorial {
    static const int value = N * Factorial<N-1>::value;
};

template<>
struct Factorial<0> {
    static const int value = 1;
};

template<typename T>
struct TypeName {
    static const char* name() { return "Unknown"; }
};

template<>
struct TypeName<int> {
    static const char* name() { return "int"; }
};

int main() {
    cout << "5! = " << Factorial<5>::value << endl;
    cout << "Type: " << TypeName<int>::name() << endl;
    return 0;
}`,
        practiceExercises: [{
          id: 'compile-time-power',
          title: 'Compile-Time Power',
          description: 'Calculate powers at compile time',
          difficulty: 'medium',
          hints: ['Template with two parameters (base, exponent)', 'Recursive template', 'Specialize for exponent = 0'],
          solution: `#include <iostream>
using namespace std;

template<int B, int E>
struct Power {
    static const int value = B * Power<B, E-1>::value;
};

template<int B>
struct Power<B, 0> {
    static const int value = 1;
};

int main() {
    cout << "2^10 = " << Power<2, 10>::value << endl;
    return 0;
}`,
          testCases: [{ 
            input: '', 
            requiredConstructs: ['cout'],
            outputPattern: '.*' // Should use STL numeric operations
          }]
        }],
        completed: false
      }
    ],
    finalProject: {
      id: 'advanced-final-project',
      title: 'Multi-threaded Task Scheduler',
      description: 'Build a thread-safe task scheduling system with priority queues and worker threads using advanced C++ features',
      requirements: [
        'Implement thread-safe task queue using mutex/condition variables',
        'Create worker thread pool for executing tasks',
        'Support task priorities with priority queue',
        'Implement async result retrieval with std::future',
        'Use smart pointers for memory management',
        'Handle exceptions in worker threads',
        'Implement graceful shutdown mechanism',
        'Add task cancellation support'
      ],
      features: [
        'Submit tasks with different priorities',
        'Get task results asynchronously',
        'Configure worker thread count',
        'Task timeout support',
        'Statistics tracking (completed tasks, errors, etc.)',
        'Clean shutdown without losing tasks'
      ],
      estimatedTime: '15-20 hours',
      difficulty: 'advanced',
      technologies: ['Multithreading', 'Smart Pointers', 'STL Containers', 'Lambdas', 'Modern C++ Features'],
      starterCode: `#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>
#include <functional>
#include <future>
#include <atomic>
using namespace std;

// Task scheduler class
class TaskScheduler {
private:
    vector<thread> workers;
    queue<function<void()>> tasks;
    mutex queueMutex;
    condition_variable condition;
    atomic<bool> stop;

public:
    TaskScheduler(int numThreads) : stop(false) {
        for (int i = 0; i < numThreads; i++) {
            workers.emplace_back([this] {
                while (true) {
                    function<void()> task;
                    {
                        unique_lock<mutex> lock(queueMutex);
                        condition.wait(lock, [this] { return stop || !tasks.empty(); });
                        if (stop && tasks.empty()) return;
                        task = move(tasks.front());
                        tasks.pop();
                    }
                    task();
                }
            });
        }
    }

    ~TaskScheduler() {
        stop = true;
        condition.notify_all();
        for (thread& worker : workers) {
            worker.join();
        }
    }

    template<typename F>
    void enqueue(F&& f) {
        {
            unique_lock<mutex> lock(queueMutex);
            tasks.emplace(forward<F>(f));
        }
        condition.notify_one();
    }
};

int main() {
    TaskScheduler scheduler(4);

    for (int i = 0; i < 10; i++) {
        scheduler.enqueue([i] {
            cout << "Task " << i << " executing" << endl;
        });
    }

    this_thread::sleep_for(chrono::seconds(2));
    return 0;
}`
    }
  }
];