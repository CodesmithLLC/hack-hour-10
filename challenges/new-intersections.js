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
  const dupsX = determineDuplicates(x);
  const dupsY = determineDuplicates(y);
  console.log(dupsX, dupsY);

  for (let i = 0; i < x.length; ++i) {
    const cur = x[i];
    console.log(cur);
    if (dupsX.indexOf(cur) !== -1) {
      
    }
  }

}

function determineDuplicates(arr) {
  const obj = {};
  arr.forEach((val) => {
    if (obj[val] === undefined) {
      return obj[val] = 1;
    }
    obj[val] += 1;
  });
  return Object.keys(obj).map((val) => {
    return val * 1;
  }).filter((key) => {
    return obj[key] > 1;
  });
}

const oldXPts = [0, 1, 1, 2];
const oldYPts = [0, 1, 1, 2];

newIntersections(oldXPts, oldYPts);

module.exports = newIntersections;
