`use strict`;
/*
// FILLNG RETURNING FIELD
function checker(trix, i, j) {
  const arr = Array.from(Array(3), () => Array.from(Array(3), () => 0));
  for (let x = 0; x <= 2; x++) {
    for (let y = 0; y <= 2; y++) {
      trix[i + x][j + y] === 1 && (arr[x][y] = 1);
    }
  }
  return arr.flat().reduce((a, c) => a + c);
}

function minesweeper(matrix, x) {
  // LARGE FIELD
  const trix = Array.from(Array(matrix.length + 2), () =>
    Array.from(Array(matrix[0].length + 2), () => 0)
  );
  // RETURN FIELD
  const res = Array.from(Array(matrix.length), () =>
    Array.from(Array(matrix[0].length), () => 0)
  );
  // FILLING LARGE FIELD
  matrix.forEach((_, i) => {
    matrix[i].forEach((_, j) => {
      matrix[i][j] === true && (trix[i + 1][j + 1] = 1);
    });
  });
  // CHECKING THE AREA (3*3)
  matrix.forEach((_, i) => {
    matrix[i].forEach((_, j) => {
      res[i][j] = checker(trix, i, j);
    });
  });
  // EDIT RETURN FIELD
  matrix.forEach((_, i) => {
    matrix[i].forEach((_, j) => {
      matrix[i][j] === true && (res[i][j] = 1);
    });
  });
  // const res = checker(trix);
  console.log(matrix, trix, res, x);
  return res;
}

minesweeper(
  [
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ],
  [
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1],
  ]
);

minesweeper(
  [
    [false, false, false],
    [false, false, false],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ]
);
*/
