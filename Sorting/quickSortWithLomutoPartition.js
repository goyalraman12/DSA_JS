/**  
 * Efficient and concise Quicksort implementation using Lomuto partition scheme.
 * This algorithm sorts an array in-place, providing optimal time complexity
 * for average and best-case scenarios, making it ideal for large datasets.


 * @param {Array} arr - The array to be sorted in-place.
 * @param {number} l - The starting index of the subarray to be sorted.
 * @param {number} h - The ending index of the subarray to be sorted.
 *
 * The function takes an array 'arr' and the range [l, h] within which to sort it.
 * It recursively partitions the array using the Lomuto partition scheme,
 * then sorts the resulting subarrays. Ensure valid indices to achieve desired results.
 */

import { lomutoPartition } from "./lomutoPartition";

function qSort(arr, l = 0, h = arr.length - 1) {
  if (l < h) {
    let p = lomutoPartition(arr, l, h);
    qSort(arr, l, p - 1);
    qSort(arr, p + 1, h);
  }
}
