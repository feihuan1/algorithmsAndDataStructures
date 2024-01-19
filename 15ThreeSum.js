// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


var threeSum = function(nums) {
    let result = []; 
    // makethe array sorted
    nums.sort((a, b) => a-b); 

    // loop through
    for(let i = 0; i< nums.length - 2; i++) {

        // if the letter is same as the previous, skip
        if(i > 0 && nums[i] === nums[i-1]) continue;

        // set two pointer(second and third element in result subarray)
        let left = i + 1; 
        let right = nums.length -1; 

        // run check while the second element smaller than third
        while(left < right) {
            // culculate the sum
            const sum = nums[i] + nums[left] + nums[right]; 
            // move right pointer back if sum too big
            if(sum > 0) {
                right--; 
            // move left pointer forward if too small
            } else if(sum< 0) {
                left ++;

            }else {
                // if its 0 push the array to the result
                result.push([nums[i], nums[left], nums[right]]); 
                // move left forward run while loop agaimn see if theres anymore match within the range
                left++;
                // skip the same number
                while(left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
            }
        }

    }
    return result;
};