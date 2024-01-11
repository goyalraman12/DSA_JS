function printN_To_1(n) {
  if (n <= 0) return;
  console.log(n);
  print1ToN(n - 1);
}
