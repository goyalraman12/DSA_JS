/**
 * Performs a binary search on a sorted array of numbers to find the index of a specified number.
 *
 * This function implements the binary search algorithm, which is an efficient method for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item, until the possible locations are reduced to just one.
 *
 * @param {number[]} arr - The sorted array of numbers in which to search. The array must be sorted in ascending order.
 * @param {number} x - The number to search for in the array.
 * @returns {number} The index of the number `x` in the array `arr`. Returns -1 if `x` is not found.
 */

function bSearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (x === arr[mid]) return mid;
    else if (x < arr[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}
