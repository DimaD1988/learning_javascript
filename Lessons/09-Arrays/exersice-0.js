'use strict';
/*
const allMovements = [
  [200, 450, -400, 3000, -650, -130, 70, 1300],
  [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  [200, -200, 340, -300, -20, 50, 400, -460],
  [430, 1000, 700, 50, 90],
];
const { dep, wit } = allMovements.flat().reduce(
  (sums, curr) => {
    sums[curr > 0 ? `dep` : `wit`] += curr;
    return sums;
  },
  { dep: 0, wit: 0 }
);
console.log(dep, wit);

const convertTitleCase = function (title) {
  const exeptions = [`a`, `an`, `and`, `the`, `but`, `or`, `on`, `in`, `with`];

  const capitzalizeWord = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exeptions.includes(word) ? word : capitzalizeWord(word)))
    .join(` `);
  return capitzalizeWord(titleCase);
};

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
*/
