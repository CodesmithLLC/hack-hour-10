/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let exp = 1;
    for (let i = 0; i < power; i++){
        exp *= base;
    }
    if (power === 0 || base === 1) return 1;
    if (base > 0 && power > 0) return exp
    if (power < 0){
        power *= -1;
          for (let i = 0 ; i < power; i++ ){
              exp *= base;
          }
        return 1 / exp;
  }
  if (base < 0) return exp;
}

module.exports = pow;
