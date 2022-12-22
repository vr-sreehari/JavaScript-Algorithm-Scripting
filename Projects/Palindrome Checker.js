function palindrome(string) {
  // Remove all non-alphanumeric characters and convert to lowercase
  string = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
  //console.log(string)
  // Reverse the string
  const reversedString = string.split("").reverse().join("");

  // Compare the original and reversed strings
  return string === reversedString;
}

// Test the function
console.log(palindrome("racecar"));
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /- :) 0-0"));
console.log(palindrome("five|_/|four"));
