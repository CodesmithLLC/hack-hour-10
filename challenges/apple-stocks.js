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

// Highest profit I could have made from 1 purchase and 1 subsequent sale.
// Math.max() of sale (after) - purchase (before).
// Choose when to buy. => Low points. => 
// Choose when to sell. => High points.

function bestProfit(prices) {
  if (!Array.isArray(prices) || !prices.length) return 0;

  let buy = prices[0], profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    profit = Math.max(profit, prices[i] - buy);
  }

  return profit;
}

module.exports = bestProfit;
