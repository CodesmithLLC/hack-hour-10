// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  var array = Array.from(Array(num + 1).keys());
  var count = 0;
  split(array);
function split(array) { 
  if (array.length > 1) {
    split(array.slice(0, array.length / 2))
    split(array.slice(array.length / 2))
  }
  else { 
    var hold = array[0];
    hold = hold.toString()
    for (var i = 0; i < hold.length; i++) { 
      if (hold[i] === '2')++count;
    }
  }
}
  return count;  
}



module.exports = countTwos;

