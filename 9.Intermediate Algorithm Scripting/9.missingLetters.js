function fearNotLetter(str) {
  let inc = str.length;
  let start = str.substr(0, 1).charCodeAt(0);
  let cond = start + inc;
  let arr = [];
  let split = str.split("");
  for (var j = start; j < cond; j++) {
    arr.push(String.fromCharCode(j));
  }
  let final = "";
  arr.map((item) => (split.indexOf(item) == -1 ? (final = item) : false));
  if (final == "") {
    return undefined;
  }
  return final;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));



//*************************************Solution-1************************************
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

//Solution-2
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split("").forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");
