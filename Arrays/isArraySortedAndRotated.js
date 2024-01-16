/**
 * This function checks whether a given array of distinct integers is sorted
 * (either in non-increasing or non-decreasing order) and then rotated counter-clockwise.
 * A sorted array without rotation is not considered as sorted and rotated.
 * The function first checks if the array is sorted in non-decreasing order and rotated,
 * and then checks for non-increasing order and rotation.
 *
 * @param {number[]} arr - The array of distinct integers.
 * @param {number} num - The number of elements in the array.
 * @returns {boolean} - Returns true if the array is sorted (in either order) and rotated.
 *                      Returns false otherwise.
 *
 * Example 1:
 * Input: arr[] = [3, 4, 1, 2], num = 4
 * Output: true
 * Explanation: The array is sorted (1, 2, 3, 4) and rotated twice (3, 4, 1, 2).
 *
 * Example 2:
 * Input: arr[] = [1, 2, 3], num = 3
 * Output: false
 * Explanation: The array is sorted (1, 2, 3) but not rotated.
 */

//Function to check if array is sorted in increasing order and rotated.
function isIncreasingAndRotated(arr, n) {
  let i = 0;
  //We use a loop to check whether elements are in increasing order and
  //stop at position where we find a smaller number than previous one.
  while (i < n - 1 && arr[i] <= arr[i + 1]) i++;

  //If we reach the end of the array, we return false.
  if (i == n - 1) return false;

  i++;
  //Now we check whether all remaining elements are in increasing order.
  while (i < n - 1 && arr[i] <= arr[i + 1]) i++;

  //If we reach the end and the last element is smaller than or equal to
  //first element we return true else we return false.
  if (i == n - 1 && arr[n - 1] <= arr[0]) return true;
  else return false;
}

//Function to check if array is sorted in decreasing order and rotated.
function isDecreasingAndRotated(arr, n) {
  let i = 0;
  //We use a loop to check whether elements are in decreasing order and
  //stop at position where we find a smaller number than next one.
  while (i < n - 1 && arr[i] >= arr[i + 1]) i++;

  //If we reach the end of the array, we return false.
  if (i == n - 1) return false;

  i++;
  //Now we check whether all remaining elements are in decreasing order.
  while (i < n - 1 && arr[i] >= arr[i + 1]) i++;

  //If we reach the end and the last element is larger than or equal to
  //first element we return true else we return false.
  if (i == n - 1 && arr[n - 1] >= arr[0]) return true;
  else return false;
}

//Function to check if array is sorted and rotated.
function checkRotatedAndSorted(arr, num) {
  //returning true if any of the two function gives true.
  return isIncreasingAndRotated(arr, num) || isDecreasingAndRotated(arr, num);
}
