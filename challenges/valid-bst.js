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
    if(tree === null) return false;
    // console.log(`${tree.value} called : left${tree.left ? tree.left.value : '----'}  right ${tree.right ? tree.right.value : '----'}`);
    let leftValid = true;
    let rightValid = true;
    if(tree.left === null && tree.right === null){
        // console.log(`${tree.value} reached root node.`);
        return true;
    }
    // console.log(`${tree.value} invalid check: left ${tree.left && tree.left.value > tree.value} right ${tree.right && tree.right.value < tree.value}`);
    if(tree.left !== null && tree.left.value > tree.value) return false;
    if(tree.right !== null && tree.right.value < tree.value) return false;
    // if(tree.left.value > tree.value || tree.right.value < tree.value){
        console.log(`${tree.value} invalid tree found returning false`);
    //     return false;
    // }
    if(tree.left !== null){
        // console.log(`${tree.value} has left, going left`);
        leftValid = validBST(tree.left)
        // console.log(`${tree.value} returned from left, ${leftValid}`);
    }
    if(tree.right !== null){
        // console.log(`${tree.value} has right, going right`);
        rightValid = validBST(tree.right);
        // console.log(`${tree.value} returned from right, ${rightValid}`);
    }
    // console.log(`${tree.value} returning value: ${leftValid && rightValid}`);
    return leftValid && rightValid;
}

// function xvalidBST(tree) {
//     if(tree === null) return;
//     console.log(tree.value);
//     console.log(tree.value + " left");
//     validBST(tree.left);

//     console.log(tree.value + " right");
//     validBST(tree.right);
// }

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
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
