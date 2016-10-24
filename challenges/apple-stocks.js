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

// function shitStocks(number) { 
//   var trashCanS = [];
//   for (var i = 0; i < number; i++) { 
//     trashCanS.push(Math.floor(Math.random() * 600));
//   }
//   return trashCanS;
// } 
function bestProfit(stock_prices_yesterday) {
  if (stock_prices_yesterday.length < 2) return 0;
  var largest = -Infinity;
  var smallest = Infinity;
  function splitAndCompare(array) {
    if (array.length > 1) {
      splitAndCompare(array.slice(0, array.length / 2));
      splitAndCompare(array.slice(array.length / 2));
    }
    else { 
      if (array[0] > largest) largest = array[0];
      if (array[0] < smallest) smallest = array[0];
    }
  }
  splitAndCompare(stock_prices_yesterday);
  var profit = largest - smallest;
  return profit > 0 ? profit: 0;
}

module.exports = bestProfit;