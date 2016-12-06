/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  // How many circles is start in?
  const startInCircles = [];
  // How many circles is end in?
  const endInCircles = [];
  for(let i = 0; i < x.length; i++ ) {
    const xVal = x[i];
    const yVal = y[i];
    const rVal = r[i];
    if (pointInCircle(xVal, yVal, rVal, start_x, start_y)) {
      startInCircles.push('x' + xVal + 'y' + yVal + 'r' + rVal);
    }
    if (pointInCircle(x[i], y[i], r[i], end_x, end_y)) {
      endInCircles.push('x' + xVal + 'y' + yVal + 'r' + rVal);      
    }
  }
  // Do any of their circles overlap/shared?
  const sharedRegions = startInCircles.filter((v) => {
    return endInCircles.indexOf(v) >=0;
  });
  console.log(startInCircles);
  console.log(endInCircles);
  console.log(sharedRegions);
  return startInCircles.length + endInCircles.length - sharedRegions.length;
}

function pointInCircle (x, y, r, p_x, p_y) {
  const d = Math.sqrt((p_x - x)^2 + (p_y - y)^2);
  return d <= r;
}

const x = [1,1,1,100,100,100];
const y = [10, 10, 10, 10, 10, 10];
const r = [1, 2, 3, 1, 2, 3];

console.log(circleCountry(x, y, r, 1, 10, 100, 10));

module.exports = circleCountry;
