// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
 str+='-';
 let runner = [];
 let temp = [];
 str.toLowerCase().split('').forEach(ele => {
 	if(ele.match(/[A-Za-z]/)){
 		temp.push(ele);
 	}else if (temp.length !== 0){
    let check = JSON.parse(JSON.stringify(temp));
 		check = check.reverse().join('');
 		if(runner[runner.length-1] === check){
 				runner = runner.slice(0,runner.length-1);
 				temp = [];
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
