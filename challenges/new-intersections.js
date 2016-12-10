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
  let xs = {}, ys = {}, points = x.length;
  if(points < 4) return 0;
  for(let i = 0; i < points; i++) {
    if(xs[x[i]] === undefined) xs[x[i]] = 1;
    else xs[x[i]] += 1;
    if(ys[y[i]] === undefined) ys[y[i]] = 1;
    else ys[y[i]] += 1;
  }

 let xseg = {}, yseg = {};

 for(let i = 0; i < points; i++) {
   if(xs[x[i]] > 1 && xseg[x[i]] === undefined) xseg[x[i]] = {max: -Infinity, min: Infinity};
   if(xs[x[i]] > 1) {
     if(xseg[x[i]].max < y[i]) xseg[x[i]].max = y[i];
     if(xseg[x[i]].min > y[i]) xseg[x[i]].min = y[i]; 
   }

   if(ys[y[i]] > 1 && yseg[y[i]] === undefined) yseg[y[i]] = {max: -Infinity, min: Infinity};
   if(ys[y[i]] > 1) {
     if(yseg[y[i]].max < x[i]) yseg[y[i]].max = x[i];
     if(yseg[y[i]].min > x[i]) yseg[y[i]].min = x[i]; 
   }
 }
 let results = [];
 for(let xval in xseg) {
   for(let yval in yseg) {
     if(Number(xval) < yseg[yval].max && Number(xval) > yseg[yval].min && Number(yval) < xseg[xval].max && Number(yval) > xseg[xval].min) {
       results.push({'x': xval, 'y': yval});
     }
   }
 }
 results = results.filter( (ele) => {
   for(let i = 0; i < points; i++) {
     if(Number(ele.x) === x[i] && Number(ele.y) === y[i]) {
       return false;
     }
   }
   return true;
 })
//  console.log('x segments', xseg);
//  console.log('y segments', yseg);
//  console.log(results);
 return results.length;
}

// let myX = [1, 2, 2, 2, 3, 3, 4, 4];
// let myY = [3, 2, 3, 5, 1, 4, 2, 3];

// let myX = [1, 3, 2, 2];
// let myY = [2, 2, 1, 0];

// console.log(newIntersections(myX, myY));




module.exports = newIntersections;
