// Finds the best profit from 1 buy and 1 sell of yesterday's stocks
function bestProfit(stocks) {
  if (stocks.length < 2 || !Array.isArray(stocks)) return 0;
  let min = stocks[0], best = stocks[1] - min;
  stocks.forEach(stock => {
    if (stock - min > best) best = stock - min;
    if (stock < min) min = stock;
  });
  return best > 0 ? best : 0;
}

module.exports = bestProfit;
