// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.



//  recursive approach, time:O(n), space: O(n)
function countAndSay(n) {
    // Base Case: If n is 1, return "1".
    if (n === 1) {
        return "1";
    }

    // Recursive Case: Get the previous term in the sequence.
    const prevResult = countAndSay(n - 1);

    // Initialize variables for the current result and count of consecutive digits.
    let result = "";
    let count = 1;

    // Iterate through the previous term.
    for (let i = 0; i < prevResult.length; i++) {
        // If the current digit is the same as the next one, increase the count.
        if (prevResult[i] === prevResult[i + 1]) {
            count++;
        } else {
            // If the next digit is different, concatenate the count and digit to the result.
            result += count + prevResult[i];
            // Reset the count for the new digit.
            count = 1;
        }
    }

    // Return the final result for the current term in the sequence.
    return result;
}