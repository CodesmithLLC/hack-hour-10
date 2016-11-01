/**
 *  I have an array stocks where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stocks[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stocks) {
  if (stocks.length < 2 || !Array.isArray(stocks)) return 0;
  let currentBest = stocks[1] - stocks[0];
  let currentMin = stocks[0];
  for (let i = 1; i < stocks.length; i += 1) {
    if (stocks[i] - currentMin > currentBest) currentBest = stocks[i] - currentMin;
    if (stocks[i] < currentMin) currentMin = stocks[i];
  }
  return currentBest > 0 ? currentBest : 0;
}

module.exports = bestProfit;