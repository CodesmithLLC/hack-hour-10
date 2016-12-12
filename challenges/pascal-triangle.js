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
  let arr = [[1]];
  if (numRows === 1) return arr;
  function addRows(numRows, arr) {
    let length = arr.length;
    arr[length] = [];
    for (let i = 0; i <= length; ++i) {
      if (arr[length - 1][i - 1] === undefined) arr[length].push(arr[length - 1][i]);
      else if (arr[length - 1][i] === undefined) arr[length].push(arr[length - 1][i - 1]);
      else arr[length].push(arr[length - 1][i] + arr[length - 1][i - 1]);
    }
    if (length + 1 === numRows) return arr;
    return addRows(numRows, arr);
  }
  return addRows(numRows, arr);
}

module.exports = pascalTriangle;
