// Given a string s, find the length of the longest substring without repeating characters.

//  Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
    let max = 0;                       // Variable to store the maximum length
    let start = 0;                     // Starting index of the current substring
    let charIndexMap = new Map();      // Map to store the last index of each character in the current substring

    // Loop through each character in the input string
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];    // Get the current character

        // If the character is already in the substring, update the start pointer
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }

        // Update the character index in the map
        charIndexMap.set(currentChar, end);

        // Update the maximum length if needed
        max = Math.max(max, end - start + 1);
    }

    return max;  // Return the final maximum length
};
