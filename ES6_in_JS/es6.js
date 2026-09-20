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



// 6. Spread operator ... The spread operator is used to expand/unpack the 
// elements of an array or properties of an object.

// old way
const numbers1=[1, 2, 3];
const numbers2=[4, 5, 6];

const allNumbers=numbers1.concat(numbers2);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6]

// modern way
const allNumbers1=[...numbers1, ...numbers2];
console.log(allNumbers1); // [1, 2, 3, 4, 5, 6]
// we'll use this a lot in modern JavaScript, especially React.

const student1 = {
    name: "Bilal",
    age: 22
};
const student2 = { ...student1 };

console.log(student2);

const student3 = {
    ...student1,
    university: "UET Peshawar"
};

console.log(student3);

// So spread is commonly used for:
// combining arrays
// copying arrays
// adding elements to arrays
// copying objects
// combining objects
// adding/updating object properties

// 3. Rest Operator ...

// Now the same ... has a different job.

// Rest collects multiple values into one array.

function sum3(...numbers6) {
    console.log(numbers6); // [1, 2, 3, 4, 5]
}
sum3(1, 2, 3, 4, 5);

// rest is useful then spread operator because it allows us to pass
//  an indefinite number of arguments to a function.

git add .
git commit -m "spread and rest operators in detail and useful examples of them"
git push origin main

