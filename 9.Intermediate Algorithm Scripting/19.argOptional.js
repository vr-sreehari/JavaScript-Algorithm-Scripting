function addTogether() {
  if (arguments.length > 2) {
    return undefined;
  }
  let [arg1, arg2] = [...arguments];

  for (let key in arguments) {
    if (!Number.isInteger(arguments[key])) {
      return undefined;
    } else if (arguments.length == 1) {
      return function (z) {
        if (Number.isInteger(arg1) && Number.isInteger(z)) return arg1 + z;
      };
    } else if (Number.isInteger(arg1) && Number.isInteger(arg2)) {
      return arguments[0] + arguments[1];
    }
  }
  return undefined;
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));

//******************Alternate*******************

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}
