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

function romanNumeral(num) {
	let str ='';
	while(num > 1000) {
		str+= 'M';
		num-= 1000;
	}
	while(num > 900) {
		str+= 'CM';
		num-= 900;
	}
	while(num > 500) {
		str+= 'D';
		num-= 500;
	}
	while(num > 400) {
		str+= 'CD';
		num-= 400;
	}
	while(num > 100) {
		str+= 'C';
		num-= 100;
	}
	while(num > 90) {
		str+= 'XC';
		num-= 90;
	}
	while(num > 50) {
		str+= 'L';
		num-= 50;
	}
	while(num > 40) {
		str+= 'XL';
		num-= 40;
	}
	while(num > 10) {
		str+= 'X';
		num-= 10;
	}
	while(num > 9) {
		str+= 'IX';
		num-= 9;
	}
	while(num > 5) {
		str+= 'V';
		num-= 5;
	}
	while(num > 4) {
		str+= 'IV';
		num-= 4;
	}
	while(num > 1) {
		str+= 'I';
		num-= 1;
	}
	return str;
}

module.exports = romanNumeral;