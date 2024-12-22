/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let count0 = 0;
    let left = 0;
    let i = 0;
    for(i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            count0++;
        }

        if(count0 > 1) {
            console.log(`left ${left} | i = ${i} | count0 ${count0}`);
            if (nums[left++] === 0) {
                count0--;
            }
        }
    }
    console.log(`left ${left} | i = ${i} | count0 ${count0}`);
    return i - left - 1;
};

let nums = [0,1,1,1,0,1,1,0,1];
console.log(longestSubarray(nums));