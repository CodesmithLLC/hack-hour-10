/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {

  constructor() {
    this.length = 0;
    this.max = -Infinity;
  }

  push(element) {
    this.max = element > this.max ? element : this.max;
    this[this.length++] = element;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;
    const popped = this[this.length - 1];
    delete this[--this.length];
    if (popped === this.max) {
      this.max = -Infinity;
      for (let i = 0; i < this.length; i++) {
        this.max = this[i] > this.max ? this[i] : this.max;
      }
    }
    return popped;
  }

  getMax() {
    return this.length > 0 ? this.max : undefined;
  }
}

module.exports = Stack;