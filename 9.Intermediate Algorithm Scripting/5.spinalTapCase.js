function spinalCase(str) {
  let final = [];
  let wsRegex = /(^\s+|\s+$)|(_+)|(\s+)/g; // Change this line
  let data = str.replace(wsRegex, "-");
  //return data
  let cap = /([A-Z]*[a-z]*)/g;
  let rec = data.match(cap);
  rec.map((obj) => (obj !== "" ? final.push(obj) : false));
  return final.join("-").toLowerCase();
  //return rec//.join('-').toLowerCase()//.slice(0,-1)
}

console.log(spinalCase("AllThe-small Things"));


//************************************************************************ */
/*let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let data = hello.replace(wsRegex, "-"); // Change this line
let result = data;*/


//Single Line Solution
/*
return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
    */