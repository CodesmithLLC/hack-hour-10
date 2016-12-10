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
const uniq = (array) => array.filter((x, index) => !(array.indexOf(x) < index))

function newIntersections(x, y) {
  // zip points together
  const points = uniq(x.map((point, index) => [point, y[index]]))

  // created one copy sorted by x and one sorted by y
  const pointsByX = points.slice().sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const pointsByY = points.slice().sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

  const horizontalLines = getLines(pointsByY, 1);
  const verticalLines = getLines(pointsByX, 0);
  console.log(horizontalLines);
  console.log(verticalLines);

  return findIntersecitons(horizontalLines, verticalLines);
}


function findIntersecitons(horizontalLines, verticalLines) {
  let intersections = 0;
  return horizontalLines.reduce((sum, line, index) => {
    const vertY1 = verticalLines[index][0][1]
    const vertY2 = verticalLines[index][1][1]
    const vertX = verticalLines[index][1][0]
    const horizX1 = line[0][0]
    const horizX2 = line[1][0]
    const horizY = line[0][1]
    // console.log(horizY, vertY1, vertY2);
    if (horizY > vertY1 && horizY < vertY2 && vertX > horizX1 && vertX < horizX2) return sum + 1 ;
    return sum;
  }, 0)
}

function getLines(points, axis) {
  const lines = [];
  let currentLine = [points[0]];
  for (let i = 1; i < points.length; i++) {
    if (currentLine[0][axis] === points[i][axis]) currentLine[1] = points[i];
    else {
      if (currentLine.length === 2) (lines.push(currentLine), currentLine = [points[i]]);
      else currentLine = [points[i]];
    }
  }
  if (currentLine.length === 2) lines.push(currentLine)
  return lines;
}

// console.log(getLines([[0, 5], [0, 3], [1, 3], [1,5]], ));

console.log(newIntersections([3, 3, 1, 7], [0, 0, 5, 5]));


module.exports = newIntersections;
