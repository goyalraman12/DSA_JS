/**
 * Recursively counts the number of digits in a given non-negative integer.
 * The function works by repeatedly dividing the number by 10 and counting
 * each iteration until the number becomes 0, indicating no more digits are left.
 *
 * @param {number} n - The non-negative integer for which the number of digits is to be counted.
 * @returns {number} - Returns the count of digits in the integer 'n'.
 */
function countDigits(n) {
  if (Math.floor(n / 10) === 0) {
    return 1;
  }
  return 1 + countDigits(Math.floor(n / 10));
}
