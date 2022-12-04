function findLongestWordLength(str) {
  var split = str.split(" ");
  var length = 0;
  for (var i = 0; i < split.length; i++) {
    if (split[i].length > length) {
      length = split[i].length;
    }
  }
  return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
