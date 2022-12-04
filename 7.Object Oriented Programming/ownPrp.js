function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let prp in canary) {
  if (canary.hasOwnProperty(prp)) {
    ownProps.push(prp);
  }
}
console.log(ownProps);
