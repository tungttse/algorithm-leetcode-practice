/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var longestOnes = function(nums, k) {
//     let i = 0, j = 0;
//     while (j < nums.length) {
//         if (nums[j++] === 0) {
//             k--;
//         }
//         if (k < 0) {
//             if (nums[i++] === 0) {
//                 k++;
//             }
//         }
//     }
//     return j - i;

// };
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//https://www.youtube.com/watch?v=HsGKI02yw6M&t=254s
var longestOnes = function(nums, k) {
    let left = 0;
    let count = 0;
    
    let maxW = 0;

    let len = nums.length;

    for(let right = 0; right < len; right++) {
        if(nums[right] == 0) count++;

        while(count > k) {
            if(nums[left] == 0) {
                count--;
            }
            left++;
        }

        maxW = Math.max(maxW, right-left+1);
    }
    return maxW;

};

let nums =[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
let k = 3;

longestOnes(nums, k);