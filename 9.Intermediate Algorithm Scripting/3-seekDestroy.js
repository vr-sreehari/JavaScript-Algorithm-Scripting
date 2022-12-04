function destroyer(arr, ...arg) {
  let data = [];
  arr.filter((item) => (arg.indexOf(item) == -1 ? data.push(item) : false));
  return data;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
