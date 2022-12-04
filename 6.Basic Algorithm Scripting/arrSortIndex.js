function getIndexToIns(arr, num) {
  if (arr.length == 0) {
    return 0;
  } else {
    arr = arr.sort(function (a, b) {
      return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      } else if (arr[arr.length - 1] < num) {
        return arr.length;
      } else if (arr === undefined) {
        return arr.length;
      }
    }
  }
}

console.log(getIndexToIns([40, 60], 50))
