// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    for (var i = 0, currentWord = [], wordArr = [], currBool = false; i < str.length; i++) {
        if (str[i].match(/[a-zA-Z]/)) {
            currentWord.push(str[i]);
            currBool = true;
        }
        else if (currBool) {
            wordArr.push(currentWord.join("").toLowerCase())
            currentWord = [];
            currBool = false;
        }
    }
    if (currentWord.filter(e => e).length > 0) wordArr.push(currentWord.join(""))
    if (wordArr.length === 1) return false;
    for (var stack = [], k = 0; k < wordArr.length; k++) {
        if (stack.length) {
            if (stack[stack.length - 1] === wordArr[k].split("").reverse().join("")) stack.pop();
            else stack.push(wordArr[k])
        }
        else stack.push(wordArr[k]);
    }
    return !stack.length;
}

module.exports = matchWord;
