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

function superbalanced(tree) {}


const t1 = new BinaryTree(10);
const t2 = new BinaryTree(5);
const t3 = new BinaryTree(15);
const t4 = new BinaryTree(3);
const t5 = new BinaryTree(7);
const t6 = new BinaryTree(13);
const t7 = new BinaryTree(17);

t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;
t3.left = t6;
t3.right = t7;

console.log(superbalanced(t1));

module.exports = {
  BinaryTree: BinaryTree,
  superbalanced: superbalanced
};