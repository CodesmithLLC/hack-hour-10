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
  const memo = {}
  function recurse(n) {
    if (n in memo) return memo[n]
    if (n === 1) return [[1]]
    const lastOne = pascalTriangle(n - 1)
    let thisOne = lastOne[lastOne.length - 1]
    thisOne = thisOne.reduce((a, c, i, s) => a.concat(i === s.length - 1 ? 1 : c + s[i + 1]), [1])
    lastOne.push(thisOne)
    return memo[n] = lastOne
  }
  return recurse(numRows)
}

module.exports = pascalTriangle;
å
