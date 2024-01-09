/** Naive Solution */
function divisorsOfNumber(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

function divisorsOfNumber_EFFICIENT(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      if (i !== n / i) console.log(n / i);
    }
  }
}

function divisorsOfNumber_EFFICIENT_AND_SORTED(n) {
  let i = 1;
  for (i = 1; i * i < n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
  for (; i >= 1; i--) {
    if (n % i == 0) {
      console.log(n / i);
    }
  }
}
