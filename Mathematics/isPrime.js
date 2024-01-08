/**
 * Time complexity is O(n)
 * Auxiliary Space is, O(1)
 */
function isPrime_Naive(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/**  
 * * Time complexity is O(√N)
*/
function isPrime_Efficient(number) {
  if (number < 2) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

/* Three times faster than above */
function isPrime_MORE_EFFICIENT(number) {
  if (number < 2) return false;
  if (number === 2 || number === 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
