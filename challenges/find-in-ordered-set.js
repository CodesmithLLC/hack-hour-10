module.exports = (arr, target, mid = Math.floor(arr.length / 2)) => arr[mid] === target ? true : mid === 0 ? false : findInOrderedSet(arr[mid] < target ? arr.slice(mid) : arr.slice(0, mid), target);
