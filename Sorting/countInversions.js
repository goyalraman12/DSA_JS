/*
  Function: inversionCount
  
  Description: 
  This JavaScript code implements an efficient algorithm to count the number of inversions in an array. 
  Inversions in an array occur when elements are out of their sorted order. 
  The algorithm utilizes the divide-and-conquer approach by recursively dividing the array into subarrays, 
  counting inversions within the subarrays, and then merging them while counting split inversions.

  Functions:
  1. countAndMerge(arr, l, m, r): 
     - Merges two sorted subarrays and counts split inversions.
  2. countInv(arr, l, r): 
     - Recursively divides the array, counts inversions in subarrays, and accumulates the count.
  3. inversionCount(arr, N): 
     - Entry point function to calculate the total number of inversions in the given array.

  Parameters:
  - arr: The input array to be analyzed for inversions.
  - N: The length of the array.

  Return:
  - The total number of inversions in the input array.

  Note: The algorithm has a time complexity of O(n log n), making it efficient for large datasets.

*/
function countAndMerge(arr, l, m, r) {
  let n1 = m - l + 1,
    n2 = r - m;
  let left = [];
  let right = [];
  for (let i = 0; i < n1; i++) {
    left[i] = arr[i + l];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[m + 1 + j];
  }
  let res = 0,
    i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      res = res + (n1 - i);
    }
  }
  while (i < n1) {
    arr[k++] = left[i++];
  }
  while (j < n2) {
    arr[k++] = right[j++];
  }
  return res;
}
function countInv(arr, l, r) {
  let res = 0;
  if (l < r) {
    let m = Math.floor((r + l) / 2);
    res += countInv(arr, l, m);
    res += countInv(arr, m + 1, r);
    res += countAndMerge(arr, l, m, r);
  }
  return res;
}

// Function to count inversions in the array.
function inversionCount(arr, N) {
  return countInv(arr, 0, N - 1);
}
