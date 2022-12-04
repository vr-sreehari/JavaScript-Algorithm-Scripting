let username = "JackOfAllTrades";
let userCheck = /^\D[a-z][a-z]*\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
