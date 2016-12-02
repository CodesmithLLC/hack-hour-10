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
  const count = array.reduce((countObj, id) => {
    countObj[id] = ++countObj[id] || 1;
    return countObj;
  }, {});
  // console.log('CountObj: ', count);
  return Object.keys(count).reduce((uniqueId, id) => {
    // console.log('uniqueId: ', uniqueId);
    if (count[id] === 1) return id;
    return uniqueId;
  }, false);
}

module.exports = uniqueNumber;

// testing
// console.log(uniqueNumber([1, 2, 3, 1, 3]));
// console.log(uniqueNumber([1, 2, 3, 1, 2]));
// console.log(uniqueNumber([1, 2, 2, 1, 3]));
// console.log(uniqueNumber([1, 2, 2, 3, 3]));
// console.log(uniqueNumber([1, 2, 3, 1, 3, 5, 5, 1, 4, 4, 7, 2]));
