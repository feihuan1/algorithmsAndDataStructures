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
// tutourial https://www.youtube.com/watch?v=l-XCWjps-UQ

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    function getModifiedString(string) {
        let modifiedString = "#";
        for (let i = 0; i < s.length; i++) {
            modifiedString += `${s[i]}#`
        }
        return modifiedString;
    }// add # between chars of input s

    const newString = getModifiedString(s); // #s#s#.... so doen't matter if its even or odd pal

    const p = new Array(newString.length).fill(0); // this keep track the length of pal subString, each element represents a center in s

    let center = 0;// this moves when current pal move over the leftBoundary, update center to i
    let rightBoundary = 0; // this moves when right side of pal move overs it, update to the current right position of pal String

    for (let i = 0; i < newString.length; i++) {

        let indexMirror = 2 * center - i;

        if (i < rightBoundary) p[i] = Math.min(rightBoundary - i, p[indexMirror]) // if i havent pass right boundary, we can fast calculate how many times MINIMIUM it can expand , save part of expansion time, update p[i] early(it's 0 initially)

        let right = i + p[i] + 1
        let left = i - p[i] - 1 // these are the current boundary of pal subString

        while(right < newString.length && left >= 0 && newString[left] === newString[right]) {
                p[i]++; 
                right++; 
                left--;
        }// if its not out of string on both side and both side is same value, it can expand to longer pal string, also right left boundary have to be expanded

        if(i + p[i] > rightBoundary){
            center = i ; 
            rightBoundary = i + p[i];
        }// when i+ p[i] means right side of current pal str pass the rightBoundary, update center to i, and update rightboundary to current right boundary;
    } 

    let LongestPalLength = Math.max(...p); 
    let longestPalCenterindex = p.indexOf(LongestPalLength) // if i cant read this one day, quit coding, so no comment lol

    return newString.substring(longestPalCenterindex - LongestPalLength + 1, longestPalCenterindex + LongestPalLength).replaceAll("#", '')

};