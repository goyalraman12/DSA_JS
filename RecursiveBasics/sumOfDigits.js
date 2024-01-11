/**
 * Calculates the sum of the digits of a given positive integer.
 * The function works recursively, breaking down the number digit by digit.
 *
 * @param {number} n - The number whose digits are to be summed.
 *                     It should be a non-negative integer.
 * @returns {number} - The sum of the digits of 'n'.
 */
function sumOfDigits(n) {
  // Base case: If 'n' is a single digit, return 'n' itself
  if (Math.floor(n / 10) === 0) {
    return n;
  }
  // Recursive case: Sum the last digit (n % 10) with the sum of digits of the remaining number
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
