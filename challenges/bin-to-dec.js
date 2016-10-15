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
"use strict";
function binToDec(binary) {
  if(!binary) return 0;
  //console.log(`binary: ${binary}`);
  let total = 0;
  for( let i = binary.length-1, power = 0; i >= 0; --i, ++power ){
    //console.log(`i ${i} power ${power} on ${binary[i]}`);
    //console.log(`I want to add ${binary[i] * Math.pow(2,power)}`)
    total += binary[i] * Math.pow(2,power); 
  }
  return total;
}

module.exports = binToDec;
