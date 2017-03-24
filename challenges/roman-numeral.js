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
  if (!Number.isInteger(n) || n < 0 || n > 3999) return 'Please insert an integer between 0 and 3999 inclusive';

  // Access roman numerals based on place
  const numerals = {
    0: ['I', 'V', 'X'],
    1: ['X', 'L', 'C'],
    2: ['C', 'D', 'M'],
    3: ['M'],
  };

  // Build up result string to return
  let result = '';

  // Convert input to string to access digits and length
  const numString = n.toString();

  // Loop through digit places in descending order
  for (let i = numString.length - 1; i >= 0; i--) {
    const place = numerals[i];
    const digit = numString[numString.length - 1 - i];

    // Each conditional represents the roman numeral pattern based on place and digit
    if (digit === '0');
    if (digit === '1') result += place[0];
    if (digit === '2') result += place[0] + place[0];
    if (digit === '3') result += place[0] + place[0] + place[0];
    if (digit === '4') result += place[0] + place[1];
    if (digit === '5') result += place[1];
    if (digit === '6') result += place[1] + place[0];
    if (digit === '7') result += place[1] + place[0] + place[0];
    if (digit === '8') result += place[1] + place[0] + place[0] + place[0];
    if (digit === '9') result += place[0] + place[2];
  }

  // Return roman numeral form!
  return result;
}


// function romanNumeral(n) {
//   if (!Number.isInteger(n) || n < 0 || n > 3999) return 'Please insert an integer between 0 and 3999 inclusive';

//   // Store unique roman numeral combinations  
//   const roman = {
//     0: '',
//     1: 'I',
//     2: 'II',
//     3: 'III',
//     4: 'IV',
//     5: 'V',
//     6: 'VI', 
//     7: 'VII',
//     8: 'VIII',
//     9: 'IX',
//     10: 'X',
//     20: 'XX',
//     30: 'XXX',
//     40: 'XL',
//     50: 'L',
//     60: 'LX',
//     70: 'LXX',
//     80: 'LXXX',
//     90: 'XC',
//     100: 'C',
//     200: 'CC',
//     300: 'CCC',
//     400: 'CD',
//     500: 'D',
//     600: 'DC',
//     700: 'DCC',
//     800: 'DCCC',
//     900: 'CM',
//     1000: 'M',
//     2000: 'MM',
//     3000: 'MMM',
//   };

//   // Build up result with each conversion of a digit to numeral form using our store  
//   let numeral = '';
  
//   // Convert input to string to access length property and each digit
//   const num = n.toString();

//   // Each conditional statement adds zeros for digits in tens, hundred and thousands place, 
//   // converts that value to roman numeral using our store, 
//   // and concats numerals in descending order. Number conversion used for leading zeros.
//   if (num.length === 4) {
//     numeral += roman[Number(num[0] + '000')];
//     numeral += roman[Number(num[1] + '00')];
//     numeral += roman[Number(num[2] + '0')];
//     numeral += roman[Number(num[3])];
//   }

//   if (num.length === 3) {
//     numeral += roman[Number(num[0] + '00')];
//     numeral += roman[Number(num[1] + '0')];
//     numeral += roman[Number(num[2])];
//   }

//   if (num.length === 2) {
//     numeral += roman[Number(num[0] + '0')];
//     numeral += roman[Number(num[1])];
//   }

//   if (num.length === 1) {
//     numeral += roman[Number(num[0])];
//   }

//   // Return our number in roman numeral form!
//   return numeral;
// }

// function romanNumeral(n) {
//   if (!Number.isInteger(n) || n < 0 || n > 3999) return 'Please insert an integer between 0 and 3999 inclusive';
  
//   const roman = {0:"", 1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 
//                7:"VII", 8:"VIII", 9:"IX",10:"X", 20:"XX", 30:"XXX",
//                40:"XL", 50:"L",60:"LX",70:"LXX", 80:"LXXX", 90:"XC",
//                100:"C",200:"CC",300:"CCC",400:"CD", 500:"D",600:"DC",
//                700:"DCC",800:"DCCC",900:"CM",1000:"M", 2000:"MM", 
//                3000:"MMM",4000:"MMMM"
//                };
 
//   const num = n.toString();
//   const zeros = {
//     1: '',
//     2:'0',
//     3:'00',
//     4:'000',
//   };

//   let numeral  = '';
//   let count  = 0;

//   while (count < num.length){
//     numeral += roman[parseInt(num[count] + zeros[num.length - count])];
//     count++;
//   }

//   return numeral;
// }

// function romanNumeral(n) {
//   if (!Number.isInteger(n) || n < 0 || n > 3999) return 'Please insert an integer between 0 and 3999 inclusive';

//   const store = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
//                     40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];
  
//   let value = '';
    
//   // Use i += 2 to skip over letters
//   for (let i = 0; n > 0 && i < store.length; i += 2) {
//     // Keep checking and adding values at a specific index
//     while (n >= store[i]) {
//       // Append the Roman Numeral and decrease n by that amount
//       value += store[i + 1];
//       n -= store[i];
//     }
//   }

//   return value;
// }

console.log(romanNumeral(0)); // ''
console.log(romanNumeral(1)); // I
console.log(romanNumeral(3)); // III
console.log(romanNumeral(4)); // IV
console.log(romanNumeral(5)); // V
console.log(romanNumeral(9)); // IX
console.log(romanNumeral(10)); // X
console.log(romanNumeral(100)); // C
console.log(romanNumeral(1000)); // M
console.log(romanNumeral(12)); // XII
console.log(romanNumeral(99)); // XCIX
console.log(romanNumeral(440)); // CDXL
console.log(romanNumeral(1567)); // MDLXVII
console.log(romanNumeral(3000)); // MMM
console.log(romanNumeral(3999)); // MMMCMXCIX
console.log(romanNumeral(4000)); // error
console.log(romanNumeral(-5)); // error
console.log(romanNumeral('doggie')); // error

// for (let i = 0; i <= 4000; i++) {
//   console.log(romanNumeral(i));
// }

module.exports = romanNumeral;
