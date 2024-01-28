// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// time: O(n)
var strStr = function(haystack, needle) {  
    if(needle.length === 0 ) return 0;
    if(haystack.length === 0 ||  haystack.length < needle.length) return -1; 
 
    return haystack.indexOf(needle)
};

// KMP: Knuth-Morris-Pratt algoritm 
//time:O(n+m) better

var strStr = function(haystack, needle) {
    // Special case: if 'needle' is an empty string, it's found at the beginning of 'haystack'.
    if (needle === "") return 0;

    function makeLPSArray(str) {
        const lps = [0]; // Initialize LPS array with 0 for the first character.
        let prevLPS = 0; // Length of the previous longest prefix suffix.
        let i = 1;       // Index for iterating through the string.

        // Loop to fill the LPS array.
        while (i < str.length) {
            if (str[i] === str[prevLPS]) {
                // Characters match, update LPS and move to the next characters.
                lps[i] = prevLPS + 1;
                i++;
                prevLPS++;
            } else if (prevLPS === 0) {
                // Mismatch, but no previous matching prefix, set LPS to 0 and move to the next character.
                lps[i] = 0;
                i++;
            } else {
                // Mismatch, keep reducing until a match is found.
                prevLPS = lps[prevLPS - 1];
            }
        }

        return lps; // Return the computed LPS array.
    };

    // Build the LPS array for the 'needle'.
    const lps = makeLPSArray(needle);

    let i = 0; // Pointer for iterating through 'haystack'.
    let j = 0; // Pointer for iterating through 'needle'.

    // Main loop for substring search.
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            // Characters match, move to the next characters in both 'haystack' and 'needle'.
            i++;
            j++;
        } else {
            if (j === 0) {
                // Mismatch at the beginning of 'needle', move to the next character in 'haystack'.
                i++;
            } else {
                // Mismatch, but there was a previous matching prefix, update 'j'.
                j = lps[j - 1];
            }
        }

        // If 'needle' completely matched in 'haystack', return the starting index.
        if (j === needle.length) {
            return i - j;
        }
    }

    // 'needle' not found in 'haystack'.
    return -1;
};