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
  let valid = true;
  if (tree.value === undefined) return false;
  
  function traverse(current) {
    // console.log(current, valid);
    if (current.value) {
      if (current.left !== null) {
        if (current.left.value > current.value) valid = false;
        traverse(current.left);
      }
      if (current.right !== null) {
        if (current.right.value < current.value) valid = false;
        traverse(current.right);
      }
    }
    return;
  }
  traverse(tree);

  return valid;
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
// console.log(validBST(a));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
