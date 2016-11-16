// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let stack = [];
  str = str.toLowerCase();
  let letters = /^[a-z]+$/;
  let curr = '';
  let inStr = false;

  for (let i = 0; i < str.length; i++) {
    if (letters.test(str[i])) {
      inStr = true;
      curr += str[i];
    } else inStr = false;
    if (str[i + 1] === undefined) inStr = false;
    if (curr && !inStr) {
      if (reverse(curr) !== stack[stack.length - 1])
        stack.push(curr);
      else if (reverse(curr) === stack[stack.length - 1])
        stack.pop();
      curr = '';
    }
    // console.log(stack);
  }
  if (!stack.length)
    return true;
  else
    return false;
}

function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// console.log(matchWord('__END_DNE-----'));//t
// console.log(matchWord('__ENDDNE__'));//f
// console.log(matchWord('IF()()fi[]'))//t
// console.log(matchWord('for__if__rof__fi'));//f
module.exports = matchWord;
