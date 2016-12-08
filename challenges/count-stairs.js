/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let count = 0;
  function counter(input){
    if(input > 1) count++, counter(input - 2);
    if(input > 0) counter(input - 1);
  }
  counter(n);
  return count;
}

module.exports = countStairs;
