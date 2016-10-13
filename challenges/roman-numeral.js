/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  
  let arr= [1, 5, 10, 50, 100, 500, 100];
  let obj= {1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"};
  let result = "";
  let remainder = 0;

  if (obj[n] !== undefined) return obj[n];
  
  else {
    let i=0;
    while (n > arr[i]) {
      i++;
    }
   
    result = obj[arr[i-1]];
    remainder = n - arr[i-1];
    if (remainder === 0) return result;
    else {
      return result += romanNumeral(remainder);
    } 
  }
  
}

module.exports = romanNumeral;