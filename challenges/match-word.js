// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord1(str) {
  let stack = [];

  let result = false;

  strArr = str.replace(/[^a-z]/gi, ' ').split(' ');
  
  for (let i in strArr) {
    if (strArr[i] !== '' && stack.includes(strArr[i]) === false) {
      stack.push(strArr[i].split("").reverse().join(""));
      result = false;
    }
    else if (strArr[i] !== '' && strArr[i] === stack.pop()) {
      result = true;
    }
  }
  return result;
}

console.log(matchWord1('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

























function matchWord(str) {
  if (str === '') return true;

  let stack = [];

  str = str.toLowerCase();
  str = str.replace(/[^a-z]/gi, '*');
  strArr = str.split("*");

  let result = false;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '' && stack.includes(strArr[i]) === false) {
      stack.push(strArr[i].split("").reverse().join(""));
      result = false;
    }
    
    else if (strArr[i] !== '' && strArr[i] === stack.pop()) {
      result = true;
    }
  }
  return result;
}
// module.exports = matchWord;
