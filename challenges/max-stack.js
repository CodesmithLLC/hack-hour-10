/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.max = undefined;
  this.values = {}
}

Stack.prototype.push = function (value) {
  if (typeof value !== 'number') {
    return NaN;
  }
  this.values[this.length] = value;
  if (this.length === 0 || value > this.max) {
    this.max = value;
  }
  this.length += 1;
  return this.length;
};
Stack.prototype.pop = function () {
  const currVal = this.values[this.length - 1];
  delete this.values[this.length - 1];
  if (this.length <= 1) {
    this.max = undefined;
  } else {
    let newMax = null;
    for (prop in this.values) {
      const val = this.values[prop];
      if (!newMax || val > newMax) {
        newMax = val;
      }
    }
    this.max = newMax;
  }
  this.length -= 1;
  return currVal;
};
Stack.prototype.getMax = function () {
  return this.max;
};


// const stack = new Stack();
// console.log(stack.push(5));
// console.log(stack.getMax());
// console.log(stack.push(4));
// console.log(stack.getMax());
// console.log(stack.push(7));
// console.log(stack.getMax());
// console.log(stack.pop());
// console.log(stack.getMax());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
module.exports = Stack;