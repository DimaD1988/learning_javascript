'use strict';
/*
// SLICE
let arr = [`a`, `b`, `c`, `d`, `e`];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log(arr.splice(2));
// arr.splice(-1);
console.log(arr);

// REVERSE
const arr2 = [`j`, `i`, `h`, `g`, `f`];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(` - `));
*/
/*
// AT
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// it working with string
console.log(`Dima`.at(0));
console.log(`Dima`.at(-1));
*/
/*
// FOREACH
const move = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const m of move) {
  m > 0
    ? console.log(`You deposited ${m}`)
    : console.log(`You withdrew ${Math.abs(m)}`);
}

move.forEach((mov, i, arr) => {
  mov > 0
    ? console.log(`Movement: ${i + 1} - You deposited ${mov}`)
    : console.log(`Movement: ${i + 1} - You withdrew ${Math.abs(mov)}`);
});

// FOREACH in MAP
const curr = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

curr.forEach((v, k, map) => {
  console.log(`${k}: ${v}`);
});

// FOREACH in SET
const curUnique = new Set(['USD', 'USD', 'EUR', 'GBP']);
console.log(curUnique);

curUnique.forEach((v, k, map) => {
  console.log(`${k}: ${v}`);
});
*/
