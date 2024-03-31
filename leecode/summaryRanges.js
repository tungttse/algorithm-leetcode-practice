/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = nums[0]; 
    let end = start;

    let result = [];
    for(let i = 1; i < nums.length; i++) {
        let next = end + 1;
        
        if(next == nums[i]) {
            end = nums[i]
        }

        if(next != nums[i]) {
            // set current range
            if(start === end) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${end}`);
            }
            // set new range
            start = nums[i];
            end = nums[i];
        }
    }

    if(start === end) {
        result.push(`${start}`);
    } else {
        result.push(`${start}->${end}`);
    }

    return result;
};

summaryRanges([0,2,3,4,6,8,9]);