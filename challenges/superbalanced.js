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
var counter = {left: 0, right: 0}
function checker(bst, side, violation, counter, height) {
  if(violation(bst, side)) counter['violate'] = false;
  else if(bst.right) {
    if(bst.value > bst.right.value) counter['violate'] = false;
  }
  else if(bst.left) {
    if(bst.value < bst.left.value) counter['violarte'] = false;
  };
  else if(bst.left || bst.right){
    if(height > counter[side]) counter[side] = height;
    if(bst.left) checker(bst.left, side, violation, counter, height + 1)
    if(bst.right) checker(bst.right, side, violation, counter, height + 1)
  }
}
function violation(node, side) {
  if(side === 'right') return node.value <= tree.value;
  else if (side === 'left') return node.value >= tree.value;
}
checker(tree.right, 'right', violation, counter);
checker(tree.left, 'left', violation, counter);
if(counter[violate] !=== undefined) return counter[violate];
else return Math.abs(counter.left - counter.right) <= 1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
