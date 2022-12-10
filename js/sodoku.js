function sudoku(puzzle) {
    // Function to check if a number can be placed at a given position
    function canPlace(puzzle, row, col, num) {
      // Check if the given number already exists in the row
      for (let i = 0; i < puzzle.length; i++) {
        if (puzzle[row][i] === num) {
          return false;
        }
      }
  
      // Check if the given number already exists in the column
      for (let i = 0; i < puzzle.length; i++) {
        if (puzzle[i][col] === num) {
          return false;
        }
      }
  
      // Check if the given number already exists in the 3x3 grid
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          if (puzzle[i][j] === num) {
            return false;
          }
        }
      }
  
      // If the number is not already in the row, column, or 3x3 grid, it can be placed
      return true;
    }
  
    // Function to solve the Sudoku puzzle using brute-force
    function solve(puzzle) {
      // Loop through each cell in the puzzle
      for (let row = 0; row < puzzle.length; row++) {
        for (let col = 0; col < puzzle[row].length; col++) {
          // If the cell is empty (has a value of 0), try to place a number between 1 and 9
          if (puzzle[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              // If the number can be placed at the given position, place it and try to solve the puzzle
              // using recursion
              if (canPlace(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                if (solve(puzzle)) {
                  return puzzle;
                } else {
                  // If the puzzle cannot be solved with the given number, reset the cell to 0 and try
                  // the next number
                  puzzle[row][col] = 0;
                }
              }
            }
            // If no number can be placed at the given position, return false to trigger backtracking
            return false;
          }
        }
      }
      // If the puzzle has been filled, return puzzle
      return puzzle;
    }
  
    // Solve the puzzle and return the solved puzzle
    return solve(puzzle);
}
  
var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];


const puzzle2 = (sudoku(puzzle))