/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack2(items, weightAvailable) {
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


const solveKnapsack = (items, weightAvailable, valueSoFar = 0) => {
  // 2 cases: 1 includes changing value and weight.  Other does not.
  
  if (weightAvailable < 0) {
    // do something
    // items exceed available weight
    return -Infinity;
  }

  // if (weightAvailable === 0) {
  //   // do something
  //   // successful base case - you've filled up your bag

  // }

  // if (!items.length) {
  //   // do something
  //   // successfull base case - all the items don't amount to your weight limit
  // }

  if (!items.length || weightAvailable === 0) {
    // do something
  }

  solveKnasack(items.slice(1), weightAvailable)  
  solveKnasack(items.slice(1), )  
}