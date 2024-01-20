/**
 * Calculates the largest integer less than or equal to the square root of a given number.
 *
 * This function implements a binary search algorithm to efficiently find the floor of the square root of 'n'.
 * It handles special cases where 'n' is 0 or 1 by immediately returning 'n', as the square root in these cases is 'n' itself.
 * For other values, it initializes two pointers, 'low' and 'high', to 1 and n/2, respectively.
 * The function then iterates, adjusting these pointers to zero in on the square root.
 *
 * The midpoint 'mid' of the current range is calculated in each iteration, and its square is compared with 'n'.
 * If the square of 'mid' is equal to 'n', 'mid' is the square root and is returned immediately.
 * If the square is greater than 'n', the function continues the search in the lower half of the current range.
 * Otherwise, the search continues in the upper half, and 'res' is updated to 'mid'.
 *
 * After exiting the loop, 'res' holds the largest integer less than or equal to the square root of 'n'.
 *
 * @param {number} n - The number to find the floor of the square root for. Must be a non-negative integer.
 * @returns {number} The floor of the square root of 'n'.
 */
function floorSqrt(n) {
  if (x === 0 || x === 1) {
    return x;
  }
  let low = 1;
  let high = n / 2;
  let res = 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const sqr = mid * mid;
    if (sqr === x) return mid;
    else if (sqr > x) high = mid - 1;
    else {
      low = mid + 1;
      res = mid;
    }
  }
  return res;
}
