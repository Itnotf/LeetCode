/**
 * Date: 16/4/30.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    var l = s.length,
        new_s = '';
    for (var i = 0; i < l; i++) {
        new_s = s[i] + new_s;
    }
    return new_s;
};

console.log(reverseString('bacd'));