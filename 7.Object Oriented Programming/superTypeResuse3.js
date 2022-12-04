function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);//inherits the supertypes constructor
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;// changed to respective constructor
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
