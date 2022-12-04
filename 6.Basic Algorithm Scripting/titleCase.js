function titleCase(str) {
  let title = "";
  let split = str.split(" ");
  for (var i = 0; i < split.length; i++) {
    var word = split[i]
      .substring(0, 1)
      .toUpperCase()
      .concat(split[i].substr(1).toLowerCase() + " ");
    title += word;
  }
  return title.trim();
}

titleCase("I'm a little tea pot");
