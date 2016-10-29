/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;

  this.push = () => {
    this.storage[this.index++] = item;
    return this.index;
  };
  
  this.pop = () => {
    this.index -= 1;
    return this.storage[this.index];
  };
}


/**
* Queue Class
*/


function Queue() {
  let stack1 = new Stack();
  let stack2 = new Stack();

  this.enqueue = function () {
    while (this.stack1.index > 0) {
      this.stack2.push(this.stack1.pop());
    }
  };
  this.dequeue = function () {
    while (this.stack2.index > 0) {
      this.stack1.push(this.stack2.pop());
    }
    return stack2.pop();
  };
}

module.exports = { Stack: Stack, Queue: Queue };