"use strict"
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
    if (Array.isArray(array) && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          if (typeof array[i] !== 'number') {
            return NaN;
          }
        }
        if (array.length === 1) {return true;}       
        const len = array.length;
        const frequency = {};
        const mode = {};
        const mean = Math.floor(array.reduce(function (a, b) {
            if (!frequency[b]) {
              frequency[b] = 0;
            }
            frequency[b]++;
            if (!mode[frequency[b]]) {
              mode[frequency[b]] = [];
            }
            mode[frequency[b]].push(b);
            return a + b/len;
        }, 0));

      const modeKeys = Object.keys(mode);
      const maxKeyArray = mode[Math.max(...modeKeys)];
      console.log(Math.max(...maxKeyArray), mean);
      return Math.max(...maxKeyArray) === mean;
    }
}

module.exports = modemean;

console.log(modemean([3,3,3,3,3])); //Should return true;
console.log(modemean([1,1,3,5,5])); //Should return false;
console.log(modemean([1,3,3,3,5])); //Should return true;
console.log(modemean([]));
console.log(modemean([7]));
console.log(modemean(['7']));