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
    let values = [];
    function find(bst) {
        if(bst === null) {
            return false;
        }
        return find(bst.left) || (function() {
            values.push(bst.value); 
            return find(bst.right);
        })()
    }
    find(tree);
    let unsortedValues = [];
    values.forEach( (ele) => {
        unsortedValues.push(ele);
    })
    let sortedValues = values.sort( (a,b) => a - b);
    for(let i = 0; i < values.length; i++) {
        if(sortedValues[i] !== unsortedValues[i]) {
            return false;
        }
    }
    return true;
}

// let myTree = new BinaryTree(5);
// myTree.left = new BinaryTree(4);
// myTree.right = new BinaryTree(8);
// myTree.right.right = new BinaryTree(10);

// console.log(validBST(myTree));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
