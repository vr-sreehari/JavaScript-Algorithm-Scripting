function dropElements(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    //console.log()
    if (func(arr[i]) == true) {
      return arr.splice(i);
    }
  }
  return [];
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);


//********************Alternate************************

function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});