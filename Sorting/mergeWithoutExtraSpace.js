/**
 * Efficiently merges two sorted arrays without using extra space,
 * employing the comb-gap technique. The nextGap function dynamically
 * adjusts the gap size for optimal sorting. The main merge function
 * iteratively compares and swaps elements, resulting in a merged
 * and sorted array in-place.
 *
 * @param {Array} arr1 - The first sorted array.
 * @param {Array} arr2 - The second sorted array.
 * @param {number} n - The length of arr1.
 * @param {number} m - The length of arr2.
 * @returns {Array} - Sotred array formed by sorting elements in given arrays
 */

function nextGap(gap) {
  if (gap <= 1) return 0;
  return parseInt(gap / 2, 10) + (gap % 2);
}

function merge(arr1, arr2, n, m) {
  let i;
  let j;
  let gap = n + m;
  for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
    // comparing elements in the first
    // array.
    for (i = 0; i + gap < n; i++)
      if (arr1[i] > arr1[i + gap]) {
        let temp = arr1[i];
        arr1[i] = arr1[i + gap];
        arr1[i + gap] = temp;
      }

    // comparing elements in both arrays.
    for (j = gap > n ? gap - n : 0; i < n && j < m; i++, j++)
      if (arr1[i] > arr2[j]) {
        let temp = arr1[i];
        arr1[i] = arr2[j];
        arr2[j] = temp;
      }

    if (j < m) {
      // comparing elements in the
      // second array.
      for (j = 0; j + gap < m; j++)
        if (arr2[j] > arr2[j + gap]) {
          let temp = arr2[j];
          arr2[j] = arr2[j + gap];
          arr2[j + gap] = temp;
        }
    }
  }
  return [...arr1, ...arr2];
}

console.log('test')