/**
 * Date: 16/5/2.
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var x = 1,
        y = 2,
        tmp;
    if (n === 1) {
        return x;
    }
    if (n === 2) {
        return y;
    }
    for (var i = 3; i < n; i++) {
        tmp = y;
        y = x + y;
        x = tmp;
    }
    return x + y;
};

console.log(climbStairs(4));