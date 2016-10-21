/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
"use strict";
function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
}
Stack.prototype.push = function (val) {
  this.storage[this.index] = val;
  this.index += 1;
  return this.index;
};
Stack.prototype.pop = function(){
  const returnVal = this.storage[this.index];
  delete this.storage[Object.keys(this.storage).index - 1];
  this.index -= 1;
  return returnVal;
};
Stack.prototype.getMax = function (){
  let greatest = 0;
  for (let prop in this.storage){
    if (greatest < this.storage[prop]) greatest = this.storage[prop];
  }
  return greatest;
}

Stack.prototype.push(1);
Stack.prototype.push(2);
Stack.prototype.push(3);
Stack.prototype.push(10);
Stack.prototype.pop();
Stack.prototype.pop();
Stack.prototype.getMax();
module.exports = Stack;
