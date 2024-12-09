/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a,b) => a + b, 0);
    let left = 0;
    for(let i = 0; i < nums.length; i++) {
        let right = sum - left - nums[i];
        if(left == right) return i;
        left += nums[i]; 
        
    }
    return -1;
};

let nums = [1,7,3,6,5,6];
pivotIndex(nums);
