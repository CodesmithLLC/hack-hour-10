/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

// TODO - refactor with recursion

function countStairs(n) {
  const perms = [[]];
  const possibleTwos = Math.floor(n/2);
  for (let i = 0; i < n; ++i) {
    perms[0].push(1);
  }

  function helper (perm, twos) {
    if (twos > possibleTwos) { return; }
    for (let i = 0; i < perm.length - 1; ++i) {
      if (perm[i] === 1 && perm[i+1] === 1) {
        const permCopy = perm.slice(0);
        permCopy.splice(i, 2, 2);
        perms.push(permCopy);
        helper(permCopy, twos + 1);
      }
    }
  }
  helper (perms[0], 1);
  return perms.length;
}

console.log(countStairs(5));

module.exports = countStairs;
