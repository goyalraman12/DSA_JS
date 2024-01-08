export function factorial(number) {
  if (number <= 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}
/**
 * Time complexity of above function is Θ(n), where n is given number
 * Auxiliary space of above funcrtion is Θ(1)
 * */

function factorialUsingRecursiveCall(number) {
  if (number <= 1) {
    return 1;
  }
  return n * factorialUsingRecursiveCall(number - 1);
}
/**
 * Time complexity of above function is Θ(n), where n is given number
 * Auxiliary space of above funcrtion is Θ(1)
 * Recurrence Relation is, T(n) = T(n-1) + Θ(1)
 * */
