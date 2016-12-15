/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
*/
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
  console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

function solveKnapsack(items, weightAvailable) {

    let vals = [];

    function putInKnapsack(items, weightAvailable, cumValue = 0, i = 1) {
      if (weightAvailable === 0 || items.length === 0 ) {
        vals.push(cumValue)
      }
      else {
        let current = items.slice(i);
        let newVal = cumValue + current.value;
        let newWeight = weightAvailable - current.weight;
        i++;
        return putInKnapsack(current, newWeight, newVal, i) || putInKnapsack(current, weightAvailable, cumValue, i);
      }
    }

    putInKnapsack(items, weightAvailable)
    console.log(vals)
    return Math.max(...vals);
};

module.exports = solveKnapsack;
