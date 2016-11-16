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

BinaryTree.prototype.height = function(depthTraversed) {
  if (!depthTraversed) depthTraversed = 0;
  if (!this.left && !this.right) return depthTraversed;
  if (!this.left) return this.right.height(depthTraversed + 1);
  if (!this.right) return this.left.height(depthTraversed + 1);
  return Math.max(this.left.height(depthTraversed + 1), this.right.height(depthTraversed + 1));
}

function superbalanced(tree) {
  const leftHeight = tree.left.height();
  const rightHeight = tree.right.height();
  // console.log('Left: ', leftHeight, 'Right: ', rightHeight);
  const heightDiff = Math.abs(leftHeight - rightHeight);
  return heightDiff <= 1;
}
  // The following was an attempt to make the same function also check
  // that the BinaryTree is 'valid'
  // console.log('checking val:', tree.value);
  // console.log(tree.left, tree.right);
  // // if the tree has no children, it is inherently balanced
  // if (!tree.left && !tree.right) return true;
  // // check for obvious issues
  // if (tree.left.value >= tree.value || tree.right.value <= tree.value) return false;
  // if (!tree.left) return superbalanced(tree.right);
  // if (!tree.right) return superbalanced(tree.left);
  // return superbalanced(tree.left) && superbalanced(tree.right);

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
// const myTree = new BinaryTree(2);
// myTree.left = new BinaryTree(1);
// myTree.left.left = new BinaryTree(0);
// myTree.left.left.left = new BinaryTree(-1);
// myTree.right = new BinaryTree(4);
// myTree.right.left = new BinaryTree(3);
// myTree.right.right = new BinaryTree(5);
// myTree.right.right.right = new BinaryTree(6);
// console.log(superbalanced(myTree));
