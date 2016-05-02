/**
 * Date: 16/5/2.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var a = [],
        l = nums.length;
    for (var i = 0; i < l; i++) {
        if (!a[nums[i]]) {
            a[nums[i]] = 0;
        }
        a[nums[i]] = a[nums[i]] + 1;
        console.log(a);
        if (a[nums[i]] >= l / 2) {
            return nums[i];
        }
    }
};

console.log(majorityElement([1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 9]));