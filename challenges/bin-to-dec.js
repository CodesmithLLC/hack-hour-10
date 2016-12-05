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
 * Write a function that converts a binary number to decimal (then maybe hexadecimal)
 */

function binToDec(binary) {
  let decimal = 0;
  binary = binary.split("").reverse().join("");
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      decimal += Math.pow(2, i);
    }
  }
  return decimal;
}
// console.log(binToDec('0101'));

function binToHexDec(binary) {
  let A = 10, B = 11, C = 12, D = 13, E = 14, F = 15;
  let hexDecimal = 0;
  binary = binary.split("").reverse().join("");
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== '0') {
      hexDecimal += (Math.pow(16, i)*eval(binary[i]));
    }
  }
  return hexDecimal;
}
module.exports = binToDec;
