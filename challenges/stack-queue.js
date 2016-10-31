/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.length = 0;
  this.storage = {};

  this.push = function (value) {
    return this.storage[this.length++] = value;
  }

  this.pop = function () {
    const temp = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    --this.length;
    return temp;
  }
}

// const newStack = new Stack();
// console.log(newStack.length);
// newStack.push(2);
// newStack.push(5);
// newStack.pop();

/**
* Queue Class
*/


function Queue() {
  this.InboxStack = new Stack();
  this.OutboxStack = new Stack();
  
  this.enqueue = function (value) {
    return this.InboxStack.push(value);
  };
  
  this.dequeue = function () {
    if (!this.OutboxStack.length) {
      if (!this.InboxStack.length) return undefined;
      while (this.InboxStack.length) this.OutboxStack.push(this.InboxStack.pop());
    }

    return this.OutboxStack.pop();
  }
}

// const newQueue = new Queue();
// newQueue.enqueue(9);
// newQueue.enqueue(8);
// newQueue.dequeue();
// newQueue.dequeue();
// console.log(newQueue);

module.exports = {Stack: Stack, Queue: Queue};
