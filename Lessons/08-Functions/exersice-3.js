'use strict';
/*
function toReadable(number) {
  const h = Math.floor(number / 100);
  const d = Math.floor((number % 100) / 10);
  const s = number % 10;

  const textNumbers = {
    digits: [
      `zero`,
      `one`,
      `two`,
      `three`,
      `four`,
      `five`,
      `six`,
      `seven`,
      `eight`,
      `nine`,
    ],
    teens: [
      ,
      `eleven`,
      `twelve`,
      `thirteen`,
      `fourteen`,
      `fifteen`,
      `sixteen`,
      `seventeen`,
      `eighteen`,
      `nineteen`,
    ],
    decades: [
      ,
      `ten`,
      `twenty`,
      `thirty`,
      `forty`,
      `fifty`,
      `sixty`,
      `seventy`,
      `eighty`,
      `ninety`,
    ],
    hundreds: [
      ,
      `one hundred`,
      `two hundred`,
      `three hundred`,
      `four hundred`,
      `five hundred`,
      `six hundred`,
      `seven hundred`,
      `eight hundred`,
      `nine hundred`,
    ],
  };

  let result = '';
  // THREE DIGIT LOGIC
  h > 0 && d === 0 && s === 0 && (result = textNumbers.hundreds[h]);
  h > 0 &&
    d === 0 &&
    s !== 0 &&
    (result = textNumbers.hundreds[h] + ` ` + textNumbers.digits[s]);
  h > 0 &&
    d === 1 &&
    s !== 0 &&
    (result = textNumbers.hundreds[h] + ` ` + textNumbers.teens[s]);
  h > 0 &&
    d !== 0 &&
    s === 0 &&
    (result = textNumbers.hundreds[h] + ` ` + textNumbers.decades[d]);
  h > 0 &&
    d > 1 &&
    s !== 0 &&
    (result =
      textNumbers.hundreds[h] +
      ` ` +
      textNumbers.decades[d] +
      ` ` +
      textNumbers.digits[s]);
  // TWO DIGIT LOGIC
  h === 0 && d === 1 && s !== 0 && (result = textNumbers.teens[s]);
  h === 0 && d !== 0 && s === 0 && (result = textNumbers.decades[d]);
  h === 0 &&
    d !== 0 &&
    s !== 0 &&
    (result = textNumbers.decades[d] + ` ` + textNumbers.digits[s]);
  // ONE DIGIT LOGIC
  h === 0 && d === 0 && s !== 0 && (result = textNumbers.digits[s]);
  h === 0 && d === 0 && s === 0 && (result = textNumbers.digits[0]);
  return result;
}

toReadable(0);
toReadable(9);
toReadable(15);
toReadable(23);
toReadable(80);
toReadable(100);
toReadable(111);
toReadable(403);
toReadable(420);
toReadable(875);
*/
