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
  console.log('x array', x);
  console.log('y array', y);
  let xs = {};
  let ys = {};
  let points = x.length;
  if(points < 4) return 0;
  for(let i = 0; i < points; i++) {
    if(xs[x[i]] === undefined) xs[x[i]] = 1;
    else xs[x[i]] += 1;
    if(ys[y[i]] === undefined) ys[y[i]] = 1;
    else ys[y[i]] += 1;
  }
  console.log(xs, ys)

  let xcount = 0;
  let ycount = 0;
  for(let coord in xs) {
    if(xs[coord] > 1) xcount++;
  }
  for(let coord in ys) {
    if(ys[coord] > 1) ycount++;
  }

  console.log(xcount * ycount);
  return xcount * ycount;
}

// let myX = [1, 2, 2, 3, 3, 4, 4];
// let myY = [3, 2, 5, 1, 4, 2, 3];

// newIntersections(myX, myY);




module.exports = newIntersections;
