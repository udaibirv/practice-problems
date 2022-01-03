/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums === null || nums.length === 0){
        return false;
    }
    let len = nums.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++ ){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
};