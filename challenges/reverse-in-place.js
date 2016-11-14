/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
<<<<<<< HEAD
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
=======
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
>>>>>>> 124383488a9afbdcfc751399f0edaab82ddd1178
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
<<<<<<< HEAD
  // validate input
  if (!Array.isArray(array)) return 'That\'s not an array!';
  if (!array) return 'No Input! Error!';
  if (array.length <= 1) return array;
  // pop off the last item of array, and splice it in at its new home.
  // note that we end at i = array.length - 2, because the first item
  // will have 'migrated' all the way to the back due to all of the proceeding popping.
  for (let i = 0; i < array.length - 1; i++) {
    array.splice(i, 0, array.pop());
  }
  return 1;
}

module.exports = reverseInPlace;
=======

}

module.exports = reverseInPlace;
>>>>>>> 124383488a9afbdcfc751399f0edaab82ddd1178
