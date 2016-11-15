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
  if (!tree || !tree.root) {
    return true;
  }

  let node = tree.root,
    cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, node, 0);
  return cache.max - cache.min <= 1;
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }

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
