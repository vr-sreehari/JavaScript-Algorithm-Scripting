function sumFibs(num) {
  let n1 = 1,
    n2 = 1,
    n3 = n1 + n2,
    tot = 1;
  for (; n1 <= num; n1 = n2) {
    n2 = n3;
    n3 = n1 + n2;
    n1 % 2 != 0 ? (tot += n1) : false;
  }
  return tot;
}
console.log(sumFibs(1));
console.log(sumFibs(4));
console.log(sumFibs(10));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));

//*********************************Using Reduce*************************************

function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);
