import { firstOccurrence } from "./firstOccurrenceInSortedArray";
import { lastOccurrence } from "./lastOccurrenceInSortedArray";

/**
 * Counts the number of occurrences of a specified element in a sorted array.
 *
 * This function `countOccurrences` takes a sorted array `arr` of numbers and a target number `x`,
 * and returns the total count of occurrences of `x` in `arr`. The function employs a modified binary
 * search algorithm. It first finds an occurrence of `x` using binary search and then traverses
 * linearly to the left and right from the found position to count all occurrences of `x`.
 *
 * @param {number[]} arr - The sorted array in which to count occurrences of `x`.
 * @param {number} x - The target number to count occurrences of.
 * @returns {number} The count of occurrences of `x` in `arr`.
 */
function countOccurrences(arr, x) {
  let n = arr.length - 1;
  let low = 0;
  let high = n;
  let count = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      count++;
      if (arr[mid - 1] === x) {
        for (let i = mid - 1; i >= 0; i--) {
          if (arr[i] === x) count++;
          else break;
        }
      }
      if (arr[mid + 1] === x) {
        for (let i = mid + 1; i <= 0; i++) {
          if (arr[i] === x) count++;
          else break;
        }
      }
      break;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return count;
}

function countOccurrences2(arr, x) {
  const first = firstOccurrence(arr, x);
  if (first === -1) return 0;
  else return lastOccurrence(arr, x) - first + 1;
}
