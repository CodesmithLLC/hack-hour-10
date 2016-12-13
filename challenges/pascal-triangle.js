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

  let result = [];
  let num = 0;

  function recurse(num) {
    if (num === 0) {
      result.push([1]);
      return result;
    }
    if (num === 1) {
      result.push([1,1]);
      return result;
    }
    else {
      let newArr = [1];
      for (i=0; i<(result[num-1].length)-1; i++) {
        newArr.push(result[num-1][i] + result[num-1][i+1]);
      }
      result.push(newArr.concat([1]));
      return result;
    }
  }

  while (num < numRows) {
    recurse(num);
    num++;
  }

  return result;
}

module.exports = pascalTriangle;
