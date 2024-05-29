/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export * from "./twosum.js";
var twoSum = function(nums, target) {
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

let arr2 = twoSum([3,2,4], 6);
console.log(arr2);