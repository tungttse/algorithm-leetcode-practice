/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let len = asteroids.length;
    let rs = [];
    for(let i = 0; i < len; i++) {
        let curr = asteroids[i];
        while (rs.length > 0 && curr < 0 && rs[rs.length - 1] > 0) {
            let diff = curr + rs[rs.length - 1];
            if(diff > 0) {
                curr = 0;
            } else if(diff < 0) {
                rs.pop();
            } else {
                curr = 0;
                rs.pop();
            }
        }
        if(curr) {
            rs.push(curr);
        }
    }
    return rs;
};

console.log(asteroidCollision([8,-8]));