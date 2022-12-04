let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let data = hello.replace(wsRegex, ""); // Change this line
let result = data;
