/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 *
 * @param {number, number} First parameter is any non-0 non-infinity value. Second parameter
 * 						   must be an integer.
 * @return {number|undefined} Return number if given proper params. Otherwise return undefined.
 */

function pow(base, power) {
	
	// Edge cases: user not including base or power, non-integer power values, infinities, zero to the zeroth power
	if (!isFinite(base) || !Number.isInteger(power) || (base === 0 && power === 0)) return undefined;
	
	if (power === 0) return 1;
	return base * pow(base, power - 1);
}

module.exports = pow;
