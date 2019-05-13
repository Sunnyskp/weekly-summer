// # TIC TAC TOE

// OVERVIEW: What does our game need to do? 
//   1. Let's define our functionality
//   2. Determine what variables are needed to store
//   3. Code a prototype

// FUNCTIONALITY

// START OF APPLICATION
// - Draw the board
// - Determine who goes first

// EACH TURN (LOOPS)
// - Select a box
// - Check for winner
// - Change turn

// END OF APPLICATION
// - Display winner
// - Increase score
// - Go back to the start

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
      return false;

}

// checkWinner(): checks to see if anyone won
const checkWinner = () => {

}

// doTurn(): when a user selects a spot
const doTurn = () => {
  // 1. selectSquare
  // 2. checkWinner
  // 3. changeUserTurn
}


// Test cases
// whosTurnIsIt = selectSquare(whosTurnIsIt, 4, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 2, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 8, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 0, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 2, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 5, board);


// Start the application
drawTheBoard(board);