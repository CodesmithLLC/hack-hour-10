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

  // Find the dimensions of the matrix

  const matrixMaxX = Math.max(...x)
  const matrixMaxY = Math.max(...y)
  const matrixMinX = Math.min(...x)
  const matrixMinY = Math.min(...y)
  let newPointsCount = 0;
  let checkPointsObj = {};

  // Iterate through the matrix and check for potential new points by looping through both input arrays

  for (let i = matrixMinX; i < matrixMaxX; i++) {
    for (let j = matrixMinY; j < matrixMaxY; j++) {

  // Check if the matrix includes an old point to the left the potential new point

      if (x.includes(i - 1) && x.indexOf(i - 1) === y.indexOf(j)) {
        checkPointsObj.left = true;
      }

  // Check if the matrix includes an old point above the potential new point

      if (y.includes(j - 1) && x.indexOf(i) === y.indexOf(j - 1)) {
        checkPointsObj.above = true;
      }

  // Check if the matrix includes an old point below the potential new point

      if (y.includes(j + 1) && x.indexOf(i) === y.indexOf(j - 1)) {
        checkPointsObj.below = true;
      }

  // Check if the matrix includes an old point to the right of the potential new point
  
      if (x.includes(i + 1) && x.indexOf(i - 1) === y.indexOf(j)) {
        checkPointsObj.right = true;
      }

  // Check the checkPointsObj to see if there are old points above, below, to the left, and the right of the potential new point

      if (Object.keys(checkPointsObj).length === 4) {
        newPointsCount += 1;
      }
      checkPointsObj = {};
    }
  }
  return newPointsCount;
}

// console.log(newIntersections([0,1,1,2], [1,0,2,1]))

module.exports = newIntersections;
