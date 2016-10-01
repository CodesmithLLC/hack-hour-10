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
   let mean;
   let sum = 0;
   let mode = 0;
   let modeCounter = 0;
   let obj = {};

   for (let i = 0; i < array.length; i++) {
     sum += array[i];
     if (!obj[array[i]]) {
       obj[array[i]] = 1
     } else {
       obj[array[i]] += 1
     }
     if (modeCounter < obj[array[i]]) {
       modeCounter = obj[array[i]];
       mode = array[i];
     }
   }
   mean = Math.floor(sum / array.length);
   return mean === mode;
 }

module.exports = modemean;
