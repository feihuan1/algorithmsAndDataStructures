// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters. 

// use Manacher's Algorithm

function longestPalindrome(s) {
    // Check if the length of the string is 0 or 1, in which case it's already a palindrome
    if (s.length <= 1) {
        return s;
    }

    // Preprocess the string to handle even-length palindromes
    const processedString = preProcess(s);

    // Length of the processed string
    const n = processedString.length;

    // Array to store the lengths of palindromes centered at each position in the processed string
    const p = new Array(n).fill(0);

    // Initialize variables to keep track of the center and right boundary of the current palindrome
    let center = 0;
    let right = 0;

    // Loop through the processed string to find palindromes
    for (let i = 1; i < n - 1; i++) {
        // Calculate the mirror position for the current position 'i'
        const mirror = 2 * center - i;

        // If 'i' is within the current palindrome's right boundary,
        // set the palindrome length based on the mirror position or the difference to the right boundary
        if (i < right) {
            p[i] = Math.min(right - i, p[mirror]);
        }

        // Attempt to expand the palindrome centered at 'i'
        while (processedString[i + (1 + p[i])] === processedString[i - (1 + p[i])]) {
            p[i]++;
        }

        // If the palindrome centered at 'i' expands past the current right boundary,
        // adjust the center and right boundary
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
    }

    // Find the maximum element in the palindrome lengths array 'p'
    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 1; i < n - 1; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }

    // Extract the palindrome substring and remove the '#' added during preprocessing
    const start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
}

// Function to preprocess the string by adding '#' between each character and adding '$' at the end
function preProcess(s) {
    let result = '#';
    for (let i = 0; i < s.length; i++) {
        result += s[i] + '#';
    }
    return result + '$'; // '$' is a sentinel character to avoid boundary checks
}