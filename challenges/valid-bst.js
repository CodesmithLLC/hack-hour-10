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
  let arr = [];
  let i = 0;

  function toArr(tree, arr) {
    if (!tree) return;

    toArr(tree.left, arr);
    arr[i++] = tree.value;
    toArr(tree.right, arr);
  }

  toArr(tree, arr);

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] <= arr[j - 1]) return false;
  }
  return true;
}

// let tree3 = new BinaryTree(3);
// let tree1 = new BinaryTree(7);
// let tree2 = new BinaryTree(2);
// let tree4 = new BinaryTree(4);
// let tree5 = new BinaryTree(5);
// let tree6 = new BinaryTree(6);

// tree3.left = tree2;
// tree3.right = tree4;
// tree2.left = tree1;
// tree4.right = tree5;
// tree5.right = tree6;

// console.log(tree3);
// validBST(tree3);

/* APPROACH #1 - DEPTH FIRST SEARCH

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  let stack = [tree];
  
  while (stack.length !== 0) {
    let node = stack.pop();
    if (node.left) {
      stack.push(node.left);
      if (node.left.value > node.value) return false;
    }
    if (node.right) {
      stack.push(node.right);
      if (node.right.value < node.value) return false;
    }
  }
  return true;
}

*/

/* APPROACH #2 - BREADTH FIRST SEARCH

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  let queue = [root];

  while (queue.length !== 0) {
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
      if (node.left.value > node.value) return false;
    }
    if (node.right) {
      queue.push(node.right);
      if (node.right.value < node.value) return false;
    }
  }
  return true;
}

*/

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
