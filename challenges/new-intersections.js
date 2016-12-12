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

const newIntersections = (x, y) => {
  let candidates = {};
  let toCompare = [];
  let count = 0;
  let length = x.length;

  for (let i = 0; i < length; i++) {
    let rightIndex = x.lastIndexOf(x[i])
    if (i !== rightIndex) {
      candidates[x[i]] = [Math.min(y[i], y[rightIndex]), Math.max(y[i], y[rightIndex])];
    }
  }

  for (let i = 0; i < length; i++) {
    let rightIndex = y.lastIndexOf(y[i]);
    if (i !== rightIndex && !toCompare.includes(y[i])) {
      toCompare.push(y[i]);
    }
  }

  toCompare.forEach(num => {
    for (let key in candidates) {
      if (num > candidates[key][0] && num < candidates[key][1]) {
        count++;
      }
    }
  })  
  

  


  return count;
}

const x = [1, 3, 3, 6, 1, 6, 2, -4];
const y = [3, 5, 1, 3, 1, 1, 4, 4];

console.log(newIntersections(x, y));

module.exports = newIntersections;
