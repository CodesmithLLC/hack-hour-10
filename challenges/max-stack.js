/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 1;
}

Stack.prototype.push = function (val) {
  this.storage[this.index] = val;
  this.index += 1;
  return Object.keys(this.storage).length;
}

Stack.prototype.pop = function () {
  this.index -= 1;
  return this.storage[this.index];
};

Stack.prototype.getMax = function () {
  const arr = Object.keys(this.storage);
  if (arr.length <= 0) return undefined;
  return Math.max(arr);
}

module.exports = Stack;