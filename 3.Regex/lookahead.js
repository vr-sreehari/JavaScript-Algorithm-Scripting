let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/; // pattern that matches greater than 6 char & 2 consecutive numbers
let result = pwRegex.test(sampleWord);
