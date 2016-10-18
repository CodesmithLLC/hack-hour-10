// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  const wordsRegex = /[^a-z]*([a-z]+)[^a-z]*/gi

  // extract all of the words into an array
  const words = [];
  for (let word = wordsRegex.exec(str); word !== null; word = wordsRegex.exec(str)) {
    words.push(word[1]);
  }

  // check if words are balanced
  let changed = true;
  while (changed) {
    let i = -1;
    changed = false;

    // check each pair of consecutive words and see if they match. if they do, then remove them and set changed = true
    // this will signal to repeat the process again after reaching the end of the array
    while (words[++i + 1] !== undefined) {
      if (words[i].toLowerCase() === words[i + 1].split('').reverse().join('').toLowerCase()) {
        words.splice(i, 2);
        changed = true;
      }
    }
  }
  // after exiting the outer while loop, there are no more matches. check if everything matched.
  return (words.length === 0);
}

// console.log(matchWord('while elihw try yrt if cat dog god try tac yrt fi'));
module.exports = matchWord;
