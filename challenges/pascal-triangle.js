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

function pascalTriangle(n) {
  const pasc = [[1]];
  let row;
  if (n < 1 || typeof n !== 'number') return false;
  if (n === 1) return pasc;

  for (let i = 0; i < n - 1; i++) {
    row = [1];
    for (let j = 1; j < pasc[i].length; j++) {
      row[j] = pasc[i][j] + pasc[i][j - 1];
    }
    row.push(1);
    pasc.push(row);
  }

  return pasc;
}

console.log(pascalTriangle(4));

module.exports = pascalTriangle;