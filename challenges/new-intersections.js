/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points directly above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 * 	 
 */

function newIntersections(x, y) {
  const obj = {}
  x.forEach((c, i) => obj[`${c},${y[i]}`] = true)
  return x.reduce((a, c, i, s) => {
    return obj[`${c + 1},${y[i]}`] === undefined &&
      obj[`${c + 2},${y[i]}`] === true &&
      obj[`${c + 1},${y[i] + 1}`] === true &&
      obj[`${c + 1},${y[i] - 1}`] === true
      ? ++a
      : a
  }, 0)
}

module.exports = newIntersections;
