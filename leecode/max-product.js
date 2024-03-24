// Input: arr[] = {6, -3, -10, 0, 2}
// Output:  180
// Explanation: The subarray is {6, -3, -10}

// Input: arr[] = {-1, -3, -10, 0, 60}
// Output:   60
// Explanation: The subarray is {60}

// https://www.geeksforgeeks.org/maximum-product-subarray/

// let arr = [6, -3, -10, 0, 2];
let arr =[ 1, -2, -3, 0, 7, -8, -2 ]
function maxProductSubarray(arr) {
    let currMin = currMax = res = arr[0];
    
    for (let idx = 1; idx < arr.length; idx++) {
        const n = arr[idx];
        // if(n == 0) continue; // edge case

        let tmp = Math.max(currMin * n, n, currMax * n);
        currMin = Math.min(currMin * n, n, currMax * n);
        currMax =tmp;
        
        res = Math.max(currMax, res);
    }
    return res;
}

console.log(maxProductSubarray(arr));