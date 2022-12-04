function uniteUnique(...arr) {
  let newArr = [];
  arr.map((item) =>
    item.map((obj) => (newArr.indexOf(obj) == -1 ? newArr.push(obj) : false))
  );
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

//**************************SET method Based***********************************

function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())];
