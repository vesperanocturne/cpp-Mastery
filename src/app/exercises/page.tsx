"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { IDE } from "@/components/IDE";

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  points: number;
  timeEstimate: string;
  problem: string;
  hints: string[];
  solution: string;
  testCases: { 
    input: string; 
    output?: string; 
    requiredConstructs?: string[];
    outputPattern?: string;
  }[];
  completed: boolean;
}

export default function ExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [activeExerciseTab, setActiveExerciseTab] = useState<Record<string, string>>({});

  const exercises: Exercise[] = [
    {
      id: 'hello-world',
      title: 'Hello World Program',
      description: 'Write your first C++ program that prints "Hello, World!" to the console',
      difficulty: 'beginner',
      category: 'basics',
      points: 10,
      timeEstimate: '5 min',
      problem: `Write a C++ program that outputs "Hello, World!" to the console.

Requirements:
- Use the iostream library
- Include proper headers
- Use the main function
- Print the exact text "Hello, World!"`,
      hints: [
        'Include the <iostream> header for input/output operations',
        'Use std::cout or cout with using namespace std',
        'Don\'t forget the return statement in main()',
        'End your output with std::endl or \\n'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      testCases: [
        { input: '', output: 'Hello, World!' }
      ],
      completed: false
    },
    {
      id: 'calculator',
      title: 'Simple Calculator',
      description: 'Create a calculator that performs basic arithmetic operations',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Create a simple calculator program that:
- Takes two numbers as input
- Takes an operator (+, -, *, /) as input
- Performs the calculation
- Displays the result

Handle division by zero appropriately.`,
      hints: [
        'Use cin to get user input',
        'Use a switch statement or if-else for operations',
        'Check for division by zero before performing division',
        'Use appropriate data types for decimal results'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    double num1, num2;
    char operation;
    
    cout << "Enter first number: ";
    cin >> num1;
    
    cout << "Enter operator (+, -, *, /): ";
    cin >> operation;
    
    cout << "Enter second number: ";
    cin >> num2;
    
    switch(operation) {
        case '+':
            cout << "Result: " << num1 + num2 << endl;
            break;
        case '-':
            cout << "Result: " << num1 - num2 << endl;
            break;
        case '*':
            cout << "Result: " << num1 * num2 << endl;
            break;
        case '/':
            if(num2 != 0) {
                cout << "Result: " << num1 / num2 << endl;
            } else {
                cout << "Error: Division by zero!" << endl;
            }
            break;
        default:
            cout << "Error: Invalid operator!" << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '10 + 5', output: 'Result: 15' },
        { input: '10 / 0', output: 'Error: Division by zero!' }
      ],
      completed: false
    },
    {
      id: 'variables-datatypes',
      title: 'Variables and Data Types',
      description: 'Practice declaring and using different data types in C++',
      difficulty: 'beginner',
      category: 'basics',
      points: 15,
      timeEstimate: '8 min',
      problem: `Write a program that declares variables of different data types and displays their values.

Requirements:
- Declare an integer variable
- Declare a floating-point variable
- Declare a character variable
- Declare a string variable
- Display all variables with appropriate labels`,
      hints: [
        'Use int for integers, float or double for decimals',
        'Use char for single characters, string for text',
        'Remember to include <string> header for string type',
        'Use cout to display the values'
      ],
      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 25;
    double height = 5.9;
    char grade = 'A';
    string name = "John";
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Height: " << height << " feet" << endl;
    cout << "Grade: " << grade << endl;
    
    return 0;
}`,
      testCases: [
        { input: '', output: 'Name: John', requiredConstructs: ['int', 'double', 'char', 'string'] }
      ],
      completed: false
    },
    {
      id: 'even-odd',
      title: 'Even or Odd Checker',
      description: 'Check if a number is even or odd',
      difficulty: 'beginner',
      category: 'basics',
      points: 15,
      timeEstimate: '8 min',
      problem: `Write a program that takes a number as input and determines whether it is even or odd.

Requirements:
- Take an integer as input
- Check if it's even or odd using the modulo operator
- Display the result`,
      hints: [
        'Use the modulo operator (%) to check remainder',
        'If number % 2 == 0, it\'s even',
        'Otherwise, it\'s odd',
        'Handle negative numbers if needed'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    if (number % 2 == 0) {
        cout << number << " is even." << endl;
    } else {
        cout << number << " is odd." << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '8', output: '8 is even.' },
        { input: '7', output: '7 is odd.' }
      ],
      completed: false
    },
    {
      id: 'largest-three',
      title: 'Largest of Three Numbers',
      description: 'Find the largest among three numbers',
      difficulty: 'beginner',
      category: 'basics',
      points: 20,
      timeEstimate: '12 min',
      problem: `Write a program that takes three numbers as input and finds the largest among them.

Requirements:
- Take three numbers as input
- Compare them to find the largest
- Display the largest number`,
      hints: [
        'Use if-else statements to compare numbers',
        'You can use nested if statements or logical operators',
        'Consider using a variable to store the largest value',
        'Handle the case when all numbers are equal'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int num1, num2, num3;
    cout << "Enter three numbers: ";
    cin >> num1 >> num2 >> num3;
    
    int largest = num1;
    
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    
    cout << "Largest number is: " << largest << endl;
    
    return 0;
}`,
      testCases: [
        { input: '10 25 15', output: 'Largest number is: 25' },
        { input: '5 5 5', output: 'Largest number is: 5' }
      ],
      completed: false
    },
    {
      id: 'grade-calculator',
      title: 'Grade Calculator',
      description: 'Calculate and display grade based on marks',
      difficulty: 'beginner',
      category: 'basics',
      points: 20,
      timeEstimate: '12 min',
      problem: `Write a program that takes marks as input and displays the corresponding grade.

Grading System:
- 90-100: A
- 80-89: B
- 70-79: C
- 60-69: D
- Below 60: F

Requirements:
- Take marks as input
- Determine the grade
- Display the grade`,
      hints: [
        'Use if-else if-else statements',
        'Check ranges from highest to lowest',
        'Validate that marks are between 0 and 100',
        'Use >= for range checking'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int marks;
    cout << "Enter marks (0-100): ";
    cin >> marks;
    
    if (marks < 0 || marks > 100) {
        cout << "Invalid marks! Please enter between 0 and 100." << endl;
        return 1;
    }
    
    char grade;
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    cout << "Grade: " << grade << endl;
    
    return 0;
}`,
      testCases: [
        { input: '95', output: 'Grade: A' },
        { input: '75', output: 'Grade: C' },
        { input: '45', output: 'Grade: F' }
      ],
      completed: false
    },
    {
      id: 'sum-numbers',
      title: 'Sum of Numbers',
      description: 'Calculate the sum of numbers from 1 to n',
      difficulty: 'beginner',
      category: 'basics',
      points: 20,
      timeEstimate: '12 min',
      problem: `Write a program that calculates the sum of all numbers from 1 to n, where n is provided by the user.

Requirements:
- Take n as input
- Use a loop to sum numbers from 1 to n
- Display the sum`,
      hints: [
        'Use a for loop to iterate from 1 to n',
        'Initialize a sum variable to 0',
        'Add each number to the sum in the loop',
        'Handle edge case when n is 0 or negative'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    if (n <= 0) {
        cout << "Please enter a positive number." << endl;
        return 1;
    }
    
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    
    cout << "Sum of numbers from 1 to " << n << " is: " << sum << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5', output: 'Sum of numbers from 1 to 5 is: 15' },
        { input: '10', output: 'Sum of numbers from 1 to 10 is: 55' }
      ],
      completed: false
    },
    {
      id: 'factorial',
      title: 'Factorial Calculator',
      description: 'Calculate the factorial of a number',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Write a program that calculates the factorial of a given number.

Factorial of n (n!) = n × (n-1) × (n-2) × ... × 2 × 1
Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

Requirements:
- Take a number as input
- Calculate its factorial
- Display the result`,
      hints: [
        'Use a loop to multiply numbers from 1 to n',
        'Initialize result to 1 (not 0)',
        'Factorial of 0 is 1',
        'Use long long for larger factorials to avoid overflow'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    if (n < 0) {
        cout << "Factorial is not defined for negative numbers." << endl;
        return 1;
    }
    
    long long factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    cout << "Factorial of " << n << " is: " << factorial << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5', output: 'Factorial of 5 is: 120' },
        { input: '0', output: 'Factorial of 0 is: 1' }
      ],
      completed: false
    },
    {
      id: 'multiplication-table',
      title: 'Multiplication Table',
      description: 'Generate multiplication table for a given number',
      difficulty: 'beginner',
      category: 'basics',
      points: 20,
      timeEstimate: '12 min',
      problem: `Write a program that generates the multiplication table for a given number.

Requirements:
- Take a number as input
- Display its multiplication table from 1 to 10
- Format the output clearly`,
      hints: [
        'Use a for loop from 1 to 10',
        'Multiply the input number by the loop variable',
        'Format output for readability',
        'Use proper spacing in your output'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    cout << "Multiplication table of " << number << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << number << " x " << i << " = " << (number * i) << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '5', output: '5 x 1 = 5', requiredConstructs: ['for', 'cout'] }
      ],
      completed: false
    },
    {
      id: 'reverse-number',
      title: 'Reverse a Number',
      description: 'Reverse the digits of a given number',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Write a program that reverses the digits of a given number.

Example: If input is 1234, output should be 4321

Requirements:
- Take a number as input
- Reverse its digits
- Display the reversed number`,
      hints: [
        'Use modulo operator (%) to get last digit',
        'Use division (/) to remove last digit',
        'Build reversed number by multiplying by 10 and adding digits',
        'Handle negative numbers if needed'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int number, reversed = 0;
    cout << "Enter a number: ";
    cin >> number;
    
    int original = number;
    
    while (number != 0) {
        int digit = number % 10;
        reversed = reversed * 10 + digit;
        number = number / 10;
    }
    
    cout << "Reversed number: " << reversed << endl;
    
    return 0;
}`,
      testCases: [
        { input: '1234', output: 'Reversed number: 4321' },
        { input: '567', output: 'Reversed number: 765' }
      ],
      completed: false
    },
    {
      id: 'palindrome-number',
      title: 'Palindrome Number Checker',
      description: 'Check if a number is a palindrome',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Write a program that checks if a given number is a palindrome.

A palindrome number reads the same forwards and backwards.
Example: 121, 1331, 7 are palindromes

Requirements:
- Take a number as input
- Check if it's a palindrome
- Display appropriate message`,
      hints: [
        'Reverse the number and compare with original',
        'You can reuse the reverse logic from previous exercise',
        'If reversed == original, it\'s a palindrome',
        'Handle single-digit numbers (they are palindromes)'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    int original = number;
    int reversed = 0;
    
    while (number != 0) {
        int digit = number % 10;
        reversed = reversed * 10 + digit;
        number = number / 10;
    }
    
    if (original == reversed) {
        cout << original << " is a palindrome." << endl;
    } else {
        cout << original << " is not a palindrome." << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '121', output: '121 is a palindrome.' },
        { input: '123', output: '123 is not a palindrome.' }
      ],
      completed: false
    },
    {
      id: 'sum-digits',
      title: 'Sum of Digits',
      description: 'Calculate the sum of digits in a number',
      difficulty: 'beginner',
      category: 'basics',
      points: 20,
      timeEstimate: '12 min',
      problem: `Write a program that calculates the sum of all digits in a given number.

Example: If input is 1234, sum = 1 + 2 + 3 + 4 = 10

Requirements:
- Take a number as input
- Extract each digit and sum them
- Display the sum`,
      hints: [
        'Use modulo operator (%) to get last digit',
        'Use division (/) to remove last digit',
        'Add each digit to a sum variable',
        'Continue until number becomes 0'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    int sum = 0;
    int original = number;
    
    while (number != 0) {
        int digit = number % 10;
        sum += digit;
        number = number / 10;
    }
    
    cout << "Sum of digits of " << original << " is: " << sum << endl;
    
    return 0;
}`,
      testCases: [
        { input: '1234', output: 'Sum of digits of 1234 is: 10' },
        { input: '567', output: 'Sum of digits of 567 is: 18' }
      ],
      completed: false
    },
    {
      id: 'temperature-converter',
      title: 'Temperature Converter',
      description: 'Convert temperature between Celsius and Fahrenheit',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Write a program that converts temperature between Celsius and Fahrenheit.

Formulas:
- Celsius to Fahrenheit: F = (C × 9/5) + 32
- Fahrenheit to Celsius: C = (F - 32) × 5/9

Requirements:
- Ask user for conversion type
- Take temperature value as input
- Perform conversion and display result`,
      hints: [
        'Use a menu or ask user for conversion type',
        'Use appropriate data type (float or double) for decimals',
        'Apply the correct formula based on conversion type',
        'Format output to show appropriate decimal places'
      ],
      solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int choice;
    double temperature, result;
    
    cout << "Temperature Converter" << endl;
    cout << "1. Celsius to Fahrenheit" << endl;
    cout << "2. Fahrenheit to Celsius" << endl;
    cout << "Enter your choice (1 or 2): ";
    cin >> choice;
    
    cout << "Enter temperature: ";
    cin >> temperature;
    
    if (choice == 1) {
        result = (temperature * 9.0 / 5.0) + 32;
        cout << fixed << setprecision(2);
        cout << temperature << " Celsius = " << result << " Fahrenheit" << endl;
    } else if (choice == 2) {
        result = (temperature - 32) * 5.0 / 9.0;
        cout << fixed << setprecision(2);
        cout << temperature << " Fahrenheit = " << result << " Celsius" << endl;
    } else {
        cout << "Invalid choice!" << endl;
        return 1;
    }
    
    return 0;
}`,
      testCases: [
        { input: '1\n25', output: '25.00 Celsius = 77.00 Fahrenheit', requiredConstructs: ['if', 'cin', 'cout'] }
      ],
      completed: false
    },
    {
      id: 'area-perimeter',
      title: 'Area and Perimeter Calculator',
      description: 'Calculate area and perimeter of rectangle and circle',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Write a program that calculates area and perimeter for different shapes.

For Rectangle:
- Area = length × width
- Perimeter = 2 × (length + width)

For Circle:
- Area = π × radius²
- Perimeter (Circumference) = 2 × π × radius

Requirements:
- Ask user to choose shape
- Take required measurements as input
- Calculate and display area and perimeter`,
      hints: [
        'Use a menu to select shape',
        'Use π = 3.14159 or include <cmath> and use M_PI',
        'Use appropriate formulas for each shape',
        'Use double or float for decimal calculations'
      ],
      solution: `#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main() {
    int choice;
    cout << "Shape Calculator" << endl;
    cout << "1. Rectangle" << endl;
    cout << "2. Circle" << endl;
    cout << "Enter your choice (1 or 2): ";
    cin >> choice;
    
    if (choice == 1) {
        double length, width;
        cout << "Enter length: ";
        cin >> length;
        cout << "Enter width: ";
        cin >> width;
        
        double area = length * width;
        double perimeter = 2 * (length + width);
        
        cout << fixed << setprecision(2);
        cout << "Area: " << area << endl;
        cout << "Perimeter: " << perimeter << endl;
    } else if (choice == 2) {
        double radius;
        cout << "Enter radius: ";
        cin >> radius;
        
        double area = M_PI * radius * radius;
        double perimeter = 2 * M_PI * radius;
        
        cout << fixed << setprecision(2);
        cout << "Area: " << area << endl;
        cout << "Circumference: " << perimeter << endl;
    } else {
        cout << "Invalid choice!" << endl;
        return 1;
    }
    
    return 0;
}`,
      testCases: [
        { input: '1\n5\n3', output: 'Area: 15.00', requiredConstructs: ['if', 'cin', 'cout'] }
      ],
      completed: false
    },
    {
      id: 'count-vowels',
      title: 'Count Vowels in String',
      description: 'Count the number of vowels in a string',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Write a program that counts the number of vowels (a, e, i, o, u) in a given string.

Requirements:
- Take a string as input
- Count vowels (both uppercase and lowercase)
- Display the count`,
      hints: [
        'Include <string> header for string operations',
        'Use a loop to iterate through each character',
        'Check if character is a vowel (a, e, i, o, u)',
        'Handle both uppercase and lowercase letters'
      ],
      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string text;
    cout << "Enter a string: ";
    getline(cin, text);
    
    int vowelCount = 0;
    
    for (int i = 0; i < text.length(); i++) {
        char ch = tolower(text[i]);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowelCount++;
        }
    }
    
    cout << "Number of vowels: " << vowelCount << endl;
    
    return 0;
}`,
      testCases: [
        { input: 'Hello World', output: 'Number of vowels: 3', requiredConstructs: ['for', 'string'] }
      ],
      completed: false
    },
    {
      id: 'fibonacci',
      title: 'Fibonacci Sequence',
      description: 'Generate the Fibonacci sequence up to n terms',
      difficulty: 'intermediate',
      category: 'algorithms',
      points: 40,
      timeEstimate: '20 min',
      problem: `Write a program that generates the Fibonacci sequence up to n terms.

The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two numbers: 0, 1, 1, 2, 3, 5, 8, 13, ...

Requirements:
- Ask the user for the number of terms
- Display the sequence
- Handle edge cases (n <= 0)`,
      hints: [
        'Use variables to keep track of the previous two numbers',
        'Use a loop to generate the sequence',
        'Handle special cases for n = 1 and n = 2',
        'Consider using long long for larger numbers'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the number of terms: ";
    cin >> n;
    
    if (n <= 0) {
        cout << "Please enter a positive number." << endl;
        return 1;
    }
    
    long long first = 0, second = 1, next;
    
    cout << "Fibonacci sequence: ";
    
    if (n >= 1) {
        cout << first << " ";
    }
    if (n >= 2) {
        cout << second << " ";
    }
    
    for (int i = 3; i <= n; i++) {
        next = first + second;
        cout << next << " ";
        first = second;
        second = next;
    }
    
    cout << endl;
    return 0;
}`,
      testCases: [
        { input: '5', output: 'Fibonacci sequence: 0 1 1 2 3' },
        { input: '1', output: 'Fibonacci sequence: 0' }
      ],
      completed: false
    },
    {
      id: 'prime-checker',
      title: 'Prime Number Checker',
      description: 'Check if a given number is prime',
      difficulty: 'intermediate',
      category: 'algorithms',
      points: 35,
      timeEstimate: '18 min',
      problem: `Write a program that checks whether a given number is prime or not.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements:
- Take a number as input
- Check if it's prime
- Display appropriate message
- Optimize for efficiency`,
      hints: [
        'Numbers less than 2 are not prime',
        'You only need to check divisors up to sqrt(n)',
        'Even numbers (except 2) are not prime',
        'Use a function to make code more organized'
      ],
      solution: `#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    if (isPrime(number)) {
        cout << number << " is a prime number." << endl;
    } else {
        cout << number << " is not a prime number." << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '17', output: '17 is a prime number.' },
        { input: '15', output: '15 is not a prime number.' }
      ],
      completed: false
    },
    {
      id: 'matrix-multiply',
      title: 'Matrix Multiplication',
      description: 'Implement matrix multiplication for 2x2 matrices',
      difficulty: 'advanced',
      category: 'data-structures',
      points: 60,
      timeEstimate: '30 min',
      problem: `Implement matrix multiplication for two 2x2 matrices.

Requirements:
- Create a function to multiply two 2x2 matrices
- Take input for both matrices
- Display the result matrix
- Handle the mathematical rules of matrix multiplication`,
      hints: [
        'Use 2D arrays to represent matrices',
        'Remember: (A*B)[i][j] = sum of A[i][k] * B[k][j] for all k',
        'Create functions for input, multiplication, and display',
        'Use nested loops for the multiplication algorithm'
      ],
      solution: `#include <iostream>
using namespace std;

void inputMatrix(int matrix[2][2], string name) {
    cout << "Enter elements of matrix " << name << ":" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << "Enter element [" << i << "][" << j << "]: ";
            cin >> matrix[i][j];
        }
    }
}

void multiplyMatrix(int a[2][2], int b[2][2], int result[2][2]) {
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            result[i][j] = 0;
            for (int k = 0; k < 2; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

void displayMatrix(int matrix[2][2], string name) {
    cout << "Matrix " << name << ":" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    int matrixA[2][2], matrixB[2][2], result[2][2];
    
    inputMatrix(matrixA, "A");
    inputMatrix(matrixB, "B");
    
    multiplyMatrix(matrixA, matrixB, result);
    
    displayMatrix(result, "Result (A * B)");
    
    return 0;
}`,
      testCases: [
        { input: 'A: [[1,2],[3,4]] B: [[5,6],[7,8]]', output: 'Result: [[19,22],[43,50]]' }
      ],
      completed: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Exercises', count: exercises.length },
    { id: 'basics', name: 'Basics', count: exercises.filter(e => e.category === 'basics').length },
    { id: 'algorithms', name: 'Algorithms', count: exercises.filter(e => e.category === 'algorithms').length },
    { id: 'data-structures', name: 'Data Structures', count: exercises.filter(e => e.category === 'data-structures').length },
  ];

  const filteredExercises = selectedCategory === 'all' 
    ? exercises 
    : exercises.filter(exercise => exercise.category === selectedCategory);

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

  const handleCompleteExercise = (exerciseId: string) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]));
  };

  const totalPoints = Array.from(completedExercises).reduce((sum, exerciseId) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    return sum + (exercise?.points || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            C++ Practice Exercises
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            Strengthen your C++ skills with hands-on coding exercises. 
            From basic syntax to advanced algorithms.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{completedExercises.size}</div>
              <div className="text-sm text-slate-600">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{totalPoints}</div>
              <div className="text-sm text-slate-600">Points Earned</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{exercises.length}</div>
              <div className="text-sm text-slate-600">Total Exercises</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExercises.map((exercise) => (
            <Card key={exercise.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-xl font-semibold text-slate-900">
                        {exercise.title}
                      </CardTitle>
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                      {completedExercises.has(exercise.id) && (
                        <Badge className="bg-green-100 text-green-800">
                          Completed
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-slate-600 mb-3">
                      {exercise.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{exercise.timeEstimate}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span>{exercise.points} pts</span>
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs 
                  value={activeExerciseTab[exercise.id] || "problem"} 
                  onValueChange={(value) => setActiveExerciseTab(prev => ({ ...prev, [exercise.id]: value }))}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="problem">Problem</TabsTrigger>
                    <TabsTrigger value="hints">Hints</TabsTrigger>
                    <TabsTrigger value="editor">Code Editor</TabsTrigger>
                    <TabsTrigger value="solution">Solution</TabsTrigger>
                  </TabsList>

                  <TabsContent value="problem" className="mt-4">
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm text-slate-700 font-mono">
                          {exercise.problem}
                        </pre>
                      </div>
                      
                      {exercise.testCases.length > 0 && (
                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Test Cases:</h4>
                          <div className="space-y-2">
                            {exercise.testCases.map((testCase, index) => (
                              <div key={index} className="bg-slate-100 p-3 rounded text-sm">
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
                      {exercise.hints.map((hint, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
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
                      problem={exercise.problem}
                      hints={exercise.hints}
                      solution={exercise.solution}
                      testCases={exercise.testCases}
                      title={`${exercise.title} - Code Editor`}
                    />
                  </TabsContent>

                  <TabsContent value="solution" className="mt-4">
                    <CodeBlock 
                      code={exercise.solution}
                      title="Solution"
                      description="Study this solution to understand the approach"
                    />
                  </TabsContent>
                </Tabs>

                <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      setActiveExerciseTab(prev => ({ ...prev, [exercise.id]: "editor" }));
                    }}
                  >
                    Open in Editor
                  </Button>
                  {!completedExercises.has(exercise.id) && (
                    <Button 
                      variant="outline" 
                      onClick={() => handleCompleteExercise(exercise.id)}
                    >
                      Mark Complete
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Your Progress
            </h2>
            <p className="text-lg text-slate-600">
              Keep practicing to improve your C++ skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {exercises.filter(e => e.difficulty === 'beginner' && completedExercises.has(e.id)).length}
              </div>
              <div className="text-slate-600">Beginner Exercises</div>
              <div className="text-sm text-slate-500">
                of {exercises.filter(e => e.difficulty === 'beginner').length} completed
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {exercises.filter(e => e.difficulty === 'intermediate' && completedExercises.has(e.id)).length}
              </div>
              <div className="text-slate-600">Intermediate Exercises</div>
              <div className="text-sm text-slate-500">
                of {exercises.filter(e => e.difficulty === 'intermediate').length} completed
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {exercises.filter(e => e.difficulty === 'advanced' && completedExercises.has(e.id)).length}
              </div>
              <div className="text-slate-600">Advanced Exercises</div>
              <div className="text-sm text-slate-500">
                of {exercises.filter(e => e.difficulty === 'advanced').length} completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}