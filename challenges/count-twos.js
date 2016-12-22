// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let obj = {};
  function memCountTwos(num){
    let totalTwos = 0;
    for(let i = 1; i <= num; ++i){
      if(obj[i] !== undefined){
        totalTwos += obj[i];
      }else{
        // let g = i.toString();
        let g = i;
        let currTwos = 0;
        console.log(`${i} ========================`);
        while(g > 1){
          console.log(g)
          if(g%10 === 2){
            currTwos++;
          }else else{
            g=g/10;
          }
        }
      }
    }
    return obj[num];
  }
  return memCountTwos(num);
}

console.log(countTwos(3));
console.log(countTwos(13));
console.log(countTwos(1000));

module.exports = countTwos;