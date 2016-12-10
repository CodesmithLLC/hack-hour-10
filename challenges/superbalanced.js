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
  function rbalanced (tree) {
    if(tree.left === null && tree.right === null) return 1;
    if(tree.left !== null) var heightLeft = 1 + rbalanced(tree.left);
    if(tree.right !== null) var heightRight = 1 + Number(rbalanced(tree.right));
    if(heightLeft === Infinity || heightRight === Infinity || Math.abs(heightLeft - heightRight) >= 2) return Infinity;

    if(heightLeft && heightRight){
      return Math.max(heightLeft, heightRight);
    }else{
      return heightLeft || heightRight;
    }
  }(tree);
  let treeDiff = rbalanced(tree);
  return treeDiff !== Infinity;
}


/*let head = new BinaryTree(50);
let l1 = new BinaryTree(25);
let l12 = new BinaryTree(15);
let r12 = new BinaryTree(35);
head.left = l1;
l1.left = l12;
l1.right = r12;
let l123 = new BinaryTree(10);
// let r123 = new BinaryTree(17);
l12.left = l123;
// l12.right = r123;

let r1 = new BinaryTree(75);

head.right = r1;
let g = new BinaryTree(100);
r1.right = g;

console.log(superbalanced(head));*/
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
