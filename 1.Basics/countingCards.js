let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    var tot = count++;
    if (count >= 1) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  } else if (card >= 7 && card <= 9) {
    if (count >= 1) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  } else {
    var tot = count--;
    if (count >= 1) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  }
  return count;
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
