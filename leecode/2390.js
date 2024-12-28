/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let newStr = [];
    let i = 0; 
    let len = s.length;
    while(i < len) {
        if(s[i] != "*") {
            newStr.push(s[i]);
        } else {
            if(newStr.length > 0) {
                newStr.pop();
            }
        }
        i++;
    }

    return newStr.join('');

};
let rs = removeStars("leet**cod*e");
