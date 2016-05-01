/**
 * Just use the easiest method.
 * Date: 16/4/30.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var length = nums.length;
    for (var i = 0; i < length; i++) {
        for (var j = i + 1; j < length; j++) {
            if (target == nums[i] + nums[j]) {
                return [i, j];
            }
        }
    }
};

//console.log(twoSum([2, 7, 11, 15], 9));