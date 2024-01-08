export function GCD1(a, b) {
  const smallerNumber = Math.min(a, b);
  for (let i = smallerNumber; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

/**
 * Using Euclidean's Algorithm
 * GCD(a,b) = GCD(b, r), given a>=b. r is reminder
 */
export function GCD2(a, b) {
  if (a === 0) return b;
  else if (b === 0) return a;
  else if (a === b) return a;

  return GCD2(b, a % b);
}
/**
 * Time Complexity is O(log(min(a,b)))
 */
