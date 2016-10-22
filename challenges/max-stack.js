/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
// stack: adds to end of list,  removes from end of list

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
  return this.length;
};

Stack.prototype.pop = function() {
  if (Object.keys(this.storage).length === 0) return undefined;
  const result = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return result;
};

Stack.prototype.getMax = function() {
  let maxValue = -Infinity;
  if (Object.keys(this.storage).length === 0) return undefined;
  for (let item in this.storage) {
    if (this.storage[item] > maxValue) maxValue = this.storage[item];
  }
  return maxValue;
}

// let stack1 = new Stack();
// stack1.storage = {0:0, 1:1, 2:2, 3:3};
// stack1.length = 4
// console.log(stack1);
// stack1.push(4);
// console.log(stack1);
// console.log(stack1.pop());
// console.log(stack1);
// console.log(stack1.getMax());

module.exports = Stack;