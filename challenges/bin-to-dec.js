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

let hexDict = {
           0 : 0,
           1 : 1,
           2 : 2, 
           3 : 3,
           4 : 4,
           5 : 5,
           6 : 6,
           7 : 7,
           8 : 8,
           9 : 9,
           A : 10,
           B : 11,
           C : 12,
           D : 13,
           E : 14,
           F : 15};
function hexToDec(hex){
  if(!hex) return 0;
  //console.log(`hex: ${hex}`);
  let total = 0;
  for( let i = hex.length-1, power = 0; i >= 0; --i, ++power ){
    //console.log(`i ${i} power ${power} on ${hex[i]}`);
    //console.log(`I want to add ${hexDict[hex[i]] * Math.pow(16,power)}`);
    total += hexDict[hex[i]] * Math.pow(16,power); 
  }
  //console.log(total);
  return total;
}

function anyToDec(number, base, representation){
  if(!number) return 0;
  //console.log(`hex: ${hex}`);
  let total = 0;
  for( let i = number.length-1, power = 0; i >= 0; --i, ++power ){
    console.log(representation[number[i]]);
    total += representation[number[i]] * Math.pow(base,power); 
  }
  //console.log(total);
  return total;
}

module.exports = binToDec;
