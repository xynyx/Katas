const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = 0;
    }
  }
  // Replace the 0's where whiteQueen and blackQueen are with 1's
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}


const queenThreat = function (board) {
  let collision = false;
  // Creating a shallow copy of the array with slice() does not work, as it is a NESTED ARRAY and even though you are only referring to the new copied array, you reference the array by using whiteQueen, which then subsequently ends up modifying the original array as well
  // Have to create a DEEP copy of an array; this seemed like the easiest method
  let newBoard = JSON.parse(JSON.stringify(board));

  // ALL of these reference only ONE of the queens, as you only need to calculate if one of the queens will hit the other
  // Makes it a lot easier to determine whether they will collide because you always start from the whiteQueen's position

  // Horizontal
  let horizontal = newBoard[whiteQueen[0]];
  // Remove the whiteQueen, replace with 0, and then check the rest of the array to see if any other 1's are in that array
  horizontal.splice(whiteQueen[1], 1, 0);
  // Includes() will return true if that value is found, and false if not found
  collision = horizontal.includes(1);

  // Vertical
  let accumulator = 0;
  board.forEach(function (el) {
    let index = el.indexOf(1);
    // Compare whiteQueen[1] value to the value of the index where another 1 is found as forEach loops through each inner array
    if (index === whiteQueen[1]) {
      accumulator += 1;
    }
  })
  // If two 1's are found, then accumulator must equal 2, and therefore there is a collision
  if (accumulator === 2) {
    collision = true;
  }

  // Diagonal
  let b = whiteQueen[0];
  let x = whiteQueen[1] - 1; // for LEFT side
  let y = whiteQueen[1] + 1; // for RIGHT side

  // Diagonal left and right down
  // Must initialize fresh variables as they will be permanently modified
  let i = x;
  let f = y;
  // All these for loops simply go through each nested array, subtract or add one from the index of the inner array, and then determine whether 1 is found
  for (j = b + 1; j <= board.length - 1; j++) {
    // Ternary operator
    // condition ? exprIfTrue : exprIfFalse
    board[j][i] === 1 ? collision = true : collision;
    i--;
    board[j][f] === 1 ? collision = true : collision;
    f++;
  }

  // Diagonal left and right up
  let k = x;
  let g = y;
  for (j = b - 1; j >= 0; j--) {
    board[j][k] === 1 ? collision = true : collision;
    k--;
    board[j][g] === 1 ? collision = true : collision;
    g++;
  }

  return collision;
}

// let whiteQueen = [1, 6];
// let blackQueen = [3, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));