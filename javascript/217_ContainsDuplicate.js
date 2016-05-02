/**
 * Date: 16/5/2.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var a = [],
        l = nums.length;
    for (var i = 0; i < l; i++) {
        if (!a[nums[i]]) {
            a[nums[i]] = 0;
        }
        a[nums[i]] += 1;
        if (a[nums[i]] > 1) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([3, 3]));