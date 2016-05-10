/**
 * Date: 16/5/10.
 */


var quick_sort = function (a, lo, hi) {
    if (lo < hi) {
        var k = partition(a, lo, hi);
        quick_sort(a, lo, k - 1);
        quick_sort(a, k + 1, hi);

    }
    return a;
};

var partition = function (a, lo, hi) {
    var i = lo + 1,
        j = hi;
    while (i < j) {
        while (a[lo] >= a[i] && i < j) {
            i++;
        }
        while (a[lo] < a[j] && i < j) {
            j--;
        }
        swap(a, i, j);
    }
    if (a[i] > a[lo]) {
        swap(a, lo, i - 1);
        return i - 1;
    } else {
        swap(a, lo, i);
        return i;
    }
};

var swap = function (a, i, j) {
    tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
};


console.log(quick_sort([9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 8));
console.log(quick_sort([9, 4, 2, 1, 8, 23, 4, 5, 6, 7, 33, 222, 111, 4, 6, 8, 90], 0, 16));