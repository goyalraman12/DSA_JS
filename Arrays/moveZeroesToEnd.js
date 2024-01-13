/**
 * This function takes an array of integers and moves all the zero elements to the end of the array.
 * The non-zero elements maintain their original order in the array. This is achieved by iterating
 * through the array and keeping a 'count' of non-zero elements. Each non-zero element is swapped
 * with the element at the 'count' index, effectively shifting non-zero elements to the front
 * and pushing zero elements to the back.
 *
 * @param {number[]} arr - The input array of integers that will be modified in place.
 */
function moveZeroesToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      const temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count++;
    }
  }
}
