// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

 // time is O(n), space O(1)
var myAtoi = function(s) { 
// set inital result numer to be 0
    let result = 0;

    //set limit 
    const max = Math.pow(2,31) - 1;
    const min = -Math.pow(2,31);

    // sign determine if result its positive or negative number
    let sign = 1;

    // loop through from index 0
    let i = 0;  

    // while before last index, skipp all the space
    while(i < s.length && s[i] === " ") {
        i++;
    } 

    // if i not reach the end of s and find a - or + 
    if(i < s.length && (s[i] === "+" || s[i] === "-")) {
    //update sign tobe -1 or 1 
        sign = s[i] === "-" ? -1 : 1; 
        // index skip the +- 
        i++;
    }

    // as lone as not rich end and current letter parseInt is a number
    while(i < s.length && !isNaN(parseInt(s[i]))) {
    // result times 10 add the currrent number to the end of result
        result = result * 10 + parseInt(s[i]);
    // check if the result is bigger or smaller than the limit
        if(result * sign > max) return max;
        if(result * sign < min) return min; 
    // keep checking the next index while meet the while condition
        i++;
    }

    //return the result times sign (+-)
    result *= sign; 

    return result;
};