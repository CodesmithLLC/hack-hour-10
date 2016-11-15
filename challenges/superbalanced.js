/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
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
if (tree.left === null && tree.right === null) {
  return true;
}

let leftHeight;
let curBranchLeft = tree.left.left;
let curBranchRight = tree.left.right;

if (curBranchLeft && curBranchRight) {

while (curBranchLeft.left !== null && curBranchRight.right !== null) {
  curBranchLeft = curBranchLeft.left;
  curBranchRight = curBranchRight.right;
  leftHeight++;
}

if (curBranchLeft.left === null && curBranchRight.right !== null || curBranchLeft.left !== null && curBranchRight.right === null) {
  return false;
}

}
else {
  return false;
}

let rightHeight;
curBranchLeft = tree.right.left;
curBranchRight = tree.right.right;

if (curBranchLeft && curBranchRight) {
	
while (curBranchLeft.left !== null && curBranchRight.right !== null) {
  curBranchLeft = curBranchLeft.left;
  curBranchRight = curBranchRight.right;
  rightHeight++;
}

if (curBranchLeft.left === null && curBranchRight.right !== null || curBranchLeft.left !== null && curBranchRight.right === null) {
  return false;
}

return leftHeight === rightHeight || leftHeight - 1 === rightHeight || leftHeight === rightHeight - 1;

}
return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};