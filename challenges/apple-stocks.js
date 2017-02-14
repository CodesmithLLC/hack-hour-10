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
    console.log(stock_prices_yesterday);
   let greatest = Math.max.apply(null, stock_prices_yesterday);
   let smallest = Math.min.apply(null, stock_prices_yesterday);
   if (greatest === smallest) return 0;
   if (stock_prices_yesterday.indexOf(greatest) === 0){
      const stocks = stock_prices_yesterday.slice(1);
      bestProfit(stocks);
    }
   if (!stock_prices_yesterday) return 0;
   if (stock_prices_yesterday.indexOf(smallest) > stock_prices_yesterday.indexOf(greatest)) {
     delete stock_prices_yesterday[stock_prices_yesterday.indexOf(smallest)];
     bestProfit(stock_prices_yesterday);
   }
   console.log(greatest - smallest);
   return greatest - smallest;
 }
 const prices = [50,5,20,1];
 bestProfit(prices);

module.exports = bestProfit;
