// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// METHOD ONE

function matchWord(str) {
if (str.constructor !== String) {
  throw new Error('Input type must be a string.');
} 
let openStmt = '';
let closeStmt = '';

for (let i = 0; i < str.length; i++) {
  if (str[i].match(/[a-z]/i)) {
  	openStmt += str[i];
  	if (!str[i + 1].match(/[a-z]/i)) {
  	  break;
  	}
  }
}

if (str.indexOf(openStmt[openStmt.length - 1]) === str.indexOf(openStmt.split('').reverse().join(''))) {
  return false;
}

for (let i = str.length - 1; i >= str.indexOf(openStmt.split('').reverse().join('')); i--) {
  if (str[i].match(/[a-z]/i)) {
  	closeStmt += str[i];
  	if (!str[i - 1].match(/[a-z]/i)) {
  	  break;
  	}
  }
}
return openStmt.toLowerCase() === closeStmt.toLowerCase();
}

// METHOD TWO

// function matchWord(str) {
//   var keywords = str.match(/[a-zA-Z]+/g) || [];
//   var wordStack = [];
//   for (var word of keywords) {
//     if (
//       word.split('').reverse().join('').toLowerCase() === 
//       (wordStack[0] || '').toLowerCase()
//     )
//       wordStack.shift();
//     else
//       wordStack.unshift(word);
//   }
//   return !wordStack.length;
// }

module.exports = matchWord;
