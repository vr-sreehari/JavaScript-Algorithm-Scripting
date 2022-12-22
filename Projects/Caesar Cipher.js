function rot13(str) {
  let reg = /[.?!]/g;
  let match = str.match(reg);
  let index = str.indexOf(match ? match[match.length - 1] : -1);
  if (index != -1) {
    var spl = str.substr(index, 1);
    str = str.slice(0, str.length - 1);
  }
  let init = 64;
  let split = str.split(" ");
  let result = [];
  for (var i = 0; i < split.length; i++) {
    let len = split[i];
    let jval = "";
    for (var j = 0; j < len.length; j++) {
      let val = len[j].charCodeAt(0) + 13;
      if (val > 90) {
        let dat = val - 90;
        dat += init;
        jval += String.fromCharCode(dat);
      } else {
        jval += String.fromCharCode(val);
      }
    }
    result.push(jval);
  }
  return result.join(" ").concat(spl ? spl : "");

  // console.log(str.charCodeAt(0)>90)

  // let valu=str.charCodeAt(0)+13
  // console.log(String.fromCharCode(valu))
  //return str;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
