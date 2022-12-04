function checkPositive(arr) {
  // Only change code below this line
  const isPositive = (currentValue) => currentValue > 0;
  return arr.every(isPositive);

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
