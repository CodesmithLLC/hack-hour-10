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
    let mean = Math.floor(array.reduce((acc, num) => acc + num) / array.length);
    let mode = parseInt(calcMode(array));
    
    function calcMode(array) {
        let max = 0;
        let maxArr = [];
        let modeMap = array.reduce((obj, curr) => {
            if(!obj[curr]) obj[curr] = 1;
            else obj[curr]++;
            return obj;
        }, {})

        for (let keys in modeMap) {
            if (modeMap[keys] > max) 
                max = modeMap[keys];
        }
        for (let keys in modeMap) {
            if (modeMap[keys] === max) 
                maxArr.push(keys);
        }
        return Math.max(...maxArr);
    }

    console.log('mean: ', mean, 'mode: ', mode);
    return mode === mean;
}


//console.log( modemean([0, 2, 9 , 4, -1, -1, 3, -20, 0]) );
module.exports = modemean;