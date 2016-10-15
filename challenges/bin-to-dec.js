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
  if (typeof binary !== 'string') 
    throw new Error('Please use a valid binary string');
  let sum = 0;
  let mult = 1;

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] !== '1' || binary[i] !== '0') 
      throw new Error('Not a valid binary string.');
    if (binary[i] === '1') sum += mult;
    mult *= 2;
  }
  return sum;
}


module.exports = binToDec;
