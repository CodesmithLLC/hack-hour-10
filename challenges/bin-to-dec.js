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
  // One liner: return parseInt(binary, 2));
  
  let arr = binary.split('');

  for (let i = 0; i < binary.length; i++) {
    if (arr[0] === 0) arr.splice(0, 1);
    else break;
  }
  
  let decimal = 0;
  let reversedBinary = arr.reverse();
  
  for (let j = 0; j < reversedBinary.length; j++) {
    if (reversedBinary[j] === '1') decimal += Math.pow(2, j);
  }

  return decimal;
}

// Extension
// function decToBin(decimal) {
//   return decimal.toString(2);
// }

console.log(binToDec('1'));
module.exports = binToDec;
