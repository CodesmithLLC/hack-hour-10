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
   const mode = (function(array) {
     const storage = {};
     array.forEach(function(item){
       if (!storage[item]) storage[item] = 1;
       else storage[item] += 1;
     });

     const arr = Object.keys(storage).map((key) => storage[key]);
     const max = Math.max.apply(null, arr);
     return max;
   }(array));

   const sum = array.reduce((prev, next) => prev + next);

   const mean = sum / array.length;

   return (mode === mean) ? true : false
 }
  (mode === mean) ? true : false;
}


//APPROACH LECTURE
function modemean(array) {
  
}




module.exports = modemean;

//tests
// modemean([3,3,3,4]); => returns false;
// modemean([3,3,3,4]); => returns true;
