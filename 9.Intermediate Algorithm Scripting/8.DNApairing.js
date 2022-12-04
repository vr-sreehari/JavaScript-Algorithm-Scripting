function pairElement(str) {
  let spl = str.split("");
  let arr = [];
  spl.map((item) =>
    item == "G"
      ? arr.push([item, "C"])
      : item == "C"
      ? arr.push([item, "G"])
      : item == "A"
      ? arr.push([item, "T"])
      : item == "T"
      ? arr.push([item, "A"])
      : false
  );
  return arr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

//****************************************Alternate Solution*********************************************

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map((x) => [x, pairs[x]]);
}

//test here
pairElement("GCG");
