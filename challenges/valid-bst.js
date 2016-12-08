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
  // console.log('Validating ', tree.value);
  // base case #1: we've reached a leaf and not encountered an invalid
  if (tree.left === null && tree.right === null) return true;
  if (tree.left && (tree.value <= tree.left.value)) return false;
  if (tree.right && (tree.value >= tree.right.value)) return false;
  if (tree.left && tree.right) return validBST(tree.left) && validBST(tree.right);
  if (tree.left) return validBST(tree.left);
  if (tree.right) return validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// const ourTree = new BinaryTree(1);
// ourTree.left = new BinaryTree(0);
// ourTree.right = new BinaryTree(3);
// ourTree.right.right = new BinaryTree(4);
// ourTree.right.left = new BinaryTree(2);

// console.log(validBST(ourTree));
