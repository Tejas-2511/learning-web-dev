// ==============================
// ARRAYS IN JAVASCRIPT
// ==============================

let arr = [10, 20, 30, 40, 50];

console.log("ARRAY");
console.log(arr);

// length
console.log("\nLENGTH");
console.log(arr.length);

// indexing
console.log("\nINDEXING");
console.log(arr[0]);
console.log(arr[2]);

// modify value
console.log("\nMODIFY");
arr[1] = 25;
console.log(arr);

// push (add at end)
console.log("\nPUSH");
arr.push(60);
console.log(arr);

// pop (remove from end)
console.log("\nPOP");
arr.pop();
console.log(arr);

// unshift (add at beginning)
console.log("\nUNSHIFT");
arr.unshift(5);
console.log(arr);

// shift (remove from beginning)
console.log("\nSHIFT");
arr.shift();
console.log(arr);

// includes
console.log("\nINCLUDES");
console.log(arr.includes(30));
console.log(arr.includes(100));

// indexOf
console.log("\nINDEXOF");
console.log(arr.indexOf(40));

// lastIndexOf
console.log("\nLASTINDEXOF");
let nums = [1, 2, 3, 2, 4];
console.log(nums.lastIndexOf(2));

// slice (does not modify original)
console.log("\nSLICE");
console.log(arr.slice(1, 4));

// splice (modifies original)
console.log("\nSPLICE");
let data = [1, 2, 3, 4, 5];
data.splice(2, 2);
console.log(data);

// concat
console.log("\nCONCAT");
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));

// join
console.log("\nJOIN");
console.log(arr.join("-"));

// reverse
console.log("\nREVERSE");
let rev = [1, 2, 3, 4];
rev.reverse();
console.log(rev);

// sort
console.log("\nSORT");
let marks = [50, 10, 100, 25];
marks.sort((x, y) => x - y);
console.log(marks);

// ==============================
// LOOPS WITH ARRAYS
// ==============================

console.log("\nFOR LOOP");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\nFOR OF");

for (let value of arr) {
    console.log(value);
}

// ==============================
// ARRAY METHODS
// ==============================

let numbers = [1, 2, 3, 4, 5];

// forEach
console.log("\nFOREACH");

numbers.forEach(function(num) {
    console.log(num);
});

// map
console.log("\nMAP");

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);

// filter
console.log("\nFILTER");

let even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);

// find
console.log("\nFIND");

let found = numbers.find(function(num) {
    return num > 3;
});

console.log(found);

// reduce
console.log("\nREDUCE");

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);

// ==============================
// PRACTICE QUESTIONS
// ==============================

// sum of array
console.log("\nSUM OF ARRAY");

let arr1 = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < arr1.length; i++) {
    total += arr1[i];
}

console.log(total);

// maximum element
console.log("\nMAXIMUM");

let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
}

console.log(max);

// minimum element
console.log("\nMINIMUM");

let min = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < min) {
        min = arr1[i];
    }
}

console.log(min);

// count even numbers
console.log("\nCOUNT EVEN");

let count = 0;

for (let num of arr1) {
    if (num % 2 === 0) {
        count++;
    }
}

console.log(count);

// reverse array manually
console.log("\nREVERSE MANUALLY");

let original = [1, 2, 3, 4];
let reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}

console.log(reversed);