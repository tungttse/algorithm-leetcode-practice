/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.lengh < 3) return false;
    let a = Infinity, b = Infinity, c = Infinity;

    for(let i = 0 ; i < nums.length; i++) {
        if(nums[i] <= a) {
            a = nums[i];
            console.log(' a index ', i);
        }
        else  if(nums[i] <= b){
            console.log(' b index ', i);
            b = nums[i];
        }
        else if(nums[i] <= c){
            console.log(' c index ', i);
            c = nums[i];
        }
        if(c < Infinity && c > b && b > a){
            console.log(a, b, c);
            return true;
        } 
    }
    return false;
};

let nums = [20,100,10,12,5,13];
let rs = increasingTriplet(nums);
console.log(rs);