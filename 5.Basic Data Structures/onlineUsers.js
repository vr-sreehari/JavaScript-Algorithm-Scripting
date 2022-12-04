const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  var length = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      length++;
    }
  }
  return length;
  // Only change code above this line
}

console.log(countOnline(users));
