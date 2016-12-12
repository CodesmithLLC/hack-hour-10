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
  const pascal = [[1]];
  if (numRows === 1) return pascal;
  for (let i = 1; i <= numRows; i++) {
    const newRow = [];
    for (let j = 0; j <= i; j++) {
      const prevRow = pascal[i - 1];
      newRow[j] = (prevRow[j - 1] || 0) + (prevRow[j] || 0)
    }
    pascal[i] = newRow;
  }
  return pascal;
}

module.exports = pascalTriangle;
