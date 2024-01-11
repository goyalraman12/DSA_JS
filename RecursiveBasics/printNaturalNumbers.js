function printN_To_1(n) {
  if (n <= 0) return;
  console.log(n);
  print1ToN(n - 1);
}

function print1_To_N(n) {
  if (n <= 0) return;
  print1_To_N(n - 1);
  console.log(n);
}
