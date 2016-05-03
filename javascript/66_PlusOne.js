/**
 * Date: 16/5/4.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var l = digits.length,
        t = 0;
    if (digits[l - 1] === 9) {
        t = 1;
    }
    for (var i = l - 1; i >= 0; i--) {
        if ((digits[i] + t) === 10) {
            t = 1;
            if (i === 0) {
                digits[i] = 1;
            } else {
                digits[i] = 0;
            }
        } else {
            if (i === (l - 1)) {
                digits[i]++;
            }
            digits[i] += t;
            t = 0;
        }
    }
    if (t > 0) {
        digits.push(0);
    }

    return digits;
};

console.log(plusOne([9,9]));