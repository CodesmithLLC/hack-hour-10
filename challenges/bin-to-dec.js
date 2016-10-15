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

const powers = { 0: 1, 1: 2, 2: 4, 3: 8, 4: 16, 5: 32, 6: 64, 7: 128 };
const powered = [1, 2, 4, 8, 16, 32, 64, 128];

function binToDec(binary) {
  let dec = 0;
  for (let i = binary.length - 1, j = 0; i >= 0; i -= 1, j += 1)
    if (binary[i] === '1') dec += powers[j];
  return dec;
}

function decToBin(decimal) {
  return (decimal >>> 0).toString(2);
}

module.exports = binToDec;

console.log('expected: 0 3 4 5 5\n', 'actual:',
  binToDec('0'),
  binToDec('11'),
  binToDec('100'),
  binToDec('101'),
  binToDec('0101')
);

console.log('expected: 0 11 100 101 1000\n', 'actual:',
  decToBin('0'),
  decToBin('3'),
  decToBin('4'),
  decToBin('5'),
  decToBin('8')
)