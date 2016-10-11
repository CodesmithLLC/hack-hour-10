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
   // Validate input
   if (!Array.isArray(array)) return 'input must be an array';
   if (!array.length) return false;

   // Compute mean and mode
   const count = {};
   const mean = Math.floor(array.reduce((a, b) => a + b) / array.length);
   array.forEach(item => count[item] = ++count[item] || 1);
   const mode = Object.keys(count).reduce((max, cur) => count[max] <= count[cur] ? cur : max);

   // Compare mean and mode; return boolean
   return mean === Number(mode);
 }

module.exports = modemean;
