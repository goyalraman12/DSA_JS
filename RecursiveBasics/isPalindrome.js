/**
 * Checks if a given substring of 's' is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 *
 * @param {string} s - The string to be checked for being a palindrome.
 * @param {number} start - The starting index of the substring within 's' to be checked.
 * @param {number} end - The ending index of the substring within 's' to be checked.
 * @returns {boolean} - Returns 'true' if the substring of 's' from 'start' to 'end' is a palindrome, otherwise returns 'false'.
 */
function isPalindrome(s, start, end) {
  if (start >= end) return true;
  return s[start] == s[end] && isPalindrome(s, start + 1, end - 1);
}
