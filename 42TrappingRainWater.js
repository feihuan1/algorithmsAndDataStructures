// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// two pointer approach, time O(n), space O(1)
var trap = function(height) {
    // Check if there are less than or equal to 2 bars, as trapping water requires at least three bars
    if (height.length <= 2) {
        return 0; // Not enough bars to trap water
    }

    let left = 0; // Initialize the left pointer
    let right = height.length - 1; // Initialize the right pointer
    let leftMax = 0; // Initialize the maximum height encountered from the left
    let rightMax = 0; // Initialize the maximum height encountered from the right
    let trappedWater = 0; // Initialize the total trapped water

    // Iterate while the left pointer is less than the right pointer
    while (left < right) {
        // Update leftMax with the maximum of the current height and the existing leftMax
        leftMax = Math.max(leftMax, height[left]);
        // Update rightMax with the maximum of the current height and the existing rightMax
        rightMax = Math.max(rightMax, height[right]);

        // Calculate trapped water for the current position
        if (leftMax < rightMax) {
            // If leftMax is less than rightMax, calculate trapped water at the left pointer position
            trappedWater += leftMax - height[left];
            left++; // Move the left pointer to the right
        } else {
            // If rightMax is less than or equal to leftMax, calculate trapped water at the right pointer position
            trappedWater += rightMax - height[right];
            right--; // Move the right pointer to the left
        }
    }

    return trappedWater; // Return the total trapped water
};