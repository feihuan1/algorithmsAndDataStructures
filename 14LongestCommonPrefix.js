// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// linear appoach
//time: O(n*m)

// prefix means commen letter from the first letter only
function longestCommonPrefix(strs) {
  // quick return for empty input
  if (strs.length === 0) {
    return "";
  }

  // set prefix to be first string then compare
  let prefix = strs[0];

  // loop through the array starting with index 1, the second element
  for (let i = 1; i < strs.length; i++) {
    // check if the rest of strigng contain the prefix at beginning if not, run code in while loop
    while (strs[i].indexOf(prefix) !== 0) {
      // shorten the prefix by cutting the last letter and check again
      prefix = prefix.substring(0, prefix.length - 1);

      // if prefix been cutting to empty, return "" right away
      if (!prefix) return "";
    }
  }

  // when nothing need to be cutting of from prefix, thats the result we are looking for
  return prefix;
}
