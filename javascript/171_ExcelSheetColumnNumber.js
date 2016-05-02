/**
 * Date: 16/5/2.
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    var l = s.length,
        n = 0;
    for (var i = 0, y = l - 1; i < l; i++, y--) {
        n += (s[i].charCodeAt(0) - 64) * Math.pow(26, y);
    }
    return n;
};
console.log(titleToNumber('BA'));