/**
 * Date: 16/5/4.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var l = nums.length;
    for (var i = l - 1; i > 0; i--) {
        if (nums[i] === val) {
            continue;
        }
        for (var j = i - 1; j >= 0; j--) {
            if (nums[j] === val) {
                var tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }
    while (nums[l-1] === val){
        nums.pop();
        l --;
    }
    return nums;
};

console.log(removeElement([3,2,2,3],3));