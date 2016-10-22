/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [],
  this.push = (val) => {
    if (val.constructor === Number) {
      this.storage[this.storage.length] = val;
      return this.storage.length;
    }
  },
  this.pop = () => {
  	if (this.storage.length) {
      let elem = this.storage[this.storage.length - 1];
      this.storage.splice(this.storage.length - 1, 1);
      return elem;
  	}
    return undefined;
  },
  this.getMax = () => {
    if (this.storage.length) {
      return Math.max(...this.storage);
    }
    return undefined;
  };
}


module.exports = Stack;