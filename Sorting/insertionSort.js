/**
 * Performs an in-place insertion sort on an array.
 *
 * This function iteratively sorts the elements of the array by building a sorted
 * subset at the beginning of the array. In each iteration, it removes one element
 * from the remaining unsorted section and finds the location it belongs within the
 * sorted section, placing it there. This is repeated until no unsorted elements remain.
 *
 * Time Complexity: O(n^2), where n is the number of elements in the array.
 * In the worst case, each element is compared with all the other elements in the sorted
 * section of the array.
 *
 * Space Complexity: O(1), as the sort is done in-place, using only a constant amount
 * of additional space.
 *
 * @param {Array} arr - The array to be sorted.
 * Note: The original array will be modified directly (in-place sorting).
 */
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}
