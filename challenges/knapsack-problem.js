/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// sort by value
// 5 4 1 
// take max of combinations with 5 and those without 5

function solveKnapsack(items, weightAvailable) {
  if (!items) return 0;
  if (!items.length || weightAvailable <= 0) return 0;
  const sortedItems = items.slice().sort((a, b) => b.value - a.value)
  if (sortedItems.length === 1 && sortedItems[0].weight <= weightAvailable) return sortedItems[0].value;
  const value  = sortedItems[0].value;
  const newWeight = weightAvailable - sortedItems[0].weight;
  return Math.max(value + solveKnapsack(sortedItems.slice(1), newWeight), solveKnapsack(sortedItems.slice(1), weightAvailable));
};


module.exports = solveKnapsack;
