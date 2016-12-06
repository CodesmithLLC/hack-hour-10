/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
 function uniqueNumber(array) {
 /*  let stor = {};
   for (let i = 0; i < array.length; i++){
   	if(!stor[array[i]]) stor[array[i]] = 1;
     else stor[array[i]]++;
   }
   for (let prop in stor) {
   	if(stor[prop] === 1) return prop
   }
   return undefined;*/

   var result = 0, n = array.length;

   for (var i = 0; i < n; i++) {
     result ^= array[i];
   }

   return result;

 }

module.exports = uniqueNumber;
