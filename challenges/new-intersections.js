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
  let sharedXs = x.reduce((acc, curr, idx) => {
    if(acc[curr] === undefined){
      acc[curr] = [idx];
      return acc;
    }
    acc[curr].push(curr);
  }, {});
  console.log(`sharedXs ${sharedXs}`);

  let sharedYs = x.reduce((acc, curr, idx) => {
    if(acc[curr] === undefined){
      acc[curr] = [idx];
      return acc;
    }
    acc[curr].push(curr);
  }, {});
  console.log(`sharedYs ${sharedYs}`);

  Object.keys(sharedXs).forEach(curr => {
    if(sharedXs[curr].length < 1){
      delete(sharedXs[curr]);
    }
  });
  console.log(`filtered sharedXs ${sharedXs}`);


}

module.exports = newIntersections;
