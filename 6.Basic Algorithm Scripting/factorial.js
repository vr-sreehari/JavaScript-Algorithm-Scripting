function factorialize(num) {
  let fact = 1;
  for (var i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

factorialize(5);
