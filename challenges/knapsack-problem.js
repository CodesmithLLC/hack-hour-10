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
  // const combos = [];
  //
  // function recurse(_items, _weightAvailable) {
  //   if (_items.length === 0) return;
  //   if (_weightAvailable <= 0) return;
  //   const length = _items.length;
  //
  // }
  //
  // recurse(items, weightAvailable);
  // console.log(combos);

  function recurse(items, prev) {
    prev = prev || [];
    if (!items.length) {
      return prev;
    }
    const result = items.reduce((result, item) => {
      prev.push(item);
      return result.concat(recurse(items.slice(1), prev));
    }, []);
    return result;
  }
  console.log(recurse(items));
}

const items = [
  {weight: 1, value : 3},
  {weight: 2, value : 4},
  {weight: 3, value : 5}
];
solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
// solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
