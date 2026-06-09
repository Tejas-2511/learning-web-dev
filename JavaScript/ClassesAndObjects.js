// =====================================
// OBJECTS
// =====================================

// Object Literal
const student = {
    name: "Tejas",
    age: 19,
    cgpa: 9.46,

    greet() {
        console.log("Hello");
    }
};

console.log(student);

// Access Properties
console.log(student.name);
console.log(student["age"]);

// Modify Property
student.age = 20;
console.log(student.age);

// Add Property
student.city = "Jaipur";
console.log(student);

// Delete Property
delete student.cgpa;
console.log(student);

// Object Method
student.greet();

// Loop Through Object
for (let key in student) {
    console.log(key, ":", student[key]);
}

// Object Keys
console.log(Object.keys(student));

// Object Values
console.log(Object.values(student));

// Object Entries
console.log(Object.entries(student));

// =====================================
// CLASSES
// =====================================

class Student {

    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }

    // Another Method
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Creating Objects
const s1 = new Student("Tejas", 19);
const s2 = new Student("Rahul", 20);

console.log(s1);
console.log(s2);

s1.greet();
s2.study();

// =====================================
// THIS KEYWORD
// =====================================

class Car {

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    display() {
        console.log(this.brand, this.model);
    }
}

const c1 = new Car("Toyota", "Fortuner");

c1.display();

// =====================================
// GETTER
// =====================================

class Rectangle {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    get area() {
        return this.length * this.width;
    }
}

const r1 = new Rectangle(10, 5);

console.log(r1.area);

// =====================================
// SETTER
// =====================================

class Person {

    constructor() {
        this._name = "";
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }
}

const p1 = new Person();

p1.name = "Tejas";

console.log(p1.name);

// =====================================
// INHERITANCE
// =====================================

class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {

    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog1 = new Dog("Tommy");

dog1.eat();
dog1.bark();

// =====================================
// SUPER KEYWORD
// =====================================

class Employee {

    constructor(name) {
        this.name = name;
    }
}

class Developer extends Employee {

    constructor(name, language) {
        super(name);
        this.language = language;
    }

    showInfo() {
        console.log(this.name, this.language);
    }
}

const dev1 = new Developer("Tejas", "JavaScript");

dev1.showInfo();

// =====================================
// STATIC METHOD
// =====================================

class MathUtil {

    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(10, 20));

// =====================================
// INSTANCEOF
// =====================================

console.log(dev1 instanceof Developer);
console.log(dev1 instanceof Employee);

// =====================================
// OBJECT DESTRUCTURING
// =====================================

const user = {
    username: "Tejas",
    email: "abc@gmail.com"
};

const { username, email } = user;

console.log(username);
console.log(email);

// =====================================
// SPREAD OPERATOR
// =====================================

const obj1 = {
    a: 10,
    b: 20
};

const obj2 = {
    ...obj1,
    c: 30
};

console.log(obj2);

// =====================================
// JSON
// =====================================

const person = {
    name: "Tejas",
    age: 19
};

let jsonString = JSON.stringify(person);

console.log(jsonString);

let objectAgain = JSON.parse(jsonString);

console.log(objectAgain);