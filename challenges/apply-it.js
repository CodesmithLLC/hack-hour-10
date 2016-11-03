/**
 * applies the invoked array to the function's parameter list
 * Example:

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

function applyIt(func, args) { let name,age,location
  if (args[0] !== undefined)  name = args[0];
  if (args[1] !== undefined)  age = args[1];
  if (args[2] !== undefined)  location = args[2]
  return (() => func.call(this,name,age,location))();
}

module.exports = applyIt;
