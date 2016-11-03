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

  // build string of function arguments
  argsStr = '';
  args.forEach((arg, index) => {
    argsStr += (JSON.stringify(arg));
    if (index < args.length - 1) argsStr += ',';
  })

  //eval a stringified version of the function call we want
  return (() => eval(`func(${argsStr})`))
}

var jae = function(name, age, location) {
return name + " is " + age + " and he lives in " + location;
};

var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero());


 var jasmine = function(name, age) {
     if(!age){
       return "We don't know how old " + name + " is!";
     }
 
     else{
       return name + " is " + age + " years old!";
     }
   };
 
   var jmoney = applyIt(jasmine, ["Jasmine"]);
   console.log(jmoney()); //Returns "We don't know how old Jasmine is!"


module.exports = applyIt;
