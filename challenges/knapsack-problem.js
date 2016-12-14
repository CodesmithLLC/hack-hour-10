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
  if (!items || items.length <= 0 || weightAvailable <= 0) return 0;

  items = items.sort((a, b) => b.value - a.value)

  if (items.length === 1 && items[0].weight <= weightAvailable) return items[0].value;
  let newWeightAvailable = weightAvailable - items[0].weight;

  return Math.max(items[0].value + solveKnapsack(items.slice(1), newWeightAvailable), solveKnapsack(items.slice(1), weightAvailable));
};

module.exports = solveKnapsack;
