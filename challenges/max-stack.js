/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// function Stack() {
//   this.body = [];
// }
//
// Stack.prototype.push = function(val) {
//   return this.body.push(val);
// }
//
// Stack.prototype.pop = function() {
//   return this.body.pop();
// }
//
// Stack.prototype.getMax = function() {
//   let max = this.stack.pop();
//   for (let i = 0; i < this.stack.length; i++) {
//     if (this.stack[i] > max) max = this.stack[i];
//   }
//   return max;
// }

function Stack() {
  this.stack = [];
  this.maxStack = [];
}

Stack.prototype.push = function(val) {
  this.stack.push(val);
  let max = (!this.maxStack.length || val > this.maxStack[this.maxStack.length - 1]) ? val : this.maxStack[this.maxStack - 1];
  return this.maxStack.push(max);
}

Stack.prototype.pop = function() {
  this.maxStack.pop();
  return this.stack.pop();
}

Stack.prototype.getMax = function() {
  return this.maxStack[this.maxStack.length - 1];
}


module.exports = Stack;

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.pop();
// console.log(stack);
// let max = stack.getMax();
// console.log(max)
