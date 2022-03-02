const numberToString = require("./numberToString");
const getAlphanumericSequence = (stringIndex, numericIndex, numericLen) => {
  const alphabetSequence = numberToString(stringIndex);
  numericIndex =
    numericIndex > "".padStart(numericLen, "9")
      ? "".padStart(numericLen, "9")
      : numericIndex;
  return alphabetSequence + numericIndex.toString().padStart(numericLen, "0");
};

module.exports = getAlphanumericSequence;
