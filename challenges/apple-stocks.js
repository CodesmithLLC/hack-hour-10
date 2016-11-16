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


// length = 390

// function bestProfit(stock_prices_yesterday) { 
//   if (!stock_prices_yesterday || stock_prices_yesterday.length === 0) return 0;
//   let min = stock_prices_yesterday[0], max, profit;

//   for (let i = 0; i < stock_prices_yesterday.length; i++) {
//     min = min > stock_prices_yesterday[i] ? stock_prices_yesterday[i] : min;
//     if (stock_prices_yesterday[i] >= min) {
//       max = stock_prices_yesterday[i];
//       profit = (profit > (max - min)) ? profit : (max - min);
//     } else {
//       min = stock_prices_yesterday[i];
//     }
//   }
//   return profit;
// }

function bestProfit(stock_prices_yesterday) {
  let priceArr = stock_prices_yesterday;
  let min = priceArr[0], max;
  if (!priceArr || priceArr.length === 0) return 0;

  return priceArr.reduce((profit, price) => {
    min = min > price ? price : min;
    if (price >= min) {
      max = price;
      return profit = (profit > (max - min)) ? profit : (max - min);
    } else {
      min = price;
    }
  }, 0);
}



console.log(bestProfit([1,2,3,4,5,6,7]));
console.log(bestProfit([7,1,2,3,4,5,6]));
console.log(bestProfit([1,2,3,2,3,4,5,1,9]));

module.exports = bestProfit;
