// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    for (var tenPow = 1; tenPow * 10 < num; tenPow *= 10);
    return num < 2 ? 0 : Math.floor(num / tenPow) * countTwos(tenPow) + countTwos(num % tenPow) + (Math.floor(num / tenPow) > 2 ? tenPow : Math.floor(num / tenPow) === 2 ? num % tenPow + 1 : 0);
}

module.exports = countTwos;
