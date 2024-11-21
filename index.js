// how to rotated an array by using a number as an input
function rotatedArray(array, k) {
  // length of an array
  let n = array.length;
  // if n is equal to 0 return empty []
  if (n === 0) return array;
  // make k smaller than the array size
  k = k % n;
  // convert negative k to positive
  if (k < 0) k = n + k;
  // split array in to two parts
  const part1 = array.slice(-k); // the last k elements
  const part2 = array.slice(0, n - k); // remaining elements
  return part1.concat(part2); // combine them
}

console.log(rotatedArray([1,2,3,4,5], 7));

// visualizing 
// for array = [1,2,3,4,5] and k = 2
// array length n = 5
// compute k = k % n = 2 no change since k is less than n
// get the last k elements : array.slice(-2) = [4,5]
// remaining elements array.slice(0, 3) = [1,2,3]
// combine: [4,5] .concat([1,2,3]) = [4,5,1,,2,3]
// if the k is negative : k = n + k : k = 5 + (-2) = 3

