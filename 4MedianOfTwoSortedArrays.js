/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array for simplicity
    if(nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    } 

    // Initialize low and high for binary search
    let low = 0; 
    let high = nums1.length;

    // Perform binary search on nums1
    while(true) {
        // Calculate the partition point in nums1
        const nums1LeftPart = Math.floor((low + high) / 2);
        // Calculate the corresponding partition point in nums2
        const nums2LeftPart = Math.floor((nums1.length + nums2.length + 1) / 2 - nums1LeftPart);

        // Find the left and right numbers for both arrays
        const nums1LeftNumber = (nums1LeftPart === 0) ? -Infinity : nums1[nums1LeftPart - 1];
        const nums1RightNumber = (nums1LeftPart === nums1.length) ? Infinity : nums1[nums1LeftPart];

        const nums2LeftNumber = (nums2LeftPart === 0) ? -Infinity : nums2[nums2LeftPart - 1];
        const nums2RightNumber = (nums2LeftPart === nums2.length) ? Infinity : nums2[nums2LeftPart];

        // Check if the current partitioning is correct
        if(nums1LeftNumber <= nums2RightNumber && nums2LeftNumber <= nums1RightNumber) {
            // Calculate the median based on the even or odd total length
            if((nums1.length + nums2.length) % 2 === 0){
                return (Math.max(nums1LeftNumber, nums2LeftNumber) + Math.min(nums1RightNumber, nums2RightNumber)) / 2
            } else {
                return Math.max(nums1LeftNumber, nums2LeftNumber)
            }
        } else if (nums1LeftNumber > nums2RightNumber) {
            // Adjust the partition in nums1 if needed
            high = nums1LeftPart - 1;
        } else {
            // Adjust the partition in nums1 if needed
            low = nums1LeftPart + 1;
        }
    }
};