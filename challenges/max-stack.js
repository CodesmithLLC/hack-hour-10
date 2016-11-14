/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
<<<<<<< HEAD
  this.stack = {};
  this.length = 0;
  this.max = -Infinity
  this.pop = function () {
    if(this.length) {
      var hold = this.stack[0];
      for (var i = 0; i < this.length - 1; i++) {
        this.stack[i] = this.stack[i + 1];
      }
      --this.length;
      return hold;
    }
  }
  this.push = function (val) {
    if(val > this.max) this.max = val;
    for(var i = this.length; i >= 1; i--) {
      this.stack[i] = this.stack[i - 1]
    }
    this.stack[0]  = val;
    return ++this.length;
  }
  this.getMax = function () {
    return this.max;
  }
}

module.exports = Stack;
=======
  // body...
}

module.exports = Stack;
>>>>>>> 1fc71476c68176665849c71dab3cf9ea5913440d
