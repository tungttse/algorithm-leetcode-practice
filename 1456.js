/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vv = ['a', 'e', 'i', 'o', 'u'];
    let start = 0;
    let end = start + k;
    let max = 0;
    
    let count = 0;
    for(let i = 0; i < end;i++) {
        if(vv.includes(s[i].toLowerCase())) {
            count++;
        }
    }

    start++;
    end++;

    max = count;
    while(end <= s.length) {
        if(vv.includes(s[start - 1].toLowerCase())) {
            count--;
        }

        if(vv.includes(s[end -1].toLowerCase())) {
            count++;
        }
        max = Math.max(max, count);

        start++;
        end++;
    }
    return max;
};

let s = "abciiidef";
let k = 3;
maxVowels(s,k);

