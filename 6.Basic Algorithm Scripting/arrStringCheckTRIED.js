//NOT working complicated solution
function mutation(arr) {
  let data = [];
  let data2 = [];
  let one = arr[0].toLocaleLowerCase();
  let two = arr[1].toLocaleLowerCase();
  for (i = 0; i < two.length; i++) {
    for (j = 0; j < one.length; j++) {
      if (one[j] == two[i]) {
        data.push(two[i]);
      } else {
        data2.push(two[i]);
      }
    }
  }

  let record = data.join().replace(/,/g, "");
  const regex = new RegExp(record, "g");
  let tot = two.replace(regex, "");
  return record;
}

console.log(mutation(["hello", "Hello"]));
