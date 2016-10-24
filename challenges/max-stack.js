/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
};

Stack.prototype.push = function(val) {
  this.stack.push(val);
  return this.stack.length;
};

Stack.prototype.pop = function () {
  return this.stack.pop();
};

Stack.prototype.getMax = function () {
  return this.stack.reduce((max, elem) => elem > max ? elem : max);
};

let test = new Stack();
// console.log(test);
console.assert(test.push(1) === 1);
console.assert(test.getMax() === 1);
console.assert(test.pop() === 1);
console.log(test.pop());

module.exports = Stack;
