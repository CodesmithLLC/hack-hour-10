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
    if(n <= 0) {
        return;
    }
    var result = '';
    var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var numerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }
    function buildRoman(num) {
        if(num === 0) {
            return;
        }
        if(num - numbers[numbers.length-1] >= 0){
            result += numerals[numbers[numbers.length-1]];
            return buildRoman(num - numbers[numbers.length-1]);
        }
        else {
            numbers.pop();
            return buildRoman(num);
        }
    }
    // function buildRoman(num) {
    //     if(num === 0) {
    //         return;
    //     }
    //     if(num - 1000 >= 0){
    //         result += 'M';
    //         return buildRoman(num - 1000);
    //     }
    //     if(num - 900 >= 0){
    //         result += 'CM';
    //         return buildRoman(num - 900);
    //     }
    //     if(num - 500 >= 0){
    //         result += 'D';
    //         return buildRoman(num - 500);
    //     }
    //     if(num - 400 >= 0){
    //         result += 'CD';
    //         return buildRoman(num - 400);
    //     }
    //     if(num - 100 >= 0){
    //         result += 'C';
    //         return buildRoman(num - 100);
    //     }
    //     if(num - 90 >= 0){
    //         result += 'XC';
    //         return buildRoman(num - 90);
    //     }
    //     if(num - 50 >= 0){
    //         result += 'L';
    //         return buildRoman(num - 50);
    //     }
    //     if(num - 40 >= 0){
    //         result += 'XL';
    //         return buildRoman(num - 40);
    //     }
    //     if(num - 10 >= 0){
    //         result += 'X';
    //         return buildRoman(num - 10);
    //     }
    //     if(num - 9 >= 0){
    //         result += 'IX';
    //         return buildRoman(num - 9);
    //     }
    //     if(num - 5 >= 0){
    //         result += 'V';
    //         return buildRoman(num - 5);
    //     }
    //     if(num - 4 >= 0){
    //         result += 'IV';
    //         return buildRoman(num - 4);
    //     }
    //     if(num - 1 >= 0){
    //         result += 'I';
    //         return buildRoman(num - 1);
    //     }
    // }
    buildRoman(n);
    return result;
}
// console.log(romanNumeral(190));


module.exports = romanNumeral;