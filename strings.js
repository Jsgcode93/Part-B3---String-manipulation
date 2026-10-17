// AUTHOR: Jeremy Geddes
// DATE: October 2026
// PURPOSE: AT2 Part 3 - String Manipulation and File I/O

// import file system // 
const fs = require('fs');

// --- Define Strings --- //
const myString = "This is a string";
const anotherString = "   Another string"; // 3 spaces at start
const hello = "Hello there! ";
const myName = "Jeremy";

// --- 2. Length and charAt ---
console.log("Length of myString:", myString.length);
console.log("First character:", myString.charAt(0));
console.log("11th character:", myString.charAt(10));

