// Only change code below this line
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
}
// Only change code above this line

console.log(rangeOfNumbers(5, 5));
