let x = 0;
function sum(arr, n) {
  if (n <= 0) {
    return;
  } else {
    x += arr[n - 1];
    sum(arr, n - 1);
  }
}

sum([2, 3, 4, 5], 3);
console.log(x);
