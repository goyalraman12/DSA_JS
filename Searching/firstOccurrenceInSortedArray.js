/**
 * Finds the first occurrence of a given number in a sorted array.
 *
 * This function implements a modified binary search algorithm to efficiently
 * locate the first occurrence of a specific number (`x`) in a sorted array of
 * numbers (`arr`). It assumes that `arr` is sorted in non-decreasing order.
 *
 * @param {number[]} arr - A sorted array of numbers in which to search.
 * @param {number} x - The number to find the first occurrence of.
 * @returns {number} - The index of the first occurrence of `x` in `arr`.
 *                     Returns -1 if `x` is not found in the array.
 */
function firstOccurrence(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      if (mid === 0 || arr[mid - 1] !== x) return mid;
      else high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
