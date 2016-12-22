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
  if (isNaN(numRows)) { throw new Error('Input must be a number.') }
  if (numRows === 0) { return []; }
  const answer = [[1]];
  let temp = [];
  let count = 1;

  while (count < numRows) {
    let lastRow = answer[answer.length - 1];
    for (let i = 0; i <= count; i++) {
      if (i === 0 || i === count) {
        temp[i] = 1;
      }
      else {
        temp[i] = lastRow[i] + lastRow[i - 1];
      }
    }
  answer.push(temp);
  temp = [];
  count += 1;
  }
  return answer;
}

// console.log(pascalTriangle(6))

module.exports = pascalTriangle;

// Recursive solution

// function pascalTriangle2(n, triangle) {
//   if (!n || n < 1) return [];
//   triangle = triangle || [[1]];

//   if (n === 1) return triangle;

// let row = [1];
// let prevRow = triangle[triangle.length - 1];

// for (let i = 1; i < prevRow.length; i++) {
//   row.push(prevRow[i] + prevRow[i - 1]);
// }
// row.push(1);
// triangle.push(row);
// return pascalTriangle2(n - 1, triangle);
// }
