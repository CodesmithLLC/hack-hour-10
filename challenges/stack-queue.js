/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.stack[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function() {
  let popped = this.stack[this.length-1];
  delete this.stack[this.length-1];
  this.length--;
  return popped;
}


/**
* Queue Class
*/


function Queue() {
//Initialize two stacks
  this.a = new Stack();
  this.b = new Stack();
}

Queue.prototype.enqueue = function(val) {
//Store the value in stack a.
  return this.a.push(val);
}

Queue.prototype.dequeue = function() {

//Iterate through all of the values in stack a. Push all but the first to stack b.
  while (this.a.length > 1) {
    let temp = this.a.pop();
    this.b.push(temp);
  }

//Store the first (oldest) value in the a stack to a result variable.
  let result =  this.a.pop();

//Push the items back to stack a in their original order.
  while (this.b.length > 0) {
    let temp2 = this.b.pop();
    this.a.push(temp2);
  }

//Return the element stored in the result variable.
  return result;
}

module.exports = {Stack: Stack, Queue: Queue};
