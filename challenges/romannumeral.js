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
   if (n === 0) return '';
   if (n < 4) return 'I'.repeat(n);
   if (n === 4) return 'IV';
   if (n === 5) return 'V';
   if (n === 9) return 'IX';
   if (n > 999) {
       let str = 'M'
   	   return str += romanNumeral(n-1000);
   }
   if (n > 899 && n < 1000){
   	  let str = 'CM';
    	return str += romanNumeral(n-900);
   }
   if (n > 499 && n < 900){
 	 let str = 'D';
 	 return str += romanNumeral(n-500);
   }
   if (n > 399 && n < 500){
   	let str = "CD";
   	return str += romanNumeral(n-400);
   }
   if (n > 99 && n < 400){
   	let str = "C";
   	return str += romanNumeral(n-100);
   }
   if (n > 89 && n < 100){
   	let str = "XC"
   	return str += romanNumeral(n-90);
   }
   if (n > 49  && n < 90){
   	let str = "L"
   	return str += romanNumeral(n - 50);
   }
    if (n < 9 && n > 5) {
     let str = 'V';
      return str += romanNumeral(n-5);
   }
   if (n > 9 && n < 40){
   	let str = 'X';
   	return str += romanNumeral(n-10);
   }
 }

module.exports = romanNumeral;
