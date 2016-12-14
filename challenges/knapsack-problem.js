/**
 * Given a knapsack with a weight limit, determine the
 * maximum value of items you can fit into the knapsack
 * based on an array of items with weight, value pairs
 *
 * @param {Array} items
 * @param {number} weight
 * @return {number}
 */
function solveKnapsack(items, weight) {
  function maxKnap(items, weight, value = 0) {
    if (weight < 0) return -Infinity
    if (!items.length || weight === 0) return value
    return Math.max(maxKnap(items.slice(1), weight - items[0].weight, value + items[0].value), maxKnap(items.slice(1), weight, value))
  }
  return maxKnap(items, weight)
}

module.exports = solveKnapsack;
