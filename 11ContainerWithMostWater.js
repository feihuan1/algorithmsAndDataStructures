// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.




// two pointer approach

var maxArea = function (height) {
    //set result initially 0 and two pointer 
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    //loop it
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxWater = Math.max(maxWater, h * w);

        
        height[left] < height[right] ? left ++ : right --;

    } 
    return maxWater
};