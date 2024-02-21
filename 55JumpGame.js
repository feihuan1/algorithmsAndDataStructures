// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
// time O(n), greedy algorithm

var canJump = function(nums) {
    // Initialize a variable named goal to store the index that needs to be reached
    let goal = nums.length - 1;  // Start from the last index 

    // Iterate through the array nums in reverse order starting from the second last element
    for(let i = nums.length - 2; i >= 0; i--) {  // Start from the second last element
        // Check if the current index plus the value at that index is greater than or equal to the goal index
        if(i + nums[i] >= goal) {
            // If so, update the goal index to the current index (i)
            goal = i;
        }
    }

    // Check if the final goal index is 0 or less, indicating that it's possible to jump to the end of the array
    return goal <= 0;  // Check if goal is less than or equal to 0
};