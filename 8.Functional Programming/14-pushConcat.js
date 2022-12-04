//push adds items to the end of the same array it is called on, which mutates that array.

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  //return original.push(newItem);
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
