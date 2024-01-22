//recursive
function recurSum(n, total = 0) {
    if (n <= 0) {
        return total;
    }

    return recurSum(n - 1, total + n);
}
console.log(recurSum(5)); // Output: 15
