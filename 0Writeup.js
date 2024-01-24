//recursive
function recurSum(n, total = 0) {
    if (n <= 0) {
        return total;
    }

    return recurSum(n - 1, total + n);
}
function isValid(s) {
    const stack = [];
    const brackets = { '(': ')', '{': '}', '[': ']' };

    for (let char of s) {
        console.log(stack)
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

console.log(isValid("(()[]{})"))