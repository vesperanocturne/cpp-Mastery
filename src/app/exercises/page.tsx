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
    },
    {
      id: 'array-sum',
      title: 'Array Sum',
      description: 'Calculate the sum of all elements in an array',
      difficulty: 'beginner',
      category: 'data-structures',
      points: 20,
      timeEstimate: '10 min',
      problem: `Write a program that calculates the sum of all elements in an array.

Requirements:
- Take array size and elements as input
- Calculate the sum of all elements
- Display the result`,
      hints: [
        'Use a loop to iterate through array elements',
        'Initialize sum to 0 before the loop',
        'Add each element to the sum',
        'Use appropriate data type for sum (int or long long)'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    cout << "Sum of array elements: " << sum << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5\n1 2 3 4 5', output: 'Sum of array elements: 15' }
      ],
      completed: false
    },
    {
      id: 'array-max-min',
      title: 'Find Maximum and Minimum in Array',
      description: 'Find the largest and smallest elements in an array',
      difficulty: 'beginner',
      category: 'data-structures',
      points: 25,
      timeEstimate: '12 min',
      problem: `Write a program that finds the maximum and minimum elements in an array.

Requirements:
- Take array size and elements as input
- Find the maximum element
- Find the minimum element
- Display both results`,
      hints: [
        'Initialize max to first element and min to first element',
        'Compare each element with current max and min',
        'Update max and min as you traverse the array',
        'Handle edge case of empty array'
      ],
      solution: `#include <iostream>
#include <climits>
using namespace std;

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;
    
    if (n <= 0) {
        cout << "Invalid array size!" << endl;
        return 1;
    }
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int max = arr[0];
    int min = arr[0];
    
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    cout << "Maximum element: " << max << endl;
    cout << "Minimum element: " << min << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5\n10 5 20 15 8', output: 'Maximum element: 20', requiredConstructs: ['array', 'for'] }
      ],
      completed: false
    },
    {
      id: 'array-reverse',
      title: 'Reverse an Array',
      description: 'Reverse the elements of an array',
      difficulty: 'beginner',
      category: 'data-structures',
      points: 25,
      timeEstimate: '12 min',
      problem: `Write a program that reverses the elements of an array.

Requirements:
- Take array size and elements as input
- Reverse the array in-place or create a new reversed array
- Display the reversed array`,
      hints: [
        'Swap elements from start and end moving towards center',
        'Use two pointers: one at start, one at end',
        'Swap until pointers meet in the middle',
        'You can also create a new array and copy in reverse order'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // Reverse the array
    int start = 0;
    int end = n - 1;
    while (start < end) {
        // Swap elements
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    
    cout << "Reversed array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5\n1 2 3 4 5', output: 'Reversed array: 5 4 3 2 1' }
      ],
      completed: false
    },
    {
      id: 'array-search',
      title: 'Linear Search in Array',
      description: 'Search for an element in an array using linear search',
      difficulty: 'beginner',
      category: 'data-structures',
      points: 20,
      timeEstimate: '10 min',
      problem: `Write a program that searches for an element in an array using linear search.

Requirements:
- Take array size and elements as input
- Take the element to search for
- Find the index of the element (or -1 if not found)
- Display the result`,
      hints: [
        'Iterate through the array from start to end',
        'Compare each element with the search key',
        'Return index when found, or -1 if not found',
        'You can also find all occurrences'
      ],
      solution: `#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int key;
    cout << "Enter element to search: ";
    cin >> key;
    
    int index = linearSearch(arr, n, key);
    
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found in the array." << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '5\n10 20 30 40 50\n30', output: 'Element found at index: 2' }
      ],
      completed: false
    },
    {
      id: 'array-binary-search',
      title: 'Binary Search in Array',
      description: 'Search for an element in a sorted array using binary search',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 35,
      timeEstimate: '18 min',
      problem: `Write a program that searches for an element in a sorted array using binary search.

Binary search works by repeatedly dividing the search interval in half.

Requirements:
- Take sorted array size and elements as input
- Take the element to search for
- Use binary search algorithm
- Display the index if found, or -1 if not found`,
      hints: [
        'Binary search requires a sorted array',
        'Compare key with middle element',
        'If key is smaller, search left half; if larger, search right half',
        'Repeat until found or search space is empty'
      ],
      solution: `#include <iostream>
using namespace std;

int binarySearch(int arr[], int n, int key) {
    int left = 0;
    int right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    int n;
    cout << "Enter the size of sorted array: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " sorted elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int key;
    cout << "Enter element to search: ";
    cin >> key;
    
    int index = binarySearch(arr, n, key);
    
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found in the array." << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '5\n10 20 30 40 50\n30', output: 'Element found at index: 2' }
      ],
      completed: false
    },
    {
      id: 'array-merge',
      title: 'Merge Two Sorted Arrays',
      description: 'Merge two sorted arrays into one sorted array',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 40,
      timeEstimate: '20 min',
      problem: `Write a program that merges two sorted arrays into one sorted array.

Requirements:
- Take two sorted arrays as input
- Merge them into a single sorted array
- Display the merged array`,
      hints: [
        'Use two pointers, one for each array',
        'Compare elements from both arrays',
        'Add the smaller element to result and move pointer',
        'After one array is exhausted, add remaining elements from the other'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int n1, n2;
    cout << "Enter size of first array: ";
    cin >> n1;
    int arr1[n1];
    cout << "Enter " << n1 << " sorted elements: ";
    for (int i = 0; i < n1; i++) {
        cin >> arr1[i];
    }
    
    cout << "Enter size of second array: ";
    cin >> n2;
    int arr2[n2];
    cout << "Enter " << n2 << " sorted elements: ";
    for (int i = 0; i < n2; i++) {
        cin >> arr2[i];
    }
    
    int merged[n1 + n2];
    int i = 0, j = 0, k = 0;
    
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }
    
    while (i < n1) {
        merged[k++] = arr1[i++];
    }
    
    while (j < n2) {
        merged[k++] = arr2[j++];
    }
    
    cout << "Merged array: ";
    for (int i = 0; i < n1 + n2; i++) {
        cout << merged[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '3\n1 3 5\n3\n2 4 6', output: 'Merged array: 1 2 3 4 5 6' }
      ],
      completed: false
    },
    {
      id: 'stack-implementation',
      title: 'Stack Implementation',
      description: 'Implement a stack data structure with push, pop, and peek operations',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 45,
      timeEstimate: '25 min',
      problem: `Implement a stack data structure using an array.

A stack follows LIFO (Last In First Out) principle.

Operations to implement:
- push(x): Add element x to the top
- pop(): Remove and return top element
- peek(): Return top element without removing
- isEmpty(): Check if stack is empty
- display(): Show all elements

Requirements:
- Use an array to store stack elements
- Handle stack overflow and underflow`,
      hints: [
        'Use a top variable to track the top of stack',
        'Initialize top to -1 for empty stack',
        'push: increment top and add element',
        'pop: return element at top and decrement top',
        'Check bounds before push/pop operations'
      ],
      solution: `#include <iostream>
using namespace std;

class Stack {
private:
    int arr[100];
    int top;
    int maxSize;

public:
    Stack(int size = 100) {
        maxSize = size;
        top = -1;
    }
    
    bool isEmpty() {
        return top == -1;
    }
    
    bool isFull() {
        return top == maxSize - 1;
    }
    
    void push(int value) {
        if (isFull()) {
            cout << "Stack Overflow!" << endl;
            return;
        }
        arr[++top] = value;
        cout << value << " pushed to stack" << endl;
    }
    
    int pop() {
        if (isEmpty()) {
            cout << "Stack Underflow!" << endl;
            return -1;
        }
        return arr[top--];
    }
    
    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty!" << endl;
            return -1;
        }
        return arr[top];
    }
    
    void display() {
        if (isEmpty()) {
            cout << "Stack is empty" << endl;
            return;
        }
        cout << "Stack elements: ";
        for (int i = top; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Stack s(5);
    
    s.push(10);
    s.push(20);
    s.push(30);
    s.display();
    
    cout << "Top element: " << s.peek() << endl;
    cout << "Popped: " << s.pop() << endl;
    s.display();
    
    return 0;
}`,
      testCases: [
        { input: '', output: '30 pushed to stack', requiredConstructs: ['class', 'array'] }
      ],
      completed: false
    },
    {
      id: 'queue-implementation',
      title: 'Queue Implementation',
      description: 'Implement a queue data structure with enqueue and dequeue operations',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 45,
      timeEstimate: '25 min',
      problem: `Implement a queue data structure using an array.

A queue follows FIFO (First In First Out) principle.

Operations to implement:
- enqueue(x): Add element x to the rear
- dequeue(): Remove and return front element
- front(): Return front element without removing
- isEmpty(): Check if queue is empty
- display(): Show all elements

Requirements:
- Use an array to store queue elements
- Handle queue overflow and underflow`,
      hints: [
        'Use front and rear pointers',
        'Initialize front and rear to -1',
        'enqueue: increment rear and add element',
        'dequeue: return element at front and increment front',
        'Handle circular queue for better space utilization'
      ],
      solution: `#include <iostream>
using namespace std;

class Queue {
private:
    int arr[100];
    int front;
    int rear;
    int maxSize;

public:
    Queue(int size = 100) {
        maxSize = size;
        front = -1;
        rear = -1;
    }
    
    bool isEmpty() {
        return front == -1 || front > rear;
    }
    
    bool isFull() {
        return rear == maxSize - 1;
    }
    
    void enqueue(int value) {
        if (isFull()) {
            cout << "Queue Overflow!" << endl;
            return;
        }
        if (front == -1) {
            front = 0;
        }
        arr[++rear] = value;
        cout << value << " enqueued to queue" << endl;
    }
    
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow!" << endl;
            return -1;
        }
        return arr[front++];
    }
    
    int getFront() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1;
        }
        return arr[front];
    }
    
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return;
        }
        cout << "Queue elements: ";
        for (int i = front; i <= rear; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Queue q(5);
    
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.display();
    
    cout << "Front element: " << q.getFront() << endl;
    cout << "Dequeued: " << q.dequeue() << endl;
    q.display();
    
    return 0;
}`,
      testCases: [
        { input: '', output: '30 enqueued to queue', requiredConstructs: ['class', 'array'] }
      ],
      completed: false
    },
    {
      id: 'linked-list-basic',
      title: 'Linked List - Basic Operations',
      description: 'Implement a singly linked list with insert, delete, and display operations',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 50,
      timeEstimate: '30 min',
      problem: `Implement a singly linked list with the following operations:

- insertAtEnd(value): Insert a node at the end
- insertAtBeginning(value): Insert a node at the beginning
- deleteNode(value): Delete a node with given value
- display(): Display all nodes
- search(value): Search for a value in the list

Requirements:
- Use a Node structure with data and next pointer
- Handle empty list cases`,
      hints: [
        'Create a Node structure with data and next pointer',
        'Maintain a head pointer to the first node',
        'For insertion at end, traverse to last node',
        'For deletion, find the node and update previous node\'s next pointer',
        'Handle edge cases: empty list, single node, etc.'
      ],
      solution: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    
    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class LinkedList {
private:
    Node* head;

public:
    LinkedList() {
        head = nullptr;
    }
    
    void insertAtEnd(int value) {
        Node* newNode = new Node(value);
        if (head == nullptr) {
            head = newNode;
        } else {
            Node* temp = head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;
        }
    }
    
    void insertAtBeginning(int value) {
        Node* newNode = new Node(value);
        newNode->next = head;
        head = newNode;
    }
    
    void deleteNode(int value) {
        if (head == nullptr) {
            cout << "List is empty" << endl;
            return;
        }
        
        if (head->data == value) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }
        
        Node* temp = head;
        while (temp->next != nullptr && temp->next->data != value) {
            temp = temp->next;
        }
        
        if (temp->next != nullptr) {
            Node* toDelete = temp->next;
            temp->next = temp->next->next;
            delete toDelete;
        }
    }
    
    void display() {
        if (head == nullptr) {
            cout << "List is empty" << endl;
            return;
        }
        Node* temp = head;
        cout << "List: ";
        while (temp != nullptr) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
    
    bool search(int value) {
        Node* temp = head;
        while (temp != nullptr) {
            if (temp->data == value) {
                return true;
            }
            temp = temp->next;
        }
        return false;
    }
};

int main() {
    LinkedList list;
    
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtBeginning(5);
    list.display();
    
    if (list.search(20)) {
        cout << "20 found in list" << endl;
    }
    
    list.deleteNode(10);
    list.display();
    
    return 0;
}`,
      testCases: [
        { input: '', output: 'List: 5 -> 10 -> 20 -> NULL', requiredConstructs: ['class', 'struct', 'pointer'] }
      ],
      completed: false
    },
    {
      id: 'binary-tree-traversal',
      title: 'Binary Tree Traversal',
      description: 'Implement inorder, preorder, and postorder traversal of a binary tree',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 50,
      timeEstimate: '30 min',
      problem: `Implement a binary tree and perform three types of traversals:

- Inorder: Left -> Root -> Right
- Preorder: Root -> Left -> Right
- Postorder: Left -> Right -> Root

Requirements:
- Create a binary tree structure
- Implement all three traversal methods
- Display the traversal results`,
      hints: [
        'Create a TreeNode structure with data, left, and right pointers',
        'Inorder: traverse left, visit root, traverse right',
        'Preorder: visit root, traverse left, traverse right',
        'Postorder: traverse left, traverse right, visit root',
        'Use recursion for elegant implementation'
      ],
      solution: `#include <iostream>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(int value) {
        data = value;
        left = nullptr;
        right = nullptr;
    }
};

class BinaryTree {
private:
    TreeNode* root;
    
    void inorderHelper(TreeNode* node) {
        if (node == nullptr) return;
        inorderHelper(node->left);
        cout << node->data << " ";
        inorderHelper(node->right);
    }
    
    void preorderHelper(TreeNode* node) {
        if (node == nullptr) return;
        cout << node->data << " ";
        preorderHelper(node->left);
        preorderHelper(node->right);
    }
    
    void postorderHelper(TreeNode* node) {
        if (node == nullptr) return;
        postorderHelper(node->left);
        postorderHelper(node->right);
        cout << node->data << " ";
    }

public:
    BinaryTree() {
        root = nullptr;
    }
    
    void insert(int value) {
        if (root == nullptr) {
            root = new TreeNode(value);
            return;
        }
        // Simple insertion for demonstration
        TreeNode* temp = root;
        while (true) {
            if (value < temp->data) {
                if (temp->left == nullptr) {
                    temp->left = new TreeNode(value);
                    break;
                }
                temp = temp->left;
            } else {
                if (temp->right == nullptr) {
                    temp->right = new TreeNode(value);
                    break;
                }
                temp = temp->right;
            }
        }
    }
    
    void inorder() {
        cout << "Inorder: ";
        inorderHelper(root);
        cout << endl;
    }
    
    void preorder() {
        cout << "Preorder: ";
        preorderHelper(root);
        cout << endl;
    }
    
    void postorder() {
        cout << "Postorder: ";
        postorderHelper(root);
        cout << endl;
    }
};

int main() {
    BinaryTree tree;
    
    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    
    tree.inorder();
    tree.preorder();
    tree.postorder();
    
    return 0;
}`,
      testCases: [
        { input: '', output: 'Inorder: 20 30 40 50 70', requiredConstructs: ['class', 'struct', 'recursion'] }
      ],
      completed: false
    },
    {
      id: 'array-rotation',
      title: 'Array Rotation',
      description: 'Rotate an array to the left or right by k positions',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 35,
      timeEstimate: '18 min',
      problem: `Write a program to rotate an array to the left by k positions.

Example: [1, 2, 3, 4, 5] rotated left by 2 becomes [3, 4, 5, 1, 2]

Requirements:
- Take array size, elements, and rotation count as input
- Rotate the array to the left
- Display the rotated array`,
      hints: [
        'Use a temporary array to store rotated elements',
        'Or use reversal algorithm: reverse first k, reverse rest, reverse all',
        'Handle k > array size by using modulo',
        'You can also rotate in-place using extra space'
      ],
      solution: `#include <iostream>
using namespace std;

void rotateLeft(int arr[], int n, int k) {
    k = k % n; // Handle k > n
    
    int temp[k];
    // Store first k elements
    for (int i = 0; i < k; i++) {
        temp[i] = arr[i];
    }
    
    // Shift remaining elements
    for (int i = 0; i < n - k; i++) {
        arr[i] = arr[i + k];
    }
    
    // Place stored elements at end
    for (int i = 0; i < k; i++) {
        arr[n - k + i] = temp[i];
    }
}

int main() {
    int n, k;
    cout << "Enter array size: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter rotation count: ";
    cin >> k;
    
    rotateLeft(arr, n, k);
    
    cout << "Rotated array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5\n1 2 3 4 5\n2', output: 'Rotated array: 3 4 5 1 2' }
      ],
      completed: false
    },
    {
      id: 'array-frequency',
      title: 'Count Element Frequency',
      description: 'Count the frequency of each element in an array',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 30,
      timeEstimate: '15 min',
      problem: `Write a program that counts the frequency of each element in an array.

Requirements:
- Take array size and elements as input
- Count how many times each element appears
- Display each element with its frequency`,
      hints: [
        'Use a map or array to store frequencies',
        'For each element, increment its count',
        'You can use nested loops for a simple approach',
        'Or use a hash map for better efficiency'
      ],
      solution: `#include <iostream>
#include <map>
using namespace std;

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    map<int, int> frequency;
    
    for (int i = 0; i < n; i++) {
        frequency[arr[i]]++;
    }
    
    cout << "Element frequencies:" << endl;
    for (auto it = frequency.begin(); it != frequency.end(); it++) {
        cout << it->first << " appears " << it->second << " time(s)" << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '5\n1 2 2 3 1', output: '1 appears 2 time(s)' }
      ],
      completed: false
    },
    {
      id: 'two-sum',
      title: 'Two Sum Problem',
      description: 'Find two numbers in an array that add up to a target sum',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 40,
      timeEstimate: '20 min',
      problem: `Given an array of integers and a target sum, find two numbers that add up to the target.

Return the indices of the two numbers.

Example: Array [2, 7, 11, 15], target = 9
Output: indices 0 and 1 (2 + 7 = 9)

Requirements:
- Take array size, elements, and target sum as input
- Find two indices whose values sum to target
- Display the indices or a message if not found`,
      hints: [
        'Use nested loops to check all pairs',
        'Or use a hash map for O(n) solution',
        'For each element, check if (target - element) exists',
        'Store elements and their indices in a map'
      ],
      solution: `#include <iostream>
#include <map>
using namespace std;

void twoSum(int arr[], int n, int target) {
    map<int, int> numMap;
    
    for (int i = 0; i < n; i++) {
        int complement = target - arr[i];
        
        if (numMap.find(complement) != numMap.end()) {
            cout << "Indices: " << numMap[complement] << " and " << i << endl;
            cout << "Values: " << arr[numMap[complement]] << " + " << arr[i] << " = " << target << endl;
            return;
        }
        
        numMap[arr[i]] = i;
    }
    
    cout << "No two numbers found that sum to " << target << endl;
}

int main() {
    int n, target;
    cout << "Enter array size: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter target sum: ";
    cin >> target;
    
    twoSum(arr, n, target);
    
    return 0;
}`,
      testCases: [
        { input: '4\n2 7 11 15\n9', output: 'Indices: 0 and 1' }
      ],
      completed: false
    },
    {
      id: 'array-remove-duplicates',
      title: 'Remove Duplicates from Array',
      description: 'Remove duplicate elements from an array',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 35,
      timeEstimate: '18 min',
      problem: `Write a program to remove duplicate elements from an array.

Requirements:
- Take array size and elements as input
- Remove duplicate elements
- Display the array without duplicates`,
      hints: [
        'Use a set or map to track seen elements',
        'Or sort the array first, then remove adjacent duplicates',
        'Create a new array with unique elements',
        'Or modify the array in-place'
      ],
      solution: `#include <iostream>
#include <set>
#include <vector>
using namespace std;

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    set<int> uniqueSet;
    vector<int> result;
    
    for (int i = 0; i < n; i++) {
        if (uniqueSet.find(arr[i]) == uniqueSet.end()) {
            uniqueSet.insert(arr[i]);
            result.push_back(arr[i]);
        }
    }
    
    cout << "Array without duplicates: ";
    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5\n1 2 2 3 1', output: 'Array without duplicates: 1 2 3' }
      ],
      completed: false
    },
    {
      id: 'matrix-transpose',
      title: 'Matrix Transpose',
      description: 'Find the transpose of a matrix',
      difficulty: 'intermediate',
      category: 'data-structures',
      points: 30,
      timeEstimate: '15 min',
      problem: `Write a program to find the transpose of a matrix.

The transpose of a matrix is obtained by interchanging rows and columns.

Example:
Original:    Transpose:
1 2 3        1 4
4 5 6        2 5
             3 6

Requirements:
- Take matrix dimensions and elements as input
- Calculate and display the transpose`,
      hints: [
        'Transpose: A^T[i][j] = A[j][i]',
        'Swap row and column indices',
        'For a m×n matrix, transpose is n×m',
        'Use nested loops to swap elements'
      ],
      solution: `#include <iostream>
using namespace std;

int main() {
    int rows, cols;
    cout << "Enter number of rows: ";
    cin >> rows;
    cout << "Enter number of columns: ";
    cin >> cols;
    
    int matrix[rows][cols];
    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
    
    cout << "\\nOriginal matrix:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    
    cout << "\\nTranspose matrix:" << endl;
    for (int j = 0; j < cols; j++) {
        for (int i = 0; i < rows; i++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '2 3\n1 2 3\n4 5 6', output: 'Transpose matrix:', requiredConstructs: ['array', 'for'] }
      ],
      completed: false
    },
    {
      id: 'sparse-matrix',
      title: 'Sparse Matrix Representation',
      description: 'Represent a sparse matrix efficiently',
      difficulty: 'advanced',
      category: 'data-structures',
      points: 50,
      timeEstimate: '30 min',
      problem: `A sparse matrix has most elements as zero. Represent it efficiently by storing only non-zero elements.

Requirements:
- Take matrix dimensions and elements as input
- Identify non-zero elements
- Store them in a compact format (row, column, value)
- Display the sparse representation`,
      hints: [
        'Store only non-zero elements with their positions',
        'Use a structure to store (row, col, value)',
        'Count non-zero elements first',
        'Create an array of structures for compact storage'
      ],
      solution: `#include <iostream>
using namespace std;

struct Element {
    int row;
    int col;
    int value;
};

int main() {
    int rows, cols;
    cout << "Enter number of rows: ";
    cin >> rows;
    cout << "Enter number of columns: ";
    cin >> cols;
    
    int matrix[rows][cols];
    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
    
    // Count non-zero elements
    int count = 0;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (matrix[i][j] != 0) {
                count++;
            }
        }
    }
    
    Element sparse[count];
    int index = 0;
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (matrix[i][j] != 0) {
                sparse[index].row = i;
                sparse[index].col = j;
                sparse[index].value = matrix[i][j];
                index++;
            }
        }
    }
    
    cout << "\\nSparse matrix representation:" << endl;
    cout << "Row\\tCol\\tValue" << endl;
    for (int i = 0; i < count; i++) {
        cout << sparse[i].row << "\\t" << sparse[i].col << "\\t" << sparse[i].value << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '3 3\n0 0 1\n2 0 0\n0 3 0', output: 'Row', requiredConstructs: ['struct', 'array'] }
      ],
      completed: false
    },
    {
      id: 'circular-queue',
      title: 'Circular Queue Implementation',
      description: 'Implement a circular queue to efficiently use array space',
      difficulty: 'advanced',
      category: 'data-structures',
      points: 50,
      timeEstimate: '30 min',
      problem: `Implement a circular queue using an array.

A circular queue reuses the space after dequeuing elements.

Operations:
- enqueue(x): Add element to rear
- dequeue(): Remove element from front
- isEmpty(): Check if queue is empty
- isFull(): Check if queue is full
- display(): Show all elements

Requirements:
- Use modulo arithmetic for circular behavior
- Handle wrap-around of indices`,
      hints: [
        'Use front and rear pointers with modulo',
        'Initialize front and rear to 0',
        'enqueue: rear = (rear + 1) % size',
        'dequeue: front = (front + 1) % size',
        'Full condition: (rear + 1) % size == front'
      ],
      solution: `#include <iostream>
using namespace std;

class CircularQueue {
private:
    int arr[100];
    int front;
    int rear;
    int maxSize;

public:
    CircularQueue(int size = 100) {
        maxSize = size;
        front = -1;
        rear = -1;
    }
    
    bool isEmpty() {
        return front == -1;
    }
    
    bool isFull() {
        return (rear + 1) % maxSize == front;
    }
    
    void enqueue(int value) {
        if (isFull()) {
            cout << "Queue is full!" << endl;
            return;
        }
        if (isEmpty()) {
            front = 0;
        }
        rear = (rear + 1) % maxSize;
        arr[rear] = value;
        cout << value << " enqueued" << endl;
    }
    
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1;
        }
        int value = arr[front];
        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % maxSize;
        }
        return value;
    }
    
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return;
        }
        cout << "Queue: ";
        int i = front;
        while (true) {
            cout << arr[i] << " ";
            if (i == rear) break;
            i = (i + 1) % maxSize;
        }
        cout << endl;
    }
};

int main() {
    CircularQueue q(5);
    
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.display();
    
    cout << "Dequeued: " << q.dequeue() << endl;
    q.display();
    
    return 0;
}`,
      testCases: [
        { input: '', output: '30 enqueued', requiredConstructs: ['class', 'array'] }
      ],
      completed: false
    },
    {
      id: 'doubly-linked-list',
      title: 'Doubly Linked List',
      description: 'Implement a doubly linked list with forward and backward traversal',
      difficulty: 'advanced',
      category: 'data-structures',
      points: 55,
      timeEstimate: '35 min',
      problem: `Implement a doubly linked list with the following operations:

- insertAtEnd(value): Insert at the end
- insertAtBeginning(value): Insert at the beginning
- deleteNode(value): Delete a node
- displayForward(): Display from head to tail
- displayBackward(): Display from tail to head

Requirements:
- Each node has data, next, and prev pointers
- Maintain both head and tail pointers`,
      hints: [
        'Create Node with data, next, and prev pointers',
        'Maintain head and tail pointers',
        'For insertion, update both next and prev pointers',
        'For deletion, update adjacent nodes\' pointers',
        'Handle edge cases: empty list, single node'
      ],
      solution: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node* prev;
    
    Node(int value) {
        data = value;
        next = nullptr;
        prev = nullptr;
    }
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;

public:
    DoublyLinkedList() {
        head = nullptr;
        tail = nullptr;
    }
    
    void insertAtEnd(int value) {
        Node* newNode = new Node(value);
        if (head == nullptr) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }
    
    void insertAtBeginning(int value) {
        Node* newNode = new Node(value);
        if (head == nullptr) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
    }
    
    void deleteNode(int value) {
        Node* temp = head;
        while (temp != nullptr && temp->data != value) {
            temp = temp->next;
        }
        
        if (temp == nullptr) {
            cout << "Node not found" << endl;
            return;
        }
        
        if (temp->prev != nullptr) {
            temp->prev->next = temp->next;
        } else {
            head = temp->next;
        }
        
        if (temp->next != nullptr) {
            temp->next->prev = temp->prev;
        } else {
            tail = temp->prev;
        }
        
        delete temp;
    }
    
    void displayForward() {
        Node* temp = head;
        cout << "Forward: ";
        while (temp != nullptr) {
            cout << temp->data << " <-> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
    
    void displayBackward() {
        Node* temp = tail;
        cout << "Backward: ";
        while (temp != nullptr) {
            cout << temp->data << " <-> ";
            temp = temp->prev;
        }
        cout << "NULL" << endl;
    }
};

int main() {
    DoublyLinkedList list;
    
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtBeginning(5);
    list.displayForward();
    list.displayBackward();
    
    list.deleteNode(10);
    list.displayForward();
    
    return 0;
}`,
      testCases: [
        { input: '', output: 'Forward: 5 <-> 10 <-> 20 <-> NULL', requiredConstructs: ['class', 'struct', 'pointer'] }
      ],
      completed: false
    },
    {
      id: 'binary-search-tree',
      title: 'Binary Search Tree Operations',
      description: 'Implement a BST with insert, search, and delete operations',
      difficulty: 'advanced',
      category: 'data-structures',
      points: 60,
      timeEstimate: '40 min',
      problem: `Implement a Binary Search Tree (BST) with the following operations:

- insert(value): Insert a value maintaining BST property
- search(value): Search for a value
- deleteNode(value): Delete a node
- inorder(): Display inorder traversal

BST Property: Left child < Root < Right child

Requirements:
- Handle all three cases of deletion: leaf, one child, two children`,
      hints: [
        'For insertion: compare with root, go left if smaller, right if larger',
        'For search: similar to insertion, return node if found',
        'For deletion: find node, handle three cases',
        'Case 1: Leaf node - just delete',
        'Case 2: One child - replace with child',
        'Case 3: Two children - replace with inorder successor'
      ],
      solution: `#include <iostream>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(int value) {
        data = value;
        left = nullptr;
        right = nullptr;
    }
};

class BST {
private:
    TreeNode* root;
    
    TreeNode* insertHelper(TreeNode* node, int value) {
        if (node == nullptr) {
            return new TreeNode(value);
        }
        if (value < node->data) {
            node->left = insertHelper(node->left, value);
        } else {
            node->right = insertHelper(node->right, value);
        }
        return node;
    }
    
    TreeNode* searchHelper(TreeNode* node, int value) {
        if (node == nullptr || node->data == value) {
            return node;
        }
        if (value < node->data) {
            return searchHelper(node->left, value);
        }
        return searchHelper(node->right, value);
    }
    
    TreeNode* findMin(TreeNode* node) {
        while (node->left != nullptr) {
            node = node->left;
        }
        return node;
    }
    
    TreeNode* deleteHelper(TreeNode* node, int value) {
        if (node == nullptr) return node;
        
        if (value < node->data) {
            node->left = deleteHelper(node->left, value);
        } else if (value > node->data) {
            node->right = deleteHelper(node->right, value);
        } else {
            if (node->left == nullptr) {
                TreeNode* temp = node->right;
                delete node;
                return temp;
            } else if (node->right == nullptr) {
                TreeNode* temp = node->left;
                delete node;
                return temp;
            }
            
            TreeNode* temp = findMin(node->right);
            node->data = temp->data;
            node->right = deleteHelper(node->right, temp->data);
        }
        return node;
    }
    
    void inorderHelper(TreeNode* node) {
        if (node == nullptr) return;
        inorderHelper(node->left);
        cout << node->data << " ";
        inorderHelper(node->right);
    }

public:
    BST() {
        root = nullptr;
    }
    
    void insert(int value) {
        root = insertHelper(root, value);
    }
    
    bool search(int value) {
        return searchHelper(root, value) != nullptr;
    }
    
    void deleteNode(int value) {
        root = deleteHelper(root, value);
    }
    
    void inorder() {
        cout << "Inorder: ";
        inorderHelper(root);
        cout << endl;
    }
};

int main() {
    BST tree;
    
    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    
    tree.inorder();
    
    if (tree.search(30)) {
        cout << "30 found in BST" << endl;
    }
    
    tree.deleteNode(30);
    tree.inorder();
    
    return 0;
}`,
      testCases: [
        { input: '', output: 'Inorder: 20 30 40 50 70', requiredConstructs: ['class', 'struct', 'recursion'] }
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