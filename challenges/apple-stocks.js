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

const HOURS_OF_TRADING = 6;
const MINUTES_OF_TRADING = 60 * HOURS_OF_TRADING + 30;

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  // if (stock_prices_yesterday.length !== MINUTES_OF_TRADING) return 0;
  if (stock_prices_yesterday.length > MINUTES_OF_TRADING) return 0;

  // const lowIndex = stock_prices_yesterday
  //   .reduce((lowMin, price, index, prices) => (price < prices[lowMin] ? index : lowMin), 0);
  // const min = stock_prices_yesterday[lowIndex];
  // let max = stock_prices_yesterday[lowIndex];
  // for (let i = lowIndex + 1; i < stock_prices_yesterday.length; i++) {
  //   if (stock_prices_yesterday[i] > max) {
  //     max = stock_prices_yesterday[i];
  //   }
  // }
  // console.log(stock_prices_yesterday[lowIndex], max);
  // return max - min;

  // establish a low point at index 0
  // establish a high point at index 0
  // traverse the array
  //  if the price drops, set the low point to the current index
  //  if the price rises, set the high point to the current index
  // try to create a map of all the valleys and peaks over the course of the trading day
  // try to determine the biggest diff from a valley and peak
}

const data0 = [500, 501, 501, 502, 505, 510, 499, 475, 550];
console.log(bestProfit(data0)); // should be 75
const data1 = [500, 501, 501, 502, 505, 510, 499, 475, 550, 440];
console.log(bestProfit(data1));

module.exports = bestProfit;
