function chunkArrayInGroups(arr, size) {
  let newarr = [];
  let count = arr.length;
  for (var i = 0; i < count; i += size) {
    newarr.push(arr.slice(i, i + size));
  }
  return newarr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
