function myReplace(str, before, after) {
  let regex = /[A-Z]/;

  if (regex.test(before[0])) {
    after = after[0].toUpperCase().concat(after.substr(1, after.length));
  } else if (regex.test(after[0])) {
    after = after[0].toLowerCase().concat(after.substr(1, after.length));
  }

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
