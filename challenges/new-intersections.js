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
  let decimal = true
  while (decimal) {
    x = x.map(e => e * 10)
    y = y.map(e => e * 10)
    if (!x.some(e => e % 1 !== 0) && !y.some(e => e % 1 !== 0)) decimal = false
  }
  const minX = Math.min(...x)
  const maxX = Math.max(...x)
  const minY = Math.min(...y)
  const maxY = Math.max(...y)
  const oldPoints = {}
  const allPoints = {}
  // Filling in objects
  x.forEach((c, i) => oldPoints[`${c},${y[i]}`] = true)
  for (let xx = minX; xx <= maxX; xx++) {
    for (let yy = minY; yy <= maxY; yy++) {
      allPoints[`${xx},${yy}`] = true
    }
  }
  // Deleting
  for (let xx = minX; xx <= maxX; xx++) {
    for (let yy = minY; yy <= maxY; yy++) {
      delete allPoints[`${xx},${yy}`]
      if (`${xx},${yy}` in oldPoints) break
    }
    for (let yy = maxY; yy >= minY; yy--) {
      delete allPoints[`${xx},${yy}`]
      if (`${xx},${yy}` in oldPoints) break
    }
  }
  for (let yy = minY; yy <= maxY; yy++) {
    for (let xx = minX; xx <= maxX; xx++) {
      delete allPoints[`${xx},${yy}`]
      if (`${xx},${yy}` in oldPoints) break
    }
    for (let xx = maxX; xx >= minX; xx--) {
      delete allPoints[`${xx},${yy}`]
      if (`${xx},${yy}` in oldPoints) break
    }
  }
  // Return number of points left
  return Object.keys(allPoints).filter(e => oldPoints[e] === undefined).length
}

module.exports = newIntersections;