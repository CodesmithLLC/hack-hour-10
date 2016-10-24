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
  let yes = stock_prices_yesterday;
  if (!Array.isArray(yes)) return 0;
  // start time is 930, index = minutes past start, values are prices of stock at time
  const profit = [];

  //calculate the possible differences
  for (let i = 0; i < yes.length - 1; i++) {
    for (let j = i + 1; j <  yes.length; j++) {
      profit.push(yes[j] - yes[i]);
    }
  }

  let maxProfit = Math.max(...(profit.filter(num => Boolean(num))));
  if (maxProfit < 0) return 0;
  return maxProfit;
}
console.log(bestProfit([500, 400, 600, 700, 800]));

module.exports = bestProfit;
