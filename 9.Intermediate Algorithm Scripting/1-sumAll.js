function sumAll(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let tot = 0;
  for (var i = arr[0]; i <= arr[arr.length - 1]; i++) {
    tot += i;
  }
  return tot;
}

sumAll([1, 4]);
