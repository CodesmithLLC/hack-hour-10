/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.max = -Infinity;
}

Stack.prototype.push = function (val) {

  this.storage[this.index++] = val;
  if (val > this.max) { this.max = val };
  return this.index;
}

Stack.prototype.pop = function () {
  let popped = this.storage[--this.index];
  delete this.storage[this.index];
  if (popped === this.max) {
    this.max = -Infinity;
    for (let i in this.storage) {
      if (this.storage[i] > this.max) { this.max = this.storage[i] };
    }
  }
  return popped;
}

Stack.prototype.getMax = function () {
  return this.max;
}

module.exports = Stack;
