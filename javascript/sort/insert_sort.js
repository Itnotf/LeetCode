/**
 * Date: 16/5/4.
 */

var insert_sort = function (a) {
    var l = a.length;
    for (var i = 1; i < l; i++) {
        for (var j = i; j > 0; j--) {
            if (a[j] < a[j - 1]) {
                swap(a, j, j - 1);
            }
        }
    }
    return a;
};

var swap = function (a, i, j) {
    tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
};

console.log(insert_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]));