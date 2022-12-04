function findElement(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (func(num) == true) {
      return num;
    }
  }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
