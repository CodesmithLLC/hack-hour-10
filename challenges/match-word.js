// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // empty string returns true
  if (str === '') return true;

  // use regex to extract words, lowercase all words
  let words = str.match(/[a-zA-Z]+/g);
  words = words.map(word => word.toLowerCase());

  // odd number of words returns false
  if (words.length % 2 === 1) return false;

  // find matches with a loop
  while (words.length) {
    // see if there exists in words[] the palindrome of words[0]
    // or if the index of the palindrome indicates not properly closed
    const foundIndex = words.indexOf(lowerPalindrome(words[0]));
    if (foundIndex === -1 || foundIndex % 2 === 0) {
      return false;
    } else {
      // remove matched words
      words.splice(foundIndex, 1);
      words.shift();
    }
  };
  return true;
}

// console.assert(matchWord('__END_DNE-----') === true);  //-> true
// console.assert(matchWord('__ENDDNE__') === false);  //-> false       (not separated by a space)
// console.assert(matchWord('IF()()fi[]') === true); // -> true        (should be case-insensitive)
// console.assert(matchWord('for__if__rof__fi') === false);  //-> false     not properly closed. like ( [) ]
// console.assert(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw') === true);  //-> true
// console.assert(matchWord('') === true);  //-> true

function isChar(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function lowerPalindrome(str) {
  return str.toLowerCase().split('').reverse().join('');
}

// console.log('palin');
// console.log(lowerPalindrome('dne'));
// console.log(lowerPalindrome('FI'));
// console.log(lowerPalindrome('eLihw'));

// console.log(isChar('a'));
// console.log(isChar('z'));
// console.log(isChar('A'));
// console.log(isChar('Z'));
// console.log(isChar('!'));

module.exports = matchWord;
