/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 */

function countStairs(n) {
  let ways = 0;
  const steps = [1, 2];
  
  const findWays = (n, steps, sum) => {
    if(n === sum) {
      ways++;
      return;
    }
    
    if(n < sum) {
      return;
    }
    
    for(let i = 0; i < steps.length; i++) {
      findWays(n, steps, sum + steps[i]);
    }
    
  }
  
  findWays(n, steps, 0)
  return ways;
}

module.exports = countStairs;
