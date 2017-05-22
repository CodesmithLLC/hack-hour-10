/*
 * FUNCTIONAL PROGRAMMING
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

const H = (letters = 'H') => optional => `${letters ? letters : ''}${optional ? optional : ''}`;

/*
 * PART 2
 * Create three more functions with the same functionality
 * But with the letters 'e', 'l', and 'o'
 * e('llo'); // -> 'ello'
 * l('lo'); // -> 'llo'
 * l('o'); // -> 'lo'
 * o(); // -> 'o'
 */

const e = (letters = 'e') => optional => `${letters ? letters : ''}${optional ? optional : ''}`;

const l = (letters = 'l') => optional => `${letters ? letters : ''}${optional ? optional : ''}`;

const o = (letters = 'o') => optional => `${letters ? letters : ''}${optional ? optional : ''}`;

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

// OR

const pipe = functions => x => functions.reduce((prev, curr) => curr(prev), x);
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

const letterGenerator = letters => optional =>
  `${letters ? letters : ''}${optional ? optional : ''}`;

const compose = args => x => args.reduceRight((a, b) => b(a), x);

const HelloPiped = pipe([
  letterGenerator('H'),
  letterGenerator('e'),
  letterGenerator('l'),
  letterGenerator('l'),
  letterGenerator('o')
])();
const WorldPipe = pipe([
  letterGenerator('W'),
  letterGenerator('o'),
  letterGenerator('r'),
  letterGenerator('l'),
  letterGenerator('d')
])();
console.log('pipe', HelloPiped, ' ', WorldPipe);
const Hello = compose([
  letterGenerator('H'),
  letterGenerator('e'),
  letterGenerator('l'),
  letterGenerator('l'),
  letterGenerator('o')
])();
const World = compose([
  letterGenerator('W'),
  letterGenerator('o'),
  letterGenerator('r'),
  letterGenerator('l'),
  letterGenerator('d')
])();
console.log('compose', Hello, World);

const objectToExport = {
  H,
  e,
  l,
  o,
  pipe,
  letterGenerator
};

module.exports = objectToExport;
