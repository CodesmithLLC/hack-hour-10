/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];

  this.push = function(val) {
    this.stoarge.push(val);
  };

  this.pop = function() {
    return this.storage.pop();
  };
}

function Queue() {
  let stack1 = new Stack();
  let stack2 = new Stack();

  this.storage = [];
  this.storage.push(stack1);
  this.storage.push(stack2);

  this.queue = function(val) {
    this.storage.push(val)
  };

  this.dequeue = function() {
    return this.storage.shift();
  };
}

module.exports = {Stack: Stack, Queue: Queue};
