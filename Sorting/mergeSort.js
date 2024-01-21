/**
 * This function implements the merge operation of the merge sort algorithm. Merge sort is a divide-and-conquer algorithm that divides a list into equal halves, sorts them and then merges them.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {number} low - The starting index of the portion of the array to be sorted.
 * @param {number} mid - The middle index, dividing the array into two halves.
 * @param {number} high - The ending index of the portion of the array to be sorted.
 *
 * The function first creates two empty arrays 'left' and 'right' to hold the two halves of the array to be merged.
 * It then copies the elements from the original array into these two arrays based on the provided indices.
 * Following that, it merges the two arrays back into the original array in a sorted manner.
 * This is done by repeatedly comparing the elements of the two arrays and copying the smaller element back into the original array.
 * If any elements remain in either 'left' or 'right' after this process, they are also copied back into the original array.
 *
 * Note: This function does not return anything as it sorts the array in place.
 */
function mergeSort(arr, low, mid, high) {
  let left = [];
  let right = [];
  for (let i = low; i <= mid; i++) left.push(arr[i]);
  for (let i = mid + 1; i <= high; i++) right.push(arr[i]);
  const n1 = left.length;
  const n2 = right.length;
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
}
