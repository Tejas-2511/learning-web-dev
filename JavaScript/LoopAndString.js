// ==============================
// LOOPS IN JAVASCRIPT
// ==============================

// for loop
console.log("FOR LOOP");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
console.log("\nWHILE LOOP");
let a = 1;
while (a <= 3) {
    console.log(a);
    a++;
}

// do while loop
console.log("\nDO WHILE LOOP");
let b = 1;
do {
    console.log(b);
    b++;
} while (b <= 3);

// break
console.log("\nBREAK");
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// continue
console.log("\nCONTINUE");
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

// nested loop
console.log("\nNESTED LOOP");
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        process.stdout.write("* ");
    }
    console.log();
}

// for...of (strings, arrays)
console.log("\nFOR OF");
let word = "HELLO";

for (let ch of word) {
    console.log(ch);
}

// for...in (objects)
console.log("\nFOR IN");
let student = {
    name: "Tejas",
    age: 19
};

for (let key in student) {
    console.log(key, ":", student[key]);
}

// ==============================
// STRINGS IN JAVASCRIPT
// ==============================

let str = "Hello World";

console.log("\nSTRING");
console.log(str);

// length
console.log("\nLENGTH");
console.log(str.length);

// indexing
console.log("\nINDEXING");
console.log(str[0]);
console.log(str[6]);

// uppercase and lowercase
console.log("\nCASE CONVERSION");
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// trim
console.log("\nTRIM");
let name1 = "   Tejas   ";
console.log(name1.trim());

// slice(start,end)
console.log("\nSLICE");
console.log(str.slice(0, 5));

// substring
console.log("\nSUBSTRING");
console.log(str.substring(6, 11));

// replace
console.log("\nREPLACE");
console.log(str.replace("World", "JavaScript"));

// replaceAll
console.log("\nREPLACE ALL");
let text = "cat cat cat";
console.log(text.replaceAll("cat", "dog"));

// concat
console.log("\nCONCAT");
let first = "Hello";
let second = " JS";
console.log(first.concat(second));

// includes
console.log("\nINCLUDES");
console.log(str.includes("World"));
console.log(str.includes("Python"));

// startsWith
console.log("\nSTARTSWITH");
console.log(str.startsWith("Hello"));

// endsWith
console.log("\nENDSWITH");
console.log(str.endsWith("World"));

// charAt
console.log("\nCHARAT");
console.log(str.charAt(4));

// indexOf
console.log("\nINDEXOF");
console.log(str.indexOf("World"));

// lastIndexOf
console.log("\nLASTINDEXOF");
let s = "hello hello";
console.log(s.lastIndexOf("hello"));

// split
console.log("\nSPLIT");
let sentence = "I love JavaScript";
console.log(sentence.split(" "));
console.log(sentence.split(""));

// template literals
console.log("\nTEMPLATE LITERALS");
let user = "Tejas";
let age = 19;

console.log(`My name is ${user} and I am ${age} years old.`);

// escape characters
console.log("\nESCAPE CHARACTERS");
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("He said \"Hi\"");

// string comparison
console.log("\nSTRING COMPARISON");
console.log("apple" === "apple");
console.log("apple" > "banana");

// ==============================
// STRING PRACTICE
// ==============================

// count vowels
console.log("\nCOUNT VOWELS");

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

// reverse string
console.log("\nREVERSE STRING");

let original = "HELLO";
let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}

console.log(reversed);

// palindrome check
console.log("\nPALINDROME");

let p = "madam";
let rev = "";

for (let i = p.length - 1; i >= 0; i--) {
    rev += p[i];
}

if (p === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}