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
  console.log(`pascalTriangle: ${numRows}`);
  if(numRows <= 2){
    return numRows === 0 ? [] : numRows === 1 ? [[1]] : [[1], [1, 1]]; 
  }
  let results = [[1], [1,1]];
  while(results.length < numRows){
    let currResult = [];
    for( let i = 1; i < results[results.length-1].length; ++i){
      currResult.push(results[results.length-1][i] + results[results.length-1][i-1]);
    }
    results.push([1,...currResult, 1]);
  }
  return results;
}
for(let i = 0; i < 13; ++i){
  console.log(`${i} ========================================================`);
  console.log(pascalTriangle(i));
}

module.exports = pascalTriangle;
