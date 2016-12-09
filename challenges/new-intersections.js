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

// should fail where old points exist at intersection
function newIntersections(x, y) {
  const length = x.length;
  if (length < 4) return 0;
  let xPairs = 0;
  let yPairs = 0;

  const xTable = x.reduce((table, num) => {
    table[num] ? table[num]++ : table[num] = 1;
    return table;
  }, {});

  const yTable = y.reduce((table, num) => {
    table[num] ? table[num]++ : table[num] = 1;
    return table;
  }, {});

  Object.keys(xTable).forEach(num => {
    if (xTable[num] > 1) xPairs++;
  });

  Object.keys(yTable).forEach(num => {
    if (yTable[num] > 1) yPairs++;
  });

  return xPairs * yPairs;
}

module.exports = newIntersections;

const x1 = [-6, -3, 0, 0, 1, 2, 2];
const y1 = [1, 6, -5, 3, 1, 6, 8];
console.log(newIntersections(x1, y1));