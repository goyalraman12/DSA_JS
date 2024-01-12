/** 
 * Given a number and its reverse. Find that number raised to the power of its own reverse.
 * Note: As answers can be very large, print the result modulo 109 + 7.
 * Example 1:
    Input: N = 2, R = 2
    Output: 4
    Explanation: 2 raised to the power of its reverse (2) is 4. The result modulo 10^9 + 7 is 4.
 * Example 2:
    Input: N = 12, R = 21
    Output: 864354781
    Explanation: 12 raised to the power of its reverse (21) is a large number, and modulo 10^9 + 7, the result is 864354781.
 *
 * @param {number} N - The non-negative integer to be raised to the power of its reverse.
 * @param {number} R - The reverse of non-negative integer N.
 * @returns {number} - Returns the result of N raised to the power R modulo 10^9 + 7 as a Number.
 */

function moduloPower(N, R) {
  if (R === 0) return 1; // Base case: N^0 = 1
  if (R === 1) return N; // Base case: N^1 = N

  let mod = BigInt(1000000007);

  if (R % 2 === 0) {
    let halfPow = moduloPower(N, R / 2);
    return Number((BigInt(halfPow) * BigInt(halfPow)) % mod);
  } else {
    let ans = moduloPower(N, R - 1);
    return Number((BigInt(N) * BigInt(ans)) % mod);
  }
}
