/**
 * Date: 16/5/1.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var l = nums.length;
    for (var i = 0; i < l; i++) {
        if (nums[i] === 0) {
            for (var j = i + 1; j < l; j++) {
                nums[j - 1] = nums[j];
            }
            nums[l - 1] = 0;
            i--;
            l--;
        }
    }
};

var nums = [0,0,1];
moveZeroes(nums);
console.log(nums);
