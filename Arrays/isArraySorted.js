/**
 * Checks if an array is sorted in non-decreasing order.
 * The function iterates through the array elements and compares each element with the previous one.
 * It assumes that the array is sorted unless it finds an element that is smaller than the previous element,
 * which would indicate that the array is not sorted.
 *
 * @param {Array} arr - The array to be checked for sorting.
 * @returns {boolean} - Returns true if the array is sorted in non-decreasing order, otherwise false.
 */
function isArraySorted(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return true;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
