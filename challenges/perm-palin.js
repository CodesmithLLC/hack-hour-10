/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */
function permPalin(str) {
    const original = str;
    if (str.split('').reverse().join() === str) return true;
    if (str.length === 1) return true;
    const stringArr = str.split('');




    function permutations(string, count, str1) {
        console.log(str1);
        let newString = string[string.length - 1].toString() + string.slice(0, string.length - 1)
        newString = newString.replace(/,/g,"");
        console.log(newString, str);
        if (newString === str1){
            console.log('here');
            if (count === 1){
                return false;
            }
            count++;
         }
        if (newString.split('').reverse().join('') === string){
            return true;
        }
        permutations(newString,count,str1);
    }

    return permutations(stringArr, 0, original)
}
permPalin('cbac');
module.exports = permPalin;
