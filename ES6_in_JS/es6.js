var name="Bilal"
console.log("Hello " +name);
 // Modern  

const name1="Bilal"
 console.log(`hello ${name1}`) // template literals    

// old 
var name2="Bilal";
var age=20;
console.log("Hello "+name2+" you are "+age+" years old");

// modern 
let name3="Bilal";
let age1=20;
console.log(`Hello ${name3} you are ${age1} years old`); // template literals

// 2. The biggest differences
// A. var → let and const
let city="peshawar";
city="islamabad"; // we can reassign the value of a variable declared with let

// git add .
// git commit -m "ES6 in JS, differences in old and modern JS, template literals, let and const"
// git push origin main