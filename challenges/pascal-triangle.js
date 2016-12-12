/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let output = [[1], [1, 1]];
  let row;
  if (!numRows || typeof numRows !== "number") return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return output;

  for (let i = 2; i < numRows; ++i) {
    row = new Array(i + 1);
    for (let j = 0; j < row.length; j++) {
      if (j === 0 || j === row.length - 1) row[j] = 1;
      else row[j] = output[i - 1][j - 1] + output[i - 1][j];
    }
    output.push(row);
  }
  return output;
}

module.exports = pascalTriangle;
