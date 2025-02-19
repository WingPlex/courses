/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) return [i, j]
        }
    }
};

//test cases
let nums = [2, 7, 11, 15]; let target = 9;
// Output: [0,1]        
console.log(twoSum(nums, target));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
// Time complexity: O(n^2) where n is the length of nums
// Space complexity: O(1) since we are using only a constant amount of space
