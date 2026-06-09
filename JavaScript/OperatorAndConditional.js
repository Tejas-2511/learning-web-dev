// Arithmetic Operators
let a = 10, b = 3;

console.log(a + b);  // 13 Addition
console.log(a - b);  // 7 Subtraction
console.log(a * b);  // 30 Multiplication
console.log(a / b);  // 3.333 Division
console.log(a % b);  // 1 Modulus (remainder)
console.log(a ** b); // 1000 Exponentiation (10^3)

// Assignment Operators
let x = 5;

x += 2;  // x = x + 2 -> 7
x -= 1;  // x = x - 1 -> 6
x *= 2;  // x = x * 2 -> 12
x /= 3;  // x = x / 3 -> 4
x %= 3;  // x = x % 3 -> 1

// Comparison Operators
console.log(5 == "5");   // true  (value only)
console.log(5 === "5");  // false (value + type)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false

// Logical Operators
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)

// Increment / Decrement
let n = 5;

console.log(++n); // 6 (pre-increment)
console.log(n++); // 6 (post-increment)
console.log(n);   // 7

console.log(--n); // 6 (pre-decrement)
console.log(n--); // 6 (post-decrement)
console.log(n);   // 5

// Ternary Operator
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// Type Operators
console.log(typeof 123);       // number
console.log(typeof "Hello");   // string
console.log(typeof true);      // boolean

// Nullish Coalescing
let username = null;
console.log(username ?? "Guest"); // Guest

// Optional Chaining
let user = {};
console.log(user.address?.city); // undefined

// IF
let age = 20;

if (age >= 18) {
    console.log("Adult");
}

// IF ELSE
let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// IF ELSE IF ELSE
let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// NESTED IF
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can Drive");
    }
}

// TERNARY OPERATOR
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// SWITCH
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid Day");
}

// LOGICAL AND (&&)
if (age >= 18 && hasLicense) {
    console.log("Drive Allowed");
}

// LOGICAL OR (||)
let isAdmin = false;
let isOwner = true;

if (isAdmin || isOwner) {
    console.log("Access Granted");
}

// LOGICAL NOT (!)
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please Login");
}

// NULLISH COALESCING (??)
let username = null;
console.log(username ?? "Guest");

// OPTIONAL CHAINING (?.)
let user = {};
console.log(user.address?.city);