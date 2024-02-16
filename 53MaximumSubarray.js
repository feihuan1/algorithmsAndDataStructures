// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

//Kadane's algorithm, naive approach, time:O(n)

var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0]; 
    // start loop with index 1 becuse both sum are already index0
    for ( let i = 1; i < nums.length; i++) {
        //if current index is larger than all sum before, start calculate sum with it
        currentSum = Math.max(currentSum+nums[i], nums[i]); 
        //updating maxSum
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum;
};




// divide and conquer , O(logn)