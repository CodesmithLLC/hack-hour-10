/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.body = {};
  this.index = 0;
  this.max = undefined;
}

Stack.prototype.push = function (val) {
  this.body[this.index] = val;
  this.index++
  this.max = this.body[Object.keys(this.body).reduce((a, b) => (this.body[a] > this.body[b]) ? a : b)];
  return this.index;
}

Stack.prototype.pop = function () {
  let toPop = this.body[this.index-1];
  delete this.body[this.index-1];
  this.index--;
  this.max = this.body[Object.keys(this.body).reduce((a, b) => (this.body[a] > this.body[b]) ? a : b)];
  return toPop;
}

Stack.prototype.getMax = function () {
  return this.max;
}

let stack = new Stack();
stack.push(5);
stack.push(6)
stack.push(-5);
stack.push(7)
stack.pop();
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(10);
console.log(stack.max);
stack.pop();
console.log(stack.max);


module.exports = Stack;

