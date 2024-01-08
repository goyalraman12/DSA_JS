function isPalindrome(number) {
  let x = number;
  let reverse = 0;
  while (x > 0) {
    const lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  return reverse === number;
}

/** Time complexity of above function is Θ(d), where d is number of digits in given number */
