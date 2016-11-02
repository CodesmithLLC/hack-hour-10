/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 function gcd(a, b) {
// identify which number is smaller
   let smallest;
   let largest;
   if (a < b) {
     smallest = a;
     largest = b;
   } else {
     smallest = b;
     largest = a;
   }

// if there are no common factors, return 1
   if (smallest === 0) {
     return 1;
// if the smaller number is a factor of the larger, return the smaller
   } else if (largest % smallest === 0) {
     return smallest;
// find the largest factor of the smallest number and recursively call the function when found
   } else {
     let i = 2;
     while (i < smallest) {
       if (smallest % i === 0) {
         return gcd(smallest / i, largest);
       }
       i++;
     }
     return 1;
   }
 }

module.exports = gcd;
