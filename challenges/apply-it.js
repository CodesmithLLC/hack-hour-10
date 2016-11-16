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
  // return func(...args);
  // for (let i = 0; i < args.length; i++) {
  //   func = func.bind(this, args[i]);
  // }

  // return func;
  let toEval = 'func('
  for (let i = 0; i < args.length; i++) {
    if (i === args.length - 1) toEval += 'args[' + i + ']' + ')';
    else toEval += 'args[' + i + ']' + ',';
  }
  return function () {
    return eval(toEval);
  } 
}

module.exports = applyIt;
