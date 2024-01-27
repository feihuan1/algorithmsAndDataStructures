// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


//Dynamic Programming Approach:O(n^2) better!!
var generateParenthesis = function(n) {
    const dp = [[]]; // Initialize an array to store results for each value of n.

    // Loop from 1 to n to generate combinations for each value of n.
    for (let i = 1; i <= n; i++) {
        const current = []; // Array to store combinations for the current value of n.

        // Loop through values of j from 0 to i to combine solutions from smaller subproblems.
        for (let j = 0; j < i; j++) {
            // Iterate over combinations of parentheses from dp[j].
            for (const left of dp[j]) {
                // Iterate over combinations of parentheses from dp[i - 1 - j].
                for (const right of dp[i - 1 - j]) {
                    // Combine the left and right combinations to form a new valid combination.
                    current.push('(' + left + ')' + right);
                }
            }
        }

        // Store the combinations for the current value of n in the dp array.
        dp.push(current);
    }

    // Return the combinations for n pairs of parentheses.
    return dp[n];
};

// time: O(4^n / sqrt(n))
var generateParenthesis = function (n) {
    const res = []
    const backtrack = (str = '', opening = 0, closing = 0) => {
      if (str.length === n * 2) {
        res.push(str)
        return
      }
      if (opening < n) backtrack(str + '(', opening + 1, closing)
      if (closing < opening) backtrack(str + ')', opening, closing + 1)
    }
    backtrack()
    return res
  };

