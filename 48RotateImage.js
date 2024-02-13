// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


// time: O(n^2)
var rotate = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            // transpose
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
            // reverse
        matrix[i].reverse();
    }
};