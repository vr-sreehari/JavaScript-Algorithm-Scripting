//The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2]

function squareList(arr) {
  // Only change code below this line
  var newArr = arr.filter(
    (newlist) => Number.isInteger(newlist) && newlist > 0
  );

  return newArr.map((arr) => arr * arr);

  console.log(Number.isInteger(arr[0]));
  return arr;
  // Only change code above this line
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
