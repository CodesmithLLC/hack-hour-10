/*jshint esversion: 6 */
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
  this.maxVal = 0;
  this.push = function(val) {
    this.storage[this.index] = val;
    this.index++;
    if (this.maxVal < val) this.maxVal = val;
    return this.index;
  };
  this.pop = function() {
    let tempVal = 0;
    this.index--;
    let popVal = this.storage[this.index];
    delete this.storage[this.index];
    if (this.maxVal === popVal) {
      for (let keys in this.storage) {
        console.log('im in!');
        if (this.storage[keys] > tempVal) {
          tempVal = this.storage[keys];
          this.maxVal = tempVal;
        }
      }
    }
    return popVal;
  };
  this.getMax = function() {
    return this.maxVal;
  };
}

module.exports = Stack;
