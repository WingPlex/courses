var kLengthApart = function(nums, k) {
    let prev = -Infinity; // Initialize to a very small number ( -Infinity is a predefined global constant. It is a special numeric value in JavaScript that represents the lowest possible number. It is smaller than any other number, even Number.MIN_VALUE,  we set prev = -1, it might cause incorrect distance calculations if k is very large.-Infinity ensures that the first 1 doesnot fail the condition)
    
    return nums.every((num, i) => {
        if (num === 1) {
            if (i - prev <= k) return false; // Distance check
            prev = i; // Update the last seen index of 1
        }
        return true;
    });
};
//test cases
let nums = [1,0,0,0,1,0,0,1]; let k = 2;
// Output: true
console.log(kLengthApart(nums, k));
console.log(kLengthApart([1,0,0,1,0,1], 2));
console.log(kLengthApart([1,1,1,1,1], 0));  