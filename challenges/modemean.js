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
    let reverseSorted = array.sort().reverse();
    let modeMap = reverseSorted.map((e,i,arr) => {return arr.reduce((a,c) => {if (e === c) a++; return a;},0)});
    let highestMode = Math.max(...modeMap);
    let mode = reverseSorted[modeMap.indexOf(highestMode)];
    let mean = array.reduce((a,c) => a+c) / array.length;
    return mode === mean
}

module.exports = modemean;