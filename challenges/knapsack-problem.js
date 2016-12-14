/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.
*/

function solveKnapsack(items, weightAvailable) {
  if (weightAvailable < 1) return 0;
  const values = [];

  function weightWatcher(remainingWeight, totalValue, backpack) {
    if (remainingWeight < 0) return;
    if (remainingWeight === 0 || !backpack.length) {
      values.push(totalValue);
      return;
    }
    
    newWeight = remainingWeight - backpack[0].weight;
    newValue = totalValue + backpack[0].value;
    
    weightWatcher(newWeight, newValue, backpack.slice(1));
    weightWatcher(remainingWeight, totalValue, backpack.slice(1));
  }

  weightWatcher(weightAvailable, 0, items);
  return Math.max(...values);
};

  // items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  // console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
  // console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
