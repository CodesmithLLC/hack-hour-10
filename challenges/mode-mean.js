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
  // helper func to calc mean
  function mean(array) {
    let sum = array.reduce((acc, cur) => acc += cur);
    return Math.floor(sum/array.length);
  }
  // helper func to calc mode
  function mode(array) {
    const freq = {};
    return array.reduce((mode, num) => {
      // update freq table
      !freq[num] ? freq[num] = 1 : freq[num]++;

      // if first elem, set curr num to mode and set mode freq to 1
      if (!mode) {
        mode = num;
        freq[mode] = 1;
      }

      // if freq of curr num is greater than the freq of the curr mode
      // OR if freq of curr num is equal to the freq of the curr mode AND val of num > val of mode
      // THEN set val of mode to the curr num
      if (freq[num] > freq[mode] || freq[num] === freq[mode] && num > mode) return num;

      // otherwise, continue passing along curr mode val
      return mode;
    }, undefined);
  }

  if (array.length === 0) return;
  return mode(array) === mean(array);
}



// two iterations version
// function mode(array) {
//   const freq = {};
//   array.forEach(num => freq[num] ? freq[num]++ : freq[num] = 1);
//   let max = 0, maxNum;
//   for (let num in freq) {
//     if (freq[num] > max || freq[num] === max && num > maxNum) {
//       max = freq[num];
//       maxNum = num;
//     }
//   }
//   return +maxNum;
// }

// normal case
let test = [5, 4, 4, 3];
console.assert(mode(test) === 4)
console.assert(mean(test) === 4)

// higher val num with equal freq
test.push(5);
console.assert(mode(test) === 5)

// lower val num with greater freq
test.push(4)
console.assert(mode(test) === 4)

// negative values
test = [-1, -1, 0];
console.assert(mode(test) === -1)

// empty array
console.assert(!mode([]))

// zero as mode
test.push(0);
console.assert(mode(test) === 0)

module.exports = modemean;
