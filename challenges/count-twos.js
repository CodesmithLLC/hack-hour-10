// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let numStr = num.toString();
  let sum = 0, placer = '', j = 1;
  for( let i = numStr.length - 1; i >= 0; i--) {
    console.log(j===2, sum);
    if(j < 3) {
    	if( j === 2) {
    		sum += Number(numStr[i]);
    		if(Number(numStr[i]) > 1) sum += 1;
    	 	if(Number(numStr[i + 1]) > 1) sum += 1;
    	 	if(numStr[i-1])sum += Number(numStr[i - 1] * j + placer);
    	}
    	j++;
    	placer += '0';
    	continue;
    }
    if(numStr[i] > 1) sum += Number(1 + placer);
    if(numStr[i - 1]) sum += Number(numStr[i - 1] * j + placer);
    j++;
    placer += '0';
  }
  return sum;
}
let sum = 0, count = 0;
while (sum < 101){
 sum++;
 sum.toString().split('').forEach(ele =>{
   if (ele == '2') count++;
 }) 
}
console.log(count);
//module.exports = countTwos;