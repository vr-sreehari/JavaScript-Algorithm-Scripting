function steamrollArray(arr) {
  let new1 = [];
  function arrfun(val) {
    if (Array.isArray(val)) {
      let len = 0;
      while (len < val.length) {
        arrfun(val[len]);
        len++;
      }
    }
    new1.push(val);
  }

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr[i].filter((item) => arrfun(item));
    }
    new1.push(arr[i]);
  }
  let final = [];
  new1.filter((item) => (Array.isArray(item) ? false : final.push(item)));
  return final;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


//******************************Using some function */

function steamrollArray(arr) {
  const flat = [].concat(...arr);
  console.log(flat);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));