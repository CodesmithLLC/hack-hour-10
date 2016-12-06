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

//area = pi*r*r
//distance = sqrt((x2-x1)^2+(y2-y1)^2)

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  tyusDist = distance(start_x, start_y, end_x, end_y);
  areas = [];

  for (let i = 0; i < r.length; i++) {
    areas.push(Math.round(Math.PI * r[i] * r[i]));
  }

  console.log(`tyusDist: ${tyusDist}\n   areas: [ ${areas} ]`);
}

function distance(start_x, start_y, end_x, end_y) {
  return Math.sqrt(Math.pow(end_x - start_x, 2) + Math.pow(end_y - start_y, 2));
}

circleCountry([0, 0], [0, 0], [2, 3], 0, 0, 4, 0);

module.exports = circleCountry;
