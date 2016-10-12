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
  //set up the object from biggest to smallest since you will be subtracting from the given 'N'
  let optionsObj = { M: 1000,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1
                   };

  let buildupString = "";

  //for every key in optionsObj
  for (let i in optionsObj ) {
  	//while N is greater than the value held @ that key, build up the string w/ the key (aka the Roman letter) && also subtract the n passed by the number value held @ that key.
    while ( n >= optionsObj[i] ) {
      buildupString += i;
      n -= optionsObj[i];
    }
  }
  return buildupString;
}


module.exports = romanNumeral;