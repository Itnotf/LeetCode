/**
 * Date: 16/5/7.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var j = 0, l = nums.length;
    for (var i = 0; i < l; i++) {
        if (nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};

console.log(removeDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8]));