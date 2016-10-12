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
  // Pattern : Look at Ones, tens, hundrend and thousands place
  const strN = n.toString();

  // Need a tracker to keep track of what place we are in
  let placeTracker = 0;

  // This will convert the num to the correct roman numeral depending
  // on what place it is in
  const convert = num => {
  	switch (placeTracker) {
  		case 0:
  		  if (num <= 3) return 'I'.repeat(num);
		  	if (num == 4) return 'IV';
		  	if (num >= 5 && num <= 8) return 'V' + 'I'.repeat(Math.abs(5 - num));
		  	if (num == 9) return 'IX';
	  	case 1:
	  	  if (num <= 3) return 'X'.repeat(num);
		  	if (num == 4) return 'XL';
		  	if (num >= 5 && num <= 8) return 'L' + 'X'.repeat(Math.abs(5 - num));
		  	if (num == 9) return 'XC';
	  	case 2:
  	  	if (num <= 3) return 'C'.repeat(num);
		  	if (num == 4) return 'CD';
		  	if (num >= 5 && num <= 8) return 'D' + 'C'.repeat(Math.abs(5 - num));
		  	if (num == 9) return 'CM';
	  	case 3:
	  	  if (num <= 4) return 'M'.repeat(num);
	  	default:
	  		throw new Error('input number 1-4999');
  	}
  };

  let roman = '';

  for (let len = strN.length - 1, i = len; i >= 0; i--) {
  	roman = convert(strN[i]) + roman;
  	placeTracker++;
  }

  return roman;
}

module.exports = romanNumeral;
