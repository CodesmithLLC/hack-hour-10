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
function districtsEncompassingPoint(x, y, r, pointX, pointY) {
  const districts = [];
  x.forEach((xCoord, index) => {
    const distanceFromCircleCenter = Math.sqrt(Math.pow(pointX - x[index], 2)
      + Math.pow(pointY - y[index], 2));
    if (distanceFromCircleCenter < r[index]) districts.push(index);
  });
  return districts;
}
function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  const startDistricts = districtsEncompassingPoint(x, y, r, start_x, start_y);
  const endDistricts = districtsEncompassingPoint(x, y, r, end_x, end_y);
  // console.log(`start ${start_x}, ${start_y} is within districts ${startDistricts}`);
  // console.log(`end ${end_x}, ${end_y} is within districts ${endDistricts}`);
  const allDistricts = [];
  startDistricts.forEach(district => {
    if (!endDistricts.includes(district)) allDistricts.push(district);
  });
  endDistricts.forEach(district => {
    if (!startDistricts.includes(district)) allDistricts.push(district);
  });
  // console.log('unique borders crossed: ', allDistricts);
  return allDistricts.length;
}

module.exports = circleCountry;

// testing
//
// const x = [50, 50, 40, 60];
// const y = [50, 40, 40, 40];
// const r = [50, 30, 5, 5];
//
// console.log(circleCountry(x, y, r, 50, 90, 40, 40));
// console.log(circleCountry(x, y, r, 50, 90, 60, 40));
// console.log(circleCountry(x, y, r, 50, 90, 50, 50));
