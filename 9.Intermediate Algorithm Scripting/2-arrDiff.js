function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  let data = [];
  newArr.filter((item) =>
    arr1.indexOf(item) == -1
      ? data.push(item)
      : false || arr2.indexOf(item) == -1
      ? data.push(item)
      : false
  );
  return data;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Tried Solution Before Hint
/*function diffArray(arr1, arr2) {
  var length = arr1.length;
  var bigArr = arr1,
    smallArr = arr2;
  if (arr2.length > arr1.length) {
    length = arr2.length;
    [bigArr, smallArr] = [smallArr, bigArr];
  }
  //return [bigArr,smallArr]
  const newArr = [];
  const final = [];
  for (var i = 0; i < length; i++) {
    //console.log(smallArr.indexOf(bigArr[i])==-1 || bigArr.indexOf(smallArr[i])==-1 )
    if (smallArr.indexOf(bigArr[i]) == -1) {
      newArr.push(bigArr[i]);
    } else if (bigArr.indexOf(smallArr[i]) == -1) {
      newArr.push(smallArr[i]);
    }
  }
  return newArr;
  let full = arr1.concat(arr2);
  for (var j = 0; j < newArr.length; j++) {
    if (full.indexOf(newArr[j]) != -1) {
      final.push(newArr[j]);
    }
  }
  return final;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
*/
