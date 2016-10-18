// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by 
// its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  function isBackward(string1, string2) {
    return string1.toLowerCase() === string2.split('').reverse().join('').toLowerCase();
  }
  let tags = str.match(/([a-zA-Z]+)/g);
  let closed = [];
  closed.push(tags[0]);

  for(let i = 1; i < tags.length; i++) {
    if( isBackward(tags[i], closed[closed.length - 1]) ) {
      closed.pop();
    }
    else {
      closed.push(tags[i]);
    }
  }
  return closed[0] === undefined;
}


module.exports = matchWord;
