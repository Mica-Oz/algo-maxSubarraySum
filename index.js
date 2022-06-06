// write a function called maxSubarraySum that accepts
// an array of integers and n.
//the function should calculate the maximum sum  of n
//consecutive elements in the array.

//sliding window pattern

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); //10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); //17
maxSubarraySum([4, 2, 1, 6], 1); //6

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
