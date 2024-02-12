// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

var permute = function(nums) {
    if(nums.length === 1) return [nums]; 
    if(nums.length === 2) return [[nums[0],nums[1]],[nums[1], nums[0]]] 

    return nums.map((n) => {
        const rest = nums.filter(i => i !== n); 
        const permuteRest = permute(rest); 
        return permuteRest.map(i => [n, ...i])
    }).flat(1)
};