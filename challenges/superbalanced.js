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

function height(tree) {
  if (tree === null) {
      return 0;
  }
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function superbalanced(tree) {
  if (tree === null) {
    return true;
  }
  return Math.abs(height(tree.left) - height(tree.right)) <= 1 
    && superbalanced(tree.left) && superbalanced(tree.right);
}


// let tree = new BinaryTree(11);
// let tree2 = new BinaryTree(7);
// let tree3 = new BinaryTree(15);
// tree.left = tree2;
// tree.right = tree3;

// let tree4 = new BinaryTree(5);
// let tree5 = new BinaryTree(9);
// tree2.left = tree4;
// tree2.right = tree5;

// let tree6 = new BinaryTree(13);
// let tree7 = new BinaryTree(20);
// tree3.left = tree6;
// tree3.right = tree7;

// console.log(tree);
// console.log(superbalanced(tree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
