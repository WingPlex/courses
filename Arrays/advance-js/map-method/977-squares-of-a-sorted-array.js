/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return  nums.map(item => item*item).sort((a,b)=>(a-b))
};
//test cases
let nums = [-4,-1,0,3,10];
// Output: [0,1,9,16,100]
console.log(sortedSquares(nums));