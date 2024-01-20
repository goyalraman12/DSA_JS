/**
 * Performs a binary search on a sorted array of numbers using recursion.
 *
 * This function recursively searches for a specific number (x) in a sorted array (arr)
 * by dividing the search interval in half with each step. If the number is found,
 * the function returns its index in the array; if not, it returns -1, indicating the
 * number is not present in the array.
 *
 * @param {number[]} arr - The sorted array of numbers to be searched.
 * @param {number} x - The number to search for in the array.
 * @param {number} low - The starting index of the array (or subarray) to search within.
 * @param {number} high - The ending index of the array (or subarray) to search within.
 * @returns {number} The index of the number in the array if found, or -1 if not found.
 */
function bSearch_Recursive(arr, x, low, high) {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);
  if (x === arr[mid]) return mid;
  else if (x < arr[mid]) bSearch_Recursive(arr, x, low, mid - 1);
  else bSearch_Recursive(arr, x, mid + 1, high);
}
