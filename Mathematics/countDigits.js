function countDigits(number) {
  if (number < 10) return 1;
  let x = number,
    count = 0;
  while (x > 0) {
    x = Math.floor(x / 10);
    count++;
  }
  return count;
}

/**
 * Time complexity of above function is Θ(d), where d is number of digits in given number
 * Auxiliary Space: O(1) or constant*/
