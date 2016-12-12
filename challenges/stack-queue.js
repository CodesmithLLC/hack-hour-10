/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.body = {};
  this.length = 0;
}

Stack.prototype.push = function (val) {
  this.body[this.length++] = val;
  return this.length;
}

Stack.prototype.pop = function () {
  let toPop = this.body[--this.length];
  delete this.body[this.length];
  return toPop;
}




/**
* Queue Class
*/


function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.inbox.push(val);
}

// return what is dequeue'd
Queue.prototype.dequeue = function () {

  ////////////////////////////////////
  // original, verbose way with two loops
  // for placing back into inbox stack each time

  // let len = this.inbox.length;
  // let toDeq;

  // for (let i = 0; i < len; i++) {
  //   this.outbox.push(this.inbox.pop());
  // }

  // toDeq = this.outbox.pop();
  // len = this.outbox.length;

  // for (let i = 0; i < len; i++) {
  //   this.inbox.push(this.outbox.pop());
  // }

  // return toDeq;


  ////////////////////////////////////
  // more concise approach
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }

  return this.outbox.pop();
}

module.exports = { Stack: Stack, Queue: Queue };
