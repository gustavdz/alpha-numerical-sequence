const stringToNumber = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result *= 26;
    result += str[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
};

module.exports = stringToNumber;
