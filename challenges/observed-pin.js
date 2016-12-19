/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs.
But please note that all PINs, the observed one and also the results, must be strings, because of
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "1": ["1", 2", "4"]
  			//11, 12, 14
  			//22,21,24
  			//44,42,41
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/




function getPINs(observed) {
	let observedlength = observed.length;

	let possObj = {};

	let resultsArray = [];
	//observed # ===  a SINGLE number from the PAD to get the pattern. Can give you the number itself & the numbers adjacent(vert || horiz)
	//loop to create the possibility Object
	for (let i = 0; i <= 9; i++) {
		//when i === 0
		if(i === 0) {
			possObj[i] = ["0", "8"]
		}
		if(i === 1) {
			possObj[i] = ["1", "2", "4"]
		}
		if(i === 2) {
			possObj[i] = ["2", "1", "3", "5"]
		}
		if(i === 3) {
			possObj[i] = ["3", "2", "6"]
		}
		if(i === 4) {
			possObj[i] = ["4", "1", "7", "5"]
		}
		if(i === 5) {
			possObj[i] = ["5", "2", "4", "6", "8"]
		}
		if(i === 6) {
			possObj[i] = ["6", "3", "5", "9"]
		}
		if(i === 7) {
			possObj[i] = ["7", "4", "8"]
		}
		if(i === 8) {
			possObj[i] = ["8","7", "5", "9", "0"]
		}
		if(i === 9) {
			possObj[i] = ["9", "8", "6"]
		}
	}

	//function that goes through the submitted string number and for each CHARACTER produces the corresponding possibilities array form the possibility object
	let charactersinobserved = [];
	for ( let i = 0; i < observed.length; i++) {
		let charactercollected = observed[i];
		charactersinobserved.push(possObj[charactercollected]);
	}

	//go through each array collected in charactersinobserved, and extract each string value. each string value must now be concatenated with itself & every other value
	observedlength
	let testrun = charactersinobserved[0];


	// return charactersinobserved;
	// return resultsArray;
	// return possObj;
}
// console.log(getPINs("0")); //["8"]
// console.log(getPINs("8")); //["5", "7", "8", "9", "0"],
// console.log(getPINs('11')); //["11", "22", "44", "12", "21", "14", "41", "24", "42"],
console.log(getPINs("369")); //["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],


// module.exports = getPINs