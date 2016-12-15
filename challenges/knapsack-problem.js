/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  if (!Array.isArray(items) || isNaN(weightAvailable)) { throw new Error ('Items must be an array and weightAvailable must be a number.') }
  if (!items.length || weightAvailable === 0) { return 0; }
  let highestValue = 0;
  helper(items, weightAvailable, 0);
  return highestValue;

  function helper(backpack, currentWeight, currentValue) {
    if (!backpack.length || currentWeight === 0) { 
      highestValue = Math.max(highestValue, currentValue);
      return; 
    }
    let futureWeight = currentWeight - backpack[0].weight;
    let futureValue = currentValue + backpack[0].value;
    if (futureWeight < 0) { 
      highestValue = Math.max(highestValue, currentValue); 
      return
    }
    helper(backpack.slice(1), futureWeight, futureValue);
    helper(backpack.slice(1), currentWeight, currentValue);
  }
}

// var items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 5))

module.exports = solveKnapsack;
