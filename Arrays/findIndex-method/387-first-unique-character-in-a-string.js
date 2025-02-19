/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let index = s.split("").findIndex(char => s.indexOf(char) === s.lastIndexOf(char));
    return index !== -1 ? index : -1;  // Return -1 if no unique character exists
};
//test cases
let s = "leetcode";
// Output: 0
console.log(firstUniqChar(s));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));