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
  let countLeft = 0;
  let countRight = 0;
  if (tree.value === undefined) return true;

  function traverse(current) {
    if (current.value) {
      if (current.left !== null) {
        countLeft++;
        traverse(current.left);
      }
      if (current.right !== null) {
        countRight++;
        traverse(current.right);
      }
    }
    return;
  }
  traverse(tree);
  // console.log(countLeft, countRight);
  return countLeft === countRight;
}

// let a = new BinaryTree(20);
// let al = new BinaryTree(10);
// let ar = new BinaryTree(25);
// let bl = new BinaryTree(5);
// let br = new BinaryTree(13);
// let cl = new BinaryTree(22);
// let cr = new BinaryTree(27);

// a.left = al;
// a.right = ar;

// al.left = bl;
// al.right = br;

// ar.left = cl;
// ar.right = cr;
// cr.right = new BinaryTree(500);
// console.log(superbalanced(a));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
