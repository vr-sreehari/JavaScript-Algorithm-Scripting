//Efficient

function isPrime(val) {
  for (var i = 2; i <= Math.sqrt(val); i++) {
    if (val % i == 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  for (var j = 2; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

//Not Efficient Since it keeps pushing values into array

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function sumPrimes(val) {
  let result = [];
  for (var i = 2; i <= val; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result.reduce((a, b) => a + b);
}

sumPrimes(10);