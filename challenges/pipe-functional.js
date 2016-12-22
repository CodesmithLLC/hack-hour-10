/*
  FUNCTIONAL PROGRAMMING
 * You will not be creating any variables in this hack hour other than functions
 *
 * Not for the weak of heart. I challenge you.
 * Every single one of these functions can be written in one line :)
 */

/*
 * PART 1
 * Create a function 'H'
 * Its going to take in a single variable called letters
 * It will return 1 of two things
 * 1. The passed in letters plus the letter 'H'
 * 2. if there is no argument passed in just the letter 'H'
 * H('ello'); // -> 'Hello'
 * H(); // -> 'H'
 */

// function H(letters) {
// 	if (arguments.length === 0) {
// 		return 'H';
// 	} else {
// 		return 'H' + letters;
// 	}
// }


// OR

const H = (letters = '') => 'H' + letters;
// console.log(H('ello')); // -> 'Hello'
// console.log(H()); // -> 'H'





/*
 * PART 2
 * Create three more functions with the same functionality
 * But with the letters 'e', 'l', and 'o'
 * e('llo'); // -> 'ello'
 * l('lo'); // -> 'llo'
 * l('o'); // -> 'lo'
 * o(); // -> 'o'
 */

// function e(letters) {
// 	if (arguments.length === 0) {
// 		return 'e';
// 	} else {
// 		return 'e' + letters;
// 	}
// }
// console.log(e()); // -> 'ello'


// function l(letters) {
// 	if (arguments.length === 0) {
// 		return 'l';
// 	} else {
// 		return 'l' + letters;
// 	}
// // }

// function o(letters) {
// 	if (arguments.length === 0) {
// 		return 'o';
// 	} else {
// 		return 'o' + letters;
// 	}
// }

const e = (letters = '') => 'e' + letters;
const l = (letters = '') => 'l' + letters;
const o = (letters = '') => 'o' + letters;




/*
 * PART 3 PIPE
 * Create a function 'pipe' that will take in an array of functions.
 * It will then return a function that takes one input, a starting value
 * This inner function will call all the functions in the passed in array in order
 * It will pass each function's returned result into the next function call
 * If there is a starting value it will plug it in as the input to the first function in the array
 * const hello = pipe([H, e, l, l, o]); // -> [function]
 * hello(); // -> 'Hello'
 * const ello = pipe([e, l, l, o]); // -> [function]
 * ello('J'); // -> 'Jello'
 */

// function pipe(functions) {
// 	return (start) => {
// 		return functions.reduce( (accum, curr) => {
// 			return curr(accum);
// 		}, start).split('').reverse('').join('');
// 	}
// }

// OR

const pipe = (functions) => (start = '') => functions.reduce( (accum, curr) => {
	console.log(accum, 'this is accum');
	console.log(curr, 'this is curr');
	return accum + curr();
}, start);

// const hello = pipe([H, e, l, l, o]); // -> [function]
// console.log(hello()); // -> 'Hello')

 const ello = pipe([e, l, l, o]); // -> [function]
 // console.log(ello());
 // console.log(ello('J')); // -> 'Jello'

/*
 * PART 4 DYNAMIC FUNCTION CREATION
 * Imagine if you had to create all strings in this manner.
 * You would have to create a function for every single possible character.
 * How can we abstract that out into a function
 * Create a function letterGenerator
 * It will abstract out the functionality of those earlier defined letter functions
 * It is going to return functions with the same functionality as your previous letter functions
 * These functions will create the letter based on the input to the outer function
 * const H = letterGenerator('H');
 * const i = letterGenerator('i');
 * console.log(H(i())); // -> 'Hi';
 * const Hello = pipe([
 *   letterGenerator('H'),
 *   letterGenerator('e'),
 *   letterGenerator('l'),
 *   letterGenerator('l'),
 *   letterGenerator('o'),
 * ]);
 * const World = pipe([
 *   letterGenerator('W'),
 *   letterGenerator('o'),
 *   letterGenerator('r'),
 *   letterGenerator('l'),
 *   letterGenerator('d'),
 * ]);
 * const helloWorld = pipe([
 *   Hello,
 *   letterGenerator(','),
 *   letterGenerator(' '),
 *   World,
 *   letterGenerator('!'),
 * ]);
 * helloWorld(); // -> 'Hello, World!'
 */

// function letterGenerator(letter) {

// }

// OR

const letterGenerator = (letter) => (string = '') => letter + string;

  // const H = letterGenerator('H');
  // const i = letterGenerator('i');
  // console.log(H(i())); // -> 'Hi';
  // const Hello = pipe([
  //   letterGenerator('H'),
  //   letterGenerator('e'),
  //   letterGenerator('l'),
  //   letterGenerator('l'),
  //   letterGenerator('o'),
  // ]);
  // const World = pipe([
  //   letterGenerator('W'),
  //   letterGenerator('o'),
  //   letterGenerator('r'),
  //   letterGenerator('l'),
  //   letterGenerator('d'),
  // ]);
  // const helloWorld = pipe([
  //   Hello,
  //   letterGenerator(','),
  //   letterGenerator(' '),
  //   World,
  //   letterGenerator('!'),
  // ]);
  // console.log(helloWorld()); // -> 'Hello, World!'

const objectToExport = {
  H,
  e,
  l,
  o,
  pipe,
  letterGenerator,
};

module.exports = objectToExport;
