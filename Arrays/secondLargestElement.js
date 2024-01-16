/**
 * Finds the index of the second largest element in an array.
 * The function iterates through the array to identify the largest and second largest elements.
 * It assumes that the array contains at least two distinct elements.
 *
 * @param {number[]} arr - An array of numbers. The array should contain at least two distinct elements.
 * @returns {number} The index of the second largest element in the array. Returns -1 if there is no distinct second largest element.
 *
 * @example
 * console.log(secondLargest([2, 3, 1, 4])); // 1 (index of element 3)
 * console.log(secondLargest([10, 5, 10]));  // 1 (index of element 5)
 * console.log(secondLargest([4, 4, 4]));    // -1 (no distinct second largest element)
 */

function secondLargest(arr) {
  let first = 0,
    second = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[first]) {
      second = first;
      first = i;
    } else if (arr[i] < arr[first]) {
      if (second === -1 || arr[second] < arr[i]) {
        second = i;
      }
    }
  }
  return second;
}
