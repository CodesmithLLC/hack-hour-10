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
  // return () => func(...args); // use args[0] - args[11] instead of ...
  //hh solution using eval
  let funcCall = "func(";
  for (let i in context) {
    funcCall += `context[${i}],`;
  }
  funcCall = funcCall.replace(/,$/, ');');

  return () => eval(funcCall);
}

// var jae = function (name, age, location) {
//   return name + " is " + age + " and he lives in " + location;
// };

// var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
// // console.log([].slice.call(["Jae", 19, "South Carolina"]))
// console.log(Array.constructor);
// console.log(jaero());

module.exports = applyIt;
