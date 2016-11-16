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
  // return parseInt(binary, 2);

  total = 0;
	multiplier = 1;
	while(binary.length>0){
		if(binary[binary.length-1] === '1') total+=multiplier;
		multiplier*=2;
		binary = binary.slice(0,binary.length-1);
	}
	return total;
}

module.exports = binToDec;
