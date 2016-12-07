/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

/*REGULAR INSERTION SORT
	for(let i = 0; i < arr.length; i++){
		let savedIndex = i;

		while(savedIndex > 0 && arr[savedIndex-1] > arr[savedIndex]) {
			let temp = arr[savedIndex];
			arr[savedIndex] = arr[savedIndex-1];
			arr[savedIndex -1] = temp;
			savedIndex--;
		}
	}
 */

function findInOrderedSet(arr, target) {
		function findit(array) {

     var half = Math.floor(array.length / 2);
     	console.log(half);

     if (array.length === 1) {
     	return array[0] === target;
     } else if (array[half] > target) {
     	return findit(array.slice(0, half))
    } else {
     	return findit(array.slice(half));
     }
   }

   if(arr[arr.length - 1] < target) {
   	return false;
   }
	 if(arr[0] > target) {
	 	return false;
	 }
	   return findit(arr);
}


// var nums = [1, 4, 6, 7, 9, 17, 45];


// console.log(findInOrderedSet(nums), 7);

module.exports = findInOrderedSet;
