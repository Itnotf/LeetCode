/**
 * Date: 16/5/2.
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        s = '';
    do {
        n = n - 1;
        s = a[n % 26] + s;
        n = Math.floor(n / 26);
    } while (n > 0);
    return s;
};

var convertToTitle2 = function (n) {
    var s = '';
    do {
        n = n - 1;
        s = String.fromCharCode(64 + n % 26) + s;
        n = Math.floor(n / 26);
    } while (n > 0);
    return s;
};

console.log(convertToTitle2(53));