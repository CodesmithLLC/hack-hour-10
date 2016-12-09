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
  let len = x.length;
  const xx = {};
  const yy = {};
  let xPairs = 0;
  let yPairs = 0;
  let newPoints = 0;
  x.forEach(xCoord => {
    if (!(xCoord in xx)) xx[xCoord] = 1;
    else xx[xCoord] += 1;
  })
  y.forEach(yCoord => {
    if (!(yCoord in yy)) yy[yCoord] = 1;
    else yy[yCoord] += 1;
  })
  Object.keys(xx).forEach(x => {
    if (xx[x] > 1) xPairs += (x - 1);
  })
  Object.keys(yy).forEach(y => {
    if (yy[y] > 1) yPairs += (y - 1);
  })
  return xPairs * yPairs;
}

module.exports = newIntersections;
