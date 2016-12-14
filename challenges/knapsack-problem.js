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
  let max = -Infinity;
  let weight = weightAvailable;
  let value = 0;
  function recurser(items, weight, value) {
    if (weight === 0 || !items.length) {
      if (value > max) max = value;
      return;
    } else {
      for (let i = 0; i < items.length; i++) {
        if (weight - items[i].weight >= 0) {
          recurser(items.slice(0,i).concat(items.slice(i+1)), weight - items[i].weight, value + items[i].value);
        }
      }
    }
  }

  recurser(items, weight, value);
  return max;
};

module.exports = solveKnapsack;
