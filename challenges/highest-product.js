/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(!array || array.length < 3) return 0;
	let negArr = array.sort((a,b) => {return a-b}).slice(0,3);
	let posArr = array.sort((a,b) => {return b-a}).slice(0,3);
	if(negArr[0]*negArr[1] > posArr[1]*posArr[2] ){
		let a = negArr[0]*negArr[1]*posArr[0];
		if(a > 0) return a;
	}
	return posArr.reduce((a,c) => {return a*c});
}


module.exports = highestProduct;
