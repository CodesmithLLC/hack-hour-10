/**
 * Create a stack.Then create a queue using two stacks.
 */

"use strict";
function Stack() {
    this.storage = [];
    this.index = 0;
  }

  Stack.prototype.push = function (value)  {
    this.storage[this.index] = value;
    console.log('pushed!');
    return this.index++
  }

  Stack.prototype.pop = function ()  {
    if (!this.storage.length) return undefined;
    console.log('popped!');
    const popped = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.storage.length--;
    this.index--;
    return popped;
  }

// const stack1 = new Stack();
// stack1.push('testing');
// stack1.push('123');
// stack1.push('12345');
// console.log(stack1.storage);
// stack1.pop();
// console.log(stack1.storage);



function Queue() {
  this.in = new Stack();
  this.out = new Stack();
  this.index = 0;
}

  Queue.prototype.enqueue = function (value) {
    this.in.storage[this.in.index] = value
    this.in.index += 1;
    return this.in.index;
  }

  Queue.prototype.dequeue = function () {
    if (!this.in.length){
      while(!this.in.storage.length){
        this.out.push(this.in.pop())
      }
    }
    return this.out.pop();
  }
const test1 = new Queue();
test1.enqueue('testing');
test1.enqueue('testing1');
test1.enqueue('testing2');
console.log(test1.in);
test1.dequeue();
console.log(test1.out);

module.exports = {Stack: Stack, Queue: Queue};
