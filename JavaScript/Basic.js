console.log("Hello,world!")
alert("Hello,world!")
name = "tejas"
console.log(name);
age = 19
console.log(age);
x = null;
y = undefined;
isStudent = true;
isTeacher = false;
var a = 10;
let b = 20;
const pi = 3.14;
// var: Old keyword,Global, function-scoped, can be redeclared.
// let: Block-scoped, can be reassigned but not redeclared.
// const: Block-scoped, cannot be reassigned after initialization.
{
    let a = 5;
    console.log(a);
}

{
    let a = 10;
    console.log(a);
}

const student = {
    name: "tejas",
    age: 19,
    isStudent: true 
};
console.log(student.name);
console.log(student.age);
console.log(student.isStudent);
console.log(student);
student.age = 20;
console.log(student["age"]);
student.age = student.age + 1;
console.log(student.age);
student["age"] = student["age"] + 1;
console.log(student.age);
student["name"] = "tejaswini";
console.log(student.name);

// let name = prompt("Enter your name:");

// console.log(name);

// <input type="text" id="name">
// <button onclick="showName()">Submit</button>
// function showName() {
//     let name = document.getElementById("name").value;
//     console.log(name);
// }

// const readline = require("readline");
// prompt()

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// console.log("Sum =", num1 + num2);