/**
 * @param {number[]} arr - The sorted binary array to be searched.
 * @returns {number} The number of 1's in the array.
 */
function count1sInSortedArrays(arr) {
  const n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === 0) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] === 0) {
        return n - mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return 0;
}
