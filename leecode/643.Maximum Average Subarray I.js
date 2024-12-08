var findMaxAverage = function(nums, k) {
    let left = 0;
    let right = k - 1;

    let sum = 0;
    for(let i = left; i <= right; i++) {
        sum+= nums[i];
    }

    let maxSoFar = sum;

    while(right < nums.length) {
        right += 1;
        if(right == nums.length) break;
        sum+=nums[right];
        sum-=nums[left];
        left += 1;
        maxSoFar = Math.max(maxSoFar, sum);
    }

    return maxSoFar / k;
};

let nums = [1,12,-5,-6,50,3];
 let k = 4;

let rs = findMaxAverage(nums, k);
console.log(rs);