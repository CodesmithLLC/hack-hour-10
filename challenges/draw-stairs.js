/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  if(typeof n !== 'number'){
		console.log('Please enter a valid number');
		return false;
	}
	if(n < 1) {
		console.log('Please enter a number between 1 and 100');
	  return false;
  }
  if(n > 100) {
		console.log('Please enter a number between 1 and 100');
	  return false;
  }
	//set up the top step
	let topStair = '*';
	while(topStair.length < n) {
		topStair = ' ' + topStair;
	}
	//recurse to build the stairs
	function buildNext(step) {
		console.log(step);
		if(step[0] !== '*') {
			return buildNext(step.slice(1) + '*');
		}
	}
	buildNext(topStair);
}

/*function drawStairs(n) {
  if(n < 1) {
	  return false;
  }
  if(n > 100) {
	  return false;
  }
	function addSpace(str, len) {
		while(str.length < len){
			str = ' ' + str;
		}
		return str;
	}
	function buildStep(len) {
		let str = '*'
		while(str.length < len){
			str += '*';
		}
		return str;
	}
	for(let i = 1; i <= n; i++){
		console.log(addSpace(buildStep(i), n));
	}
}*/




module.exports = drawStairs;
