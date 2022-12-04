function convertHTML(str) {
  var newStr = [];
  for (var i = 0; i < str.length; i++) {
    newStr.push(
      str[i] == "&"
        ? "&amp;"
        : str[i] == "<"
        ? "&lt;"
        : str[i] == ">"
        ? "&gt;"
        : str[i] == '"'
        ? "&quot;"
        : str[i] == "'"
        ? "&apos;"
        : str[i]
    );
  }
  return newStr.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));


//***********************Alternate REGEX********************************

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");