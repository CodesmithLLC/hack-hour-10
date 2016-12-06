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

const circleCountry = (x, y, r, start_x, start_y, end_x, end_y) => {

  let count = 0;
  let m = (end_y - start_y) / (end_x - start_x);
  let b = end_y - (m * end_x);

  function calcCircle(h, k, r) {
    return Math.sqrt(Math.pow(r, 2) - Math.pow(0, 2)) + k;
  }


  x.forEach((num, i) => {
    console.log(calcCircle(x[i], y[i], r[i]));
    console.log(object);
  });

  // return count;
}

// (x - s_x)^2 + (y - s_y)^2 = r^2;
// y = mx + b;

let x = [0, 0];
let y = [0, 0];
let r = [2, 3];
let start_x = 0;
let start_y = 0;
let end_x = 4;
let end_y = 4;
// should return '2'

console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y));

module.exports = circleCountry;
