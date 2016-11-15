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

  // an empty tree is balanced
  if (tree === null) return true;

  // if there's only one subtree, check that its height is no more than one
  if (!tree.right && tree.left) {
    if (tree.left.left || tree.left.right) return false;
  }
  if (tree.right && !tree.left) {
    if (tree.right.left || tree.right.right) return false;
  }

  // otherwise the subtree is balanced
  if (tree.left === null && tree.right === null) return true;

  // check each subtree
  return superbalanced(tree.left) && superbalanced(tree.right);
}


// //test 1 -- should be true
// // tree looks like
//     //   5
//     //  / \ 
//     // /\ /\
//     //      \
// const myTree = new BinaryTree(5);
// myTree.left = new BinaryTree(3);
// myTree.right = new BinaryTree(6);
// myTree.right.right = new BinaryTree(7);
// myTree.right.left = new BinaryTree(0);
// myTree.right.right.right = new BinaryTree(8);
// myTree.left.left = new BinaryTree(8);
// myTree.left.right = new BinaryTree(9);
// console.log(superbalanced(myTree));


// //test 2 -- should be false
// // tree looks like
//     //   1
//     //  / \ 
//     // /   \
// const mySecondTree = new BinaryTree(5);
// mySecondTree.left = new BinaryTree(3);
// mySecondTree.right = new BinaryTree(6);
// mySecondTree.right.right = new BinaryTree(7);
// mySecondTree.left.left = new BinaryTree(8);
// console.log(superbalanced(mySecondTree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

