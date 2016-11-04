/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
	if(tree.value < tree.left.value || tree.value < tree.right.value) return false;
	else if(!tree.right && !tree.left){
		return true;
	}
	else if(!tree.left && tree.right) {
		return validBST(tree.right);
		
	}
	else if(!tree.right  && tree.left) {
		return validBST(tree.left);
	}
	
	else (tree.left && tree.right) {
		return validBST(tree.left) || validBST(tree.right);
	}
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

let node1 = BinaryTree(100);
let node2 = BinaryTree(80);
let node3 = BinaryTree(70);
let node4 = BinaryTree(60);
let node5 = BinaryTree(50);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(validBST(node1));


[{"changes":{"0":[{"route":{"path":"/","stack":[{"name":"firstFunc","keys":[],"regexp":{},"method":"get"},{"name":"<anonymous>","keys":[],"regexp":{},"method":"get"},{"name":"<anonymous>","keys":[],"regexp":{},"method":"get"},{"name":"<anonymous>","keys":[],"regexp":{},"method":"get"},{"name":"<anonymous>","keys":[],"regexp":{},"method":"get"}],"methods":{"get":true}}}],"1":[{"id":"cheng"}],"2":[{"id":"travis"}],"3":[{"id":"pat"},{"testing":"testing object"}],"4":[{"id":"sahil"}],"5":[{"id":"travis"}]},"path":"/"}]
