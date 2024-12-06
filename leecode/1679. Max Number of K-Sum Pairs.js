/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let m = new Map();
    let count = 0;
    for(let i = 0 ; i < nums.length ; i++) {
        if(k-nums[i] <= 0) continue;

        if(m.has(nums[i]) && m.get(nums[i]) >=1 ) {
            count++;
            m.set(nums[i], m.get(nums[i]) - 1);
        } else {
            let no = 1;
            if(m.get(k-nums[i])) {
                no = m.get(k-nums[i]) + 1;
            }
            m.set(k-nums[i], no );
        }   
    }
    return count;
};