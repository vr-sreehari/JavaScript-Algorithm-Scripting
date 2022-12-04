function truncateString(str, num) {
  if (str.length >= num) {
    var trunc = str.substr(0, num);
    if (trunc.length >= str.length) {
      return trunc;
    } else {
      return trunc.concat("...");
    }
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
