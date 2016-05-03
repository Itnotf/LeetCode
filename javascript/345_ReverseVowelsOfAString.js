/**
 * Date: 16/5/4.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var a = s.split(""),
        l = s.length,
        vowels = 'aieouAIEOU',
        p = 0,
        q = l - 1,
        tmp;
    while (p !== q && p < q) {
        if (vowels.indexOf(a[p]) === -1) {
            p++;
        } else if (vowels.indexOf(a[q]) === -1) {
            q--;
        } else {
            tmp = a[p];
            a[p] = a[q];
            a[q] = tmp;
            p++;
            q--;
        }
    }
    return a.join('');
};

console.log(reverseVowels('aaaeee'));