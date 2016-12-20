/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/


const solveKnapsack = (items, weightAvailable, value = 0) => {
  let newWeight, newValue;

  if (weightAvailable < 0) return -Infinity;

  if (!items.length || weightAvailable === 0) {
    return value;
  }

  newWeight = weightAvailable - items[0].weight;
  newValue = value + items[0].value;

  return Math.max(solveKnapsack(items.slice(1), weightAvailable, value), solveKnapsack(items.slice(1), newWeight, newValue));
}

module.exports = solveKnapsack;