// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board) {
  const seen = new Set();

  // Check rows and columns
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const num = board[i][j];
          
          if (num !== '.') {
              const rowKey = `row ${i} ${num}`;
              const colKey = `col ${j} ${num}`;
              const subBoxKey = `box ${Math.floor(i / 3)}-${Math.floor(j / 3)} ${num}`;

              if (seen.has(rowKey) || seen.has(colKey) || seen.has(subBoxKey)) {
                  return false;
              }

              seen.add(rowKey);
              seen.add(colKey);
              seen.add(subBoxKey);
          }
      }
  }

  return true;
}