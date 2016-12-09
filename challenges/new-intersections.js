
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
  let count = 0;
  let store = {};
  for (let i = 0; i < x.length; i++) {
    let currentPoint = [x[i], y[i]];
    store[currentPoint] = currentPoint
  }

 //want to loop through the store and add above, below, left, right to the key   
  for (let key in store) {
    if (oldX < oldY && newY < oldY) //add above to store
    if (oldX > oldY && newY < oldY)  //add below to store
    if (oldX > newX) //add left to store
    if (oldX < newX) //add right to store
  }

  //run a final loop through the store, if it has all increment count
  //return count

   }



  //loop through the store and if they have all of the above, increment count;
  //return count      




}

module.exports = newIntersections;