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
  if (!Array.isArray(items) || isNaN(weightAvailable)) { throw new Error ('Items must be an array and weightAvailable must be a number.') }
  if (!items.length || weightAvailable === 0) { return 0 }
  const possibleValues = [];
  let sortedItems = items.sort((a, b) => b.value - a.value);
  let currentWeightAvailable = weightAvailable;
  let currentValue = 0;
  return generateCombinations(sortedItems, currentWeightAvailable, currentValue);

function generateCombinations(sortedItems, currentWeightAvailable, currentValue) {
  if (!sortedItems.length) { return Math.max(...possibleValues) }
    sortedItems.forEach(item => {
      if (currentWeightAvailable >= item.weight) {
        currentWeightAvailable -= item.weight;
        currentValue += item.value;
      }
    })
    possibleValues.push(currentValue);
    return generateCombinations(sortedItems.slice(1), weightAvailable, 0);
}
};

// var items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3))

// Solution #1 - All one function

// function solveKnapsack(items, weightAvailable) {
//   if (!Array.isArray(items) || isNaN(weightAvailable)) { throw new Error ('Items must be an array and weightAvailable must be a number.') }
//   const possibleValues = [];
//   let sortedItems = items.sort((a, b) => b.value - a.value);
//   let currentWeightAvailable = weightAvailable;
//   let currentValue = 0;

//   while (sortedItems.length) {
//     sortedItems.forEach(item => {
//       if (currentWeightAvailable >= item.weight) {
//         currentWeightAvailable -= item.weight;
//         currentValue += item.value;
//       }
//     })
//     possibleValues.push(currentValue);
//     currentWeightAvailable = weightAvailable;
//     currentValue = 0;
//     sortedItems = sortedItems.slice(1);
//   }
//   return Math.max(...possibleValues);
// };

// Solution #2 - Helper function

// function solveKnapsack(items, weightAvailable) {
//   if (!Array.isArray(items) || isNaN(weightAvailable)) { throw new Error ('Items must be an array and weightAvailable must be a number.') }
//   const possibleValues = [];
//   let sortedItems = items.sort((a, b) => b.value - a.value);
//   let currentWeightAvailable = weightAvailable;
//   let currentValue = 0;
//   return generateCombinations(sortedItems, currentWeightAvailable, currentValue);

// function generateCombinations(sortedItems, currentWeightAvailable, currentValue) {
//   if (!sortedItems.length) { return Math.max(...possibleValues) }
//     sortedItems.forEach(item => {
//       if (currentWeightAvailable >= item.weight) {
//         currentWeightAvailable -= item.weight;
//         currentValue += item.value;
//       }
//     })
//     possibleValues.push(currentValue);
//     return generateCombinations(sortedItems.slice(1), weightAvailable, 0);
// }
// };

module.exports = solveKnapsack;
