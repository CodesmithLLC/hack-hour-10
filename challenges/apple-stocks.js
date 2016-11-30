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
  let maxProfit = 0;
  if (Array.isArray(stock_prices_yesterday)) {
    for (let i = 0; i < stock_prices_yesterday.length; i++) {
      if(i === 0) {
        if (typeof stock_prices_yesterday[i] !== 'number') { return 0 };
      }
      for (j = i + 1; j < stock_prices_yesterday.length; j++ ) {
        if(i === 0) {
          if (typeof stock_prices_yesterday[j] !== 'number') { return 0 };
        }
        const diff = stock_prices_yesterday[j] - stock_prices_yesterday[i];
        if (diff > maxProfit) {
          maxProfit = diff;
        }
      }
    }
  }
  return maxProfit;
}

// function bestProfit(stock_prices_yesterday) {
//   const sorted = stock_prices_yesterday.slice(0).sort();
//   console.log(sorted);
//   console.log(stock_prices_yesterday);
//   for (let i = 0; i < sorted.length; i++) {
//     for (let j = sorted.length - 1 ; j >= 0; j--) {
//       if (stock_prices_yesterday.indexOf(stock_prices_yesterday[j]) > stock_prices_yesterday.indexOf(stock_prices_yesterday[i])) {
//         const diff = stock_prices_yesterday[j] - stock_prices_yesterday[i];
//         if (diff > 0) {
//           return diff;
//         }
//       }
//     }
//   }
//   return 0;
// }

// const exampleData_1 = [7, 6, 5, 1, 2, 3, 1]; // 2
// console.log(bestProfit(exampleData_1));

module.exports = bestProfit;
