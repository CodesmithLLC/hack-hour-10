/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
  this.max = undefined;
  this.push = function (ele) {
    if(ele > this.max || this.max === undefined) this.max = ele;
    this.storage[this.length] = ele;
    return ++this.length;
  };
  this.pop = function () {
    let temp = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    // deleting makes sure the key disappears, but using undefined instead actually has speed boost
    this.length--;
    return temp;
  };
  this.getMax = function () {
    return this.max;
  };
}

module.exports = Stack;