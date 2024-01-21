/**
 * Implements the Selection Sort algorithm to sort an array of elements in ascending order.
 *
 * This function iterates through each element of the array. For each element, it finds the
 * smallest (minimum) element from the unsorted part of the array and swaps it with the current element.
 *
 * Time Complexity: O(n^2), where n is the number of elements in the array.
 * This is because it involves two nested loops: the outer loop runs n times and
 * the inner loop runs (n - i) times for each iteration of the outer loop, leading to n(n-1)/2 comparisons.
 *
 * Space Complexity: O(1) as it sorts the array in place without using any additional memory.
 *
 * Note: This function mutates the original array.
 *
 * @param {Array} arr - The array to be sorted. Elements should be comparable with the < operator.
 */
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < ar[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}
