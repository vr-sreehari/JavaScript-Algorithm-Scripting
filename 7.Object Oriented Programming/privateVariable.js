function Bird() {
  let weight = 15;//cant be accessed
  this.getWeight = function () {//it has the privilidge to access the variable
    return weight;
  };
}
