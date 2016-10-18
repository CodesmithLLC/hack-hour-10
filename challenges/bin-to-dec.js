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
<<<<<<< HEAD
    for (var i = 0, binArr = binary.split(""), decimal = 0; binArr.length; i++) {
        decimal += Number(binArr.pop()) * Math.pow(2, i);
    }
    return decimal;
}

module.exports = binToDec;
=======

}

module.exports = binToDec;
>>>>>>> a9fb23ad919e6ee3577811e1d76e8a8eca09b13b
