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

function pascalTriangle(numRows) { return numRows === 1 ? [[1]] : pascalTriangle(numRows - 1).push(pascalTriangle(numRows - 1)[pascalTriangle(numRows - 1).length - 1].reduce((a, c, i, s) => a.concat(i === s.length - 1 ? 1 : c + s[i + 1]), [1])) }

module.exports = pascalTriangle;
