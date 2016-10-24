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
  let min = stock_prices_yesterday[0];
  let maxProfit = 0;
  let currProfit = 0;

  // O(n) - iterate through stock prices once while
  // keeping track of min and max possible profit 
  for (let i = 1; i < stock_prices_yesterday.length; i++) {

    // calculate possible profit given smallest previous price and current stock price
    if (min >= stock_prices_yesterday[i]) currProfit = 0;
    else currProfit = stock_prices_yesterday[i] - min;

    // update min and max profit
    if (stock_prices_yesterday[i] < min) min = stock_prices_yesterday[i];
    if (currProfit > maxProfit) maxProfit = currProfit;
  }
  return maxProfit;
}

module.exports = bestProfit;
