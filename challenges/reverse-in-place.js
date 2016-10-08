/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
  if (!canReverseInPlace(array)) return; 
  let swapMem;
  let lastIndex = array.length - 1;
  for (let i = 0; i < Math.floor(lastIndex / 2); i++) {
    swapMem = array[i];
    array[i] = array[lastIndex - i];
    array[lastIndex - i] = swapMem;
  }
}

// returns true if the input is an array of chars (strings of length 1)
function canReverseInPlace(array) {
  if (!Array.isArray(array)) return;
  return array.every(elem => typeof elem === 'string' && elem.length === 1);
}

// testing

// odd length array
let hello = ['a', 'b', 'c', 'd', 'e'];
console.log(hello);
reverseInPlace(hello);
console.log(hello);

// even length array
hello = ['1', '2', '3', '4', '5'];
hello.push('?');
console.log(hello);
reverseInPlace(hello);
console.log(hello);

// incorrect input
hello = {yah: 'nah'}; // object
console.assert(reverseInPlace(hello) === undefined);
hello = 'hello'; // string
console.assert(reverseInPlace(hello) === undefined);
hello = 123; // number
console.assert(reverseInPlace(hello) === undefined);
hello = ['w', 0, 'w']; // mixed array (number)
console.assert(reverseInPlace(hello) === undefined);
hello = ['w', ['o'], 'w']; // mixed array (array)
console.assert(reverseInPlace(hello) === undefined);

module.exports = reverseInPlace;