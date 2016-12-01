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
  return parseInt(Object.keys(array.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 1;
    else delete acc[curr];
    return acc;
  }, {}))[0]);
}

module.exports = uniqueNumber;
