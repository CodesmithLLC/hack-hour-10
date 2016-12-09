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
  if(!x || x.length < 4) return 0;
  count = 0;
  x.forEach((ele, ind, arr) => {
    if(!arr.slice(ind + 1).includes(ele)) return;
    let ind2 = arr.slice(ind + 1).indexOf(ele);
    let ele2 = x[ind2];
    let max = MATH.max(y[ind], y[ind2]);
    let min = MATH.min(y[ind], y[ind2]);
    y.forEach((yele, yind, yarr) => {
      if(yind === ind || yind === ind2) return;
      if(!arr.slice(yind + 1).includes(yele)) return;
      let yind2 = arr.slice(yind + 1).indexOf(yele);
      if(yind2 === ind || yind2 === ind2) return;
      let yele2 = y[yind2];
      let ymax = MATH.max(x[yind], x[yind2]);
      let ymin = MATH.min(x[yind], x[yind2]);
      if(max > yele && max > yele2 && min < yele && min < yele2 && ymax > ele && ymax > ele2 && ymin < ele && ymin < ele2) count++;
    });
  });
  return count;
}

module.exports = newIntersections;
