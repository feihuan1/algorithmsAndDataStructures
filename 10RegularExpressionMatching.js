// 10. Regular Expression Matching
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).


// dynamic programing approach time: O(n*m)
function isMatch(s, p) {
    const memo = {}; // Memoization object

    function dp(i, j) {
        // Check if the result for the current indices is already memoized exp memo = { '1,2': true,}
        if (memo[`${i},${j}`] !== undefined) {
            return memo[`${i},${j}`];
        }

        let result;

        // Base case: if both strings are empty, it's a match or p out of bouce i has to be out of bouce or its a false
        if (j === p.length) {
            result = i === s.length;
        } else {
            // Check if current characters match
            const match = i < s.length && (s[i] === p[j] || p[j] === '.');

            // If next character is '*', consider two possibilities: 
            // 1. Ignore '*' and its preceding character
            // 2. Keep '*' and its preceding character, and recursively match the rest of the string
            if (j + 1 < p.length && p[j + 1] === '*') {
                //fun fact: this returns a boolean,j+2 jump over the *, either true will work out matching
                result = dp(i, j + 2) || (match && dp(i + 1, j)); 
            } else {
                // If current characters match, recursively match the rest of the string
                result = match && dp(i + 1, j + 1);// boolean , 
            }
        }

        // Memoize the result for the current indices
        memo[`${i},${j}`] = result;
        return result;
    }

    return dp(0, 0);
}