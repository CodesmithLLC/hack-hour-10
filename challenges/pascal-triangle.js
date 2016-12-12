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
  let triangle = [[1]];
  let row;
  for (let i = 0; i < numRows - 1; i++) {
    row = [1];
    for (let k = 1; k < triangle[i].length; k++) {
      console.log(triangle[i][k], triangle[i][k - 1])
      row[k] = triangle[i][k] + triangle[i][k - 1];
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
}

module.exports = pascalTriangle;
