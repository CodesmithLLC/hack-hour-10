/**
 * Write a function that takes an array and a callback function,
 * and passes each permutation of the array to the callback.
 *
 * @param {Array} arr
 * @param {Function} callback
 * @return {undefined}
 */
function eachPermutation(arr, callback = null, perms = []) {
  const permute = (a, p = []) => !a.length ? perms.push(p) : a.forEach((e, i) => permute([...a.slice(0, i), ...a.slice(i + 1)], p.concat(e)))
  permute(arr)
  perms.forEach(p => callback(p))
}

module.exports = eachPermutation;
