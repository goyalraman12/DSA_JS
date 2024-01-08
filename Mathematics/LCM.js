import { GCD2 } from "./greatestCommonDivisor(HCF)";

function LCM1(a, b) {
  /** Time complexity is, O(min(a, b)) */
  const largerNumber = Math.max(a, b);
  for (let i = 1; i <= Math.min(a, b); i++) {
    const temp = largerNumber * i;
    if (temp % a === 0 && temp % b == 0) {
      return temp;
    }
  }
}

/**
 * Idea is, a*b = GCD(a,b) * LCM(a,b)
 */
function LCM2(a, b) {
  return (a * b) / GCD2(a, b);
}
