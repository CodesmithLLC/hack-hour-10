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
  const xSorted = x.sorted()
  const ySorted = y.sorted()
  const minX = Math.min(...x)
  const maxX = Math.max(...x)
  const minY = Math.min(...y)
  const maxY = Math.max(...y)
  const oldPoints = {}
  const allPoints = {}
  // Filling in objects
  x.forEach((c, i) => oldPoints[`${c},${y[i]}`] = true)
  for (let xx = 0; xx < xSorted.length; xx++) {
    for (let yy = 0; yy < ySorted.length; yy++) {
      allPoints[`${xSorted[xx]},${ySorted[yy]}`] = true
    }
  }
  // Deleting
  for (let xx = 0; xx < xSorted.length; xx++) {
    for (let yy = 0; yy < ySorted.length; yy++) {
      delete allPoints[`${xSorted[xx]},${ySorted[yy]}`]
      if (`${xx},${yy}` in oldPoints) break
    }
  }
  for (let xx = 0; xx < xSorted.length; xx++) {
    for (let yy = ySorted.length - 1; yy >= 0; yy--) {
      delete allPoints[`${xSorted[xx]},${ySorted[yy]}`]
      if (`${xx},${yy}` in oldPoints) break
    }
  }
  for (let yy = 0; yy < ySorted.length; yy++) {
    for (let xx = 0; xx < xSorted.length; xx++) {
      delete allPoints[`${xSorted[xx]},${ySorted[yy]}`]
      if (`${xx},${yy}` in oldPoints) break
    }
  }
  for (let yy = 0; yy < ySorted.length; yy++) {
    for (let xx = xSorted.length - 1; xx >= 0; xx--) {
      delete allPoints[`${xSorted[xx]},${ySorted[yy]}`]
      if (`${xx},${yy}` in oldPoints) break
    }
  }
  // Return number of points left
  return Object.keys(allPoints).length
}

module.exports = newIntersections;
