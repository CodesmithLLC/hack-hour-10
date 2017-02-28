// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	// Fast fail.
	if (num < 2) return 0;
	for (var tenPow = 1; tenPow * 10 < num; tenPow *= 10);
	const firstDigitOrTen = Math.floor(num / tenPow);
	const afterFirstOrTen = num % tenPow;
	let twos = firstDigitOrTen * countTwos(tenPow) + countTwos(afterFirstOrTen);
	if (firstDigitOrTen > 2) twos += tenPow;
	if (firstDigitOrTen === 2) twos += afterFirstOrTen + 1;
	return twos;
}

module.exports = countTwos;
