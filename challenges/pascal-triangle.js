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
  const triangle = [];
  for (let i = 1; i <= numRows; i++) {
    const row = [];
    if (i === 1) {
      triangle.push([1]);
      continue;
    }
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) row.push(1);
      else {
        const value = triangle[i - 2][j - 1] + triangle[i - 2][j];
        row.push(value);
      }
    }
    triangle.push(row);
  }
  return triangle;
}

module.exports = pascalTriangle;
