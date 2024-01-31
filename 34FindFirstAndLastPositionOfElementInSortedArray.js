// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Binary search , time: O(log n)

var searchRange = function(nums, target) {
    // helper function find the left or right index
    const binarySearch = (nums, target, isLeft) => {
        let left = 0; 
        let right = nums.length - 1; 
        // index set -1
        let index = -1
        while(left <= right) {
            let mid = Math.floor((left + right) / 2); 
            if(target < nums[mid]) {
                right = mid - 1; 
            } else if (target > nums[mid]) {
                left = mid + 1
            } else {
                // if taget find, keep update depends on if need find left or right index
                index = mid; 
                if(isLeft) {
                    // decrease right until find most left index
                    right = mid - 1;
                } else {
                    //increase left until find most right index
                    left = mid + 1;
                }
            }
        }
        return index
    }

    // run twice to find head and tail of output
    const head = binarySearch(nums, target, true)
    const tail = binarySearch(nums, target, false)

return [head, tail];
};