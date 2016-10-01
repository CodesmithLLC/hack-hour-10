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
  const mean = Math.floor(array.reduce((accu, curr) => accu + curr) / array.length);
  const counts = {};

  // create store of counts for each element in the array
  array.forEach((element) => {
    if (counts[element] !== undefined) {
      counts[element] += 1;
    } else {
      counts[element] = 1;
    }
  });

  // sort the values by their counts
  sortedValues = Object.keys(counts).sort((a, b) => {
    return counts[b] - counts[a]
  });

  let modes = [sortedValues[0]];
  let i = 0;
  while (counts[sortedValues[0]] === counts[sortedValues[++i]]) {
    modes.push(sortedValues[i]);
  }

  modes = modes.sort((a,b) => {
    return b - a;
  });

  return Number(modes[0]) === mean;
}

module.exports = modemean;