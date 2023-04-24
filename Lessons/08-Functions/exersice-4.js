'use strict';
/*

function towelSort(matrix) {
  console.log(matrix);
  if (matrix === undefined) {
    return [];
  }
  let arr = [];
  let arrPart;

  for (let i = 0; i < matrix.length; i++) {
    arrPart = matrix[i];
    if (i % 2 === 0) {
      arr = arr.concat(arrPart);
    } else {
      for (let y = arrPart.length - 1; y >= 0; y--) {
        arr.push(arrPart[y]);
      }
    }
  }
  return arr;
}

console.log(towelSort());
// /*
towelSort([
  [1, 2],
  [3, 4],
]);
towelSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
towelSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
towelSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
towelSort([
  [1, 2, 3],
  [4, 5, 6],
]);
towelSort([
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
]);
*/
