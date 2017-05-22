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
  const result = [];
  result[0] = [1];
  result[1] = [1, 1];
  for (let row = 2; row < numRows; row += 1) {
    result[row] = [1];
    for (let col = 1; col <= row - 1; col += 1) {
      result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
      result[row].push(1);
    }
  }
  console.log(result);
  return result;
}
pascalTriangle(6)
module.exports = pascalTriangle;
