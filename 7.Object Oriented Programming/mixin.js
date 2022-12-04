let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = function (param) {
  param.glide = function () {
    return "Im gliding";
  };
};

glideMixin(bird);//sets glide method to the param
glideMixin(boat);
