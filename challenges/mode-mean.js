/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *     - Math.floor the mean
 *     - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {

  if (array.length === 0) return;

  function mode(array) {
    const obj = {};
    array.forEach(function(el) {
      if (obj[el]) {
        obj[el]++;
      } else {
        obj[el] = 1;
      }
    });
    let max = 0;
    let maxKey = 0;
    for (let key in obj) {
      if (obj[key] > max) {
        max = obj[key];
        maxKey = key;
      }
      if (obj[key] === max) {
        if (key > maxKey) {
          max = obj[key];
          maxKey = key;
        }
      }
    }
    return maxKey;
  }

  function mean(array) {
    let sum = array.reduce(function(acc, cur) {
     return acc += cur;
    });
    return Math.floor(sum/(array.length));
  }

  let modeRes = mode(array);
  let meanRes = mean(array);

  return (modeRes == meanRes) ;

}

module.exports = modemean;