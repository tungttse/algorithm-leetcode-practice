/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sMap = new Map();
    for(let c of s) {
        let count = 0;
        if(sMap.has(c)) {
            // + 1
            count = sMap.get(c); 
        } 
        sMap.set(c, count + 1);
    }
    for(let c of t) {
        let count = 0;
        if(sMap.has(c)) {
            count = sMap.get(c);
            sMap.set(c, count - 1);    
        }  else {
            return false;
        }
    }
    let re = true;
    sMap.forEach((v,k,m) => {
        if(v != 0) {
            re = false;
        } 
    })
    return re;
};