/**
 * Given an array of duplicates and one unique number,
 * return the unique number.
 *
 * O(n) time and O(1) space
 *
 * @param {Array} array
 * @return {number}
 */
function uniqueNumber(array) {
  return array.reduce((bits, currNum) => bits ^ currNum, 0);
}

module.exports = uniqueNumber;
