/*
Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

Note: There are no duplicates in the list.

Examples: 

Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
Output: 5
Explanation: Here the size of the array is 7, so the range will be [1, 8]. The missing number between 1 to 8 is 5
*/

/**
 * @param {number[]} nums
 * @return {number}
 */


let nums =[45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];

var missingNumber = function(nums) {
    let n = nums.length;
    let s = nums.sort((a,b) => {
        return a - b;
    });
    let map = new Map();
    
    for(let i = 0; i <= n; i++) {
        if(typeof(s[i]) == "undefined" || s[i] != i) {
            return i;
        } 
    }
};

console.log(missingNumber(nums));