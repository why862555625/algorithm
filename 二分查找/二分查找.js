/* 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1


提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。

来源：力扣（LeetCode） 704
。 */

// 递归方法
let nums = [-1, 0, 3, 5, 9, 12], target = 9

/* function SecondClassfy(nums, target, start, end) {
    if (nums instanceof Array && nums.length === 0) return -1
    let key = Math.floor((start + end) / 2)
    if (nums[key] === target) return key
    if (nums[key] < target) {
        start = key + 1
    } else {
        end = key
    }
    return SecondClassfy(nums, target, start, end)
} */

function SecondClassfy(nums, target) {
    if (nums instanceof Array && nums.length === 0) return -1

    let start = 0, end = nums.length
    while (start != end) {
        let key = Math.floor((start + end) / 2)
        if (nums[key] == target) return key
        if (nums[key] < target) {
            start = key + 1
        } else {
            end = key
        }
    }
    return -1
}
console.log("🚀 ~ file: 二分查找.js ~ line 55 ~ SecondClassfy(nums, target)", SecondClassfy(nums, target))