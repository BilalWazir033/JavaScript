# 🟨 JavaScript Practice

A collection of my **JavaScript practice, concepts, examples, and exercises** — covering the fundamentals needed for web development.

---

## 📌 Contents

* [Introduction](#-introduction)
* [Variables](#-variables)
* [Data Types](#-data-types)
* [Operators](#-operators)
* [Input & Output](#-input--output)
* [Conditional Statements](#-conditional-statements)
* [Loops](#-loops)
* [Functions](#-functions)
* [Arrays](#-arrays)
* [Objects](#-objects)
* [Strings](#-strings)
* [DOM](#-dom)
* [Events](#-events)
* [ES6+](#-es6)
* [Useful Methods](#-useful-methods)
* [Practice](#-practice)

---

## 🚀 Introduction

**JavaScript** is a programming language mainly used to make web pages **interactive and dynamic**.

```javascript
console.log("Hello, JavaScript!");
```

---

## 📦 Variables

Used to store data.

```javascript
let name = "Bilal";
const age = 20;
var city = "Peshawar";
```

### `let` vs `const` vs `var`

| Keyword | Reassign | Scope    | Recommended |
| ------- | -------- | -------- | ----------- |
| `let`   | ✅        | Block    | ✅           |
| `const` | ❌        | Block    | ✅           |
| `var`   | ✅        | Function | ⚠️ Avoid    |

---

## 🔢 Data Types

### Primitive Types

```javascript
String      // "Hello"
Number      // 25
Boolean     // true / false
Undefined   // undefined
Null        // null
BigInt      // 123n
Symbol
```

### Non-Primitive

```javascript
Object
Array
Function
```

Check a data type:

```javascript
typeof name;
```

---

## ➕ Operators

### Arithmetic

```javascript
+   // Addition
-   // Subtraction
*   // Multiplication
/   // Division
%   // Remainder
**  // Power
```

### Comparison

```javascript
==    // Equal
===   // Strictly equal
!=    // Not equal
!==   // Strictly not equal
>     // Greater
<     // Less
>=    // Greater/equal
<=    // Less/equal
```

> Prefer `===` and `!==` because they also check data type.

### Logical

```javascript
&&    // AND
||    // OR
!     // NOT
```

---

## 🖥️ Input & Output

### Output

```javascript
console.log("Hello");
alert("Welcome");
```

### Input

```javascript
let name = prompt("Enter your name:");
console.log(name);
```

### HTML Output

```javascript
document.getElementById("demo").textContent = "Hello!";
```

---

## 🔀 Conditional Statements

### `if / else`

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### `else if`

```javascript
let marks = 80;

if (marks >= 80) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("C");
}
```

### Ternary Operator

```javascript
let result = age >= 18 ? "Adult" : "Minor";
```

### `switch`

```javascript
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}
```

---

## 🔁 Loops

### `for`

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### `while`

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### `do...while`

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### `for...of`

Used for values:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

### `for...in`

Used for object keys:

```javascript
let student = {
    name: "Bilal",
    age: 20
};

for (let key in student) {
    console.log(key, student[key]);
}
```

---

## 🧩 Functions

### Normal Function

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));
```

### Function Expression

```javascript
const add = function(a, b) {
    return a + b;
};
```

### Arrow Function

```javascript
const add = (a, b) => a + b;
```

---

## 📚 Arrays

Used to store multiple values.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### Access

```javascript
console.log(fruits[0]);
```

### Common Methods

```javascript
fruits.push("Orange");     // Add at end
fruits.pop();              // Remove from end
fruits.unshift("Grapes");  // Add at beginning
fruits.shift();            // Remove from beginning
fruits.includes("Apple");  // Check value
fruits.indexOf("Mango");   // Find index
```

### Important Array Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n));

let doubled = numbers.map(n => n * 2);

let even = numbers.filter(n => n % 2 === 0);

let found = numbers.find(n => n > 3);

let total = numbers.reduce((sum, n) => sum + n, 0);
```

---

## 🧱 Objects

Objects store data as **key-value pairs**.

```javascript
let student = {
    name: "Bilal",
    age: 20,
    course: "Computer Science"
};
```

### Access Properties

```javascript
console.log(student.name);
console.log(student["age"]);
```

### Modify

```javascript
student.age = 21;
student.city = "Peshawar";
```

---

## 🔤 Strings

```javascript
let text = "JavaScript";
```

### Common Methods

```javascript
text.length
text.toUpperCase()
text.toLowerCase()
text.includes("Script")
text.startsWith("Java")
text.endsWith("Script")
text.indexOf("S")
text.slice(0, 4)
text.replace("Java", "Type")
```

### Template Literals

```javascript
let name = "Bilal";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

## 🌐 DOM

**DOM (Document Object Model)** allows JavaScript to interact with HTML.

### Select Elements

```javascript
document.getElementById("title");

document.querySelector(".heading");

document.querySelectorAll("p");
```

### Change Content

```javascript
document.getElementById("title").textContent = "Hello!";
```

### Change Style

```javascript
document.getElementById("title").style.color = "blue";
```

### Change HTML

```javascript
element.innerHTML = "<b>Hello</b>";
```

---

## 🖱️ Events

Events allow JavaScript to respond to user actions.

```javascript
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

Common events:

```text
click
submit
change
input
mouseover
keydown
keyup
load
```

Example:

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    document.querySelector("#message").textContent = "Hello!";
});
```

---

## ⚡ ES6+

Modern JavaScript introduced many useful features.

### Destructuring

```javascript
const [a, b] = [10, 20];

const {name, age} = student;
```

### Spread Operator

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
```

### Rest Parameter

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

### Default Parameters

```javascript
function greet(name = "User") {
    console.log(`Hello ${name}`);
}
```

---

## 🧰 Useful Methods

| Method       | Purpose                     |
| ------------ | --------------------------- |
| `map()`      | Transform array             |
| `filter()`   | Select elements             |
| `reduce()`   | Calculate a single value    |
| `find()`     | Find first matching element |
| `forEach()`  | Loop through array          |
| `includes()` | Check if value exists       |
| `sort()`     | Sort elements               |
| `slice()`    | Extract part                |
| `splice()`   | Add/remove elements         |
| `push()`     | Add to end                  |
| `pop()`      | Remove from end             |

---

## 🧪 Practice

### Beginner

* Print numbers from 1–100
* Check whether a number is even or odd
* Find the largest of three numbers
* Calculate factorial
* Reverse a string
* Count vowels in a string

### Intermediate

* Find duplicate values in an array
* Find the maximum/minimum in an array
* Create a calculator
* Create a To-Do List
* Create a number guessing game
* Create a simple quiz

### DOM Practice

* Counter App
* Digital Clock
* Color Changer
* To-Do List
* Form Validation
* Image Slider
* Simple Calculator

---

## 📁 Practice Structure

```text
JavaScript/
│
├── 01-Basics/
├── 02-Variables/
├── 03-Data-Types/
├── 04-Operators/
├── 05-Conditions/
├── 06-Loops/
├── 07-Functions/
├── 08-Arrays/
├── 09-Objects/
├── 10-Strings/
├── 11-DOM/
├── 12-Events/
├── 13-ES6/
└── 14-Projects/
```

---

## 🎯 Goal

> **Learn → Practice → Build → Improve**

This repository documents my journey of learning **JavaScript fundamentals and practical web development**.
