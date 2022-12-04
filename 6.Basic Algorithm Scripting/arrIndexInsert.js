function frankenSplice(arr1, arr2, n) {
  const arr = [].concat(...arr2);
  arr.splice(n, 0, arr1);
  let flatArray = [].concat(...arr);
  return flatArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
