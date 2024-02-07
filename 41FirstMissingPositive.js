// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// naive approach,time O(n),space O(n) hash set take n of space
var firstMissingPositive = function (nums) {
  const range = nums.length + 1;
  const set = new Set(nums);

  for (let i = 1; i <= range; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

// time: O(n), space: O(1)
var firstMissingPositive = function (nums) {
  // First loop: Convert negative numbers to 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) nums[i] = 0;
  }

  // Second loop: Mark visited positions using negative values
  for (let i = 0; i < nums.length; i++) {
    const value = Math.abs(nums[i]);
    if (value >= 1 && value <= nums.length) {
      // If the current position hasn't been visited, mark it as visited
      if (nums[value - 1] > 0) {
        nums[value - 1] *= -1;
      }
      // If the current position has already been visited, mark it with a special value
      else if (nums[value - 1] === 0) {
        nums[value - 1] = -1 * (nums.length + 1);
      }
    }
  }

  // Third loop: Find the first non-negative value, indicating the first missing positive integer
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i - 1] >= 0) return i;
  }

  // If all positions are visited, return the next positive integer
  return nums.length + 1;
};

