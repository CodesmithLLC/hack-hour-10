/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) return 1;
    if (power < 0) return 1/(base*pow(base, Math.abs(power)-1)); 
    return base*pow(base, power-1); 
}

// console.log('3^2 should equal 9 :: result = ', pow(3,2));
// console.log('3^3 should equal 27 :: result = ', pow(3,3));
// console.log('3^1 should equal 3 :: result = ', pow(3,1));
// console.log('3^0 should equal 0 :: result = ', pow(3,0));
// console.log('0^0 should equal 1 :: result = ', pow(0,0));
// console.log('3^-2 should equal 0.1111 :: result = ', pow(3,-2));

module.exports = pow;
