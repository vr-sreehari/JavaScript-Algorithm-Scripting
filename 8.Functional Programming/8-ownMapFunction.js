// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (var i = 0; i < this.length; i++) {
    let newVal = this[i] * 2;
    newArray.push(newVal);
  }
  console.log(newArray);
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

/*Another Solution
const new_s = s.myMap();

console.log(new_s);
*/