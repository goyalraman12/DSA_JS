/**
 * Hoare's Partition Scheme for quicksort, efficiently rearranging array elements
 * around a pivot to enable sorting.
 * @param {Array} arr - The array to be partitioned.
 * @param {number} l - The low index of the array.
 * @param {number} h - The high index of the array.
 * @returns {number} - The updated index of the pivot element after partitioning.
 */
function hoaresPartition(arr, l, h) {
  let pivot = arr[l];
  let i = l - 1,
    j = h + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
