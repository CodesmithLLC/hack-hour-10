// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	str += '-';				// add one extra char for forEach call
	let runner = [];		//total array, can only delete words when matched to last one, must end empty
	let temp = [];		//one word builder-array
	str.toLowerCase().split('').forEach(ele => {
		if (ele.toUpperCase() !== ele) {
			temp.push(ele);
		} else if (temp.length !== 0) {
			let check = temp.slice(0).reverse().join('');		// avoiding mutating the original array by cloning
			if (runner[runner.length - 1] === check) {
				runner = runner.slice(0, runner.length - 1);
				temp = [];			//reset one-word builder array
			}
			else {
				runner.push(temp.join(''));
				temp = [];
			}
		}
	});
	return runner.join('').length === 0;
}

module.exports = matchWord;
