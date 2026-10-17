const fs = require('fs');

// 1. Write data to a text file
const fileData = "Jeremy Geddes - Part B3 File I/O Completed Successfully.";
fs.writeFileSync('output.txt', fileData);
console.log("File 'output.txt' written successfully.");

// 2. Read data back from the text file
const readData = fs.readFileSync('output.txt', 'utf8');
console.log("Read from file:", readData);
