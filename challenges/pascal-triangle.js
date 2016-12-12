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

  if(numRows < 1) return [];
  let triangle = [[1]];
  let curRow = [[1]];

  for(let i = 1; i < numRows; i++) {
    let row = [];
    console.log('current row: ', curRow);

    for(let j = 0; j <= curRow.length; j++) {
      let left = curRow[j - 1] ? curRow[j - 1] : 0;
      let right = curRow[j] ? curRow[j] : 0;
      row.push(Number(left) + Number(right));
    }

    triangle.push(row);
    curRow = row;

  }

  return triangle;

}

module.exports = pascalTriangle;
