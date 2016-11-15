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
   let currLeft = tree.left;
   let countLeft = 0;
   let currRight = tree.right;
   let countRight = 0;

   while (currLeft) {
     countLeft++;
     if (currLeft.right) superbalanced(currLeft.right);
     currLeft = currLeft.left;
   }

   while (currRight) {
     countRight++;
     if (currRight.right) superbalanced(currRight.right);
     currRight = currRight.right;
   }

   if (Math.abs(countLeft - countRight) <= 1) return true;
   else return false;
 }

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
