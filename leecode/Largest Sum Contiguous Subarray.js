// Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

let nums = [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArr(nums) {
    let maxSum = nums[0];
    let currSum = 0;
    for (let idx = 1; idx < nums.length; idx++) {
        const num = nums[idx];
        currSum+= num;
        if(currSum < 0) currSum = 0;
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}

console.log(maxSubArr(nums));