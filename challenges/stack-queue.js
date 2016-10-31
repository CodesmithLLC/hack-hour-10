/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.push = function(input) {
    return this.storage.push(input);
  };
  this.pop = function () {
    return this.storage.pop();
  };
}

function Queue() {
  this.end = new Stack();
  this.beginning = new Stack();
  this.dequeue = function () {
    while(this.end.length > 0) {
    this.beginning.push(this.end.pop());
    }
    return this.beginning.pop();
  };
  this.enqueue = function (ele) {
    return this.end.push(ele);
  };
}

module.exports = {Stack: Stack, Queue: Queue};
