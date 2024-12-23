/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let m = new Map();
    let n = grid.length;
    for(let i = 0; i < n; i++) {
        let str = JSON.stringify(grid[i]);

        let cSet = 0;
        if( m.has(str)) {
            cSet = m.get(str);
        }
        m.set(str , cSet + 1);
    }
    let rs = 0;

    for(let i = 0; i < n; i++) {
        let col = [];
        for(let j = 0; j < n; j++) {
            col.push(grid[j][i]);
        }
        let k = JSON.stringify(col);
        rs += (m.get(k) || 0);
    }

    return rs;

};

let grid = [
    [11,1],
    [1,11]
]

equalPairs(grid);