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
  let differences = {};
  let maxDifference = -Infinity;
  for(let i = 0; i < stock_prices_yesterday.length; ++i){ // O(n^2)
    for(let j = i+1; j < stock_prices_yesterday.length; ++j){
      let minVal = Math.min(stock_prices_yesterday[i], stock_prices_yesterday[j]);
      let maxVal = Math.max(stock_prices_yesterday[i], stock_prices_yesterday[j]);
      if(maxVal - minVal > maxDifference && stock_prices_yesterday[j] > stock_prices_yesterday[i]){
        maxDifference = maxVal - minVal;
      }
    }
  }
  return maxDifference > 0 ? maxDifference : 0;
}

function bestProfitN(prices){
  let ranges = [];
  let rangeLow = 0;
  let rangeHigh = 0;

  let tempLow = 0;
  let tempHigh = 0;
  console.log(prices);
  for(let i = 0; i < prices.length; ++i){
    console.log(`iteration i: ${i}`);
      console.log({low:tempLow, high:tempHigh});
    for(let j = i+1; j < prices.length; ++j){
      console.log(`>iteration j: ${j}`);
      console.log({low:tempLow, high:tempHigh});
      console.log(ranges);
      console.log('                              <');
      if(prices[j] < prices[tempHigh]){
        // we found a dip
        console.log(` + dip found at ${j} with value ${prices[j]}`);
        // checks if ranges are consecutive
        if(ranges.length > 0 && tempLow === ranges[ranges.length-1].high + 1){
          console.log(` + found consecutive range`);
          // reset the previous high value if prices[tempLow] is in range of last values
          // and the high is actually higher than the high
          if(prices[ranges[ranges.length-1].high] > prices[tempHigh] &&
            (prices[ranges[ranges.length-1].low] > prices[tempLow] && prices[ranges[ranges.length-1].high > prices[tempLow]])){
            console.log(` + found consecutive range with valid range`);
            console.log({low:tempLow, high:tempHigh});
            ranges[ranges.length - 1].high = tempHigh;
          }else{
            console.log(` + invalid consecutive range`);
            console.log({low:tempLow, high:tempHigh});
            ranges.push({low:tempLow, high:tempHigh});
          }
        }else{
          //not consective so push this new range
          console.log(`found inconsecutive range`);
          console.log({low:tempLow, high:tempHigh});
          ranges.push({low:tempLow, high:tempHigh});
        }
        //reset low range to new found dip value
        tempLow = j;
      }
      tempHigh = j;
    }
  }
}

//console.log(bestProfitN([100,90,80,70,74,73,50,60,70,80,80,100,200,500,800]));
console.log(bestProfitN([50,60,80,70,80,100,80,90,10]));
module.exports = bestProfit;
