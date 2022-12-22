function outer() {
  var name = "duplicate";
  function inner1() {
    console.log(name);
  }
  function inner2() {
    console.log(name);
  }
  inner1();
  inner2();
  console.log(name);
}

outer();
