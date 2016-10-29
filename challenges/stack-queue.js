/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {};
    this.index = 0;

  this.pop = function() {
        let value = this.storage[this.index-1];
        delete this.storage[this.index-1];
        this.index--;
        return value;
    }

    this.push = function(value) {
        this.storage[this.index] = value;
        this.index++;
    }
}


/**
* Queue Class
*/


function Queue() {

    let stack1 = new Stack();
    let stack2 = new Stack();

    while(stack1) {
        let value = stack1.pop();
        stack2.push(value);
    }

    return stack2;

}

module.exports = {Stack: Stack, Queue: Queue};
