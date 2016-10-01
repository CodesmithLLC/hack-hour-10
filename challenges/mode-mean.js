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
   let mean = Math.floor(array.reduce((p, c) => p + c, 0)/array.length);
   let modeCheck = {};
   let mode;
   array.forEach(ele=> {
   	if(modeCheck.hasOwnProperty(ele)) modeCheck[ele]+=1;
   	else modeCheck[ele] = 1;
   });
   for(let key in modeCheck) {
    if(mode === undefined) mode = key;
    if(modeCheck[key] > modeCheck[mode]) mode = modeCheck[key];
  }
  return mode === mean;
}

module.exports = modemean;
