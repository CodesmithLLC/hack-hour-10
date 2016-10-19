// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed".
//
// Write a function that takes a string and returns true if EVERY  word is closed by its backwards counterpart.
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false        (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)

// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]

// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true

// matchWord('');  -> true


 function matchWord(str) {
   //array of only words NO spaces && no characters.
   let arrayOfOnlyWords = str.toLowerCase().split(/[^a-zA-Z]/).filter(function(x){
     if (x !== undefined) return x;
   });
  console.log(arrayOfOnlyWords);

   let array = [];
   let word = '';

   for (let i = 0; i < arrayOfOnlyWords.length; i++) {
     //specific word in array
     let string = arrayOfOnlyWords[i];
       console.log(string);
     //specific word but reversed
     let reversed = string.split('').reverse().join('');
       console.log(reversed);


     if (array.length === 0) {
       word = string;

       array.push(string);
       console.log(array);
       } else {
         if (reversed === word) {
           array.pop();
           word = array[array.length - 1];
           console.log(word);
           console.log(array);
       } else {
           array.push(string);
           word = string;
          console.log(word);
       }
      }
   }
   return (!array.length > 0);
  }



// console.log(matchWord('__END_DNE-----')); // -> true
// console.log(matchWord('__ENDDNE__')); // false
// console.log(matchWord('IF()()fi[]')); // true
// console.log(matchWord('for__if__rof__fi'));  //-> false
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // true
// console.log(matchWord('')); // true// end of func


module.exports = matchWord;


/*
	- if empty string === true;
	- ELSE -->
			* asses whether there is a word in the string.
							* if (str.replace(/[^0-9a-z]/gi, '').length > 0 )  [[[ THERE IS A WORD, org String is unaffected]]]

			* if there is a word, there must be a MATCH of its' reverse:
					* convert string to array, reverse it and save that into a var
					* compare that var to the original string turned into an array




function balancedParens(input){
  let i = 0;
  let temp = [];

  while (i < input.length) {
    if (input[i] === '(') {
      temp.push('(');
    }

    if (input[i] === ')' && temp.pop() !== '('){
      return false;
    }
    if (input[i] === '{'){
      temp.push('{');
    }
    if (input[i] === '}' && temp.pop() !== '{'){
      return false;
    }
    if (input[i] === '[') {
      temp.push('[');
    }

    if (input[i] === ']' && temp.pop() !== '['){
      return false;
    }
      i++;
  }
  //for cases of only 1 item in string
  if (temp.length > 0){
    return false;
  } else {
    return true;
  }
}
 */


/*


/*
1. removing all extra characters ---> except the ones in between are the words
palindromes
2.
*/

function matchWord(str) {
  var noTrailingString =  str.replace(/^[^a-z\d]*|[^a-z\d]*$/gi, ''); //gets rid of leading / trailing non-alpha characters
  return noTrailingString;

}


console.log(matchWord('__END_DNE-----')); // -> true
console.log(matchWord('__ENDDNE__')); // false
console.log(matchWord('IF()()fi[]')); // true
console.log(matchWord('for__if__rof__fi'));  //-> false
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // true
console.log(matchWord('')); // true


 */