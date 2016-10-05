/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   	let exp = 1;
     if (power === 0) return 1;
     if (base > 0 && power > 0) {
     	exp *= base;
     	return exp * pow(base,power-1);
 	}
}

module.exports = pow;
