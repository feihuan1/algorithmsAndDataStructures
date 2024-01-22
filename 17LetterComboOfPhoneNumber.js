// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// backtrack approach 
//time: O(3^N * 4^M)
var letterCombinations = function(digits) {
    // Check if the input is empty
    if (digits.length === 0) {
        return [];
    }

    // Mapping of digits to letters
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    // Result array to store combinations
    const result = [];

    // Backtracking function
    function backtrack(index, currentCombination) {
        // Check if the combination is complete (reached the end of input)
        if (index === digits.length) {
            // Add the complete combination to the result array
            result.push(currentCombination);
            return;
        }

        // Get the current digit and its corresponding letters
        const currentDigit = digits[index];
        const letters = digitMap[currentDigit];

        // Iterate through the letters for the current digit
        for (let i = 0; i < letters.length; i++) {
            // Make a recursive call with the next index and updated combination
            backtrack(index + 1, currentCombination + letters[i]);
        }
    }

    // Start the backtracking process with initial values
    backtrack(0, '');

    // Return the final result array
    return result;
};