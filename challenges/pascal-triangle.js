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

  if (numRows < 1) return [];
  
  // Need to reference the previous array
  for (let i = 1; i < numRows; i++) {
    const previousRow = pascal[i - 1];
    const newRow = [];
    for (let j = 0; j < previousRow.length + 1; j++) {
      const current = previousRow[j] || 0;
      const previous = previousRow[j - 1] || 0;
      newRow.push(current + previous);
    }
    pascal.push(newRow);
  }

  return pascal;
}

module.exports = pascalTriangle;
