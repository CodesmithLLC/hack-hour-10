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
  const arr = [];
  for (let i = 1; i <= numRows; ++i) {
    if (i === 1) {
      arr.push([1]);
    } else if (i === 2) {
      arr.push([1,1]);
    } else {
      const newArr = [];
      const lastArr = arr[i-2];
      newArr.push(1);
      for(let j = 0; j < lastArr.length - 1; ++j) {
        newArr.push(lastArr[j] + lastArr[j +1]);
      }
      newArr.push(1);
      arr.push(newArr);
    }
  }
  return arr;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
