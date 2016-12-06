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

function xcircleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let {minX, maxX, minY, maxY} = getMinsMaxes(x,y,r);
  function tytusCheckPath(x, y, r, curr_x, curr_y, end_x, end_y){
    //check if he is in a new county
    //if he is, remove that county and recurse
    // else recurse
    if(x < minX || x > minX || y < minY || y > maxY){
      return 0;
    }else{
      for(let i = 0; i < x.length; ++i){

      }
    }
  }
}

function getMinsMaxes(x,y,r){
  return {
    maxX : x.reduce((acc, curr) => {
      return Math.max(acc, curr+r);
    }, -Infinity),
    minX : x.reduce((acc, curr) => {
      return Math.min(acc, curr-r);
    }, Infinity),
    maxY : y.reduce((acc, curr) => {
      return Math.max(acc, curr+r);
    }, -Infinity),
    minY : y.reduce((acc, curr) => {
      return Math.min(acc,curr-r)
    }, Infinity)
  }
}


function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let counties = [];
  return x.reduce((acc, curr, idx) => {
    let currResult = (inCounty(start_x, start_y, x[idx], y[idx], r[idx]) ? 1 : 0);
      //console.log(`first reduce result: ${currResult}`);
    if(currResult){
      //console.log(`first reduce in a county: ${currResult}`);
      counties.push([x[idx],y[idx],r[idx]]);
    }
    return acc + currResult;
  }, 0) + x.reduce((acc, curr, idx) => {
    return acc + (inCounty(end_x, end_y, x[idx], y[idx], r[idx]) && !alreadySeen(x[idx],y[idx],r[idx], counties) ? 1 : 0);
  }, 0);
}
function inCounty(x, y, countyX, countyY, countyR){
  //console.log(`incounty: ${Math.pow(x-countyX), 2 } + ${Math.pow(y-countyY,2)} < ${countyR}`)
  return countyR > Math.sqrt(Math.pow(x-countyX, 2) + Math.pow(y-countyY,2));
}
function alreadySeen(x,y,r, counties){
  return counties.reduce((acc,curr) =>{
    if(curr[0] === x, curr[1] === y, curr[2] === r){
      return true;
    }
    return acc;
  }, false);
}

// console.log(circleCountry([0,0,20,22], [0,0,20,22], [2,3,1,4], 0,0,20,20));
//
module.exports = circleCountry;
