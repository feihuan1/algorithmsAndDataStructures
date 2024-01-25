// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// time O(n)
// stack approach
function isValid(s) {
  // 3 case instant false
  if (s.length % 2 === 1) return false;

  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;

  if (
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "[" ||
    s[s.length - 1] === "{"
  )
    return false;

  const stack = [];
  const brackets = { "(": ")", "{": "}", "[": "]" };

  for (let char of s) {
    if (brackets[char]) {
      // If the character is an opening bracket, push it onto the stack
      stack.push(char);
    } else {
      // If the character is a closing bracket
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        // If the stack is empty or the popped character doesn't match the current closing bracket
        return false;
      }
    }
  }

  // The stack should be empty if all brackets are properly closed
  return stack.length === 0;
}

