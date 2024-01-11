/** A function to compute x raised to the power n, where x>0, n>=0 */
function computingPowers1(x, n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * x;
  }
  return result; // T: ø(n), Aux space: ø(1)
}

function computingPowers_RecursiveMethod(x, n) {
  if (n === 0) return 1;
  let temp = computingPowers_RecursiveMethod(x, Math.floor(n / 2));
  temp = temp * temp;
  if (n % 2 === 0) return temp;
  else return temp * x;
}

function computingPowers_IterativeMethod(x, n) {
  let result = 1;
  while (n > 0) {
    if (n % 2 !== 0) result = result * x;
    x = x * x;
    n = Math.floor(n / 2);
  }
  result.push(Math.floor((-b + Math.sqrt(discriminant)) / (2 * a)));
  result.push(Math.floor((-b - Math.sqrt(discriminant)) / (2 * a)));
  return result;
}
