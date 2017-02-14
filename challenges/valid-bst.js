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

// MAIN IDEA: Recursively traverse left and right branches while comparing to changing min and max
function validBST(BST) {
  // Create validation helper function
  // INPUT: tree, min, max
  // OUTPUT: boolean
  function isValid(tree, min, max) {
    // Base case: if tree is null, return true as we have reached a leaf successfully
    if (!tree) return true;

    // Is current value greater than minimum handed down from previous call?
    if (tree.value > min &&
        
        // Is current value less than maximum handed down from previous call?
        tree.value < max &&
      
        // If both previous checks pass, run isValid on left branch with same min and max as current value
        isValid(tree.left, min, tree.value) &&
        
        // If both previous checks pass, run isValid on left branch with same min and max as current value
        isValid(tree.right, tree.value, max)) {
      
        // If all recursive calls return true, then entire tree is valid, so return true!
        return true;
    }

    // If a single comparison fails, return false.
    return false;
  }

  return isValid(BST, -Infinity, Infinity);
}


//   const tree1 = new BinaryTree(10);
//   tree1.left = new BinaryTree(5);
//   tree1.right = new BinaryTree(14);
//   tree1.left.left = new BinaryTree(3);
//   tree1.left.right = new BinaryTree(6);

// /* TREE 1
//              10
//             /  \
//            5    14
//           / \     
//          3   6   
// */

//   const tree2 = new BinaryTree(10);
//   tree2.left = new BinaryTree(5);
//   tree2.right = new BinaryTree(14);
//   tree2.left.left = new BinaryTree(3);
//   tree2.left.right = new BinaryTree(6);
//   tree2.right.left = new BinaryTree(9);

// /* TREE 2
//                10
//              /    \
//            5       14
//           / \     /
//          3   6   9
// */

//   const tree3 = new BinaryTree(10);
//   tree3.left = new BinaryTree(5);
//   tree3.right = new BinaryTree(14);
//   tree3.left.left = new BinaryTree(3);
//   tree3.left.right = new BinaryTree(6);
//   tree3.left.right.right = new BinaryTree(11);

// /* TREE 3
//              10
//             /  \
//            5    14
//           / \     
//          3   6
//               \
//                11
// */

// console.log(validBST(tree1));
// console.log(validBST(tree2));
// console.log(validBST(tree3));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
