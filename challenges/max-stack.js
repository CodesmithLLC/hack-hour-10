/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = {};
  this.max = 0;
  this.index = 0;

  this.push = function(value){

    if(value > this.max) this.max = value;
    this.index++;
    this.stack[this.index] = value;
  }

  this.pop = function() {
    if(this.index === 0) return this.stack;
    else { 
      let value = this.stack[this.index-1];
      this.index--;
      return value;
    }
  }

  this.getMax = function() {
    return this.max;
    
  }
}

module.exports = Stack;