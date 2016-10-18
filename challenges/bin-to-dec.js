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
 *
 * // each digit in the string from RIGHT to left having a value TWICE that of the previous digit  (so starting from the end )
 */

function binToDec(binary){
  return binary.split("").reverse().reduce(function(accum, curr, index){
    //[1,1]
    if(curr === '1'){
      // console.log("this is curr", curr);
      // console.log("this is accum ", accum);
      // console.log("this is index", index);
      // console.log("this is the POW", Math.pow(2,index));
      // console.log("this is the add", accum + Math.pow(2, index));
      return accum + Math.pow(2, index)
    } else {
      // console.log("this is accum ", accum);
      // console.log("this is index", index);
      return accum;
    }
  },0);
};
	//turn the string into an array so you can use reduce on it
	//reverse it cause reduce works LEFT --> RIGHT
	//reduce it:: inside reduce ask whether the curr === 1, if it does, you have to return the accumulation PLUS Math.pow(base 2 (which is binary && the exponent being the index ))
}

module.exports = binToDec;
