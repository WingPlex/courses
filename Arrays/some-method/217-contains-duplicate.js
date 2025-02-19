function containsDuplicate(nums) {
    let seen = new Set();
    return nums.some(num => seen.has(num) ? true : (seen.add(num), false));
}
//test cases
let nums = [1, 2, 3, 1];
// Output: true
console.log(containsDuplicate(nums));
