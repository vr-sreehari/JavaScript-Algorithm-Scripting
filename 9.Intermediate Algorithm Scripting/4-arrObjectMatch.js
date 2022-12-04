function whatIsInAName(collection, source) {
  const arr = [];
  let keys = Object.keys(source);
  //console.log(keys.map((obj)=>obj))
  return collection.filter((item) =>
    keys.every((obj) => item.hasOwnProperty(obj) && item[obj] === source[obj])
  );
  //console.log(collection[keys])
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
