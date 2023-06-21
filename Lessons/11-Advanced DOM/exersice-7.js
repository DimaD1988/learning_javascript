`use strict`;
/*
function deleteDigit(n) {
  const arr = [];
  for (let i = 0; i < String(n).length; i++) {
    arr.push(+`${String(n).slice(0, i)}${String(n).slice(i + 1)}`);
  }
  arr.sort((a, b) => b - a);
  console.log(arr[0]);
  return arr[0];
  console.log(
    n,
    String(n).length,
    arr.sort((a, b) => b - a)
  );
}
deleteDigit(152); //, 52);
deleteDigit(1001); //, 101);
deleteDigit(10); //, 1);
deleteDigit(222219); //, 22229);
deleteDigit(109); //, 19);
deleteDigit(342); //, 42);
function getMatrixElementsSum(matrix) {
  let acc = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== 0) {
        matrix[i - 1][j] !== 0 && (acc += matrix[i][j]);
      } else {
        acc += matrix[i][j];
      }
    }
  }
  console.log(acc);
  // return acc;
}

getMatrixElementsSum(
  [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ],
  9
  );
  getMatrixElementsSum(
    [
      [1, 2, 3, 4],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ],
    15
    );
    getMatrixElementsSum(
  [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ],
  18
  );
  getMatrixElementsSum([[0]], 0);
  getMatrixElementsSum([[1], [5], [0], [2]], 6);
  
  function encodeLine(str) {
    let counter = 1;
    let nStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
      nStr += counter !== 1 ? `${counter}${str[i]}` : str[i];
      counter = 1;
    } else {
      counter++;
    }
  }
  return nStr;
}
encodeLine('aaaatttt', '4a4t'); // '4a4t');
encodeLine('aabbccc', '2a2b3c'); // '2a2b3c');
encodeLine('abbcca', 'a2b2ca'); // 'a2b2ca');
encodeLine('xyz', 'xyz'); // 'xyz');
encodeLine('', ''); // '');

const calculateDepth = (arr, x) => {
  if (typeof arr !== `object`) console.log(0, x);
  if (typeof arr !== `object`) return 0;
  let counter = 1;
  let flag = 1;
  while (flag === 1) {
    flag = 0;
    const newArr = arr.flat(counter);
    arr.flat(counter).forEach((_, i) => {
      typeof newArr[i] === `object` && counter++ && (flag = 1);
    });
  }
  if (arr.length !== 0) counter++;
  console.log(counter, x);
  return counter;
};

calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]], 8);
calculateDepth([], 1);
calculateDepth(12, 0);
calculateDepth([[[[[[[[[[]]]]]]]]]], 10);
calculateDepth([[]], 2);
calculateDepth(
  [
    1,
    [8, [[]]],
    [
      [
        [
          [
            [
              [
                [
                  [
                    [
                      [[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]],
                      [],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    2,
    3,
    [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
    [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
    4,
    5,
    ['6575', ['adas', ['dfg', [0]]]],
  ],
  31
  ); // 31
  
  calculateDepth([1, 2, 3, 4, 5, [1]], 2); // 2);
  calculateDepth(
    [1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]],
    5
    ); //
    
    calculateDepth([1, 2, 3, [8, [2]], 4, 5, []], 3);
calculateDepth([1, 2, 3, [1], 4, 5, [1]], 2);
calculateDepth(
  [
    1,
    [8, [[]]],
    2,
    3,
    [8, [[[[[[[[[[[[[]]]]]]]]]]]]]],
    [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
    4,
    5,
    ['6575', ['adas', ['dfg', [0]]]],
  ],
  25
  );
  calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []], 4);
  calculateDepth(
    [
      1,
      [8, [[]]],
      2,
      3,
      [8, [[[[[[[[[[[[[]]]]]]]]]]]]]],
    4,
    5,
    ['6575', ['adas', ['dfg', [0]]]],
  ],
  15
  );
  
  */
