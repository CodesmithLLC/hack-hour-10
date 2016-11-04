// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let length = num.toString();
  let sum = 0, placer = '', j = 1;
  for( let i = length.length - 1; i >= 0; i --) {
    if(j < 3) {
    	if( j === 2) {
    		sum += Number(length[i]);
    		if(Number(length[i]) > 1) sum += 1;
    	 	if(Number(length[i + 1]) > 1) sum += 1;
    	 	if(length[i-1])sum += Number(length[i - 1] * j + placer);
    	}
    	j++;
    	placer += '0';
    	continue;
    }
    if(length[i] > 1) sum += Number(1 + placer);
    if(length[i - 1]) sum += Number(length[i - 1] * j + placer);
    j++;
    placer += '0';
  }
  return sum;
}

module.exports = countTwos;