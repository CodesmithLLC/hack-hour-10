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
  // If input is not integer OR integer is less than 1, inform user
  if (!Number.isInteger(numRows) || numRows < 1) return 'Please insert positive integer';

  // Build triangle starting with first row completed
  const triangle = [[1]];

  // if numRows > 1, loop to build up future rows. Index controls stopping point of inner loop.
  for (let i = 1; i < numRows; i++) {
    const currentRow = [];

    // Build each row
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) currentRow.push(1);
      else {
        // Need access to previous row for element lookups
        const previousRow = triangle[triangle.length - 1];

        // Apply pascal logic to add values from previous row at same index and index - 1
        const sum = previousRow[j] + previousRow[j - 1];

        // Push sum to current row
        currentRow.push(sum);
      }
    }

    // When finished making current row, push to triangle
    triangle.push(currentRow);
  }

  // Return triangle after all rows added
  return triangle;
}

// MATH SOLUTION GREAT IF JUST NEED NTH ROW
// function pascalTriangle(numRows) {
//   const memo = {};
//   function factorial(num) {
//     if (num === 0) return 1;
//     return memo.hasOwnProperty(num) ? memo[num] : memo[num] = num * factorial(num - 1);
//   }

//   const triangle = [];

//   function generatePascal(rowNumber) {
//     if (rowNumber < 0) return;
//     let k = 0;
//     const row = [];
//     while (rowNumber >= k) {
//       const numerator = factorial(rowNumber);
//       const denominator = factorial(rowNumber - k) * factorial(k);
//       row.push(numerator / denominator);
//       k += 1;
//     }

//     triangle.push(row);
//     generatePascal(rowNumber - 1);
//   }

//   generatePascal(numRows - 1);
//   return triangle.reverse();
// }

module.exports = pascalTriangle;

console.log(pascalTriangle(6));
console.log(pascalTriangle(- 1));
console.log(pascalTriangle(NaN));
console.log(pascalTriangle('not a number'));
