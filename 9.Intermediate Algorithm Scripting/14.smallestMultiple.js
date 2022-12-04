function scm(num) {
  let sort = num.sort((a, b) => a - b);
  var arr = [];
  for (var i = sort[0]; i <= sort[1]; i++) {
    arr.push(i);
  }
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  //(30 ? gcd(30,24%30) : 24 ) => 24
  //(24 ? gcd(24,30%24) : 30 ) =>6
  //(6 ? gcd(6,24%6) : 24) =>0
  //(0 ? gcd(0,6%0) : 6) => 6
  //console.log(gcd(12,5));

  return arr.reduce((a, b) => (a * b) / gcd(a, b));
  //arr[2,3,4,5]
  //(2*3)/1=>6
  //(6*4)/2=>24/2=>12
  //(12*5)/1=>60
}
//console.log(24 % 6);
console.log(scm([5, 2]));
console.log(scm([1, 13]));
console.log(scm([23, 18]));
