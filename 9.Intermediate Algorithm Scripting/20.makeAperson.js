const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let first = firstAndLast.split(" ")[0],
    last = firstAndLast.split(" ")[1];
  this.getFullName = function () {
    return first.concat(" ", last);
  };
  this.getFirstName = function () {
    return first;
  };
  this.getLastName = function () {
    return last;
  };
  this.setFirstName = function (name) {
    first = name;
    return first.concat(" ", last);
  };
  this.setLastName = function (name) {
    last = name;
    return first.concat(" ", last);
  };
  this.setFullName = function (name) {
    (first = name.split(" ")[0]), (last = name.split(" ")[1]);
    return first.concat(" ", last);
  };
  return first.concat(" ", last);
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.setLastName("Curry"));
console.log(bob.setFullName("Haskell Curry"));
