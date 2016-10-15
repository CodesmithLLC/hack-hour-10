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
if (binary.constructor !== String || binary.match(/[01]/g).length !== binary.length) return 'input must be a binary number';
let len = binary.length - 1;
let dec = 0;
let power = 0;

for (let i = len; i >= 0; i--) {
  if (i === len && binary[i].match('1')) dec += 1; 
  else if (binary[i].match('1')) dec += Math.pow(2, power);
  power++;
}
return dec;
}

module.exports = binToDec;
