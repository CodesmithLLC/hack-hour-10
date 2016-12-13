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
  if (numRows === 0) return [];
  const results = [[1]];
  for (let i = 1; i <= numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      const lastRow = results[results.length - 1];
      row.push(lastRow[j] + lastRow[j - 1]);
    }

    row.push(1);
    results.push(row);
  }

  return results;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;

// MATH SOLUTION GREAT IF JUST NEED NTH ROW
// function pascalTriangle(numRows) {
//   const memo = {};
//   function factorial(num) {
//     if (num === 0) return 1;
//     return num in memo ? memo[num] : memo[num] = num * factorial(num - 1);
//   }

//   const results = [];

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

//     results.push(row);
//     generatePascal(rowNumber - 1);
//   }

//   generatePascal(numRows - 1);
//   return results.reverse();
// }