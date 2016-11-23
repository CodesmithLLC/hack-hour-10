// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let letterCheck = /^[a-zA-Z]+$/;
  let symbolCheck = /[^a-zA-Z]/;
  let wordCollect = '';
  let wordStorage = [];

  function pal(string) {
    return string.split('').reverse().join('');
  }

  for (let i = 0; i < str.length; i++) {
    // initiate word
    if (letterCheck.test(str[i])) {
      wordCollect += str[i].toLowerCase();
    }
    // word concludes
    if ((symbolCheck.test(str[i]) || !str[i + 1]) && wordCollect) {
      if (!wordStorage.includes(pal(wordCollect))) {
        wordStorage.push(wordCollect);
      } else if (wordStorage.includes(pal(wordCollect)) && pal(wordCollect) !== wordStorage[wordStorage.length - 1]) {
        return false;
      } else if (wordStorage.includes(pal(wordCollect)) && pal(wordCollect) === wordStorage[wordStorage.length - 1]) {
        wordStorage.pop();
      }
      wordCollect = '';
    }
  }

  if (wordStorage.length > 0) return false;
  else return true;
}

console.log(matchWord('__END_DNE-----'));  // -> true
console.log(matchWord('__ENDDNE__'));  // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  // -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  // -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  // -> true
console.log(matchWord(''));  // -> true


module.exports = matchWord;
