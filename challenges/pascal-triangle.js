/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]  //(row 0)

  pascalTriangle(2):
  [
    [1],  //(row 0)
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],  //(row 0)
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],   //(row 0)
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]

  //1 5 10 10 5 1
*/

// function pascalTriangle(numRows) {
//   let numberofrows;
//   let holdingArray = new Array(numRows);

//       holdingArray[0] = [1];
//       holdingArray[holdingArray.length-1] = [1];

//   for (let i = 1; i < holdingArray.length-2; i++) {
//     //every other value
//     if(holdingArray[i-1] === undefined) holdingArray[i-1] = 0;
//     if(holdingArray[i+1] === undefined) holdingArray[i+1] = 0;

//     holdingArray[i] = [ holdingArray[i-1] + holdingArray[i-1] ];
//   }
//   return holdingArray;
// }

function pascalTriangle(numRows){
  function range(numRows) {
    return Array.apply(null, Array(numRows)).map(function(_, i) {
      return i;
    });
  }

  return range(numRows - 1).reduce(function(accum, index) {
    accum.push(accum[index].reduce(function(accum, left, index, previousRow) {
        accum.push(left + (previousRow[index + 1] || 0));
        return accum;
      }, [1]));
  return accum;
}, [[1]]);
}

console.log(pascalTriangle(6));

// module.exports = pascalTriangle;
