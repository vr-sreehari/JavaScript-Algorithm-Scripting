function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    var repeat = "";
    for (var i = 0; i < num; i++) {
      repeat += str;
    }
    return repeat;
  }
}

repeatStringNumTimes("abc", 3);
