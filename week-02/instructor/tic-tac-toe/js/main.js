const board = [
  null, null, null,
  null, null, null,
  null, null, null,
];

let userX = {
  name: `Cory`,
  score: 0,
};

let user0 = {
  name: `Kadeem`,
  score: 0,
};
// Refactor the above user data to be more flexible

let whosTurnIsIt = `X`;

// drawTheBoard(): redraw the board to our UI
const drawTheBoard = (aBoard) => {

  // Copy the values to a new array, if null, create blank
  const newBoard = aBoard.map(sq => {
    if (!sq) return ` `;
    return sq;
  });

  console.log(`
 ${newBoard[0]} | ${newBoard[1]} | ${newBoard[2]} 
-----------
 ${newBoard[3]} | ${newBoard[4]} | ${newBoard[5]}
-----------
 ${newBoard[6]} | ${newBoard[7]} | ${newBoard[8]}
`)
  // Looping is another possibility
  // aBoard.forEach(sq => {
  //   if ()
  // })
};

// selectSquare(): returns true if the square is available, false otherwise
const selectSquare = (whoGoesThere, sqNum, aBoard) => {

  // The move is good! Set the spot, then redraw
  if (!aBoard[sqNum]) {
  
    aBoard[sqNum] = whoGoesThere;
    drawTheBoard(aBoard);

    return true; // Good!
  }
  else {
    console.log(`Spot already taken by: ${aBoard[sqNum]}`);
    return false;  // Bad
  }
    
};

// changeUserTurn(): just alternates turns, returns false if user was bad
const changeUserTurn = (currTurn) => {
    if (currTurn == `X`) 
      return `O`;
    else if (currTurn == `O`)
      return `X`;
    else
      return false;  // would argue this isn't useful if our users were more dynamic
}

// checkBoard(): checks to see if anyone won (or if it's "cats game")
const checkBoard = () => {
  /* Winning scenarios:
      [0, 1, 2]
      [3, 4, 5]
      [6, 7, 8]
      [0, 3, 6]
      [1, 4, 7]
      [2, 5, 8]
      [0, 4, 8]
      [2, 4, 6]  */
}

const gameOver = () => {

}


// doTurn(): when a user selects a spot
const doTurn = () => {
  // 1. selectSquare
  // 2. checkBoard
    // If winner or cats: gameOver()
    // If no winner: changeUserTurn() and doTurn()
}




// Start the application
drawTheBoard(board);


// Simple test cases:
// whosTurnIsIt = selectSquare(whosTurnIsIt, 4, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 2, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 8, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 0, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 2, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 5, board);
