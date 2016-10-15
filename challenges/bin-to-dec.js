'use strict';
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
  var total = 0;
  for (let i = binary.length - 1, counter = 0; i >= 0; --i, ++counter) {
    if (binary[i] === '1') {
      total += Math.pow(2, counter);
    }
  }
  return total;
}

function decToBin(decimal) {
  if (decimal === 1) return '1';
  return (decimal % 2) + decToBin(Math.floor(decimal / 2));
}

module.exports = binToDec;
