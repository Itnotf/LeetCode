/**
 * Date: 16/4/30.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var l = 0,
        max = 0,
        sub = [],
        length = s.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < l; j++) {
            if (sub[j] == s[i]) {
                max = (max > l) ? max : l;
                sub = sub.slice(j + 1);
            }
        }
        sub.push(s[i]);
        l = sub.length;
    }

    return max > l ? max : l;
};
console.time('test');
console.log(lengthOfLongestSubstring('abcabcbb'));
console.timeEnd('test');