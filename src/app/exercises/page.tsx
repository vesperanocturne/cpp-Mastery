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
      id: 'bubble-sort',
      title: 'Bubble Sort Algorithm',
      description: 'Implement bubble sort to sort an array in ascending order',
      difficulty: 'intermediate',
      category: 'algorithms',
      points: 40,
      timeEstimate: '20 min',
      problem: `Implement the Bubble Sort algorithm to sort an array in ascending order.

Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed.

Requirements:
- Take array size and elements as input
- Sort the array using bubble sort algorithm
- Display the sorted array
- Show the number of swaps performed`,
      hints: [
        'Use nested loops: outer loop for passes, inner loop for comparisons',
        'Compare adjacent elements arr[j] and arr[j+1]',
        'Swap if arr[j] > arr[j+1]',
        'Optimize by stopping early if no swaps occur in a pass',
        'The largest element "bubbles" to the end in each pass'
      ],
      solution: `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    int swaps = 0;
    bool swapped;
    
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                swaps++;
            }
        }
        // If no swapping occurred, array is sorted
        if (!swapped) {
            break;
        }
    }
    
    cout << "Total swaps: " << swaps << endl;
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "\\nOriginal array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    bubbleSort(arr, n);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5\n64 34 25 12 22', output: 'Sorted array: 12 22 25 34 64' }
      ],
      completed: false
    },
    {
      id: 'merge-sort',
      title: 'Merge Sort Algorithm',
      description: 'Implement merge sort using divide and conquer approach',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 60,
      timeEstimate: '40 min',
      problem: `Implement the Merge Sort algorithm using a divide and conquer approach.

Merge Sort divides the array into two halves, sorts them recursively, and then merges the sorted halves.

Algorithm:
1. Divide: Split array into two halves
2. Conquer: Recursively sort both halves
3. Combine: Merge the two sorted halves

Requirements:
- Take array size and elements as input
- Sort using merge sort algorithm
- Display the sorted array
- Time complexity should be O(n log n)`,
      hints: [
        'Use recursion to divide the array',
        'Create a merge function to combine two sorted arrays',
        'Divide until array size is 1 (base case)',
        'Merge function: compare elements from both halves, add smaller to result',
        'Use temporary arrays for merging',
        'Handle remaining elements after comparison'
      ],
      solution: `#include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    int leftArr[n1], rightArr[n2];
    
    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++) {
        leftArr[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }
    
    // Merge the temporary arrays back
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        // Sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "\\nOriginal array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    mergeSort(arr, 0, n - 1);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '6\n38 27 43 3 9 82', output: 'Sorted array: 3 9 27 38 43 82' }
      ],
      completed: false
    },
    {
      id: 'breadth-first-search',
      title: 'Breadth-First Search (BFS)',
      description: 'Implement BFS algorithm to traverse a graph level by level',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 65,
      timeEstimate: '45 min',
      problem: `Implement Breadth-First Search (BFS) algorithm to traverse a graph.

BFS explores all nodes at the present depth level before moving to nodes at the next depth level.

Algorithm:
1. Start from a source node
2. Visit all neighbors of current node
3. Mark visited nodes
4. Use a queue to maintain order of exploration

Requirements:
- Represent graph using adjacency list
- Implement BFS starting from a given node
- Display the order of node visits
- Handle disconnected components`,
      hints: [
        'Use a queue to store nodes to be visited',
        'Use a visited array to track visited nodes',
        'Start from source node, mark as visited, enqueue',
        'While queue not empty: dequeue, visit neighbors, enqueue unvisited neighbors',
        'Mark nodes as visited when enqueued to avoid duplicates',
        'Use adjacency list: vector<vector<int>> or array of vectors'
      ],
      solution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void BFS(vector<vector<int>>& graph, int start, int n) {
    vector<bool> visited(n, false);
    queue<int> q;
    
    visited[start] = true;
    q.push(start);
    
    cout << "BFS traversal starting from node " << start << ": ";
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";
        
        // Visit all neighbors
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    cout << endl;
}

int main() {
    int n, edges;
    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter number of edges: ";
    cin >> edges;
    
    vector<vector<int>> graph(n);
    
    cout << "Enter edges (format: node1 node2):" << endl;
    for (int i = 0; i < edges; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u); // For undirected graph
    }
    
    int start;
    cout << "Enter starting node: ";
    cin >> start;
    
    BFS(graph, start, n);
    
    return 0;
}`,
      testCases: [
        { input: '5 4\n0 1\n0 2\n1 3\n2 4\n0', output: 'BFS traversal starting from node 0:', requiredConstructs: ['vector', 'queue', 'function'] }
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
    },
    {
      id: 'lru-cache-implementation',
      title: 'LRU Cache Implementation',
      description: 'Implement a Least Recently Used (LRU) Cache combining hash map and doubly linked list for O(1) operations',
      difficulty: 'advanced',
      category: 'data-structures',
      points: 100,
      timeEstimate: '90 min',
      problem: `Implement an LRU (Least Recently Used) Cache that supports get() and put() operations in O(1) time complexity.

An LRU cache evicts the least recently used item when the cache reaches its capacity.

Requirements:
- Implement get(key): Return value if key exists, -1 otherwise. Move accessed item to front.
- Implement put(key, value): Insert or update value. If cache is full, remove least recently used item.
- All operations must be O(1) time complexity
- Use a combination of hash map and doubly linked list
- Cache has a maximum capacity

Operations:
- get(key): Get value and mark as recently used
- put(key, value): Add/update value and mark as recently used
- display(): Show current cache state

This problem requires:
- Hash map for O(1) key lookup
- Doubly linked list for O(1) insertion/deletion
- Combining both data structures efficiently
- Managing cache capacity and eviction policy`,
      hints: [
        'Use a hash map to store key -> node mappings for O(1) access',
        'Use a doubly linked list to maintain access order (most recent at head)',
        'For get(): Find node in hash map, move to head of list',
        'For put(): If exists, update and move to head. If new and full, remove tail, add to head',
        'Maintain both head and tail pointers for efficient list operations',
        'Each node needs: key, value, prev, next pointers',
        'Hash map stores: key -> pointer to node in list',
        'When capacity reached, remove tail node (LRU) and its hash map entry'
      ],
      solution: `#include <iostream>
#include <unordered_map>
using namespace std;

struct Node {
    int key;
    int value;
    Node* prev;
    Node* next;
    
    Node(int k, int v) {
        key = k;
        value = v;
        prev = nullptr;
        next = nullptr;
    }
};

class LRUCache {
private:
    int capacity;
    unordered_map<int, Node*> cache;
    Node* head;
    Node* tail;
    
    void addToHead(Node* node) {
        node->prev = nullptr;
        node->next = head;
        
        if (head != nullptr) {
            head->prev = node;
        }
        head = node;
        
        if (tail == nullptr) {
            tail = head;
        }
    }
    
    void removeNode(Node* node) {
        if (node->prev != nullptr) {
            node->prev->next = node->next;
        } else {
            head = node->next;
        }
        
        if (node->next != nullptr) {
            node->next->prev = node->prev;
        } else {
            tail = node->prev;
        }
    }
    
    void moveToHead(Node* node) {
        removeNode(node);
        addToHead(node);
    }
    
    Node* removeTail() {
        Node* lastNode = tail;
        removeNode(lastNode);
        return lastNode;
    }

public:
    LRUCache(int cap) {
        capacity = cap;
        head = nullptr;
        tail = nullptr;
    }
    
    int get(int key) {
        if (cache.find(key) == cache.end()) {
            cout << "Key " << key << " not found" << endl;
            return -1;
        }
        
        Node* node = cache[key];
        moveToHead(node);
        cout << "Get(" << key << ") = " << node->value << endl;
        return node->value;
    }
    
    void put(int key, int value) {
        if (cache.find(key) != cache.end()) {
            // Key exists, update value and move to head
            Node* node = cache[key];
            node->value = value;
            moveToHead(node);
            cout << "Updated key " << key << " to value " << value << endl;
        } else {
            // New key
            if (cache.size() >= capacity) {
                // Remove LRU (tail)
                Node* tailNode = removeTail();
                cout << "Cache full. Evicting key " << tailNode->key << endl;
                cache.erase(tailNode->key);
                delete tailNode;
            }
            
            // Add new node
            Node* newNode = new Node(key, value);
            addToHead(newNode);
            cache[key] = newNode;
            cout << "Added key " << key << " with value " << value << endl;
        }
    }
    
    void display() {
        cout << "Cache state (most recent first): ";
        Node* temp = head;
        while (temp != nullptr) {
            cout << "(" << temp->key << "," << temp->value << ") ";
            temp = temp->next;
        }
        cout << endl;
    }
    
    ~LRUCache() {
        Node* temp = head;
        while (temp != nullptr) {
            Node* next = temp->next;
            delete temp;
            temp = next;
        }
    }
};

int main() {
    LRUCache cache(3);
    
    cache.put(1, 10);
    cache.put(2, 20);
    cache.put(3, 30);
    cache.display();
    
    cache.get(2);
    cache.display();
    
    cache.put(4, 40);
    cache.display();
    
    cache.get(1);
    cache.get(3);
    cache.display();
    
    return 0;
}`,
      testCases: [
        { input: '', output: 'Cache state (most recent first):', requiredConstructs: ['class', 'struct', 'unordered_map', 'pointer'] }
      ],
      completed: false
    },
    {
      id: 'quick-sort',
      title: 'Quick Sort Algorithm',
      description: 'Implement quick sort using partition and recursion',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 65,
      timeEstimate: '45 min',
      problem: `Implement the Quick Sort algorithm using divide and conquer.

Quick Sort picks a pivot element and partitions the array around the pivot.

Algorithm:
1. Choose a pivot element
2. Partition: Rearrange array so elements < pivot are left, > pivot are right
3. Recursively sort left and right partitions

Requirements:
- Take array size and elements as input
- Sort using quick sort algorithm
- Display the sorted array
- Average time complexity: O(n log n)`,
      hints: [
        'Choose pivot (first, last, or middle element)',
        'Partition: move elements smaller than pivot to left, larger to right',
        'Use two pointers: one from start, one from end',
        'Recursively sort left and right partitions',
        'Base case: array size <= 1',
        'Partition function returns pivot position'
      ],
      solution: `#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // Swap arr[i+1] and arr[high] (pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "\\nOriginal array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    quickSort(arr, 0, n - 1);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '6\n64 34 25 12 22 11', output: 'Sorted array: 11 12 22 25 34 64' }
      ],
      completed: false
    },
    {
      id: 'depth-first-search',
      title: 'Depth-First Search (DFS)',
      description: 'Implement DFS algorithm to traverse a graph',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 60,
      timeEstimate: '40 min',
      problem: `Implement Depth-First Search (DFS) algorithm to traverse a graph.

DFS explores as far as possible along each branch before backtracking.

Algorithm:
1. Start from a source node
2. Mark node as visited
3. Recursively visit all unvisited neighbors
4. Backtrack when no more unvisited neighbors

Requirements:
- Represent graph using adjacency list
- Implement DFS starting from a given node
- Display the order of node visits
- Use recursion or stack`,
      hints: [
        'Use recursion for elegant implementation',
        'Use a visited array to track visited nodes',
        'Mark node as visited when first encountered',
        'Recursively call DFS on all unvisited neighbors',
        'For iterative version, use a stack',
        'DFS explores one path completely before backtracking'
      ],
      solution: `#include <iostream>
#include <vector>
using namespace std;

void DFS(vector<vector<int>>& graph, int node, vector<bool>& visited) {
    visited[node] = true;
    cout << node << " ";
    
    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            DFS(graph, neighbor, visited);
        }
    }
}

int main() {
    int n, edges;
    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter number of edges: ";
    cin >> edges;
    
    vector<vector<int>> graph(n);
    
    cout << "Enter edges (format: node1 node2):" << endl;
    for (int i = 0; i < edges; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u); // For undirected graph
    }
    
    int start;
    cout << "Enter starting node: ";
    cin >> start;
    
    vector<bool> visited(n, false);
    
    cout << "DFS traversal starting from node " << start << ": ";
    DFS(graph, start, visited);
    cout << endl;
    
    return 0;
}`,
      testCases: [
        { input: '5 4\n0 1\n0 2\n1 3\n2 4\n0', output: 'DFS traversal starting from node 0:', requiredConstructs: ['vector', 'recursion'] }
      ],
      completed: false
    },
    {
      id: 'heap-implementation',
      title: 'Min Heap Implementation',
      description: 'Implement a min heap data structure with insert and extract operations',
      difficulty: 'advanced',
      category: 'data-structures',
      points: 70,
      timeEstimate: '50 min',
      problem: `Implement a Min Heap data structure.

A Min Heap is a complete binary tree where parent nodes are always smaller than or equal to their children.

Operations to implement:
- insert(value): Insert a value maintaining heap property
- extractMin(): Remove and return minimum element
- getMin(): Return minimum without removing
- display(): Show heap structure

Heap Property: Parent <= Children

Requirements:
- Use array-based representation
- Maintain heap property after each operation
- Implement heapify operations`,
      hints: [
        'Use array: parent at i, children at 2*i+1 and 2*i+2',
        'For insert: add at end, bubble up (compare with parent)',
        'For extractMin: replace root with last element, bubble down',
        'Bubble up: swap with parent if smaller',
        'Bubble down: swap with smaller child if larger',
        'Index calculations: parent = (i-1)/2, left = 2*i+1, right = 2*i+2'
      ],
      solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class MinHeap {
private:
    vector<int> heap;
    
    void heapifyUp(int index) {
        while (index > 0) {
            int parent = (index - 1) / 2;
            if (heap[parent] <= heap[index]) {
                break;
            }
            swap(heap[parent], heap[index]);
            index = parent;
        }
    }
    
    void heapifyDown(int index) {
        int smallest = index;
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        
        if (left < heap.size() && heap[left] < heap[smallest]) {
            smallest = left;
        }
        
        if (right < heap.size() && heap[right] < heap[smallest]) {
            smallest = right;
        }
        
        if (smallest != index) {
            swap(heap[index], heap[smallest]);
            heapifyDown(smallest);
        }
    }

public:
    void insert(int value) {
        heap.push_back(value);
        heapifyUp(heap.size() - 1);
        cout << value << " inserted into heap" << endl;
    }
    
    int extractMin() {
        if (heap.empty()) {
            cout << "Heap is empty!" << endl;
            return -1;
        }
        
        int min = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        
        if (!heap.empty()) {
            heapifyDown(0);
        }
        
        return min;
    }
    
    int getMin() {
        if (heap.empty()) {
            cout << "Heap is empty!" << endl;
            return -1;
        }
        return heap[0];
    }
    
    void display() {
        if (heap.empty()) {
            cout << "Heap is empty" << endl;
            return;
        }
        cout << "Heap: ";
        for (int i = 0; i < heap.size(); i++) {
            cout << heap[i] << " ";
        }
        cout << endl;
    }
    
    bool isEmpty() {
        return heap.empty();
    }
};

int main() {
    MinHeap heap;
    
    heap.insert(50);
    heap.insert(30);
    heap.insert(20);
    heap.insert(40);
    heap.insert(10);
    
    heap.display();
    
    cout << "Minimum: " << heap.getMin() << endl;
    cout << "Extracted: " << heap.extractMin() << endl;
    heap.display();
    
    return 0;
}`,
      testCases: [
        { input: '', output: '10 inserted into heap', requiredConstructs: ['class', 'vector'] }
      ],
      completed: false
    },
    {
      id: 'string-palindrome',
      title: 'String Palindrome Checker',
      description: 'Check if a string is a palindrome using different methods',
      difficulty: 'beginner',
      category: 'basics',
      points: 25,
      timeEstimate: '15 min',
      problem: `Write a program that checks if a given string is a palindrome.

A palindrome reads the same forwards and backwards (ignoring case and spaces).
Examples: "racecar", "A man a plan a canal Panama", "level"

Requirements:
- Take a string as input
- Check if it's a palindrome
- Ignore case differences
- Optionally ignore spaces and punctuation
- Display appropriate message`,
      hints: [
        'Compare characters from start and end moving towards center',
        'Convert to lowercase for case-insensitive comparison',
        'Use two pointers: one from start, one from end',
        'Skip spaces and punctuation if needed',
        'Stop when pointers meet or cross'
      ],
      solution: `#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>
using namespace std;

bool isPalindrome(string str) {
    // Remove spaces and convert to lowercase
    string cleaned = "";
    for (char c : str) {
        if (isalnum(c)) {
            cleaned += tolower(c);
        }
    }
    
    int left = 0;
    int right = cleaned.length() - 1;
    
    while (left < right) {
        if (cleaned[left] != cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

int main() {
    string input;
    cout << "Enter a string: ";
    getline(cin, input);
    
    if (isPalindrome(input)) {
        cout << "\\"" << input << "\\" is a palindrome." << endl;
    } else {
        cout << "\\"" << input << "\\" is not a palindrome." << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: 'racecar', output: 'racecar" is a palindrome.' },
        { input: 'hello', output: 'hello" is not a palindrome.' }
      ],
      completed: false
    },
    {
      id: 'dijkstra-shortest-path',
      title: 'Dijkstra\'s Shortest Path Algorithm',
      description: 'Implement Dijkstra\'s algorithm to find shortest paths in a weighted graph',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 80,
      timeEstimate: '60 min',
      problem: `Implement Dijkstra's algorithm to find the shortest path from a source node to all other nodes in a weighted graph.

Dijkstra's algorithm finds shortest paths from a source to all vertices in a weighted graph with non-negative edge weights.

Algorithm:
1. Initialize distances: source = 0, all others = infinity
2. Use priority queue (min heap) to select unvisited node with minimum distance
3. For each neighbor, update distance if shorter path found
4. Mark node as visited
5. Repeat until all nodes visited

Requirements:
- Represent weighted graph using adjacency list
- Find shortest distances from source to all nodes
- Display shortest distances
- Handle non-negative weights only`,
      hints: [
        'Use priority queue (min heap) to get node with minimum distance',
        'Maintain distance array: dist[i] = shortest distance from source to i',
        'Initialize: dist[source] = 0, others = INT_MAX',
        'For each node, relax all edges (update distances if shorter)',
        'Use visited array to avoid revisiting nodes',
        'Priority queue stores (distance, node) pairs',
        'Update distance if: dist[u] + weight < dist[v]'
      ],
      solution: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

void dijkstra(vector<vector<pair<int, int>>>& graph, int source, int n) {
    vector<int> dist(n, INT_MAX);
    vector<bool> visited(n, false);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
    dist[source] = 0;
    pq.push({0, source});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        if (visited[u]) continue;
        visited[u] = true;
        
        for (auto edge : graph[u]) {
            int v = edge.first;
            int weight = edge.second;
            
            if (!visited[v] && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    
    cout << "Shortest distances from node " << source << ":" << endl;
    for (int i = 0; i < n; i++) {
        if (dist[i] == INT_MAX) {
            cout << "Node " << i << ": INF" << endl;
        } else {
            cout << "Node " << i << ": " << dist[i] << endl;
        }
    }
}

int main() {
    int n, edges;
    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter number of edges: ";
    cin >> edges;
    
    vector<vector<pair<int, int>>> graph(n);
    
    cout << "Enter edges (format: node1 node2 weight):" << endl;
    for (int i = 0; i < edges; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        graph[u].push_back({v, w});
        graph[v].push_back({u, w}); // For undirected graph
    }
    
    int source;
    cout << "Enter source node: ";
    cin >> source;
    
    dijkstra(graph, source, n);
    
    return 0;
}`,
      testCases: [
        { input: '5 7\n0 1 4\n0 2 1\n1 2 2\n1 3 5\n2 3 8\n2 4 9\n3 4 2\n0', output: 'Shortest distances from node 0:', requiredConstructs: ['vector', 'priority_queue', 'algorithm'] }
      ],
      completed: false
    },
    {
      id: 'binary-search-rotated',
      title: 'Search in Rotated Sorted Array',
      description: 'Implement binary search to find a target in a rotated sorted array',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 70,
      timeEstimate: '50 min',
      problem: `Given a rotated sorted array (e.g., [4,5,6,7,0,1,2] is rotated at index 4), 
find the index of a target value using binary search in O(log n) time.

A rotated sorted array is a sorted array that has been rotated at some pivot point.
For example, [0,1,2,4,5,6,7] rotated at index 3 becomes [4,5,6,7,0,1,2].

Requirements:
- Use binary search approach
- Handle rotation by checking which half is sorted
- Return -1 if target is not found
- Time complexity: O(log n)`,
      hints: [
        'Use binary search but modify the logic to handle rotation',
        'Check if left half [low...mid] is sorted: if arr[low] <= arr[mid]',
        'If left half is sorted and target is in range [arr[low], arr[mid]], search left',
        'Otherwise, search in the right half',
        'If right half is sorted, check if target is in range [arr[mid], arr[high]]',
        'Handle edge cases like single element or two elements'
      ],
      solution: `#include <iostream>
#include <vector>
using namespace std;

int searchRotatedArray(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) {
            return mid;
        }
        
        // Check if left half is sorted
        if (arr[low] <= arr[mid]) {
            // Target is in left sorted half
            if (target >= arr[low] && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            // Right half is sorted
            // Target is in right sorted half
            if (target > arr[mid] && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    
    return -1;
}

int main() {
    int n, target;
    cout << "Enter size of array: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter rotated sorted array: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter target to search: ";
    cin >> target;
    
    int index = searchRotatedArray(arr, target);
    
    if (index != -1) {
        cout << "Target found at index: " << index << endl;
    } else {
        cout << "Target not found" << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '7\n4 5 6 7 0 1 2\n0', output: 'Target found at index: 4' },
        { input: '4\n1 3 5 7\n3', output: 'Target found at index: 1' }
      ],
      completed: false
    },
    {
      id: 'longest-common-subsequence',
      title: 'Longest Common Subsequence (LCS)',
      description: 'Find the length of the longest common subsequence between two strings using dynamic programming',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 75,
      timeEstimate: '55 min',
      problem: `Given two strings, find the length of their longest common subsequence (LCS).

A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.
For example, "ace" is a subsequence of "abcde".

Example:
String 1: "ABCDGH"
String 2: "AEDFHR"
LCS: "ADH" (length 3)

Requirements:
- Use dynamic programming approach
- Create a 2D DP table
- Time complexity: O(m * n) where m and n are string lengths
- Space complexity: O(m * n)`,
      hints: [
        'Create a 2D DP table: dp[i][j] = LCS length of first i chars of str1 and first j chars of str2',
        'Base case: dp[0][j] = 0 and dp[i][0] = 0',
        'If str1[i-1] == str2[j-1]: dp[i][j] = dp[i-1][j-1] + 1',
        'Otherwise: dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
        'The answer is at dp[m][n] where m and n are string lengths'
      ],
      solution: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int longestCommonSubsequence(string str1, string str2) {
    int m = str1.length();
    int n = str2.length();
    
    // Create DP table: dp[i][j] = LCS of str1[0..i-1] and str2[0..j-1]
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    // Fill DP table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (str1[i - 1] == str2[j - 1]) {
                // Characters match, extend LCS
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Take maximum of two possibilities
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    string str1, str2;
    cout << "Enter first string: ";
    cin >> str1;
    cout << "Enter second string: ";
    cin >> str2;
    
    int lcsLength = longestCommonSubsequence(str1, str2);
    cout << "Length of Longest Common Subsequence: " << lcsLength << endl;
    
    return 0;
}`,
      testCases: [
        { input: 'ABCDGH\nAEDFHR', output: 'Length of Longest Common Subsequence: 3' },
        { input: 'AGGTAB\nGXTXAYB', output: 'Length of Longest Common Subsequence: 4' }
      ],
      completed: false
    },
    {
      id: 'knapsack-problem',
      title: '0/1 Knapsack Problem',
      description: 'Solve the classic 0/1 knapsack problem using dynamic programming',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 80,
      timeEstimate: '60 min',
      problem: `Given weights and values of n items, put these items in a knapsack of capacity W 
to get the maximum total value. You cannot break items (0/1 property).

Each item can be used at most once.

Example:
Weights: [10, 20, 30]
Values: [60, 100, 120]
Capacity: 50
Maximum value: 160 (items with weight 20 and 30)

Requirements:
- Use dynamic programming
- Create a 2D DP table
- Time complexity: O(n * W) where n is number of items
- Return the maximum value that can be obtained`,
      hints: [
        'Create DP table: dp[i][w] = max value with first i items and capacity w',
        'Base case: dp[0][w] = 0 for all w',
        'For each item, decide: include it or not',
        'If weight[i-1] <= w: dp[i][w] = max(include, exclude)',
        'Include: value[i-1] + dp[i-1][w - weight[i-1]]',
        'Exclude: dp[i-1][w]',
        'Answer is at dp[n][W]'
      ],
      solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int knapsack(vector<int>& weights, vector<int>& values, int capacity) {
    int n = weights.size();
    
    // DP table: dp[i][w] = max value with first i items and capacity w
    vector<vector<int>> dp(n + 1, vector<int>(capacity + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            // Don't include current item
            dp[i][w] = dp[i - 1][w];
            
            // Try to include current item if it fits
            if (weights[i - 1] <= w) {
                dp[i][w] = max(dp[i][w], 
                              values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            }
        }
    }
    
    return dp[n][capacity];
}

int main() {
    int n, capacity;
    cout << "Enter number of items: ";
    cin >> n;
    
    vector<int> weights(n), values(n);
    cout << "Enter weights: ";
    for (int i = 0; i < n; i++) {
        cin >> weights[i];
    }
    
    cout << "Enter values: ";
    for (int i = 0; i < n; i++) {
        cin >> values[i];
    }
    
    cout << "Enter knapsack capacity: ";
    cin >> capacity;
    
    int maxValue = knapsack(weights, values, capacity);
    cout << "Maximum value: " << maxValue << endl;
    
    return 0;
}`,
      testCases: [
        { input: '3\n10 20 30\n60 100 120\n50', output: 'Maximum value: 160' },
        { input: '4\n1 3 4 5\n1 4 5 7\n7', output: 'Maximum value: 9' }
      ],
      completed: false
    },
    {
      id: 'longest-increasing-subsequence',
      title: 'Longest Increasing Subsequence (LIS)',
      description: 'Find the length of the longest increasing subsequence using dynamic programming',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 70,
      timeEstimate: '50 min',
      problem: `Given an array of integers, find the length of the longest increasing subsequence (LIS).

A subsequence is a sequence that can be derived from an array by deleting some elements 
without changing the order of the remaining elements.

Example:
Array: [10, 9, 2, 5, 3, 7, 101, 18]
LIS: [2, 3, 7, 18] or [2, 5, 7, 18] (length 4)

Requirements:
- Use dynamic programming
- Time complexity: O(n^2) where n is array size
- Return the length of LIS`,
      hints: [
        'Create DP array: dp[i] = length of LIS ending at index i',
        'Initialize all dp[i] = 1 (each element is a subsequence of length 1)',
        'For each i, check all previous elements j < i',
        'If arr[j] < arr[i]: dp[i] = max(dp[i], dp[j] + 1)',
        'The answer is the maximum value in dp array',
        'Track the maximum as you build the DP array'
      ],
      solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int longestIncreasingSubsequence(vector<int>& arr) {
    int n = arr.size();
    if (n == 0) return 0;
    
    // dp[i] = length of LIS ending at index i
    vector<int> dp(n, 1);
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // Find maximum value in dp
    return *max_element(dp.begin(), dp.end());
}

int main() {
    int n;
    cout << "Enter size of array: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter array elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int lisLength = longestIncreasingSubsequence(arr);
    cout << "Length of Longest Increasing Subsequence: " << lisLength << endl;
    
    return 0;
}`,
      testCases: [
        { input: '8\n10 9 2 5 3 7 101 18', output: 'Length of Longest Increasing Subsequence: 4' },
        { input: '6\n0 1 0 3 2 3', output: 'Length of Longest Increasing Subsequence: 4' }
      ],
      completed: false
    },
    {
      id: 'topological-sort',
      title: 'Topological Sort',
      description: 'Implement topological sorting for a directed acyclic graph (DAG)',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 75,
      timeEstimate: '55 min',
      problem: `Given a directed acyclic graph (DAG), find a topological ordering of its vertices.

A topological sort is a linear ordering of vertices such that for every directed edge (u, v), 
vertex u comes before v in the ordering.

Example:
Graph: 0 -> 1, 0 -> 2, 1 -> 3, 2 -> 3
Topological order: [0, 1, 2, 3] or [0, 2, 1, 3]

Requirements:
- Use DFS-based approach
- Handle cycles (return empty if cycle exists)
- Time complexity: O(V + E) where V is vertices, E is edges
- Print the topological order`,
      hints: [
        'Use DFS to traverse the graph',
        'Maintain a visited array and a recursion stack (or inStack)',
        'Mark nodes as visited and add to result after processing all neighbors',
        'If you encounter a node in recursion stack, there is a cycle',
        'Reverse the result at the end (or use stack)',
        'Start DFS from all unvisited nodes'
      ],
      solution: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

bool dfs(int node, vector<vector<int>>& graph, vector<bool>& visited, 
         vector<bool>& inStack, stack<int>& result) {
    visited[node] = true;
    inStack[node] = true;
    
    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            if (!dfs(neighbor, graph, visited, inStack, result)) {
                return false; // Cycle detected
            }
        } else if (inStack[neighbor]) {
            return false; // Cycle detected
        }
    }
    
    inStack[node] = false;
    result.push(node);
    return true;
}

vector<int> topologicalSort(int n, vector<vector<int>>& graph) {
    vector<bool> visited(n, false);
    vector<bool> inStack(n, false);
    stack<int> result;
    
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            if (!dfs(i, graph, visited, inStack, result)) {
                return {}; // Cycle detected
            }
        }
    }
    
    vector<int> order;
    while (!result.empty()) {
        order.push_back(result.top());
        result.pop();
    }
    
    return order;
}

int main() {
    int n, edges;
    cout << "Enter number of vertices: ";
    cin >> n;
    cout << "Enter number of edges: ";
    cin >> edges;
    
    vector<vector<int>> graph(n);
    cout << "Enter edges (format: from to):" << endl;
    for (int i = 0; i < edges; i++) {
        int from, to;
        cin >> from >> to;
        graph[from].push_back(to);
    }
    
    vector<int> order = topologicalSort(n, graph);
    
    if (order.empty()) {
        cout << "Graph contains a cycle! Topological sort not possible." << endl;
    } else {
        cout << "Topological order: ";
        for (int i = 0; i < order.size(); i++) {
            cout << order[i];
            if (i < order.size() - 1) cout << " -> ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '4 4\n0 1\n0 2\n1 3\n2 3', output: 'Topological order:', requiredConstructs: ['vector', 'stack', 'algorithm'] }
      ],
      completed: false
    },
    {
      id: 'union-find',
      title: 'Union-Find (Disjoint Set Union)',
      description: 'Implement Union-Find data structure with path compression and union by rank',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 70,
      timeEstimate: '50 min',
      problem: `Implement the Union-Find (Disjoint Set Union) data structure with path compression 
and union by rank optimizations.

Operations:
- find(x): Find the root of the set containing x
- union(x, y): Union the sets containing x and y
- connected(x, y): Check if x and y are in the same set

Requirements:
- Use path compression in find() for O(α(n)) amortized time
- Use union by rank to keep tree height small
- α(n) is the inverse Ackermann function (practically constant)
- Support operations on n elements`,
      hints: [
        'Maintain parent array: parent[i] = parent of i',
        'Maintain rank array: rank[i] = approximate height of tree rooted at i',
        'find(x): recursively find root, then set parent[x] = root (path compression)',
        'union(x, y): find roots, if different, attach smaller rank tree to larger',
        'If ranks equal, increment rank of new root',
        'Initialize: parent[i] = i, rank[i] = 0'
      ],
      solution: `#include <iostream>
#include <vector>
using namespace std;

class UnionFind {
private:
    vector<int> parent;
    vector<int> rank;
    
public:
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
    
    // Find with path compression
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    // Union by rank
    void unionSets(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX == rootY) return; // Already in same set
        
        // Union by rank
        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }
    
    bool connected(int x, int y) {
        return find(x) == find(y);
    }
};

int main() {
    int n, operations;
    cout << "Enter number of elements: ";
    cin >> n;
    cout << "Enter number of operations: ";
    cin >> operations;
    
    UnionFind uf(n);
    
    cout << "Operations: 1=union, 2=find, 3=connected" << endl;
    for (int i = 0; i < operations; i++) {
        int op, x, y;
        cin >> op;
        
        if (op == 1) {
            cin >> x >> y;
            uf.unionSets(x, y);
            cout << "Union(" << x << ", " << y << ")" << endl;
        } else if (op == 2) {
            cin >> x;
            cout << "Find(" << x << ") = " << uf.find(x) << endl;
        } else if (op == 3) {
            cin >> x >> y;
            cout << "Connected(" << x << ", " << y << ") = " 
                 << (uf.connected(x, y) ? "true" : "false") << endl;
        }
    }
    
    return 0;
}`,
      testCases: [
        { input: '5 6\n1 0 1\n1 2 3\n3 0 2\n1 1 4\n3 0 4\n2 0', output: 'Connected', requiredConstructs: ['vector', 'class'] }
      ],
      completed: false
    },
    {
      id: 'segment-tree',
      title: 'Segment Tree - Range Sum Query',
      description: 'Implement a segment tree for range sum queries and point updates',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 85,
      timeEstimate: '65 min',
      problem: `Implement a Segment Tree that supports:
1. Range Sum Query: Get sum of elements in range [l, r]
2. Point Update: Update value at index i

A segment tree is a binary tree where each node stores information about a segment of the array.

Example:
Array: [1, 3, 5, 7, 9, 11]
Query(1, 3): Sum of indices 1 to 3 = 3 + 5 + 7 = 15
Update(2, 10): Change element at index 2 to 10

Requirements:
- Build tree in O(n) time
- Query in O(log n) time
- Update in O(log n) time
- Use array-based representation`,
      hints: [
        'Use array-based segment tree: tree[2*i] and tree[2*i+1] are children of tree[i]',
        'Build recursively: combine left and right children',
        'Query: if current segment is completely inside [l, r], return its value',
        'If completely outside, return 0',
        'Otherwise, query both children and combine results',
        'Update: update leaf, then propagate changes up to root',
        'Tree size: 4 * n (to be safe)'
      ],
      solution: `#include <iostream>
#include <vector>
using namespace std;

class SegmentTree {
private:
    vector<int> tree;
    int n;
    
    void build(vector<int>& arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node, start, mid);
            build(arr, 2 * node + 1, mid + 1, end);
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    
    void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
        } else {
            int mid = (start + end) / 2;
            if (idx <= mid) {
                update(2 * node, start, mid, idx, val);
            } else {
                update(2 * node + 1, mid + 1, end, idx, val);
            }
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    
    int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) {
            return 0; // Outside range
        }
        if (l <= start && end <= r) {
            return tree[node]; // Completely inside range
        }
        int mid = (start + end) / 2;
        return query(2 * node, start, mid, l, r) + 
               query(2 * node + 1, mid + 1, end, l, r);
    }
    
public:
    SegmentTree(vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 1, 0, n - 1);
    }
    
    void update(int idx, int val) {
        update(1, 0, n - 1, idx, val);
    }
    
    int query(int l, int r) {
        return query(1, 0, n - 1, l, r);
    }
};

int main() {
    int n;
    cout << "Enter size of array: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter array elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    SegmentTree st(arr);
    
    int queries;
    cout << "Enter number of queries: ";
    cin >> queries;
    cout << "Format: 1 l r (query), 2 idx val (update)" << endl;
    
    for (int i = 0; i < queries; i++) {
        int op;
        cin >> op;
        
        if (op == 1) {
            int l, r;
            cin >> l >> r;
            cout << "Sum[" << l << ", " << r << "] = " << st.query(l, r) << endl;
        } else if (op == 2) {
            int idx, val;
            cin >> idx >> val;
            st.update(idx, val);
            cout << "Updated index " << idx << " to " << val << endl;
        }
    }
    
    return 0;
}`,
      testCases: [
        { input: '6\n1 3 5 7 9 11\n3\n1 1 3\n2 2 10\n1 1 3', output: 'Sum[1, 3] = 15', requiredConstructs: ['vector', 'class'] }
      ],
      completed: false
    },
    {
      id: 'trie-prefix-tree',
      title: 'Trie (Prefix Tree)',
      description: 'Implement a Trie data structure for efficient string prefix matching',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 75,
      timeEstimate: '55 min',
      problem: `Implement a Trie (Prefix Tree) that supports:
1. insert(word): Insert a word into the trie
2. search(word): Return true if word exists in trie
3. startsWith(prefix): Return true if any word starts with prefix

A Trie is a tree-like data structure that stores strings character by character.

Example:
Insert: "apple", "app", "apply"
search("app"): true
search("apps"): false
startsWith("app"): true

Requirements:
- Each node has 26 children (for lowercase letters a-z)
- Mark end of word with a flag
- Time complexity: O(m) per operation where m is word length`,
      hints: [
        'Create TrieNode class with children array and isEndOfWord flag',
        'Children array of size 26 (one for each letter)',
        'insert: traverse/create nodes for each character, mark last node as end',
        'search: traverse nodes, check if word exists and ends at a word',
        'startsWith: traverse nodes, return true if prefix path exists',
        'Use character - \'a\' to convert to index (0-25)'
      ],
      solution: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class TrieNode {
public:
    vector<TrieNode*> children;
    bool isEndOfWord;
    
    TrieNode() {
        children.resize(26, nullptr);
        isEndOfWord = false;
    }
};

class Trie {
private:
    TrieNode* root;
    
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->isEndOfWord = true;
    }
    
    bool search(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                return false;
            }
            node = node->children[index];
        }
        return node->isEndOfWord;
    }
    
    bool startsWith(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                return false;
            }
            node = node->children[index];
        }
        return true;
    }
};

int main() {
    Trie trie;
    int operations;
    
    cout << "Enter number of operations: ";
    cin >> operations;
    cout << "Format: 1 word (insert), 2 word (search), 3 prefix (startsWith)" << endl;
    
    for (int i = 0; i < operations; i++) {
        int op;
        string word;
        cin >> op >> word;
        
        if (op == 1) {
            trie.insert(word);
            cout << "Inserted: " << word << endl;
        } else if (op == 2) {
            cout << "Search(" << word << ") = " 
                 << (trie.search(word) ? "true" : "false") << endl;
        } else if (op == 3) {
            cout << "StartsWith(" << word << ") = " 
                 << (trie.startsWith(word) ? "true" : "false") << endl;
        }
    }
    
    return 0;
}`,
      testCases: [
        { input: '5\n1 apple\n1 app\n2 app\n2 apps\n3 app', output: 'Search(app) = true', requiredConstructs: ['vector', 'class', 'string'] }
      ],
      completed: false
    },
    {
      id: 'kmp-string-matching',
      title: 'KMP String Matching Algorithm',
      description: 'Implement the Knuth-Morris-Pratt algorithm for efficient string pattern matching',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 80,
      timeEstimate: '60 min',
      problem: `Implement the KMP (Knuth-Morris-Pratt) algorithm to find all occurrences of a pattern 
in a text string.

KMP algorithm uses a failure function (LPS - Longest Proper Prefix which is also Suffix) 
to avoid unnecessary comparisons.

Example:
Text: "ABABDABACDABABCABCAB"
Pattern: "ABABCABAB"
Find all starting positions where pattern occurs.

Requirements:
- Build LPS array for the pattern
- Use LPS to skip unnecessary comparisons
- Time complexity: O(n + m) where n is text length, m is pattern length
- Return all starting indices where pattern is found`,
      hints: [
        'Build LPS array: lps[i] = length of longest proper prefix that is also suffix in pattern[0..i]',
        'For LPS: if pattern[i] == pattern[len], increment len and set lps[i] = len',
        'If not match and len > 0, set len = lps[len-1] and retry',
        'For matching: if text[i] == pattern[j], increment both i and j',
        'If j == m, pattern found at index (i - j)',
        'If mismatch and j > 0, set j = lps[j-1] (don\'t increment i)'
      ],
      solution: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<int> buildLPS(string pattern) {
    int m = pattern.length();
    vector<int> lps(m, 0);
    int len = 0;
    int i = 1;
    
    while (i < m) {
        if (pattern[i] == pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}

vector<int> kmpSearch(string text, string pattern) {
    int n = text.length();
    int m = pattern.length();
    vector<int> result;
    
    if (m == 0) return result;
    
    vector<int> lps = buildLPS(pattern);
    
    int i = 0; // Index for text
    int j = 0; // Index for pattern
    
    while (i < n) {
        if (text[i] == pattern[j]) {
            i++;
            j++;
        }
        
        if (j == m) {
            // Pattern found at index (i - j)
            result.push_back(i - j);
            j = lps[j - 1];
        } else if (i < n && text[i] != pattern[j]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return result;
}

int main() {
    string text, pattern;
    cout << "Enter text: ";
    getline(cin, text);
    cout << "Enter pattern: ";
    getline(cin, pattern);
    
    vector<int> indices = kmpSearch(text, pattern);
    
    if (indices.empty()) {
        cout << "Pattern not found" << endl;
    } else {
        cout << "Pattern found at indices: ";
        for (int i = 0; i < indices.size(); i++) {
            cout << indices[i];
            if (i < indices.size() - 1) cout << ", ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: 'ABABDABACDABABCABCAB\nABABCABAB', output: 'Pattern found at indices:', requiredConstructs: ['vector', 'string'] }
      ],
      completed: false
    },
    {
      id: 'floyd-warshall',
      title: 'Floyd-Warshall Algorithm',
      description: 'Implement Floyd-Warshall algorithm to find shortest paths between all pairs of vertices',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 85,
      timeEstimate: '65 min',
      problem: `Implement the Floyd-Warshall algorithm to find the shortest distances between 
all pairs of vertices in a weighted graph.

The algorithm works for both directed and undirected graphs, and can handle negative edge weights 
(but not negative cycles).

Example:
Graph with 4 vertices:
0 -> 1: 5
0 -> 3: 10
1 -> 2: 3
2 -> 3: 1

Find shortest distance between every pair of vertices.

Requirements:
- Use dynamic programming approach
- Create distance matrix: dist[i][j] = shortest distance from i to j
- Time complexity: O(V^3) where V is number of vertices
- Handle unreachable vertices (use INT_MAX or -1)`,
      hints: [
        'Initialize dist[i][j] = weight if edge exists, 0 if i==j, INT_MAX otherwise',
        'Use three nested loops: for k, for i, for j',
        'For each intermediate vertex k, try to improve dist[i][j]',
        'Update: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])',
        'After all iterations, dist[i][j] contains shortest path from i to j',
        'Check for negative cycles: if dist[i][i] < 0 for any i'
      ],
      solution: `#include <iostream>
#include <vector>
#include <climits>
#include <iomanip>
using namespace std;

void floydWarshall(vector<vector<int>>& graph, int n) {
    // Initialize distance matrix
    vector<vector<int>> dist(n, vector<int>(n));
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == j) {
                dist[i][j] = 0;
            } else if (graph[i][j] != 0) {
                dist[i][j] = graph[i][j];
            } else {
                dist[i][j] = INT_MAX;
            }
        }
    }
    
    // Floyd-Warshall algorithm
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX) {
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
    
    // Check for negative cycles
    for (int i = 0; i < n; i++) {
        if (dist[i][i] < 0) {
            cout << "Graph contains negative cycle!" << endl;
            return;
        }
    }
    
    // Print shortest distances
    cout << "Shortest distances between all pairs:" << endl;
    cout << setw(6) << " ";
    for (int i = 0; i < n; i++) {
        cout << setw(6) << i;
    }
    cout << endl;
    
    for (int i = 0; i < n; i++) {
        cout << setw(6) << i;
        for (int j = 0; j < n; j++) {
            if (dist[i][j] == INT_MAX) {
                cout << setw(6) << "INF";
            } else {
                cout << setw(6) << dist[i][j];
            }
        }
        cout << endl;
    }
}

int main() {
    int n;
    cout << "Enter number of vertices: ";
    cin >> n;
    
    vector<vector<int>> graph(n, vector<int>(n, 0));
    
    int edges;
    cout << "Enter number of edges: ";
    cin >> edges;
    cout << "Enter edges (format: from to weight):" << endl;
    
    for (int i = 0; i < edges; i++) {
        int from, to, weight;
        cin >> from >> to >> weight;
        graph[from][to] = weight;
        // For undirected graph, uncomment: graph[to][from] = weight;
    }
    
    floydWarshall(graph, n);
    
    return 0;
}`,
      testCases: [
        { input: '4 4\n0 1 5\n0 3 10\n1 2 3\n2 3 1', output: 'Shortest distances between all pairs:', requiredConstructs: ['vector', 'algorithm', 'climits'] }
      ],
      completed: false
    },
    {
      id: 'a-star-search',
      title: 'A* Search Algorithm',
      description: 'Implement the A* pathfinding algorithm with heuristic function for optimal path finding',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 100,
      timeEstimate: '90 min',
      problem: `Implement the A* (A-star) search algorithm to find the shortest path from a start node to a goal node 
in a weighted graph using a heuristic function.

A* is an informed search algorithm that uses both:
- g(n): actual cost from start to node n
- h(n): heuristic estimate of cost from node n to goal
- f(n) = g(n) + h(n): total estimated cost

The algorithm is optimal and complete when using an admissible heuristic (never overestimates).

Example:
Graph with nodes 0-4, edges with weights, and heuristic values:
Edges: 0->1(4), 0->2(2), 1->3(5), 2->3(1), 3->4(3)
Heuristics to goal(4): h(0)=6, h(1)=5, h(2)=4, h(3)=3, h(4)=0
Find path from 0 to 4.

Requirements:
- Use priority queue (min-heap) based on f(n) = g(n) + h(n)
- Maintain g(n) for each node (actual cost from start)
- Use admissible heuristic h(n) (provided as input)
- Reconstruct and return the path from start to goal
- Handle cases where no path exists
- Time complexity: O(b^d) where b is branching factor, d is depth (with good heuristic, much better)`,
      hints: [
        'Use priority queue storing (f_score, g_score, node, parent) tuples',
        'Maintain g_score map: actual cost from start to each node',
        'Maintain f_score = g_score + heuristic for priority queue ordering',
        'Maintain came_from map to reconstruct path',
        'Initialize: g_score[start] = 0, f_score[start] = heuristic[start]',
        'For each neighbor: tentative_g = g_score[current] + edge_weight',
        'If tentative_g < g_score[neighbor], update and add to queue',
        'Stop when goal is reached, then reconstruct path backwards',
        'Use closed set to avoid revisiting nodes (optional optimization)',
        'Heuristic must be admissible: h(n) <= actual cost to goal'
      ],
      solution: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <climits>
#include <algorithm>
using namespace std;

struct Node {
    int id;
    int f_score;
    int g_score;
    int parent;
    
    bool operator>(const Node& other) const {
        return f_score > other.f_score;
    }
};

vector<int> aStarSearch(vector<vector<pair<int, int>>>& graph, 
                        vector<int>& heuristic, int start, int goal, int n) {
    priority_queue<Node, vector<Node>, greater<Node>> openSet;
    vector<int> g_score(n, INT_MAX);
    vector<int> f_score(n, INT_MAX);
    vector<int> came_from(n, -1);
    vector<bool> closedSet(n, false);
    
    g_score[start] = 0;
    f_score[start] = heuristic[start];
    
    openSet.push({start, f_score[start], g_score[start], -1});
    
    while (!openSet.empty()) {
        Node current = openSet.top();
        openSet.pop();
        
        int current_id = current.id;
        
        if (closedSet[current_id]) continue;
        closedSet[current_id] = true;
        
        if (current_id == goal) {
            // Reconstruct path
            vector<int> path;
            int node = goal;
            while (node != -1) {
                path.push_back(node);
                node = came_from[node];
            }
            reverse(path.begin(), path.end());
            return path;
        }
        
        for (auto& edge : graph[current_id]) {
            int neighbor = edge.first;
            int edge_weight = edge.second;
            
            if (closedSet[neighbor]) continue;
            
            int tentative_g = g_score[current_id] + edge_weight;
            
            if (tentative_g < g_score[neighbor]) {
                came_from[neighbor] = current_id;
                g_score[neighbor] = tentative_g;
                f_score[neighbor] = g_score[neighbor] + heuristic[neighbor];
                openSet.push({neighbor, f_score[neighbor], g_score[neighbor], current_id});
            }
        }
    }
    
    return {}; // No path found
}

int main() {
    int n, edges, start, goal;
    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter number of edges: ";
    cin >> edges;
    
    vector<vector<pair<int, int>>> graph(n);
    cout << "Enter edges (format: from to weight):" << endl;
    for (int i = 0; i < edges; i++) {
        int from, to, weight;
        cin >> from >> to >> weight;
        graph[from].push_back({to, weight});
    }
    
    vector<int> heuristic(n);
    cout << "Enter heuristic values for each node (estimate to goal):" << endl;
    for (int i = 0; i < n; i++) {
        cout << "Heuristic for node " << i << ": ";
        cin >> heuristic[i];
    }
    
    cout << "Enter start node: ";
    cin >> start;
    cout << "Enter goal node: ";
    cin >> goal;
    
    vector<int> path = aStarSearch(graph, heuristic, start, goal, n);
    
    if (path.empty()) {
        cout << "No path found from " << start << " to " << goal << endl;
    } else {
        cout << "Path found! Total cost: ";
        int totalCost = 0;
        for (int i = 0; i < path.size() - 1; i++) {
            for (auto& edge : graph[path[i]]) {
                if (edge.first == path[i + 1]) {
                    totalCost += edge.second;
                    break;
                }
            }
        }
        cout << totalCost << endl;
        cout << "Path: ";
        for (int i = 0; i < path.size(); i++) {
            cout << path[i];
            if (i < path.size() - 1) cout << " -> ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      testCases: [
        { input: '5 5\n0 1 4\n0 2 2\n1 3 5\n2 3 1\n3 4 3\n6 5 4 3 0\n0 4', output: 'Path found!', requiredConstructs: ['vector', 'priority_queue', 'unordered_map', 'algorithm'] }
      ],
      completed: false
    },
    {
      id: 'edmonds-karp-max-flow',
      title: 'Edmonds-Karp Maximum Flow Algorithm',
      description: 'Implement the Edmonds-Karp algorithm to find maximum flow in a flow network',
      difficulty: 'advanced',
      category: 'algorithms',
      points: 100,
      timeEstimate: '90 min',
      problem: `Implement the Edmonds-Karp algorithm to find the maximum flow from a source to a sink 
in a directed flow network.

The Edmonds-Karp algorithm is a specific implementation of the Ford-Fulkerson method that uses 
BFS to find augmenting paths, guaranteeing O(V * E^2) time complexity.

A flow network is a directed graph where:
- Each edge has a capacity (maximum flow it can carry)
- Flow through an edge cannot exceed its capacity
- Flow conservation: incoming flow = outgoing flow (except source and sink)
- Source has only outgoing edges, sink has only incoming edges

Example:
Network with 4 nodes (0=source, 3=sink):
0 -> 1: capacity 10
0 -> 2: capacity 5
1 -> 2: capacity 15
1 -> 3: capacity 10
2 -> 3: capacity 10
Maximum flow: 15

Requirements:
- Use BFS to find augmenting paths
- Maintain residual graph (remaining capacity)
- Update flow along augmenting path
- Return maximum flow value
- Time complexity: O(V * E^2) where V is vertices, E is edges
- Handle multiple edges and cycles`,
      hints: [
        'Create residual graph: residual[u][v] = capacity[u][v] - flow[u][v]',
        'Use BFS to find path from source to sink in residual graph',
        'Find minimum capacity (bottleneck) along the path',
        'Update flow: flow[u][v] += bottleneck, flow[v][u] -= bottleneck (for residual)',
        'Update residual: residual[u][v] -= bottleneck, residual[v][u] += bottleneck',
        'Repeat until no augmenting path exists (BFS returns no path)',
        'Maximum flow = sum of flows from source to all neighbors',
        'Use parent array to reconstruct path from BFS',
        'Initialize: flow and residual matrices, all flows start at 0',
        'Residual graph allows reverse edges for flow cancellation'
      ],
      solution: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
#include <algorithm>
using namespace std;

bool bfs(vector<vector<int>>& residual, vector<int>& parent, int source, int sink, int n) {
    vector<bool> visited(n, false);
    queue<int> q;
    
    q.push(source);
    visited[source] = true;
    parent[source] = -1;
    
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        
        for (int v = 0; v < n; v++) {
            if (!visited[v] && residual[u][v] > 0) {
                parent[v] = u;
                visited[v] = true;
                q.push(v);
                
                if (v == sink) {
                    return true; // Found path to sink
                }
            }
        }
    }
    
    return false; // No path to sink
}

int edmondsKarp(vector<vector<int>>& capacity, int source, int sink, int n) {
    // Initialize residual graph and flow
    vector<vector<int>> residual(n, vector<int>(n, 0));
    vector<vector<int>> flow(n, vector<int>(n, 0));
    
    // Copy capacities to residual graph
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            residual[i][j] = capacity[i][j];
        }
    }
    
    vector<int> parent(n);
    int maxFlow = 0;
    
    // Find augmenting paths using BFS
    while (bfs(residual, parent, source, sink, n)) {
        // Find minimum residual capacity along the path
        int pathFlow = INT_MAX;
        int v = sink;
        
        while (v != source) {
            int u = parent[v];
            pathFlow = min(pathFlow, residual[u][v]);
            v = u;
        }
        
        // Update residual capacities and flows
        v = sink;
        while (v != source) {
            int u = parent[v];
            residual[u][v] -= pathFlow;
            residual[v][u] += pathFlow; // Allow reverse flow
            flow[u][v] += pathFlow;
            flow[v][u] -= pathFlow; // Negative flow for reverse direction
            v = u;
        }
        
        maxFlow += pathFlow;
    }
    
    return maxFlow;
}

int main() {
    int n, edges, source, sink;
    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter number of edges: ";
    cin >> edges;
    
    vector<vector<int>> capacity(n, vector<int>(n, 0));
    
    cout << "Enter edges with capacities (format: from to capacity):" << endl;
    for (int i = 0; i < edges; i++) {
        int from, to, cap;
        cin >> from >> to >> cap;
        capacity[from][to] = cap;
    }
    
    cout << "Enter source node: ";
    cin >> source;
    cout << "Enter sink node: ";
    cin >> sink;
    
    int maxFlow = edmondsKarp(capacity, source, sink, n);
    
    cout << "Maximum flow from " << source << " to " << sink << ": " << maxFlow << endl;
    
    return 0;
}`,
      testCases: [
        { input: '4 5\n0 1 10\n0 2 5\n1 2 15\n1 3 10\n2 3 10\n0 3', output: 'Maximum flow from 0 to 3:', requiredConstructs: ['vector', 'queue', 'algorithm', 'climits'] }
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
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50';
      case 'intermediate':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50';
      case 'advanced':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            C++ Practice Exercises
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
            Strengthen your C++ skills with hands-on coding exercises. 
            From basic syntax to advanced algorithms.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{completedExercises.size}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{totalPoints}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Points Earned</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{exercises.length}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Total Exercises</div>
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
                      <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {exercise.title}
                      </CardTitle>
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                      {completedExercises.has(exercise.id) && (
                        <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                          Completed
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-slate-600 dark:text-slate-400 mb-3">
                      {exercise.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
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
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300 font-mono">
                          {exercise.problem}
                        </pre>
                      </div>
                      
                      {exercise.testCases.length > 0 && (
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Test Cases:</h4>
                          <div className="space-y-2">
                            {exercise.testCases.map((testCase, index) => (
                              <div key={index} className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm">
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
                        <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <p className="text-sm text-slate-700 dark:text-slate-300">{hint}</p>
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
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Your Progress
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Keep practicing to improve your C++ skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {exercises.filter(e => e.difficulty === 'beginner' && completedExercises.has(e.id)).length}
              </div>
              <div className="text-slate-600 dark:text-slate-300">Beginner Exercises</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                of {exercises.filter(e => e.difficulty === 'beginner').length} completed
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {exercises.filter(e => e.difficulty === 'intermediate' && completedExercises.has(e.id)).length}
              </div>
              <div className="text-slate-600 dark:text-slate-300">Intermediate Exercises</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                of {exercises.filter(e => e.difficulty === 'intermediate').length} completed
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {exercises.filter(e => e.difficulty === 'advanced' && completedExercises.has(e.id)).length}
              </div>
              <div className="text-slate-600 dark:text-slate-300">Advanced Exercises</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                of {exercises.filter(e => e.difficulty === 'advanced').length} completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}