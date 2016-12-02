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

function validBST(root) {
  //  Using depth-first search
  let stack = [root];
  
  while (stack.length !== 0) {
    var node = stack.pop();
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

//   //  Using breadth-first search
//   let queue = [root];

//   while(queue.length !== 0) {
//     var node = queue.shift();
//     if (node.left) {
//       queue.push(node.left);
//       if (node.left.value > node.value) return false;
//     }
//     if (node.right) {
//       queue.push(node.right);
//       if (node.right.value < node.value) return false;
//     }
//   }
  
//   return true;
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
// console.log(validBST(tree));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
