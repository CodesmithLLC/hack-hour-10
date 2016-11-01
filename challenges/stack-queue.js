/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {  //  LIFO
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function () {
  if (this.length === 0) return undefined;
  let result = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return result;
}

// let testStack = new Stack();
// testStack.push(10);
// testStack.push(20);
// testStack.push(30);
// testStack.pop();
// console.log(testStack);

/**
* Queue Class (traditional way)
*/
// function Queue() {   //  FIFO
//   this.storage = {};
//   this.length = 0;
// }

// Queue.prototype.enqueue = function (val) {
//   this.storage[this.length] = val;
//   this.length++;
// }

// Queue.prototype.dequeue = function () {
//   let result = this.storage[0];
//   delete this.storage[0];

//   //  key is the index number here
//   for (let key in this.storage) {
//     this.storage[key - 1] = this.storage[key];
//   }
//   delete this.storage[this.length - 1];
//   this.length--;
//   return result;
// }

/**
* Queue Class (using 2 stacks)
*/
function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.inbox.push(val);
}

Queue.prototype.dequeue = function() {
  if (this.outbox.length === 0) {
    while (this.inbox.length !== 0) {
      this.outbox.push(this.inbox.pop());
    } 
  }
  return this.outbox.pop();
}

let testQueue = new Queue();
testQueue.enqueue(0);
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
console.log(testQueue);
testQueue.dequeue();
console.log(testQueue);


module.exports = {Stack: Stack, Queue: Queue};
