// =====================================
// FUNCTIONS & METHODS 
// =====================================

// Function Declaration
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Tejas"));

// Function Expression
const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

// Arrow Function
const square = num => num * num;

console.log(square(5));

// Default Parameter
function welcome(name = "Guest") {
    console.log("Welcome", name);
}

welcome();
welcome("Tejas");

// Rest Parameter
function sum(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    return total;
}
 
console.log(sum(1, 2, 3, 4, 5));

// Callback Function
function processUser(name, callback) {
    console.log("Processing:", name);
    callback();
}

function done() {
    console.log("Task Completed");
}

processUser("Tejas", done);

// =====================================
// OBJECT METHOD
// =====================================

const student = {
    name: "Tejas",

    greet() {
        console.log("Hello from method");
    }
};

student.greet();

// =====================================
// ARRAY METHODS
// =====================================

let numbers = [1, 2, 3, 4, 5];

console.log("\nOriginal Array:", numbers);

// push
numbers.push(6);
console.log("push:", numbers);

// pop
numbers.pop();
console.log("pop:", numbers);

// unshift
numbers.unshift(0);
console.log("unshift:", numbers);

// shift
numbers.shift();
console.log("shift:", numbers);

// slice
console.log("slice:", numbers.slice(1, 4));

// splice
let temp = [1, 2, 3, 4, 5];
temp.splice(2, 1);
console.log("splice:", temp);

// concat
console.log("concat:", numbers.concat([6, 7]));

// includes
console.log("includes:", numbers.includes(3));

// indexOf
console.log("indexOf:", numbers.indexOf(4));

// join
console.log("join:", numbers.join("-"));

// reverse
console.log("reverse:", [...numbers].reverse());

// sort
let marks = [50, 10, 90, 25];
marks.sort((a, b) => a - b);
console.log("sort:", marks);

// forEach
console.log("\nforEach");
numbers.forEach(num => console.log(num));

// map
let doubled = numbers.map(num => num * 2);
console.log("map:", doubled);

// filter
let even = numbers.filter(num => num % 2 === 0);
console.log("filter:", even);

// find
let found = numbers.find(num => num > 3);
console.log("find:", found);

// reduce
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("reduce:", total);

// =====================================
// STRING METHODS
// =====================================

let str = " Hello JavaScript World ";

console.log("\nOriginal String:", str);

// length
console.log("length:", str.length);

// trim
console.log("trim:", str.trim());

// uppercase
console.log("upper:", str.toUpperCase());

// lowercase
console.log("lower:", str.toLowerCase());

// slice
console.log("slice:", str.slice(1, 6));

// substring
console.log("substring:", str.substring(1, 6));

// replace
console.log("replace:", str.replace("JavaScript", "JS"));

// replaceAll
let txt = "cat cat cat";
console.log("replaceAll:", txt.replaceAll("cat", "dog"));

// includes
console.log("includes:", str.includes("JavaScript"));

// startsWith
console.log("startsWith:", str.trim().startsWith("Hello"));

// endsWith
console.log("endsWith:", str.trim().endsWith("World"));

// indexOf
console.log("indexOf:", str.indexOf("JavaScript"));

// charAt
console.log("charAt:", str.charAt(2));

// split
console.log("split:", str.trim().split(" "));

// =====================================
// TEMPLATE LITERALS
// =====================================

let name = "Tejas";
let age = 19;

console.log(`My name is ${name} and I am ${age} years old.`);

// =====================================
// PRACTICE EXAMPLES
// =====================================

// Reverse String
let word = "HELLO";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

console.log("Reversed:", reversed);

// Count Vowels
let sample = "JavaScript";
let count = 0;

for (let ch of sample.toLowerCase()) {
    if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        count++;
    }
}

console.log("Vowels:", count);

// Sum of Array
let arr = [10, 20, 30, 40];
let sumArr = 0;

for (let num of arr) {
    sumArr += num;
}

console.log("Array Sum:", sumArr);

// Maximum Element
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Maximum:", max);