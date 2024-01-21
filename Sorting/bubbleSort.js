/**
 * Implements the Bubble Sort algorithm to sort an array in ascending order.
 *
 * This function iteratively compares adjacent elements of the array and swaps them if they
 * are in the wrong order. This process is repeated until the array is sorted. The function
 * optimizes performance by reducing the number of passes once the end of the array is sorted.
 *
 * @param {Array} arr - The array to be sorted. It is sorted in place, and no new array is created.
 *
 * Time Complexity: O(n^2) in the worst and average case, O(n) in the best case if the array is already sorted.
 * Space Complexity: O(1), as it's an in-place sorting algorithm.
 *
 * Note: Bubble sort is generally not suitable for large data sets due to its quadratic time complexity.
 */
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}
