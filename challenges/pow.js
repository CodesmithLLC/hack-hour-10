/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base,power){
    var result;
    
    if(power < 0) result = 1/pow(base,Math.abs(power));
    else result = recpow(base, power);

    return result;

    function recpow(base, power) {
        if(power <= 0) return 1;
        return base * (pow(base, power-1))
    }
}

module.exports = pow;

