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

function newIntersections(x, y){
  let verticalLines = {};
  let horizontalLines = {};
  let length = x.length;
  let totalNew = 0;

  for (let i = 0; i < length-1; ++i) {
    for (let j = i + 1; j < length; ++j) {
      if (x[i] === x[j]) {
        horizontalLines[x[i]] =  [y[i], y[j]].sort();
      }
      if (y[i] === y[j]) {
        verticalLines[y[i]] = true;
      }
    }
  }
  for (let key in horizontalLines) {
    for (let i = horizontalLines[key][0] + 1; i < horizontalLines[key][1]; ++i){
      if (verticalLines[i]) ++totalNew;
    }
  }
}

module.exports = newIntersections;
