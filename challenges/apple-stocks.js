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

 function bestProfit(stocks) {

   let sortedArr = [];
   for (let i=0; i<stocks.length; i++) {
     sortedArr.push(stocks[i]);
   }

   sortedArr = sortedArr.sort(function(a, b) {
     return a - b;
   });

   let min = sortedArr[0];
   let max = sortedArr[sortedArr.length-1];

   if (stocks.indexOf(max) > stocks.indexOf(min)) {
     return max - min;
   } if (stocks.length === 0 ) {
     return 0;
   } else {
     return bestProfit(stocks.slice(0, stocks.length-2)) || bestProfit(stocks.slice(1));
   }
   return 0;
 }


module.exports = bestProfit;
