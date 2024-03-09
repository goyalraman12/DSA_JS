/**
 * Efficiently partitions an array using the Lomuto Partition scheme for quicksort.
 * @param {Array} arr - The array to be partitioned.
 * @param {number} l - The low index of the array.
 * @param {number} h - The high index of the array.
 * @returns {number} - The updated index of the pivot element after partitioning.
 */
export function lomutoPartition(arr, l, h) {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j <= h - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
  return i + 1;
}
