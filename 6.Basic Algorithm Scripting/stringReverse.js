function reverseString(str) {
  let split = str.split("");
  let reverse = split.reverse();
  let rstr = reverse.join("");
  return rstr;
}

reverseString("hello");
