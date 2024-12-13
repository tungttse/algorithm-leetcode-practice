/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j++] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[i++] === 0) {
                k++;
            }
        }
    }
    return j - i;

};

let nums =[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
let k = 3;

longestOnes(nums, k);