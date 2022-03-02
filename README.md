# alpha-numerical-sequence ![npm](https://img.shields.io/npm/v/alpha-numerical-sequence) ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/gustavdz/alpha-numerical-sequence?include_prereleases)

[![NPM](https://nodei.co/npm/alpha-numerical-sequence.png)](https://npmjs.org/package/alpha-numerical-sequence)

> get a sequence based on the excel's columns system concatenating a numerical sequence.
> Also converts a number to Excel column name based on the index and the same for Excel name to an index number.

## Install

```
$ npm i alpha-numerical-sequence
```

## Usage

```js
import {
  getAlphanumericSequence,
  getNextAlphanumericSequence,
  numberToString,
  stringToNumber,
} from "alpha-numerical-sequence";

getNextAlphanumericSequence("AA", 999, 3); // expected output: "AB001"
getAlphanumericSequence(27, 999, 4); // expected output: "AA0999"
numberToString(27); // expected output: "AA"
stringToNumber("Z"); // expected output: 26
```

## API

### getNextAlphanumericSequence(currentAlphabeticalSequence,currentNumericalIndex,numericalLen)

#### currentAlphabeticalSequence

**Required**  
Type: `string`

#### currentNumericalIndex

**Required**  
Type: `number`

#### numericalLen

**Required**  
Type: `number`

### getAlphanumericSequence(currentAlphabeticalIndex,currentNumericalIndex,numericalLen)

#### currentAlphabeticalIndex

**Required**  
Type: `number`

#### currentNumericalIndex

**Required**  
Type: `number`

#### numericalLen

**Required**  
Type: `number`

### numberToString(number)

#### number

**Required**  
Type: `number`

### stringToNumber(alphabeticalSequence)

#### alphabeticalSequence

**Required**  
Type: `string`
