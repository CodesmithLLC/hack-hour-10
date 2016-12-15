/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, maxWeight) {
  const cache = {};
  const results = [];
  let newWeight = maxWeight;

  items.forEach(({ weight, value }) => {
    if (!cache[weight]) cache[weight] = value;
    else if (cache[weight] < value) cache[weight] = value;
  });

  Object.keys(cache).forEach((key) => {
    if (newWeight - key === 0) {
      results.push(cache[key]);
      delete cache[key];
    } else if (newWeight - key > 0) {
      newWeight = newWeight - key;
    }
  });

  // console.log(cache);
  // console.log(results);
  return Math.max(...results);
};

// items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}]
// console.log(solveKnapsack(items, 3)); //7
// console.log(solveKnapsack(items, 5)); //9

module.exports = solveKnapsack;
