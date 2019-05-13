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

// Store a reference
const theBoard = document.querySelector('.board');



const writeMsg = (msg = ``) => {
  console.log(msg);
  document.querySelector('.msg').innerHTML = msg;
}

// drawTheBoard(): redraw the board to our UI
const drawTheBoard = (aBoard) => {

  // Copy the values to a new array, if null, create blank
  const newBoard = aBoard.map((sq, i)=> {
    if (!sq) return i;
    return sq;
  });

  console.log(`
    ${newBoard[0]} | ${newBoard[1]} | ${newBoard[2]} 
    -----------
    ${newBoard[3]} | ${newBoard[4]} | ${newBoard[5]}
    -----------
    ${newBoard[6]} | ${newBoard[7]} | ${newBoard[8]}
  `)

 
  theBoard.innerHTML = ``;  // Clear the board

  // Looping is another possibility
  aBoard.forEach((sq, i) => {
    if (!sq)
      theBoard.innerHTML += `<div data-spot=${i}></div>` 
    else
      theBoard.innerHTML += `<div data-spot=${i}>${sq}</div>` 
  });
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
    writeMsg(`Spot already taken by: ${aBoard[sqNum]}`);
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
const checkBoard = (aBoard) => {
  /* Winning scenarios:
      [0, 1, 2]
      [3, 4, 5]
      [6, 7, 8]
      [0, 3, 6]
      [1, 4, 7]
      [2, 5, 8]
      [0, 4, 8]
      [2, 4, 6]  */
    
  if ( 
    ((aBoard[0] == aBoard[1]) && (aBoard[0] == aBoard[2]) && aBoard[0]) ||
    ((aBoard[3] == aBoard[4]) && (aBoard[3] == aBoard[5]) && aBoard[3]) ||
    ((aBoard[6] == aBoard[1]) && (aBoard[0] == aBoard[2]) && aBoard[6]) ||
    ((aBoard[0] == aBoard[3]) && (aBoard[0] == aBoard[6]) && aBoard[0]) ||
    ((aBoard[1] == aBoard[4]) && (aBoard[1] == aBoard[7]) && aBoard[1]) ||
    ((aBoard[2] == aBoard[5]) && (aBoard[2] == aBoard[8]) && aBoard[2]) ||
    ((aBoard[0] == aBoard[4]) && (aBoard[0] == aBoard[8]) && aBoard[0]) ||
    ((aBoard[2] == aBoard[4]) && (aBoard[2] == aBoard[6]) && aBoard[2])
  ) {
    // Return true if winner
    return true;
  }

  // Return false if no winner
  return false;
}


const gameOver = (whoWon) => {
  writeMsg(`Game Over! ${whoWon} was the winner.`);
  theBoard.innerHTML = "Winner!!"
  return true;
}

// doTurn(): when a user selects a spot
const doTurn = (sq) => {
  
  if (!sq) {
    writeMsg(`Woops, something went wrong. Try again.`);
    return false;
  }

  // 1. selectSquare
  let wasValidMove = selectSquare(whosTurnIsIt, sq, board);

  // 2. checkBoard
    // If winner or cats: gameOver()
    // If no winner: changeUserTurn() and doTurn()
  if ( wasValidMove ) {  // Valid move, board has already been redrawn
    let isWinner = checkBoard(board);
    if (isWinner) {
      gameOver(whosTurnIsIt);
    }
    else {
      whosTurnIsIt = changeUserTurn(whosTurnIsIt);
      writeMsg(`It's now ${whosTurnIsIt}'s turn.`);
      //doTurn();
    }
  }
  else {
    //doTurn();
    drawTheBoard(board);
    writeMsg(`Please go again.`);
  }

}


theBoard.addEventListener(`click`, event => {
  // Which spot did we click?
  console.log("Something was clicked", event);

  const whichSpot = event.target.dataset.spot;
  if (!whichSpot) return;  // if no spot was stored, quit immediately!

  doTurn(whichSpot);
})





// Start the application
drawTheBoard(board);
writeMsg(`It's now ${whosTurnIsIt}'s turn.`);

// Simple test cases:
// whosTurnIsIt = selectSquare(whosTurnIsIt, 4, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 2, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 8, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 0, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 2, board);
// whosTurnIsIt = selectSquare(whosTurnIsIt, 5, board);
