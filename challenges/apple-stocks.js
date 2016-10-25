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
    if (!Array.isArray(stock_prices_yesterday)) return 0;
   const largest = Math.max.apply(null,stock_prices_yesterday);
   const smallest = Math.min.apply(null,stock_prices_yesterday);
   if (stock_prices_yesterday[0] === largest){
      stock_prices_yesterday = stock_prices_yesterday.slice(1);
      bestProfit(stock_prices_yesterday);
   }
   if (stock_prices_yesterday[stock_prices_yesterday.length - 1] === smallest){
      delete stock_prices_yesterday[stock_prices_yesterday.length - 1]
      stock_prices_yesterday.length--;
   }
   const newLarge = Math.max.apply(null,stock_prices_yesterday);
   const newSmall = Math.min.apply(null,stock_prices_yesterday);
   console.log(newLarge, newSmall);
   console.log(newLarge - newSmall);
   return newLarge - newSmall;
 }
 const prices = [10,30,3,10,40];
 bestProfit(0);

module.exports = bestProfit;
