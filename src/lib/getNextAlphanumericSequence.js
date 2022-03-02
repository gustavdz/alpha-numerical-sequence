const numberToString = require("./numberToString");
const stringToNumber = require("./stringToNumber");
const getNextAlphanumericSequence = (curString, numericIndex, numericLen) => {
  let newLetSeqIndex;
  let newLetterSeq;

  if (numericIndex + 1 > "".padStart(numericLen, "9")) {
    numericIndex = 1;
    newLetSeqIndex = stringToNumber(curString) + 1;
    newLetterSeq = numberToString(newLetSeqIndex);
  } else {
    numericIndex++;
    newLetterSeq = curString;
  }
  return newLetterSeq + numericIndex.toString().padStart(numericLen, "0");
};

module.exports = getNextAlphanumericSequence;
