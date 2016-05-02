/**
 * Date: 16/5/2.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree1 = function (n) {
    while (n) {
        if (n === 1) {
            return true;
        }
        if (n % 3 !== 0) {
            return false;
        }
        n = Math.floor(n / 3);
    }
    return false;
};

var isPowerOfThree = function (n) {
    if (n === 1) {
        return true;
    }
    if (n <= 0 || n % 3 !== 0) {
        return false;
    }
    return isPowerOfThree(Math.floor(n / 3));
};

console.log(isPowerOfThree(45));