/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
     this.storage = [];
}


/**
* Queue Class
*/


function Queue() {

    let stack1 = new Stack();
    let stack2 = new Stack();

   this.enqueue = function(value) {
   		stack1.storage.push(value);
   		console.log(stack1.storage)
   		
   }
   
   this.dequeue = function() {
   		if(stack1.storage.length > 0) {
   			while(stack1.storage.length>0) {
   				stack2.storage.push(stack1.storage.pop());
   			}
   			return stack2.storage;
   		}
   }

}

module.exports = {Stack: Stack, Queue: Queue};
