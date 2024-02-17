//If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!



//method 1
function isSolved(board) {
  
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0]; // Winner in the row
      }
      if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return board[0][i]; 
      }
    }
  
    
    if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0]; // Winner in the main diagonal
    }
    if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2]; 
    }
  
    for (let row of board) {
      for (let cell of row) {
        if (cell === 0) {
          return -1; 
        }
      }
    }
  
    return 0; 
  }
  
 //method 2 
 function isSolved(board) {
    board = board.join('-').replace(/,/g,'');
    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;
    return 0;
 }
  const exampleBoard = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
  ];
  
  const result = isSolved(exampleBoard);
  console.log(result); 
  