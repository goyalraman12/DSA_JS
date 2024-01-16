/**
 * Removes duplicate elements from a sorted array.
 * This function assumes that the input array is sorted in non-decreasing order.
 * It operates in-place, meaning it does not create a new array but modifies the original array.
 * The function keeps track of a 'res' index, which is used to place unique elements.
 * As it traverses the array, it compares each element with the previous unique element.
 * If they are different, the element is considered unique and moved to the 'res' position.
 * The 'res' index is then incremented.
 * By the end of the function, all unique elements are at the start of the array,
 * and the function returns the count of these unique elements.
 *
 * @param {number[]} arr - The array from which duplicates need to be removed. Must be sorted.
 * @returns {number} The count of unique elements in the array.
 */

function remDups(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[res - 1] !== arr[i]) {
      arr[res] = arr[i];
      res++;
    }
  }
  return res;
}
