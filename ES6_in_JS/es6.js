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



// 3. Arrow functions 
//  old way 
var sum=function(a,b){
    return a+b;
}
console.log(sum(2,3));

// modern way
const sum1=(a,b)=>{
    return a+b;
}
console.log(sum1(2,3));

// 4. Template literals 
// old 
var name4="Bilal";
var age3=20;
console.log("Hello "+name4+" you are "+age3+" years old");

// modern 
let name5="Bilal";
let age4=20;
console.log(`Hello ${name5} you are ${age4} years old`); // template literals

// 5. Destructuring

// This is one of the very useful ES6 features.
// old way 
const student={
    name6: "Bilal",
    age5: 22,
    university: "UET Peshawar"
};

const nam=student.name6;
const ag=student.age5
const uni=student.university
console.log(`hello ${nam} are you ${ag} years old and are you from ${uni}?`);

// modern 
const { name6, age5, university } = student;

console.log(name6);
console.log(age5);
console.log(university);

const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);   // red
console.log(second);  // green

// git add .
// git commit -m "template literals and destructuring"
// git push origin main

// 7. Default parameters
