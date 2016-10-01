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
  function findMean() {
    return Math.floor(array.reduce((sum, num) => {
      return sum += num; 
    }, 0) / array.length);
  }


  function findMode(array) {
    let count = {};
    let max = 0;
    let result = 0;
 
    array.forEach(function(num, ind){
      if(!count[num]) {
        var counter = 1;
        for(var i = ind + 1; i < array.length; i++) {
          if(num === array[i]) { counter++; }
        }
        count[num] = counter;
      }
    })
 
    for(let key in count) {
      if(max < count[key]) {
       max = count[key];
       result = parseInt(key);
      }  
    }
 
    return result
  }
  
  return findMode(array) === findMean(array);
}

module.exports = modemean;