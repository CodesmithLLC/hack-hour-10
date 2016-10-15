/*jshint esversion: 6 */
/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let arr = String(binary).split('');
  let ans = 0;
  let iterator = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = 0;
    temp = Math.pow(2, i) * arr[iterator];
    ans += temp;
    iterator++;
  }
  return ans;
}

function decToBin(dec) {
  let ans = [];
  while (dec > 0) {
    let remainder = 0;
    remainder = dec % 2;
    dec = Math.floor(dec / 2);
    ans.push(remainder);
  }
  return ans.reverse().join('');
}


module.exports = binToDec;
