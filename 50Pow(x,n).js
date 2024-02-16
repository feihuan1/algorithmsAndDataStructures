// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// time: O(log n), space: O(1) divide and conquer approach

// Recursive implementation of pow function
function myPowRecursive(x, n) {
    // Base case: if n is 0, return 1
    if (n === 0) return 1;
    
    // If n is negative, invert x and make n positive
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    // Recursive case:
    // If n is even, reduce problem size by halving n and square x
    // If n is odd, reduce problem size by decrementing n by 1 and halving n, then multiply x with the result of (x * x)
    return (n % 2 === 0) ? myPowRecursive(x * x, n / 2) : x * myPowRecursive(x * x, Math.floor(n / 2));
}


// Iterative implementation of pow function
function myPowIterative(x, n) {
    // Base case: if n is 0, return 1
    if (n === 0) return 1;
    
    // If n is negative, invert x and make n positive
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    // Initialize result to 1
    let result = 1;
    
    // Iterate until n becomes 0
    while (n > 0) {
        // If n is odd, multiply result with x
        if (n % 2 === 1) {
            result *= x;
        }
        // Square x and halve n in each iteration
        x *= x;
        n = Math.floor(n / 2);
    }
    
    // Return the final result
    return result;
}
