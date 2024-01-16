/**
 * Rotates the elements of an array to the left by one position.
 * This function mutates the original array by moving each element
 * one position to the left, with the first element being moved to
 * the end of the array. The function doesn't return anything as it
 * operates directly on the input array.
 *
 * @param {number[]} arr - The array to be rotated. It should be an
 *                         array of numbers, but can technically
 *                         handle any array elements.
 * @returns {void} - This function doesn't return anything.
 */

function lRotateOne(arr) {
  const n = arr.length;
  let temp = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
}
