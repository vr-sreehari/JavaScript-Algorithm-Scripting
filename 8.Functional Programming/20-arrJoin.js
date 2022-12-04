function sentensify(str) {
  // Only change code below this line
  let data = str.split(/-|\.|,/);
  console.log(data);
  let joined = data.join(" ");
  console.log(joined);
  return joined;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
