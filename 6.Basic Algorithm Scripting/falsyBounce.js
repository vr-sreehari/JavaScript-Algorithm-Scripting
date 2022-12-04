function bouncer(arr) {
  var record = [];
  for (var i = 0; i < arr.length; i++) {
    let data = arr[i];
    var sdat = String(data);
    if (arr[i] == sdat && arr[i] != "") {
      record.push(arr[i]);
    }
  }
  return record;
}
let falsy = [false, null, 0, "", undefined, NaN];
bouncer([7, "ate", "", false, 9]);

//*****************Alternate*********************

function bouncer(arr) {
  result = [];
  arr.map((item) => (!item == false ? result.push(item) : false));
  return result;
}
let falsy = [false, null, 0, "", undefined, NaN];
console.log(bouncer([7, "ate", "", false, 9]));

