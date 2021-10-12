/* 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。



示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]

来源：力扣（LeetCode）
977
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 双指针 一个指针不动让另一个指针走
    let len = nums.length
    let res = []
    for (let i = 0, j = len - 1, k = len - 1; i <= j;) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            res[k--] = nums[i] * nums[i++]
        } else {
            res[k--] = nums[j] * nums[j--]
        }
    }
    return res

};
let nums = [-2, -1, 0, 3]
console.log("🚀 ~ file: 有序数组的平方.js ~ line 61 ~ sortedSquares(nums)", sortedSquares(nums))