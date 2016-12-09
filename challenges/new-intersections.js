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
  let greatestX, smallestX, greatestY, smallestY;
  for (let i = 0; i < x.length; i++) {
    if (x[i] < smallestX || smallestX === undefined) smallestX = x[i]
    if (x[i] > greatestX || greatestX === undefined) greatestX = x[i]
  }
  for (let i = 0; i < y.length; i++) {
    if (y[i] < smallestY || smallestY === undefined) smallestY = y[i]
    if (y[i] > greatestY || greatestY === undefined) greatestY = y[i]
  }
  const differenceX = (greatestX - smallestX) - x.length - 1;
  const differenceY = (greatestY - smallestY) - y.length - 1;

  return differenceX + differenceY;
}

console.log(newIntersections([1,2,5,8,9,20,5,7,], [10,20,50,40,9,20,15,7,]))
module.exports = newIntersections;
