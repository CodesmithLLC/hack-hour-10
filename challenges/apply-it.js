/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
  const funcString = func.toString();
  console.log((funcString));
  const funcArr = funcString.split('');
  const firstOpenParen = funcArr.indexOf('(');
  const firstCloseParen = funcArr.indexOf(')');
  console.log(firstOpenParen, firstCloseParen);
  const labels = funcArr.splice(firstOpenParen, firstCloseParen - firstOpenParen + 1, '()').join('');
  const noParams = labels === '()';
  const paramVals = {};
  const newFun = funcArr.join('');
  if (!noParams) {
    const params = labels.slice(1, -1).split(',');
    console.log('params', params);
    params.forEach((val, index) => {
      paramVals[val] = args[index];
      newFun.replace(val, 'this.' + val);
    });
  }
  console.log('newFun', newFun);
  console.log(paramVals);

  console.log('labels', labels);
  console.log(newFun);

  function child() {
    eval(newFun);
  }
  // child();
}

var jae = function (name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};
var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero);

module.exports = applyIt;