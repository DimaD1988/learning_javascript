'use strict';

/*
const test = [200, 450, -400, 3000, -650, -130, 70, 1300];
const transfer = 1.1;
const transferUSD = test.map(m => m * transfer);
console.log(test, transferUSD);

const descriptions = test.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `Deposited` : `Withdrew`} ${Math.abs(
      mov
    )}`
);
console.log(descriptions);

const deposits = test.filter(i => i > 0);
const withdrawals = test.filter(i => i < 0);
console.log(deposits, withdrawals);

const balance = test.reduce((acc, cur, i) => {
  console.log(`Iteration ${i}: ${acc} + ${cur}`);
  return acc + cur;
}, 0);
console.log(balance);

// Maximum value
const max = test.reduce((acc, mov) => (acc > mov ? acc : (acc = mov)), test[0]);
console.log(max);
*/
