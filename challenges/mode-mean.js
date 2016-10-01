/* * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *     - Math.floor the mean
 *     - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    const modeCache = {};
    const mean = Math.floor(array.reduce((accum, item, i) => {
    	if(modeCache[array[i]]) modeCache[array[i]]++;
    	else modeCache[array[i]] = 1;

    	return accum + item;
    }, 0)/array.length);

    // find mode
    const mode = Object.keys(modeCache).reduce((a,b) => {
        if(modeCache[a] > modeCache[b]) return +a;
        if(modeCache[a] < modeCache[b]) return +b;
        return Math.max(a, b);
    });

   return mode===mean;
}

module.exports = modemean;
