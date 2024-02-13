/**
 * Finds the intersection of two sorted arrays.
 * @param {Array} a - The first sorted array.
 * @param {Array} b - The second sorted array.
 * @param {number} m - The length of the first array.
 * @param {number} n - The length of the second array.
 * @returns {Array} - The array containing the common elements.
 */
function intersection(a, b, m, n) {
  let i = 0;
  let j = 0;
  let result = [];
  let k = 0;
  while (i < m && j < n) {
    if (i > 0 && a[i] === a[i - 1]) {
      i++;
      continue;
    }
    if (a[i] < b[j]) {
      i++;
    }
    if (a[i] > b[j]) {
      j++;
    }
    if (a[i] === b[j]) {
      arr[k] = arr[i];
      i++;
      j++;
      k++;
    }
  }
  return result;
}
