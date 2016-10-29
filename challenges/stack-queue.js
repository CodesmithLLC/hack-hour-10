/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {  //  LIFO  last-in first-out
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function () {
  let result = this.storage[this.length];
  delete this.storage[this.length - 1];
  this.length--;
  return result;
}

let testStack = new Stack();
testStack.push(10);
testStack.push(20);
testStack.push(30);
testStack.pop();
// console.log(testStack);

/**
* Queue Class
*/
// function Queue() {   //  FIFO first-in first-out
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

function Queue() {
  let inbox = new Stack();
  let outbox = new Stack();
}

Queue.prototype.enqueue = function (val) {
  inbox.push(val);
}

Queue.prototype.dequeue = function() {
  if (outbox.length === 0) {
    while (inbox.length !== 0) {
      outbox.push(inbox.pop());
    } 
  }
  return outbox.pop();
}

let testQueue = new Queue();
testQueue.enqueue(0);
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.dequeue();
console.log(testQueue);



module.exports = {Stack: Stack, Queue: Queue};
