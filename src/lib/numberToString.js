const numberToString = (n) => {
  let str = "";
  let t;
  while (n > 0) {
    t = (n - 1) % 26;
    str = String.fromCharCode(65 + t) + str;
    n = ((n - t) / 26) | 0;
  }
  return str;
};

module.exports = numberToString;
