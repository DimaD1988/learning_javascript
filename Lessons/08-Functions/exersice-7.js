'use strict';
/*
debugger;
let click = document.querySelector(`h1`);
(function () {
  const header = document.querySelector(`h1`);
  console.log(`init`);
  header.style.color = `red`;
  click.addEventListener(`click`, () => (header.style.color = `blue`));
})();
function checkPositive(item) {
  return item > -1;
}
function sortByHeight(arr) {
  const bar = arr.slice();
  const newArr = arr
  .slice()
  .filter(checkPositive)
  .sort((a, b) => a - b);
  let index = 0;
  arr.forEach((_, i) => {
    arr[i] !== -1 && (arr[i] = newArr[index]) && index++;
  });
  console.log(bar, arr);
}

sortByHeight(
  [-1, 150, 190, 170, -1, -1, 160, 180],
  [-1, 150, 160, 170, -1, -1, 180, 190]
  );
  
sortByHeight([-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1]);

sortByHeight([-1], [-1]);

sortByHeight([4, 2, 9, 11, 2, 16], [2, 2, 4, 9, 11, 16]);

sortByHeight(
  [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3],
  [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
  );
  */
/*
function getSeason(date) {
  if (date) {
    const arr = [`winter`, `spring`, `summer`, `autumn`];
    let index = 0;
    try {
      const mo = date.getUTCMonth();
      (mo === 11 || mo === 0 || mo === 1) && (index = 0);
      (mo === 2 || mo === 3 || mo === 4) && (index = 1);
      (mo === 5 || mo === 6 || mo === 7) && (index = 2);
      (mo === 8 || mo === 9 || mo === 10) && (index = 3);
      return arr[index];
    } catch {
      throw new Error('Invalid date!');
    }
  }
  return 'Unable to determine the time of year!';
}

getSeason(new Date(2150, 7, 21, 18, 36, 41, 841), 'summer');
getSeason(new Date(83, 9, 25, 16, 20, 23, 544), `autumn`);
getSeason(new Date(81, 10, 13, 12, 50, 13, 493), `autumn`);
getSeason(new Date(481, 1, 5, 21, 58, 37, 272), 'winter');
getSeason(new Date(369, 9, 26, 4, 38, 0, 377), `autumn`);
getSeason(new Date(866, 2, 10, 12, 53, 10, 825), 'spring');
// getSeason('foo', 'Invalid date!');
// getSeason({ John: 'Smith' }, 'Invalid date!');
// getSeason(20192701, 'Invalid date!');
// getSeason([2019, '27', 0 + '1'], 'Invalid date!');
// getSeason(() => new Date(), 'Invalid date!');
*/
/*
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((_, i) => {
    const arr = domains[i].split(`.`);
    let str = '';
    let len = arr.length - 1 <= 0 ? 0 : arr.length - 1;
    arr.forEach((_, j) => {
      str += `.${arr[len - j]}`;
      obj[str] ? (obj[str] += 1) : (obj[str] = 1);
    });
  });
  console.log(obj);
}

getDNSStats(['epam.com'], { '.com': 1, '.com.epam': 1 });
getDNSStats(['epam.com', 'info.epam.com'], {
  '.com': 2,
  '.com.epam': 2,
  '.com.epam.info': 1,
});
getDNSStats([], {});
*/
/*
const calculateHanoi = (disksNumber, turnsSpeed) => {
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor((turns / turnsSpeed) * 3600);
  // console.log(turns, seconds);
  return { turns: turns, seconds: seconds };
};

calculateHanoi(5, 4074, {
  turns: 31,
  seconds: 27,
});
calculateHanoi(38, 4594, {
  turns: 274877906943,
  seconds: 215402800390,
});
calculateHanoi(34, 4005, {
  turns: 17179869183,
  seconds: 15442579040,
});
calculateHanoi(19, 4770, {
  turns: 524287,
  seconds: 395688,
});

*/
