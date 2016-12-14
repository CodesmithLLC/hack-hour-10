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
  for (let i = 0; i < items.length; i++) {
    const remainder = i === items.length - 1 ? [] : items.slice(i + 1);
    helper ([items[i]], remainder);
  }
  function helper (focus, remainder) {
    console.log(focus, remainder);
    let totalWeight = 0;
    let totalValue = 0;
    for (let i = 0; i < focus.length; i++) {
      totalWeight += focus[i].weight;
      totalValue += focus[i].value;
    }
    if (totalWeight <= weightAvailable) {
      if (maxVal === undefined || totalValue > maxVal) {
        maxVal = totalValue;
      }
      if (remainder.length > 0) {
        focus = focus.concat(remainder.splice(0, 1));
        helper(focus, remainder);
      }      
    }
  }
  return maxVal;
};

console.log(solveKnapsack([{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}], 5));

module.exports = solveKnapsack;
