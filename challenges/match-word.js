// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let strings = str.split(/[^a-zA-Z]/);
  strings = strings.filter(x => { if (x) return x });

  if (strings.length % 2) return false;
  if (!strings.length) return true;

  let stack = [];
  let latest;
  for (let i = 0; i < strings.length; i += 1) {
    let string = strings[i].toLowerCase();
    let reversed = string.split('').reverse().join('');
    
    if (stack.length === 0) {
      latest = string;
      stack.push(string);
    }
    else {
      if (reversed === latest) {
        stack.pop();
        latest = stack[stack.length - 1];
      } else {
        stack.push(string);
        latest = string;
      }
    }
  }
  return !(stack.length > 0);
}

module.exports = matchWord;

console.log('expected: true, false, true, false, true, true\n', 'actual:',
  matchWord('__END_DNE-----'),
  matchWord('__ENDDNE__'),
  matchWord('IF()()fi[]'),
  matchWord('for__if__rof__fi'),
  matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'),
  matchWord('')
);