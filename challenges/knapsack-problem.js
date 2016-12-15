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
  let maxVal;

  const recurse = (array, newWeight) => {
    if (!items.length) return false;

    for (let i = 0; i < items.length; ++i) {
      if (weightAvailable - items[i].weight !== 0) {
        items.splice(i, 1);
        recurse(items, weightAvailable - items[i].weight);
      }
    }
  }
  
  recurse(items, weightAvailable);
  return maxVal;
};

let items = [{ weight: 1, value: 3 }, { weight: 5, value: 2 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];

console.log(solveKnapsack(items));


module.exports = solveKnapsack;
