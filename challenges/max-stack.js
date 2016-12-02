/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.body = [];
  this.length = 0;
  this.push = (val) => {
    this.body[this.length] = val;
    this.length++;
  };
  this.pop = () => {
    let popped = this.body[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.body[i] = this.body[i + 1];
    }
    this.length--;
    delete this.body[this.length];
    return popped;
  }
  this.getMax = () => {
    return this.body.sort((a,b) => a - b)[this.length -1];
  }
}

module.exports = Stack;

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// stack.push(7);
// console.log(stack);
// let max = stack.getMax();
// console.log(max)
