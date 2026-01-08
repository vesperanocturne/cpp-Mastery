export interface PracticeExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  solution: string;
  testCases: { input: string; output: string }[];
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
              { input: '', output: 'My name is John Doe\\nMy favorite language is C++' }
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
              { input: '', output: 'Name: Alice Johnson\\nAge: 22\\nMajor: Computer Science\\nUniversity: Tech University' }
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
              { input: '', output: 'Student Information:\\nName: Alice Smith\\nAge: 20\\nGPA: 3.85\\nLetter Grade: A\\nEnrolled: Yes' }
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
              { input: '', output: 'Number 1: 15.5\\nNumber 2: 4.2\\nAddition: 19.7\\nSubtraction: 11.3\\nMultiplication: 65.1\\nDivision: 3.69048' }
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
              { input: 'John\\nDoe\\n25\\n50000\\nNew York', output: 'Full Name: John Doe\\nAge: 25\\nSalary: $50000\\nCity: New York' }
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
              { input: '10 5', output: '10 + 5 = 15\\n10 - 5 = 5\\n10 * 5 = 50\\n10 / 5 = 2' }
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
              { input: '3\\n85\\n92\\n78', output: 'Total Marks: 255\\nAverage: 85%\\nGrade: B' }
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
              { input: '', output: 'Power: 2^5 = 32\\nFactorial: 5! = 120\\nIs 8 even? Yes\\nAverage of 10, 20, 30: 20\\nGCD of 48 and 18: 6' }
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
              { input: '1 2 3 4 5 6 7 8 9 10', output: 'Sum: 55\\nAverage: 5.5\\nMaximum: 10\\nMinimum: 1\\nEven numbers: 5\\nOdd numbers: 5' }
            ]
          }
        ],
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
  }
];