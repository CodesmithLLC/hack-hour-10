/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

let holder = array.sort((a,b)=>{return a-b});
if((holder[0]*holder[1])>(holder[holder.length-1]*holder[holder.length-2])) {
    return holder[0]*holder[1]*holder[holder.length-1];
}
else{
    return holder[holder.length-1]*holder[holder.length-2]*holder[holder.length-3];
}

}


module.exports = highestProduct;
