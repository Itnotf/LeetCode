/**
 * Date: 16/4/30.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (0 === num) {
        return 0;
    }
    num = num % 9;
    return num === 0 ? 9 : num;
};

console.log(addDigits(100));