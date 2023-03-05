module.exports = function toReadable (number) {
    let dict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let dict2 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let dict3 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let result = new Array();
    let m = new Array();
    number = String(number);
    for (let i = number.length - 1, j = 1; i >= 0; i -= 3, j++) {
      if (number[i-2] > 0) {
        m.push(dict[number[i-2]] + " hundred");
      };
      if (number[i-1] == 1) {
        m.push(dict2[number[i]]);
      } else {
        if (number[i-1] > 1) {
          m.push(dict3[number[i-1] - 2])
        }
        if (number[i] > 0) {
          m.push(dict[number[i]]);
        }
      };
      if (j == 2) {
        m.push("thousand")
      } else if (j == 3) {
        m.push("million")
      } else if (j == 4) {
        m.push("billion")
      }
      if (number == 0) return dict[0];
      result.unshift(m.join(" "))
      m = [];
  
    };
    return result.join(" ");
  }
