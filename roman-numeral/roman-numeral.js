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
    var numerals = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    function find (number, start) {
        if(number < 4) {
            if (number - 1 > 2){
                start.push(1)
                return find(number - 1, start);
            }
            if (number - 1 > 1){
                start.push(1)
                return find(number - 1, start);
            }
            if (number - 1 > 0) {
                start.push(1)
                start.push(1);
                return find(number - 1, start);
            }
            else {
                return start;
            }
        }
        else if(number === 0) return start;
        else if(number - 1000 >= 0) {
                start.push(1000)
                return find(number - 1000, start);
            } 
        else if(number - 900 >= 0) {
                start.push(900)
                return find(number - 900, start);
            } 
        else if(number - 500 >= 0) {
                start.push(500)
                return find(number - 500, start);
            } 
        else if(number - 400 >= 0) {
                start.push(400)
                return find(number - 400, start);
            } 
        else if(number - 100 >= 0) {
                start.push(100)
                return find(number - 100, start);
            } 
        else if(number - 90  >= 0) {
                start.push(90)
                return find(number - 90, start);
            } 
        else if(number - 50 >= 0) {
                start.push(50)
                return find(number - 50, start);
            } 
        else if(number - 40 >= 0) {
                start.push(40)
                return find(number - 40, start);
            } 
        else if(number - 10 >= 0) {
                console.log(number)
                start.push(10)
                return find(number - 10, start);
            } 
        else if(number - 9 >= 0) {
                start.push(9)
                return find(number - 9, start);
            } 
        else if(number - 5 >= 0) {
                start.push(5)
                return find(number - 5, start);
            } 
        else if(number - 4 >= 0) {
                start.push(4)
                return find(number - 4, start);
            } 
    }
    
    var ye = find(n, []);
     //ye.map((num) => numerals[num]).join('');
     return ye.map((num) => numerals[num]).join('');

}

module.exports = romanNumeral;

