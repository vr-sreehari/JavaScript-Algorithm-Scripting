//Do Not alter the global variable in functions

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(list, bookName) {
  var newList = [...list];

  newList.push(bookName);
  return newList;

  // Change code above this line
}
//console.log(add("harry potter"))
// Change code below this line
function remove(list, bookName) {
  var newList = [...list];
  const book_index = newList.indexOf(bookName);
  if (book_index >= 0) {
    newList.splice(book_index, 1);
    return newList;

    // Change code above this line
  }
}
console.log(remove(bookList, "The Hound of the Baskervilles"));
