/**
 * Date: 16/5/1.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    var sum, l,
        past = [];

    while (n !== 1) {
        sum = 0;
        l = past.length;
        for (var i = 0; i < l; i++) {
            if (n === past[i]) {
                return false;
            }
        }
        past.push(n);

        while (n) {
            sum += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        //console.log(sum);
        n = sum;
    }
    return true;
};

console.log(isHappy(7));
