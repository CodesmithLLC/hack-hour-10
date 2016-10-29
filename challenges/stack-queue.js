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
    while(this.end.length > 1) {
    this.beginning.push(this.end.pop());
    }
    let output = this.end.pop();
    if( this.beginning.length > 0) {
    	let swap = this.beginning;
    	this.beginning = this.end;
    	this.end = swap;
    }
    return output;
  };
  this.enqueue = function (ele) {
    return this.end.push(ele);
  };
}

module.exports = {Stack: Stack, Queue: Queue};
