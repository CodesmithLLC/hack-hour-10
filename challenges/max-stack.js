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
   this.length = 0;
 }

 Stack.prototype.push = function(val) {
   this.stack[this.length] = val;
   this.length++;
 }

 Stack.prototype.pop = function() {
   let popped = this.stack[this.length];
   delete this.stack[this.length-1];
   this.length--;
   return popped;
 }

 Stack.prototype.getMax = function() {
   if (this.length === 0) {
     return 0;
   }
   let max = this.stack[0];
   for (let i=1; i<this.length; i++) {
     if (this.stack[i] > max) {
       max = this.stack[i];
     }
   }
  return max;
}

module.exports = Stack;
