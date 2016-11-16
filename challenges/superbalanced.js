/**
 * Write a function to see if a binary tree "superbalanced".
 * A binary tree is either empty (represented by a null pointer), or is made of a single node, where the left and right pointers  each point to a binary tree.


 * An empty tree is balanced.

A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.

example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
	//height function == height = height + 1;
	var resultofheightfunc;
		if(height(node) === null){
			resultofheightfunc =  -1;
		} else  {
			resultofheightfunc Math.max(height(tree.left), height(tree.right)) + 1;
		}

	if(resultofheightfunc !== -1){
		return true;
	}
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
