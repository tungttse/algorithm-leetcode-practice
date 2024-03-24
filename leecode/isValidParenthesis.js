/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let i = 0
    let closeCharOb = {
        "[": "]",
        "{": "}",
        "(": ")",
        }
    while(i < s.length) {  
        if(stack.length > 0) {
            let p = stack[stack.length - 1];
            if(s[i] === closeCharOb[p]) {
                stack.pop();
                i++;
                continue;
            }
        }
        stack.push(s[i]);
        i++;
    }

    if(stack.length === 0) return true;
    return false;
};