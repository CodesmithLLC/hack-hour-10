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

  // Check edge case where input is not an array or given less than 2 values
  if (!Array.isArray(stock_prices_yesterday) || array.length < 2) return 0;
  
  // Check edge case where values are not numbers
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    const n = stock_prices_yesterday[i];
    if (isNaN(parseFloat(n)) || !isFinite(n)) return 0;
  }

  // Track absolute minimum value while looping, starting with first stock price
  let min = stock_prices_yesterday[0];

  // Track greatest profit while looping
  let maxProfit = 0;
  
  // Track profit with absolute smallest value up to that point
  stock_prices_yesterday.forEach(stock => {
    if (stock < min) min = stock;
    else if (stock - min > maxProfit) maxProfit = stock - min;
  });

  return maxProfit;
}

// const stocks1 = [500, 495, 505, 600, 510, 400, 605];
// const stocks2 = [500, 505, 510, '515', 'x', 525, 530];
// const stocks3 = [500, 495, 480, 460];
// console.log(bestProfit(stocks1));
// console.log(bestProfit(stocks2));
// console.log(bestProfit(stocks3));

module.exports = bestProfit;
