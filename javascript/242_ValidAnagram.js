/**
 * Date: 16/5/2.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.split('').sort().toString() === t.split('').sort().toString();
};

console.log(isAnagram('abc', 'bac'));