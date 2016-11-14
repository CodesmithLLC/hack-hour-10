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

let global = this;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if(result === null)
     result = [];
  return result;
}
function applyIt(func, args) {
  console.log(global);
  let paramNames = getParamNames(func);
  for(let i = 0; i < paramNames.length; ++i){
    let pName = paramNames[i];
    this[pName] = args[i];
    func[pName] = args[i];
    global[pName] = args[i];
    console.log(`this[${pName}]: ${this[pName]}`);
    if(i===1) console.log('====' + age);
  }
  console.log(func.toString());
  console.log(JSON.stringify(args));
  console.log(JSON.stringify(args).substr(1, args.length-2));
  // eval('func('+str+')');
  return func();
}

var jasmine = function(name, age) {
  console.log(`in jasmine: ${name}, ${age}`);
  if(!age){
    return "We don't know how old " + name + " is!";
  }
  else{
    return name + " is " + age + " years old!";
  }
};
console.log(applyIt(jasmine, ["jasmine", 15]));

module.exports = applyIt;
