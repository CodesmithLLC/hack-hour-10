// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    const table = {
		Ninety: 90,
		Eighty: 80,
		Seventy: 70,
		Sixty: 60,
		Fifty: 50,
		Forty: 40,
		Thirty: 30,
		Twenty: 20,
		Nineteen: 19,
		Eighteen: 18,
		Seventeen: 17,
		Sixteen: 16,
		Fifteen: 15,
		Fourteen: 14,
		Thirteen: 13,
		Twelve: 12,
		Eleven: 11,
		Ten: 10,
		Nine: 9,
		Eight: 8,
		Seven: 7,
		Six: 6,
		Five: 5,
		Four: 4,
		Three: 3,
		Two: 2,
		One: 1
	};
	result = '';
	
	if (num === 0) return 'Zero';

	if (num.toString().length === 3) {
		let temp = Math.floor(num / 100);
		helper(temp);
		result+='Hundred';
	}
function helper(num) {
	for (let prop in table) {
		while (num >= table[prop]) {
			result += prop;
			num -= table[prop];
		}
	}
}
	return result;
}

module.exports = numToWords;
