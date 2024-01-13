/**
 * Reverses the elements of a given array in place, meaning that the original array is modified.
 * The function swaps the elements starting from the beginning and the end of the array,
 * moving towards the center, until it reaches the middle. It uses a while loop to iterate
 * over the array elements and perform the swap. No additional arrays are used for the reversal,
 * which makes the space complexity of the algorithm O(1).
 *
 * @param {Array} arr - The array to be reversed.
 */
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
