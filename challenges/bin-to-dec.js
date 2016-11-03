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

// non recursive solution
// function binToDec(binary) {
//   let result = 0;
//   let power = 0;
//   for (let i = binary.length - 1; i >= 0; i--) {
//     console.log(binary[i])
//     result += Math.pow(2, power++) * binary[i];
//   }
//   return result;
// }

function binToDec(binary) {
  return (binary.length === 1) ? Number(binary) 
  : binary[0] * Math.pow(2, binary.length - 1) + binToDec(binary.slice(1));
}

function decToBin(decimal) {
  if (decimal < 2) return decimal.toString();
  return decToBin(Math.floor(decimal / 2)).toString() + (decimal % 2).toString();;
}

// function decToHex(decimal) {
//   const hexes = {
//     a: 10
//     b: 11
//     c: 12
//     d: 13
//     e: 14
//     f: 15
//   }
//   if (decimal < 16)
// }
// console.log(binToDec('101110011011100101010100000110100001')) // should equal 49854890401
// console.log(binToDec('1000')) // should equal 8
// console.log(binToDec('0000000000')) // should equal 0
// console.log(binToDec('1111111111111')) // should equal 8191

console.log(decToBin(49854890401)); // should equal 101110011011100101010100000110100001
console.log(decToBin(4));
// decimal to binary
// 4
// 4 divide by 2 mod 2 = 0 
// 2 divide by 2 mod 2 = 0
// 1 divide by 2 mod 2 = 1 


module.exports = binToDec;
