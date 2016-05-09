/**
 * Date: 16/5/9.
 */

var select_sort = function (a) {
    var l = a.length;
    for (var i = 0; i < l; i++) {
        for (var j = i, min = i; j < l; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }
        swap(a, i, min);
    }
    return a;
};

var swap = function (a, i, j) {
    tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
};

console.log(select_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]));