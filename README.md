# JavaScript_Tasks

# JavaScript Complete Theory Notes

This repository contains complete JavaScript theory from basic to advanced concepts.

The purpose of this repository is to understand:

- What JavaScript is
- How JavaScript works
- Why JavaScript is used
- Core JavaScript concepts
- Advanced JavaScript concepts
- Real-time usage of JavaScript

---

# What is JavaScript

JavaScript is a high-level programming language used to create dynamic and interactive web applications.

JavaScript allows developers to:

- Create interactive websites
- Handle user actions
- Update content dynamically
- Communicate with servers
- Build full-stack applications

JavaScript works in:

- Browsers
- Servers using Node.js
- Mobile applications
- Desktop applications

Example:

```javascript
console.log("Hello JavaScript");
```

---

# How JavaScript Works

JavaScript works using a JavaScript Engine.

Popular engines:

- Chrome → V8 Engine
- Firefox → SpiderMonkey
- Safari → JavaScriptCore

## JavaScript Execution Process

1. Browser reads JavaScript code
2. Engine parses the code
3. Code gets compiled
4. Memory gets allocated
5. Code executes line by line

JavaScript is:

- Single threaded
- Synchronous by default
- Asynchronous using Web APIs

---

# Variables in JavaScript

Variables are containers used to store data.

JavaScript provides:

- var
- let
- const

---

# var Keyword

`var` is the old way of declaring variables.

Features:

- Function scoped
- Can be redeclared
- Can be reassigned
- Hoisted

Example:

```javascript
var name = "Sunny";

var name = "Raj";
```

Problem with var:

- Causes scope issues
- Allows duplicate declarations

---

# let Keyword

`let` is introduced in ES6.

Features:

- Block scoped
- Cannot be redeclared
- Can be reassigned

Example:

```javascript
let age = 24;

age = 25;
```

Why use let:

- Safer than var
- Prevents unwanted redeclarations

---

# const Keyword

`const` is used for constant values.

Features:

- Block scoped
- Cannot be redeclared
- Cannot be reassigned

Example:

```javascript
const country = "India";
```

Important:

Objects and arrays declared with const can still be modified internally.

---

# Data Types in JavaScript

Data types define the type of value stored inside variables.

JavaScript contains:

- Primitive Data Types
- Non Primitive Data Types

---

# Primitive Data Types

Primitive data types store single values.

Types:

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Example:

```javascript
let name = "Sunny";
let age = 24;
let isActive = true;
```

---

# Non Primitive Data Types

Non primitive data types store collections of values.

Types:

- Object
- Array
- Function

Example:

```javascript
let user = {
  name: "Sunny",
  age: 24,
};
```

---

# Operators in JavaScript

Operators perform operations on values.

Types:

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators

---

# Arithmetic Operators

Used for mathematical calculations.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

---

# Comparison Operators

Used to compare values.

Example:

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");
```

Difference:

- `==` checks only value
- `===` checks value and datatype

---

# Logical Operators

Used to combine conditions.

Operators:

- &&
- ||
- !

Example:

```javascript
console.log(true && true);
console.log(true || false);
console.log(!true);
```

---

# Conditional Statements

Conditional statements are used for decision making.

JavaScript provides:

- if
- if else
- else if
- switch

---

# if Statement

Executes code only when condition is true.

Example:

```javascript
let age = 18;

if (age >= 18) {
  console.log("Eligible");
}
```

---

# if else Statement

Used when there are two possible outcomes.

Example:

```javascript
let age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

# switch Statement

Used for multiple fixed conditions.

Example:

```javascript
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  default:
    console.log("Invalid");
}
```

---

# Loops in JavaScript

Loops repeat code multiple times.

Types:

- for loop
- while loop
- do while loop
- for of loop
- for in loop

---

# for Loop

Used when iteration count is known.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

How it works:

1. Initialization runs once
2. Condition checks
3. Code executes
4. Increment/decrement runs

---

# while Loop

Runs while condition is true.

Example:

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

---

# for of Loop

Used to iterate arrays.

Example:

```javascript
let numbers = [10, 20, 30];

for (let value of numbers) {
  console.log(value);
}
```

---

# for in Loop

Used to iterate object keys.

Example:

```javascript
let user = {
  name: "Sunny",
  age: 24,
};

for (let key in user) {
  console.log(key);
}
```

---

# Functions in JavaScript

Functions are reusable blocks of code.

Why functions are used:

- Reusability
- Clean code
- Modular programming

---

# Function Declaration

Example:

```javascript
function greet() {
  console.log("Hello");
}

greet();
```

---

# Parameters and Arguments

Parameters receive values.

Example:

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

---

# Arrow Functions

Introduced in ES6.

Short syntax for functions.

Example:

```javascript
const multiply = (a, b) => {
  return a * b;
};
```

Advantages:

- Cleaner syntax
- Used heavily in React

---

# Arrays in JavaScript

Arrays store multiple values inside one variable.

Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Why arrays are used:

- Store collections of data
- Easy data management

---

# Array Methods

## push()

Adds element at end.

```javascript
fruits.push("Orange");
```

## pop()

Removes last element.

```javascript
fruits.pop();
```

## shift()

Removes first element.

```javascript
fruits.shift();
```

## unshift()

Adds element at beginning.

```javascript
fruits.unshift("Grapes");
```

---

# Advanced Array Methods

Modern JavaScript provides advanced array methods.

---

# map()

Creates new transformed array.

Example:

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num) => num * 2);
```

---

# filter()

Filters values based on condition.

Example:

```javascript
let nums = [10, 20, 30, 40];

let output = nums.filter((num) => num > 20);
```

---

# reduce()

Reduces array into single value.

Example:

```javascript
let values = [1, 2, 3, 4];

let total = values.reduce((sum, num) => sum + num, 0);
```

---

# Strings in JavaScript

Strings store textual data.

Example:

```javascript
let text = "JavaScript";
```

---

# String Methods

## toUpperCase()

Converts text into uppercase.

```javascript
console.log(text.toUpperCase());
```

## toLowerCase()

Converts text into lowercase.

```javascript
console.log(text.toLowerCase());
```

## includes()

Checks if value exists.

```javascript
console.log(text.includes("Script"));
```

---

# Advanced String Methods

## slice()

Extracts part of string.

```javascript
console.log(text.slice(0, 4));
```

## replace()

Replaces text.

```javascript
console.log(text.replace("Java", "Type"));
```

## split()

Converts string into array.

```javascript
console.log(text.split(""));
```

---

# Objects in JavaScript

Objects store data in key-value pairs.

Example:

```javascript
let user = {
  name: "Sunny",
  age: 24,
};
```

Why objects are used:

- Store structured data
- Represent real-world entities

---

# DOM Manipulation

DOM stands for Document Object Model.

DOM allows JavaScript to interact with HTML elements.

Using DOM we can:

- Change text
- Change styles
- Add elements
- Remove elements
- Handle events

---

# Selecting Elements

## getElementById()

```javascript
let heading = document.getElementById("title");
```

## querySelector()

```javascript
let item = document.querySelector(".item");
```

---

# Changing Content

```javascript
heading.innerText = "New Title";
```

---

# Changing Styles

```javascript
heading.style.color = "red";
```

---

# Events in JavaScript

Events are actions performed by users.

Examples:

- click
- keydown
- mouseover

Example:

```javascript
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

# Date Object in JavaScript

Date object handles date and time.

Example:

```javascript
let today = new Date();
```

Useful methods:

```javascript
today.getFullYear();

today.getMonth();

today.getDate();

today.getHours();
```

---

# Asynchronous JavaScript

JavaScript handles async operations using:

- Callbacks
- Promises
- Async/Await

---

# Promises

Promises handle asynchronous tasks.

States:

- Pending
- Resolved
- Rejected

Example:

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
```

---

# Async Await

Async/Await simplifies asynchronous code.

Example:

```javascript
async function getData() {
  let response = await fetch("https://api.com");

  let data = await response.json();

  console.log(data);
}
```

---

# Event Loop in JavaScript

JavaScript is single threaded.

Event loop handles asynchronous operations.

Components:

- Call Stack
- Web APIs
- Callback Queue
- Event Loop

How it works:

1. Code enters Call Stack
2. Async tasks move to Web APIs
3. Completed tasks move to Callback Queue
4. Event Loop pushes tasks back to Call Stack

---

# Closures in JavaScript

Closure allows inner functions to access outer function variables.

Example:

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;

    console.log(count);
  };
}
```

Why closures are useful:

- Data privacy
- State management
- Function factories

---

# Hoisting in JavaScript

JavaScript moves declarations to the top during memory creation phase.

Example:

```javascript
console.log(a);

var a = 10;
```

Important:

- var gets hoisted with undefined
- let and const stay in Temporal Dead Zone

---

# Error Handling

Error handling prevents application crashes.

Example:

```javascript
try {
  console.log(data);
} catch (error) {
  console.log(error.message);
}
```

---

# JSON in JavaScript

JSON stands for JavaScript Object Notation.

Used for data transfer between client and server.

Convert object to JSON:

```javascript
JSON.stringify(user);
```

Convert JSON to object:

```javascript
JSON.parse(data);
```

---

# Local Storage

Local storage stores data inside browser.

Example:

```javascript
localStorage.setItem("name", "Sunny");
```

Get data:

```javascript
localStorage.getItem("name");
```

---

# Final Note

JavaScript is one of the most powerful programming languages in web development.

To master JavaScript:

- Practice daily
- Build projects
- Understand concepts deeply
- Solve coding problems
- Learn advanced concepts

Consistent practice makes you a strong developer.

---

# Advanced JavaScript Theory

---

# Scope in JavaScript

Scope defines where variables can be accessed in a program.

JavaScript contains:

- Global Scope
- Function Scope
- Block Scope

---

# Global Scope

Variables declared outside functions are globally accessible.

Example:

```javascript
let name = "Sunny";

function test() {
  console.log(name);
}
```

Problem:

Too many global variables can create conflicts.

---

# Function Scope

Variables declared inside functions can only be accessed inside that function.

Example:

```javascript
function user() {
  let age = 24;

  console.log(age);
}
```

Outside access is not possible.

---

# Block Scope

Variables declared using `let` and `const` inside blocks exist only inside that block.

Example:

```javascript
if (true) {
  let city = "Hyderabad";

  console.log(city);
}
```

---

# Execution Context

Execution Context is the environment where JavaScript code executes.

JavaScript creates:

- Global Execution Context
- Function Execution Context

---

# Phases of Execution Context

## Memory Creation Phase

JavaScript allocates memory for:

- Variables
- Functions

## Code Execution Phase

Code executes line by line.

Example:

```javascript
var a = 10;

function greet() {
  console.log("Hello");
}

greet();
```

---

# Call Stack

Call Stack manages function execution.

JavaScript follows:

- LIFO (Last In First Out)

Example:

```javascript
function one() {
  two();
}

function two() {
  console.log("Two");
}

one();
```

How it works:

1. one() enters stack
2. two() enters stack
3. two() executes and removes
4. one() removes

---

# Callback Functions

A callback is a function passed as an argument to another function.

Example:

```javascript
function process(callback) {
  console.log("Processing");

  callback();
}

process(function () {
  console.log("Completed");
});
```

Why callbacks are used:

- Asynchronous operations
- Event handling
- API handling

---

# Callback Hell

Nested callbacks create unreadable code.

Example:

```javascript
login(function () {
  getUser(function () {
    getPosts(function () {
      console.log("Done");
    });
  });
});
```

Problem:

- Hard to maintain
- Hard to debug

Solution:

- Promises
- Async/Await

---

# Promise Chaining

Promises help avoid callback hell.

Example:

```javascript
fetchData()
  .then((data) => {
    return processData(data);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Advantages:

- Cleaner code
- Better error handling

---

# setTimeout()

Executes code after delay.

Example:

```javascript
setTimeout(() => {
  console.log("Executed");
}, 2000);
```

---

# setInterval()

Executes code repeatedly.

Example:

```javascript
setInterval(() => {
  console.log("Running");
}, 1000);
```

---

# Clear Interval

Stops interval execution.

Example:

```javascript
let timer = setInterval(() => {
  console.log("Hello");
}, 1000);

clearInterval(timer);
```

---

# this Keyword

`this` refers to current object.

Example:

```javascript
let user = {
  name: "Sunny",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

---

# Constructor Functions

Constructor functions create objects.

Example:

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User("Sunny", 24);
```

---

# Prototypes

Every JavaScript object has a prototype.

Prototype allows object inheritance.

Example:

```javascript
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log("Hello");
};
```

---

# Prototype Chain

JavaScript searches properties using prototype chain.

Order:

1. Current object
2. Parent prototype
3. Object prototype
4. null

---

# Classes in JavaScript

Classes are templates for creating objects.

Example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello");
  }
}
```

---

# Encapsulation

Encapsulation hides internal details.

Purpose:

- Data protection
- Controlled access

---

# Inheritance

Inheritance allows one class to use properties of another class.

Example:

```javascript
class Animal {
  sound() {
    console.log("Animal Sound");
  }
}

class Dog extends Animal {}

let d = new Dog();

d.sound();
```

---

# Polymorphism

Polymorphism means one method behaves differently.

Example:

```javascript
class Animal {
  sound() {
    console.log("Animal");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}
```

---

# Abstraction

Abstraction hides implementation details and shows only essential features.

Purpose:

- Reduce complexity
- Improve security

---

# Shallow Copy

Copies only first level values.

Example:

```javascript
let user = {
  name: "Sunny",
};

let copy = { ...user };
```

---

# Deep Copy

Copies nested objects completely.

Example:

```javascript
let deepCopy = JSON.parse(JSON.stringify(user));
```

---

# Destructuring

Extract values from arrays or objects.

## Object Destructuring

```javascript
let user = {
  name: "Sunny",
  age: 24,
};

let { name, age } = user;
```

## Array Destructuring

```javascript
let numbers = [10, 20];

let [a, b] = numbers;
```

---

# Spread Operator

Spread expands values.

Example:

```javascript
let arr1 = [1, 2];

let arr2 = [...arr1, 3, 4];
```

Uses:

- Copy arrays
- Merge arrays
- Merge objects

---

# Rest Operator

Collects multiple values into one array.

Example:

```javascript
function sum(...numbers) {
  console.log(numbers);
}
```

---

# Optional Chaining

Prevents errors when accessing nested properties.

Example:

```javascript
console.log(user?.address?.city);
```

---

# Nullish Coalescing Operator

Returns default value only for null or undefined.

Example:

```javascript
let name = null;

console.log(name ?? "Guest");
```

---

# Modules in JavaScript

Modules split code into reusable files.

Benefits:

- Clean architecture
- Reusable code
- Better maintenance

---

# Export

```javascript
export const name = "Sunny";
```

---

# Import

```javascript
import { name } from "./app.js";
```

---

# Fetch API

Fetch API is used for server communication.

Example:

```javascript
fetch("https://api.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

# HTTP Methods

## GET

Fetch data from server.

## POST

Send data to server.

## PUT

Update existing data.

## DELETE

Delete data.

---

# Browser Storage

Browser provides:

- Local Storage
- Session Storage

---

# Local Storage

Stores data permanently until manually deleted.

Example:

```javascript
localStorage.setItem("name", "Sunny");
```

---

# Session Storage

Stores data until tab closes.

Example:

```javascript
sessionStorage.setItem("token", "123");
```

---

# Debouncing

Debouncing delays function execution.

Used in:

- Search bars
- Input fields

Purpose:

Avoid unnecessary API calls.

---

# Throttling

Throttling limits execution frequency.

Used in:

- Scroll events
- Resize events

Purpose:

Improve performance.

---

# Memory Management

JavaScript automatically manages memory.

Uses:

- Garbage Collector

Problem:

Unused references create memory leaks.

---

# Memory Leak

Occurs when unused memory is not released.

Causes:

- Unremoved event listeners
- Global variables
- Timers

---

# Event Bubbling

Event moves from child to parent.

Example:

```javascript
child.addEventListener("click", () => {
  console.log("Child");
});
```

---

# Event Capturing

Event moves from parent to child.

Used rarely compared to bubbling.

---

# preventDefault()

Stops default browser behavior.

Example:

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

---

# stopPropagation()

Stops event bubbling.

Example:

```javascript
button.addEventListener("click", (e) => {
  e.stopPropagation();
});
```

---

# Strict Mode

Strict mode improves JavaScript security.

Example:

```javascript
"use strict";
```

Benefits:

- Prevents mistakes
- Improves code quality

---

# Template Literals

Template literals allow dynamic strings.

Example:

```javascript
let name = "Sunny";

console.log(`Hello ${name}`);
```

Advantages:

- Multi-line strings
- Variable interpolation

---

# Type Conversion

JavaScript converts data types automatically.

## Explicit Conversion

```javascript
Number("100");
String(123);
Boolean(1);
```

## Implicit Conversion

```javascript
console.log("5" + 1);
```

---

# Truthy and Falsy Values

Falsy values:

- false
- 0
- ""
- null
- undefined
- NaN

Everything else is truthy.

---

# NaN

NaN means "Not a Number".

Example:

```javascript
console.log("abc" / 2);
```

---

# JavaScript Best Practices

- Use const by default
- Use meaningful names
- Avoid global variables
- Write modular code
- Handle errors properly
- Use async/await
- Keep functions small
- Follow clean code principles

---

# Final Conclusion

JavaScript is the foundation of modern web development.

By mastering:

- Core JavaScript
- DOM
- Async JavaScript
- OOP
- ES6+
- Advanced concepts

---
