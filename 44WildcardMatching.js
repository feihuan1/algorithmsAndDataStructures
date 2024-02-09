// 44. Wildcard Matching

// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Two pointer approach time: O(n+m), space O(1)
var isMatch = function (s, p) {
  // Initialize pointers and variables
  let sPointer = 0; // Pointer for the string `s`
  let pPointer = 0; // Pointer for the pattern `p`
  let starIndex = -1; // Index of the last '*' encountered in `p`
  let sTemp = 0; // Temporary pointer for the string `s`

  // Loop through the string `s`
  while (sPointer < s.length) {
    // If current characters match or pattern character is '?'
    if (
      pPointer < p.length &&
      (p[pPointer] === "?" || p[pPointer] === s[sPointer])
    ) {
      sPointer++; // Move to the next character in `s`
      pPointer++; // Move to the next character in `p`
    } else if (pPointer < p.length && p[pPointer] === "*") {
      // If current pattern character is '*'
      starIndex = pPointer; // Update the index of '*'
      sTemp = sPointer; // Store the current string pointer
      pPointer++; // Move to the next character in `p` 
    } else if (starIndex !== -1) {
      // If there was a '*' before and characters didn't match
      pPointer = starIndex + 1; // Move pattern pointer after the last '*'
      sPointer = ++sTemp; // Move string pointer after the character matching '*'
    } else {
      // No match found
      return false;
    }
  }

  // If there are remaining '*' characters in the pattern, skip them
  while (pPointer < p.length && p[pPointer] === "*") {
    pPointer++; // Move to the next character in `p`
  }

  // If pattern pointer reached the end, return true; otherwise, return false
  return pPointer === p.length;
};
