var sumOfUnique = function(nums) {
    let freq = {};
    
    // Count occurrences
    nums.forEach(num => freq[num] = (freq[num] || 0) + 1);
    
    // Sum only unique elements
    return Object.keys(freq).reduce((sum, key) => {
        return freq[key] === 1 ? sum + Number(key) : sum;
    }, 0);
};
//test cases
console.log(sumOfUnique([1,2,3,2]));
// Output: 4
console.log(sumOfUnique([1,1,1,1,1]));
// Output: 0
console.log(sumOfUnique([1,2,3,4,5]));
// Output: 15
console.log(sumOfUnique([1,2,3,4,5,5,4,3,2,1]));
// Output: 0
console.log(sumOfUnique([1,2,3,4,5,6,7,8,9,10]));
// Output: 55