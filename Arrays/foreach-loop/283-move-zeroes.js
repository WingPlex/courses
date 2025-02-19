var moveZeroes = function (nums) {
    let nonZeroIndex = 0; // Pointer to track the position of non-zero elements

    nums.forEach((num, i) => {
        if (num !== 0) {
            if (i !== nonZeroIndex) {
                // Swap manually without destructuring
                let temp = nums[nonZeroIndex];
                nums[nonZeroIndex] = nums[i];
                nums[i] = temp;
            }
            nonZeroIndex++; // Move the pointer ahead
        }
    });
};

//test cases
let nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]
console.log(moveZeroes(nums));  
console.log(moveZeroes([0]));
console.log(moveZeroes([1, 0, 0]));
