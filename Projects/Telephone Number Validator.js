function telephoneCheck(str) {
  let reg =
    /^1.?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$|^(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/g;
  // let reg=/\d{3}-?\d{3}-?\d{4}|\(\d{3}\)\d{3}-\d{4}/g
  //  let reg=/^1.\(?\d{3}\)?.?\d{3}.?\d{4}$|^\(?\d{3}\)?.?\d{3}.?\d{4}$/g
  return str.match(reg);
  return reg.test(str);

  return true;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2 757 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
