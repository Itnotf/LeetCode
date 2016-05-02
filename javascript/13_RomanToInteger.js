/**
 * Date: 16/5/2.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var l = s.length,
        tmp = '',
        result = 0;
    for (var i = 0; i < l; i++) {
        if (romanNum(tmp) < romanNum(s[i]) && tmp !== '' && (tmp === 'I' || tmp === 'X' || tmp === 'C')) {
            result -= romanNum(tmp);
        } else {
            result += romanNum(tmp);
        }
        if (i === l - 1) {
            result += romanNum(s[i]);
        }
        tmp = s[i];
    }


    return result;
};


var romanNum = function (c) {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return false;
    }
};

console.log(romanToInt('MCMXCVI'));