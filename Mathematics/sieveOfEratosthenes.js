/**
 * What is sieve of Eratosthenes ?
 * The Sieve of Eratosthenes is an ancient algorithm,
 * used for finding all prime numbers up to any given limit.
 * It is one of the most efficient ways to find all primes smaller than a given number,
 * especially when the number is below 10 million or so. The method was created by Eratosthenes,
 * a Greek mathematician, in the 3rd century BC
 * */

function sieveOfEratosthenes(n) {
  if (n < 2) return;
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) console.log(i);
  }
}
