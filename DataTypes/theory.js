// ============================================
// JAVASCRIPT DATA TYPES - THEORY + CODE
// ============================================

// ------------------------------------------------
// 1. DATA TYPES IN JAVASCRIPT
// ------------------------------------------------
// JavaScript has two major groups of data types:
// 1) Primitive (immutable, stored by value)
// 2) Non-Primitive (objects, stored by reference)


// ------------------------------------------------
// 2. PRIMITIVE DATA TYPES (7 types)
// ------------------------------------------------

// (a) Number → represents integers & floating-point numbers
const phoneNumber = 8500112255;
console.log(typeof phoneNumber); // "number"
// Note: NaN is also considered a "number".

// (b) String → sequence of characters inside quotes
const firstName = "VamseeKrishna";
console.log(typeof firstName); // "string"

// (c) Boolean → true/false values
const isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"

// (d) Null → intentional "no value"
// Quirk: typeof null === "object" (this is a JavaScript bug)
const address = null;
console.log(typeof address); // "object"

// (e) Undefined → declared but not assigned any value
let userEmailId;
console.log(typeof userEmailId); // "undefined"

// (f) BigInt → for very large integers beyond safe range
const bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// (g) Symbol → unique identifiers (used as object keys sometimes)
const id = Symbol("userId");
console.log(typeof id); // "symbol"


// ------------------------------------------------
// 3. NON-PRIMITIVE DATA TYPES
// ------------------------------------------------
// These are objects, stored by reference.


// (a) Arrays → ordered collection of values (index starts from 0)
const userDetails = ["Vamseekrishna", 26, "SeniorDev", "XYZ", "abc@gmail.com"];

console.log(userDetails[0]);   // "Vamseekrishna"
console.log(userDetails[10]);  // undefined (index out of range)
console.log(Array.isArray(userDetails)); // true (to check if it's an array)


// (b) Objects → key-value pairs
const userInfo = {
    name: "RavindraReddy",
    age: 32,
    designation: "Manager",
    company: "TCS",
    emailId: "ravindra@tcs.com"
};

// Accessing object properties:
console.log(userInfo.company);       // dot notation
console.log(userInfo["company"]);    // bracket notation

// Bracket notation is useful for dynamic keys
const key = "emailId";
console.log(userInfo[key]);          // "ravindra@tcs.com"


// ------------------------------------------------
// 4. ARRAY OF OBJECTS (very common in real projects)
// ------------------------------------------------

const users = [
    {
        id: 1,
        name: "Vamsee",
        email: "vamsee@example.com",
        age: 27,
        role: "Frontend Developer",
        location: "Hyderabad",
        isActive: true,
        skills: ["JavaScript", "React", "CSS", "HTML"]
    }, 
    {
        id: 2,
        name: "Krishna",
        email: "krishna@example.com",
        age: 29,
        role: "Backend Developer",
        location: "Bangalore",
        isActive: false,
        skills: ["Node.js", "Express", "MongoDB", "SQL"]
    }, 
    {
        id: 3,
        name: "Sowjanya",
        email: "sowjanya@example.com",
        age: 25,
        role: "UI/UX Designer",
        location: "Chennai",
        isActive: true,
        skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    }, 
    {
        id: 4,
        name: "Nobitha",
        email: "nobitha@example.com",
        age: 28,
        role: "Full Stack Developer",
        location: "Pune",
        isActive: true,
        skills: ["JavaScript", "React", "Node.js", "SQL"]
    }
];

// Example: printing values
console.log(users[0].name + " , your skills are " + users[0].skills);
console.log(`My name is ${users[0].name} and my skills are ${users[0].skills.join(", ")}`);

// ------------------------------------------------
// 5. VALUE VS REFERENCE (Important Concept)
// ------------------------------------------------

// Primitives → copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Objects/Arrays → copied by reference
const obj1 = { x: 1 };
const obj2 = obj1; // same memory reference
obj2.x = 99;
console.log(obj1.x); // 99 (both affected)

// ------------------------------------------------
// 6. TEMPLATE LITERALS VS CONCATENATION
// ------------------------------------------------

// Concatenation
console.log("My name is " + users[0].name + " and I am " + users[0].age + " years old.");

// Template Literal (preferred)
console.log(`My name is ${users[0].name} and I am ${users[0].age} years old.`);
