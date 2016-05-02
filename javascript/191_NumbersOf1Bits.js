/**
 * Date: 16/5/2.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var sum = 0;
    while (n) {
        if (n % 2 === 1) {
            sum++;
        }
        n = Math.floor(n / 2);
    }
    return sum;
};
console.log(hammingWeight(11));