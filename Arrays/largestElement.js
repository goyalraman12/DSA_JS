/**
 * Finds the index of the largest element in an array.
 * If there are multiple occurrences of the largest element,
 * the index of the first occurrence is returned. The function
 * iterates through the array, comparing elements to find the largest one.
 * If an empty array is passed, the function returns 0 by default.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The index of the largest element in the array.
 */
function findIndexOfLargestElement(arr) {
  let largeIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[largeIndex] < arr[i]) {
      largeIndex = i;
    }
  }
  return largeIndex;
}
