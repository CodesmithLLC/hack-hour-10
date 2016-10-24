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
  // if (typeof stock_prices_yesterday != "array") return 0;
  stockArr = stock_prices_yesterday.map(item => Number(item));
  let max = {index:0, value: 0};
  let min = {index:0, value: 0};
  stockArr.forEach( (price, i) => {
    if (price > max.value || max.value === 0) {
        max.value = price;
        max.index = i;
    }
  });

  stockArr.forEach( (price, i) => {
    if (price < min.value || min.value === 0) {
      if (i < max.index || min.value === 0) {
        min.value = price;
        min.index = i;
      }
    }
  });

  return max.value - min.value;
}

stock_prices_yesterday = [2, 3, 100, 2, 4, 200, 1, 199];
// stock_prices_yesterday = [100, 99, 98, 97];
console.log(bestProfit(stock_prices_yesterday));

module.exports = bestProfit;
