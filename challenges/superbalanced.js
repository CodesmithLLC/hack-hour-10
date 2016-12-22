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
  if(!(tree instanceof BinaryTree)) return false;
  function height(tree) {
    if(!(tree instanceof BinaryTree)) return 0;
    let height = 0;
    function find(t, h) {
      if(t === null) return false;
      else {
        if(h > height) height = h;
        return find(t.right, h+1) || find(t.left, h+1)
      }
    }
    find(tree, 1);
    return height;
  }
  return Math.abs(height(tree.right) - height(tree.left)) < 2;
}

// var myTree = new BinaryTree(5);
// myTree.left = new BinaryTree(3);
// myTree.right = new BinaryTree(9);
// myTree.right.left = new BinaryTree(6);
// myTree.right.left.right = new BinaryTree(7);

// console.log(myTree);
// console.log(superbalanced(myTree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
