/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/
function findHighestValueLowestWeight(items, weightAvailable){
  let maxValue = -Infinity;
  let minWeight = Infinity;
  let index = -1;
  items.forEach((ele, idx) => {
    if(ele.value > maxValue){
      if(ele.weight < minWeight){
        maxValue = ele.value;
        minWeight = ele.weight;
        index = idx;
      }
    }
  });
  console.log(`SELECTING ${index} -- ${JSON.stringify(items[index])}`);
  return index;
}
function solveKnapsack(items, weightAvailable) {
  let available = [];
  for(let i = 0; i < items.length; ++i){
    if(weightAvailable - items[i].weight > 0){
      available.push(i);
    }
  }
  console.log(`weightAvailable: ${weightAvailable}`);
  console.log(`available: ${available}`);
  if(available.length === 0){
    return 0;
  }
  let sol = [];
  for(let i = 0; i < available.length; ++i){
    console.log(`recursing ${available[i].value}`
    sol[i] = available[i].value + solveKnapsack(items.slice().splice(i, 1), weightAvailable - items[i].weight);
  }
  return Math.max(...sol);
};
let items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
console.log(solveKnapsack(items, 3));
module.exports = solveKnapsack;



  // items.sort((a,b) => {a['value'] - b['value']});
  // console.log(items);
  // return items.reduce((acc, curr, idx) => {
  //   if(curr['weight'] < weightAvailable){
  //     acc.push(curr);
  //     weightAvailable - curr['weight'];
  //   }
  //   return acc;
  // }, []).reduce((acc,curr) => {
  //   return acc + curr['weight'];
  // }, 0);




  // items.sort((a,b) => {a['value'] - b['value']}).reverse();
  // console.log(items);
  // return items.reduce((acc, curr) => {
  //   if(curr['weight'] <= weightAvailable){
  //     // console.log(`push ${curr}`);
  //     acc.push(curr);
  //     weightAvailable -= curr['weight'];
  //   }
  //   return acc;
  // }, []).reduce((acc,curr) => {
  //   return acc + curr['value'];
  // }, 0);



  //   let index = findHighestValueLowestWeight(items.sort((a,b) => a.weight - b.weight).reverse());
  // console.log(`items ${JSON.stringify(items)}`);
  // console.log(`index ${index}`);
  // console.log(`weightAvailable ${weightAvailable}`);
  // console.log('=====');
  // if(weightAvailable - items[index].weight < 0){
  //   return 0;
  // }
  // items.splice(0,1);
  // return items[index].value + solveKnapsack(items, weightAvailable - items[index].weight);