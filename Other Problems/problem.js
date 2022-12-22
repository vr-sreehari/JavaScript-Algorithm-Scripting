let intToRoman = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
let data = intToRoman["1"];
console.log(data);

function roman(num) {
  if (num < 5) {
    switch (num) {
      case 1:
        console.log(data);
        break;
      case 2:
        console.log(data + "I");
        break;
      case 3:
        console.log(data + "II");
        break;
      case 4:
        console.log(data + "V");
        break;
    }
  } else if (num >= 5 || num < 10) {
    switch (num) {
      case 5:
        console.log(data);
        break;
      case 6:
        console.log(data + "I");
        break;
      case 7:
        console.log(data + "II");
        break;
      case 8:
        console.log(data + "III");
        break;
      case 9:
        console.log(data + "V");
        break;
    }
  }
}

roman(4);
