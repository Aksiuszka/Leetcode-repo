/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const newArr =[];
    for(let i=0; i<nums.length;i++){
    newArr.push(nums[nums[i]])
    }
    return newArr;
    
};