export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  codeExample?: string;
  completed: boolean;
  content?: string;
  practiceExercises?: PracticeExercise[];
  project?: Project;
}

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

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: Lesson[];
  prerequisites: string[];
  learningOutcomes: string[];
  image: string;
}

export const courses: Course[] = [
  {
    id: 'beginner-cpp',
    title: 'C++ Fundamentals',
    description: 'Master the basics of C++ programming from variables to functions',
    level: 'beginner',
    duration: '6-8 weeks',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e46f8285-ca8b-42ba-9a92-d9e75dccae31.png',
    prerequisites: ['Basic computer literacy'],
    learningOutcomes: [
      'Understand C++ syntax and structure',
      'Work with variables and data types',
      'Implement control flow statements',
      'Create and use functions',
      'Handle basic input/output operations'
    ],
    lessons: [
      {
        id: 'intro-cpp',
        title: 'Introduction to C++',
        description: 'Learn about C++ history, features, and development environment setup',
        duration: '45 min',
        difficulty: 'beginner',
        topics: ['History', 'Features', 'Setup', 'First Program'],
        codeExample: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++ World!" << endl;
    return 0;
}`,
        completed: false
      },
      {
        id: 'variables-datatypes',
        title: 'Variables and Data Types',
        description: 'Understanding different data types and variable declarations',
        duration: '60 min',
        difficulty: 'beginner',
        topics: ['int', 'float', 'char', 'string', 'bool'],
        codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 25;
    float height = 5.9f;
    char grade = 'A';
    string name = "John";
    bool isStudent = true;
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Student: " << isStudent << endl;
    
    return 0;
}`,
        completed: false
      },
      {
        id: 'operators',
        title: 'Operators in C++',
        description: 'Learn arithmetic, comparison, and logical operators',
        duration: '50 min',
        difficulty: 'beginner',
        topics: ['Arithmetic', 'Comparison', 'Logical', 'Assignment'],
        codeExample: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    // Arithmetic operators
    cout << "a + b = " << (a + b) << endl;
    cout << "a - b = " << (a - b) << endl;
    cout << "a * b = " << (a * b) << endl;
    cout << "a / b = " << (a / b) << endl;
    cout << "a % b = " << (a % b) << endl;
    
    // Comparison operators
    cout << "a > b: " << (a > b) << endl;
    cout << "a == b: " << (a == b) << endl;
    
    return 0;
}`,
        completed: false
      },
      {
        id: 'control-flow',
        title: 'Control Flow Statements',
        description: 'Master if-else statements, loops, and switch cases',
        duration: '75 min',
        difficulty: 'beginner',
        topics: ['if-else', 'for loops', 'while loops', 'switch'],
        codeExample: `#include <iostream>
using namespace std;

int main() {
    // If-else example
    int score = 85;
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else {
        cout << "Grade: C" << endl;
    }
    
    // For loop example
    cout << "Numbers 1-5: ";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    return 0;
}`,
        completed: false
      },
      {
        id: 'functions',
        title: 'Functions in C++',
        description: 'Create reusable code with functions and understand scope',
        duration: '65 min',
        difficulty: 'beginner',
        topics: ['Function declaration', 'Parameters', 'Return values', 'Scope'],
        codeExample: `#include <iostream>
using namespace std;

// Function declaration
int add(int a, int b);
void greetUser(string name);

int main() {
    int result = add(5, 3);
    cout << "5 + 3 = " << result << endl;
    
    greetUser("Alice");
    
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

void greetUser(string name) {
    cout << "Hello, " << name << "!" << endl;
}`,
        completed: false
      }
    ]
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
        title: 'Classes and Objects',
        description: 'Introduction to object-oriented programming with classes',
        duration: '70 min',
        difficulty: 'intermediate',
        topics: ['Class definition', 'Objects', 'Member functions', 'Access specifiers'],
        codeExample: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
    float gpa;

public:
    // Constructor
    Student(string n, int a, float g) {
        name = n;
        age = a;
        gpa = g;
    }
    
    // Member functions
    void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "GPA: " << gpa << endl;
    }
    
    void setGPA(float newGPA) {
        if (newGPA >= 0.0 && newGPA <= 4.0) {
            gpa = newGPA;
        }
    }
};

int main() {
    Student student1("Alice", 20, 3.8);
    student1.displayInfo();
    
    return 0;
}`,
        completed: false
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        description: 'Learn how to create derived classes and inheritance hierarchies',
        duration: '80 min',
        difficulty: 'intermediate',
        topics: ['Base classes', 'Derived classes', 'Protected members', 'Virtual functions'],
        codeExample: `#include <iostream>
#include <string>
using namespace std;

// Base class
class Animal {
protected:
    string name;
    int age;

public:
    Animal(string n, int a) : name(n), age(a) {}
    
    virtual void makeSound() {
        cout << name << " makes a sound" << endl;
    }
    
    void displayInfo() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

// Derived class
class Dog : public Animal {
private:
    string breed;

public:
    Dog(string n, int a, string b) : Animal(n, a), breed(b) {}
    
    void makeSound() override {
        cout << name << " barks: Woof! Woof!" << endl;
    }
    
    void displayBreed() {
        cout << "Breed: " << breed << endl;
    }
};

int main() {
    Dog myDog("Buddy", 3, "Golden Retriever");
    myDog.displayInfo();
    myDog.displayBreed();
    myDog.makeSound();
    
    return 0;
}`,
        completed: false
      }
    ]
  },
  {
    id: 'advanced-cpp',
    title: 'Advanced C++ Concepts',
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
        title: 'Template Programming',
        description: 'Learn function and class templates for generic programming',
        duration: '90 min',
        difficulty: 'advanced',
        topics: ['Function templates', 'Class templates', 'Template specialization', 'SFINAE'],
        codeExample: `#include <iostream>
#include <vector>
using namespace std;

// Function template
template<typename T>
T findMax(const vector<T>& vec) {
    if (vec.empty()) {
        throw invalid_argument("Vector is empty");
    }
    
    T maxVal = vec[0];
    for (const T& val : vec) {
        if (val > maxVal) {
            maxVal = val;
        }
    }
    return maxVal;
}

// Class template
template<typename T>
class Stack {
private:
    vector<T> elements;

public:
    void push(const T& element) {
        elements.push_back(element);
    }
    
    T pop() {
        if (elements.empty()) {
            throw runtime_error("Stack is empty");
        }
        T top = elements.back();
        elements.pop_back();
        return top;
    }
    
    bool empty() const {
        return elements.empty();
    }
};

int main() {
    vector<int> numbers = {3, 7, 2, 9, 1};
    cout << "Max number: " << findMax(numbers) << endl;
    
    Stack<string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    
    while (!stringStack.empty()) {
        cout << stringStack.pop() << " ";
    }
    cout << endl;
    
    return 0;
}`,
        completed: false
      }
    ]
  }
];

export const codeExamples = {
  helloWorld: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  
  variables: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Different data types
    int age = 25;
    double salary = 50000.50;
    char grade = 'A';
    string name = "John Doe";
    bool isEmployed = true;
    
    cout << "Employee Information:" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Salary: $" << salary << endl;
    cout << "Grade: " << grade << endl;
    cout << "Employed: " << (isEmployed ? "Yes" : "No") << endl;
    
    return 0;
}`,

  functions: `#include <iostream>
using namespace std;

// Function to calculate factorial
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Function to check if number is prime
bool isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

int main() {
    int number = 5;
    
    cout << "Factorial of " << number << " is: " << factorial(number) << endl;
    cout << number << " is " << (isPrime(number) ? "prime" : "not prime") << endl;
    
    return 0;
}`,

  classes: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountNumber;
    string ownerName;
    double balance;

public:
    // Constructor
    BankAccount(string accNum, string owner, double initialBalance) {
        accountNumber = accNum;
        ownerName = owner;
        balance = initialBalance;
    }
    
    // Deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited $" << amount << endl;
        }
    }
    
    // Withdraw money
    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn $" << amount << endl;
            return true;
        }
        cout << "Insufficient funds!" << endl;
        return false;
    }
    
    // Get balance
    double getBalance() const {
        return balance;
    }
    
    // Display account info
    void displayInfo() const {
        cout << "Account: " << accountNumber << endl;
        cout << "Owner: " << ownerName << endl;
        cout << "Balance: $" << balance << endl;
    }
};

int main() {
    BankAccount account("12345", "Alice Johnson", 1000.0);
    
    account.displayInfo();
    account.deposit(500.0);
    account.withdraw(200.0);
    
    cout << "Current balance: $" << account.getBalance() << endl;
    
    return 0;
}`
};