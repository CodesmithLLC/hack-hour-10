/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time

 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 * Stock market opens @ 9:30 && closes @ 4:00pm ::: ( 0 - 390 )
 * 0: opening time  @ 9:30am
 * 60: 10:30 am
 * 120: 11:30 am
 * 180: 12:30 pm
 * 240: 1:30pm
 * 300: 2:30pm
 * 360: 3:30pm
 * 390	: 4:00pm
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
	//if input is invalid (stock_prices_yesterday !== an array || there are more than 390 indices)
	if ( (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length > 390) )  return 0;

	// let maxNumber = Math.max(...stock_prices_yesterday), minNumber = Math.min(...stock_prices_yesterday);


}

module.exports = bestProfit;


  }