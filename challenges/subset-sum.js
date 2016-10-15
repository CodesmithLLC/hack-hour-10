/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    var accum = [array[0]];
    var tack = [0];
    var length = array.length;
   function find(accumu, arr, trk, test) {
       var total = 0;
       var listOfIndex = {};
       for (var i = 0; i < accumu.length; i++) {
           listOfIndex[(trk[i] + 1)] = true;
           total += accumu[i];
       }
       console.log(accumu)
       if (total === target) return true;

       for (var j = 0; j!== null;j++) {
           if(listOfIndex[trk[j]]) trk[j] += 1;
           accumu[j] = arr[trk[j]]
           trk[j] += 1;
           if(trk[j] > length) {
               trk[j] = 0;
               accumu[j] = arr[0];
               if (trk[j+1] === undefined){
                trk[j + 1] = 0;
                accum[j + 1] = 0;
               }
           }
           else break;
           //listOfIndex[trk[j]] = true;
       }
       console.log(listOfIndex);
    //    if(test == 30) return false;
       if (accumu.length >= length) return false;
       else return find(accumu, arr, trk);
   }
   return find(accum, array, tack);
}

module.exports = subsetSum;

