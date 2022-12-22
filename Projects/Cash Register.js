let usDollars = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  let tot = 0,
    retrn = cash - price,
    changeDenominations = [];
  //console.log(usDollars);
  for (let cas in cid) {
    tot += cid[cas][1];
  }
  if (retrn === tot) {
    return { status: "CLOSED", change: cid };
  } else if (retrn > tot) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      let denom = cid[i][0];
      let value = cid[i][1];

      let denomValue = usDollars[denom];
      let numDenoms = Math.floor(retrn / denomValue);

      if (numDenoms > cid[i][1] / denomValue) {
        numDenoms = cid[i][1] / denomValue;
        numDenoms == 1 ? (numDenoms = 0) : true;
      }

      if (numDenoms > 0) {
        changeDenominations.push([denom, numDenoms * denomValue]);
        retrn -= numDenoms * denomValue;
        retrn = Math.round(retrn * 100) / 100;
      }
    }

    return changeDenominations.length > 0
      ? { status: "OPEN", change: changeDenominations }
      : { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
