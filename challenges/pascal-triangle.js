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
  for (let i = 0; i < numRows; ++i) {
    let subArr = [];
    console.log(i);
    if (i === 0) subArr.push(1);
    else {
      let prevArr = result[i - 1];
      for (let j = 0; j < prevArr.length; j++) {
        // console.log(prevArr[j - 1] + prevArr[j + 1]);
        subArr.push(prevArr[j - 1] + prevArr[j + 1])
      }
    }
    result.push(subArr);
    // console.log('subArr:', subArr);
    // console.log('result:', result);
  }

  return result;
}

// console.log(pascalTriangle(1));
// console.log(pascalTriangle(2));
// console.log(pascalTriangle(3));
// console.log(pascalTriangle(4));

module.exports = pascalTriangle;
