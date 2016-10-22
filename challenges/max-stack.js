/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.storage = {};
  this.max = -Infinity;
  
  this.push = function (val) {
    this.storage[this.length++] = val;
    if (val > this.max) this.max = val;
    return this.length;
  }

  this.pop = function () {
    if (this.length <= 0) return undefined;

    const lastValue = this.storage[this.length - 1];
    delete this.storage[this.length - 1];

    // Check if popped value is current max. If so, set max to highest value remaining in table.
    if (lastValue === this.max) {
      this.max = -Infinity;
      Object.keys(this.storage).forEach(key => {
        if (this.storage[key] > this.max) this.max = this.storage[key];
      });
    }

    this.length--;
    return lastValue;
  }

  this.getMax = function () {
    if (this.length <= 0) return undefined;
    return this.max;
  }
}

// const testStack = new Stack();
// testStack.push(3);
// testStack.push(2);
// testStack.push(5);
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.push(2)
// console.log(testStack);
// console.log(testStack.getMax());
// console.log(testStack.push(4));
// console.log(testStack.pop());

module.exports = Stack;