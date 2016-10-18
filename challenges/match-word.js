/*jshint esversion: 6 */
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  str += " ";
  if (str === '') return true;

  let tempArr = [];
  let tempStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() != str[i].toLowerCase()) {
      tempStr += str[i];
    } else if (tempStr.length > 1) {
      tempArr.push(tempStr);
      tempStr = '';
    }
  }
  if (tempArr.length <= 1) return false;

  let counter = tempArr.length / 2;
  let decrementer = tempArr.length - 1;

  for (let j = 0; j < tempArr.length; j++) {
    if (tempArr[j].toLowerCase() === tempArr[decrementer].toLowerCase().split('').reverse().join('')) {
      counter--;
      decrementer--;
    }
  }
  if (counter <= 0) return true;
  else return false;
}

module.exports = matchWord;
