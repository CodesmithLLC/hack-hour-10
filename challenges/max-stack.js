/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.values = {};
    this.length = 0;
    this.max = -Infinity;
  }
  
  push(value) {
    if(typeof value === 'number' && this.max < value) { this.max = value; }
    this.values[this.length++] = value;
  }
  
  pop() {
    const removedValue = this.values[this.length - 1];
    delete this.values[this.length-- - 1];
    return removedValue;
  }
  
  getMax() {
    return this.max;
  }
}

module.exports = Stack;