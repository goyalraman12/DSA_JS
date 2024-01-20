/**
 * Finds the last occurrence of a given number in a sorted array.
 *
 * This function performs a binary search to find the last occurrence of a specific number (x) in a sorted array (arr).
 * It efficiently narrows down the search space by comparing the middle element of the array to the target value.
 * If the middle element is equal to x, the function checks if it's the last occurrence. If it's not the last occurrence,
 * the search continues in the right half of the array. Otherwise, if the middle element is less than x, the search continues
 * in the right half; if it's more, the search shifts to the left half. The process repeats until the last occurrence of x is found
 * or the array has been fully searched.
 *
 * @param {number[]} arr - A sorted array of numbers in which to search.
 * @param {number} x - The number to find the last occurrence of.
 * @return {number} The index of the last occurrence of x in arr. Returns -1 if x is not found.
 */
export function lastOccurrence(arr, x) {
  const n = arr.length - 1;
  let low = 0;
  let high = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      if (mid === n || arr[mid + 1] !== x) return mid;
      else low = mid + 1;
    } else if (arr[mid] < x) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
