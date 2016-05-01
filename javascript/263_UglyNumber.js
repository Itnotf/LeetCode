/**
 * Date: 16/5/1.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    while (num) {
        if (num === 1) {
            return true;
        }
        if ((num / 2) % 1 !== 0) {
            num = num / 2;
        } else if (num % 3 === 0) {
            num = num / 3;
        } else if (num % 5 === 0) {
            num = num / 5;
        } else {
            return false;
        }
    }
    return false;
};