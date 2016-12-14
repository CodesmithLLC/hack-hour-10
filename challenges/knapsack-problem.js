/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable, val = 0) {
  items = items.sort( (a,b) => a.weight - b.weight);
  if(!items.length) return val;
  if(items[0].weight > weightAvailable) return val; 
  const nextVal = items[0].value + val;
  const nextWeight = weightAvailable - items[0].weight;
  const nextArr = items.slice(1);
  return Math.max(val, solveKnapsack(nextArr, nextWeight, nextVal), solveKnapsack(nextArr, weightAvailable, val)); 
};

module.exports = solveKnapsack;
