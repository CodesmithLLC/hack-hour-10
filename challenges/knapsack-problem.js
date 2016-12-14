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

  let value = 0;

  function find(items, weightAvailable, val) {
    if(weightAvailable < 0) return 0;
    if(weightAvailable === 0 || items.length < 1) {
      value = val > value ? val : value;
      return 0;
    }
    return find(items.slice(1), weightAvailable - items[0].weight, val + items[0].value) + find(items.slice(1), weightAvailable, val);
  }
  find(items, weightAvailable, 0);
  return value;
};




module.exports = solveKnapsack;
