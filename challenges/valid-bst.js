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
    function checkTree(tree, grandparent) {
        console.log(tree);
        if (tree.left === null && tree.right === null) return true;
        if (tree.left) {
            if (tree.right) {
                if (tree.left.value > tree.value || tree.right.value > grandparent) return false;
            }
            if (tree.left.value > tree.value) return false;
        };
        if (tree.right) {
            if (tree.left) {
                if (tree.right.value <= tree.value || tree.left.value < grandparent) return false;
            }
            if (tree.right.value <= tree.value) return false;
        };
        if (tree.left && !tree.right) return checkTree(tree.left, tree.value);
        if (!tree.left && tree.right) return checkTree(tree.right, tree.value);
        return checkTree(tree.left, tree.value) && checkTree(tree.right, tree.value);
    }
    if (tree.left === null && tree.right === null) return true;
    if (tree.left && !tree.right) return checkTree(tree.left, tree.value)
    if (!tree.left && tree.right) return checkTree(tree.right, tree.value)
    if (tree.left && tree.right) return checkTree(tree.left, tree.value) && checkTree(tree.right, tree.value)
}

// const myTree = new BinaryTree(5);
// const subTreeA = new BinaryTree(3);
// const subTreeB = new BinaryTree(3);
// const subTreeC = new BinaryTree(5);
// const subTreeD = new BinaryTree(7);

// myTree.left = subTreeC;
// subTreeC.left = subTreeB;
// subTreeC.right = subTreeD;
// // subTreeB.left = subTreeA;
// myTree.right = new BinaryTree(10);

// console.log(validBST(myTree));


module.exports = { BinaryTree: BinaryTree, validBST: validBST };
