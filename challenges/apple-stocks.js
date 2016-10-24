/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  // profit_max = stock_price_highest - stock_price_lowest

  // Conditions
  // 1. time_bought < time_sold
  if (!Array.isArray(stock_prices_yesterday)) return 0;

  // If we need to exit early
  let exit = false;

  // For each time, find the highest difference
  let max_profit = 0;

  const largest = { value: 0, index: -Infinity };
  stock_prices_yesterday.forEach((price, ind) => {
    if (exit) return;

    if (largest.index >= ind) {
      if ((price - largest.value) * -1 > max_profit) {
        max_profit = (price - largest.value) * -1;
      }
      return;
    }

    let tracker = 0;
    for (let i = ind + 1; i < stock_prices_yesterday.length; i++) {
      // We can also keep track of the largest number ahead of us
      // so we don't have to do a complete loop each time
      // We should also check if every element is a number once
      const stock = stock_prices_yesterday[i];
      if (ind === 0 && typeof stock !== 'number') return (exit = true);

      if (stock > tracker) {
        const profit = (price - stock) * -1;
        // Update our max_profit if need be
        if (profit > max_profit) max_profit = profit;

        // Update our largest values
        tracker = stock;
        largest.value = stock;
        largest.index = i;
      }
    }
  });

  if (exit) return 0;
  return max_profit;
}

module.exports = bestProfit;
