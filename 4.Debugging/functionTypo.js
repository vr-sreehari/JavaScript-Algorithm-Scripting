function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result1 = getNine; //its actually the function
let result = getNine();
console.log(result);
