function translatePigLatin(str) {
  let beginReg = /(?:^[aeiou])/;
  let midReg = /(?:[aeiou])/;

  if (str.match(beginReg)) {
    let data = str.match(beginReg);
    let spl = str.slice(0, data.index);
    let sub = str.substr(data.index, str.length);
    return sub.concat(spl + "way");
  } else if (str.match(midReg)) {
    let data = str.match(midReg);
    let spl = str.slice(0, data.index);
    let sub = str.substr(data.index, str.length);
    return sub.concat(spl + "ay");
  } else {
    return str + "ay";
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

//**********************************Altenate REGEX solutions*****************************************

function translatePigLatin(str, charPos = 0) {
  return ["a", "e", "i", "o", "u"].includes(str[0])
    ? str + (charPos === 0 ? "way" : "ay")
    : charPos === str.length
    ? str + "ay"
    : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");
