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
  const floatingMax = { index: 0, value: stock_prices_yesterday[0] };
  const floatingMin = { index: 0, value: stock_prices_yesterday[0] };
  const potentialMinMax = [];
  for (let minutes = 0; minutes < stock_prices_yesterday.length; minutes++) {
    if (stock_prices_yesterday[minutes] < floatingMin.value) {
      if (floatingMin.index < floatingMax.index) {
        potentialMinMax.push({
          floatingMin: { index: floatingMin.index, value: floatingMin.value },
          floatingMax: { index: floatingMax.index, value: floatingMax.value } });
        floatingMax.value = stock_prices_yesterday[minutes];
        floatingMax.index = minutes;
      }
      floatingMin.value = stock_prices_yesterday[minutes];
      floatingMin.index = minutes;
    }
    if (stock_prices_yesterday[minutes] > floatingMax.value) {
      floatingMax.value = stock_prices_yesterday[minutes];
      floatingMax.index = minutes;
    }
  }
  if (floatingMin.index !== floatingMax.index) potentialMinMax.push({ floatingMin, floatingMax });
  const theBest = potentialMinMax.reduce((minMaxObj1, minMaxObj2) => {
    if ((minMaxObj1.floatingMax.value - minMaxObj1.floatingMin.value) <
      (minMaxObj2.floatingMax.value - minMaxObj2.floatingMin.value)) {
      return minMaxObj2;
    }
    return minMaxObj1;
  });
  return theBest.floatingMax.value - theBest.floatingMin.value;
}

module.exports = bestProfit;
// const stocks = [50, 50, 51, 51, 52, 52, 49, 49, 48, 45, 42, 45, 50, 55, 56, 60, 61, 55, 52, 45, 40, 45, 50, 60, 70, 65, 38, 65, 67];
// console.log(bestProfit(stocks));
