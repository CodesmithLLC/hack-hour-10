/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3},
  				 {weight: 2, value : 4},
  				 {weight: 3, value : 5}
  				];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/
function solveKnapsack(items, weightAvailable) {
  let max = 0;

  if(items.length === 1) return items[0].value;

   function findMax(array, sum, totalweight, index) {
     if (sum > max && totalweight <= weightAvailable) {
      max = sum;
    }
    if (index < array.length) {
       findMax(array, sum + array[index].value, totalweight + array[index].weight, index + 1);
       findMax(array, sum, totalweight ,index + 1);
     }
   }
   findMax(items, 0, 0, 0);
   return max;
};

// module.exports = solveKnapsack;
let items = [{weight: 1, value : 3}, {weight: 10, value: 8}, {weight: 2, value : 4}, {weight: 3, value : 5}];
 console.log( solveKnapsack(items, 3) ); // returns 7 (from items[0] and items[1])
// console.log( solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])
