/**
 * Date: 16/5/1.
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    var min = 1,
        a = [min],
        i2 = 0,
        i3 = 0,
        i5 = 0;

    for (var i = 1; i < n; i++) {
        // a[i2] * 2, a[i3] * 3, a[i5] * 5
        min = Math.min(a[i2] * 2, a[i3] * 3, a[i5] * 5);
        if (min === a[i2] * 2) {
            i2++;
        }
        if (min === a[i3] * 3) {
            i3++;
        }
        if (min === a[i5] * 5) {
            i5++;
        }
        a.push(min);
    }
    return a.pop();
};

console.log(nthUglyNumber(5));