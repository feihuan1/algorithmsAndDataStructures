// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// heap's algorithm time O(n!) "order of factorial of n (n x n-1 x ... x 1)", space O(n)

// Function to generate all permutations of an array
function permute(nums) {
    // Function to swap two elements in an array
    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // Initialize an array to store permutations
    const result = [];

    // Function to generate permutations recursively
    function generatePermutations(array, n) {
        // Base case: if there's only one element left, we've found a permutation
        if (n === 1) {
            // Push a copy of the current permutation to the result array
            result.push(array.slice());
            return;
        }
            // Generate permutations for the remaining elements
            generatePermutations(array, n - 1);

        // Recursive case: generate permutations by swapping elements
        for (let i = 0; i < n - 1; i++) {

            // Swap the i-th element with the last element (n - 1)
            if (n % 2 === 0) {
                // If n is even, swap the i-th element with the last element
                swap(array, i, n - 1);
            } else {
                // If n is odd, swap the first element with the last element
                swap(array, 0, n - 1);
            }
            generatePermutations(array, n - 1);
        }
    }

    // Generate permutations recursively
    generatePermutations(nums, nums.length);

    // Return the array of permutations
    return result;
}
