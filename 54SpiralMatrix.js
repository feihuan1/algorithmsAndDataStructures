// Given an m x n matrix, return all elements of the matrix in spiral order.


//Spiral Order Traversal approach, time: O(n*m), space:O(1)
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return []; 
    let top = 0; 
    let bottom = matrix.length - 1; 
    let left = 0; 
    let right = matrix[0].length - 1;

    const result = []; 

    // Loop until all elements are traversed
    while(left <= right && top <= bottom) {
        // Traverse the top row from left to right
        for(let i = left; i<= right; i++) {
            result.push(matrix[top][i])
        } 
         // Move the top boundary down
        top++;

         // Traverse the right column from top to bottom
        for(let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        } 
        // Move the right boundary leftwards
        right--; 

        // Traverse the bottom row from right to left
        if(top <= bottom) {// Ensure there's still a valid row to traverse
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            } 
            // Move the bottom boundary up
            bottom--;
        }

        // Traverse the left column from bottom to top
        if(left <= right) {// Ensure there's still a valid column to traverse
            for(let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            // Move the left boundary rightwards
            left++;
        }
    }

    return result
};