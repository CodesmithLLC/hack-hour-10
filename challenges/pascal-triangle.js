/**
 * Construct Pascal's Triangle up to n rows deep, where
 * each row is represented by an array of numbers.
 *
 * O(n^2) time and space complexity
 *
 * @param {number} n
 * @return {Array[]}
 */
function pascalTriangle(numRows) {
  const t = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j <= i; j++)
      (j === 0 || j === i) ?
        row.push(1) : row.push(t[i - 1][j - 1] + t[i - 1][j])
    t.push(row)
  }
  return t
}

module.exports = pascalTriangle;
