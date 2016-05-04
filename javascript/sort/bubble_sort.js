/**
 * Date: 16/5/4.
 */

var bubble_sort = function (a) {
    var l = a.length;
    for (var i = l - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
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

console.log(bubble_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]));