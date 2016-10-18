// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let wordArr = str.toLowerCase().replace(/[_\W]+/g, " ").split(" ").filter(Boolean);
	let firstWord = [];
	
	if (wordArr.length === 1) return false;
	
	let wordHash = wordArr.reduce((acc, curr) => {
		let str = "";
		for (let i = curr.length - 1; i >= 0; i--) {
			str += curr[i];
		}
		if (!acc[str]) acc[curr] = str;
		return acc;
	}, {});
	
	for (let i = 0; i < wordArr.length; i++) {
		if (wordHash[wordArr[i]]) {
			firstWord.push(wordArr[i]);
		} else if (wordHash[firstWord.pop()] !== wordArr[i]) {
			return false;
		}
	}

	return true;
}

module.exports = matchWord;
