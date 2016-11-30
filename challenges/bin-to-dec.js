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
  let total = 0
  for (let i = 0; i < binary.length; i++) {
    total = total * 2 + Number(binary[i]);
  }
  return total;
}

function decToBin(dec) {
  let bin = [];
  while(dec >= 1) {
    let rem = dec % 2;
    bin.unshift(rem);
    dec = Math.floor(dec / 2);
  }
  return bin.join("");
}



module.exports = binToDec;
