// AUTHOR: Jeremy Geddes
// DATE: October 2026
// PURPOSE: AT2 Part 3 - String Manipulation 



// --- Define Strings --- //
const myString = "This is a string";
const anotherString = "   Another string"; // 3 spaces at start
const hello = "Hello there! ";
const myName = "Jeremy";

// ---  Length and charAt ---
console.log("Length of myString:", myString.length);
console.log("First character:", myString.charAt(0));
console.log("11th character:", myString.charAt(10));

// Slice "is a" from myString
const slicedText = myString.slice(5, 9);
console.log("Sliced text:", slicedText);

// Use substring to get "the" from anotherString
const subStringText = anotherString.substring(6, 9); 
console.log("Substring text:", subStringText);
