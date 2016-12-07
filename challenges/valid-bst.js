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
	let rootNode = tree.value;

	//single node
	if(rootNode && tree.left === null && tree.right === null) return true;

	if(tree === null) return true;

	//checking for validity of the left values
	if(tree.left !== undefined && tree.left.value > rootNode) return false;

	//checking for validity of the right values
	if(tree.right !== undefined && tree.right.value <= rootNode) return false;



	//both of these need to be true, for it to be a valid BST.
	return validBST(tree.left) && validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
