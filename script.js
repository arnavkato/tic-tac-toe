
// create gameboard factory function
function createGameboard() {
  const gameArea = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const updateGameArea = (row, col, value) => {
    gameArea[row][col] = value;
  };

  const getGameArea = () => {
    return gameArea;
  };

  return { updateGameArea, getGameArea };
}

// create player factory function
function createPlayer(name, symbol) {
    const getName = () => name;
    const getSymbol = () => symbol;
  return { getName, getSymbol };
}

// create game flow factory function
function createGameFlow() {
  const players = [createPlayer("Player 1", "X"), createPlayer("Player 2", "O")];
  const gameBoard = createGameboard();

  function checkWinner(board) {
            // Check rows
            for (let i = 0; i < 3; i++) {
                if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                    return board[i][0];
                }
            }
            
            // Check columns
            for (let i = 0; i < 3; i++) {
                if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                    return board[0][i];
                }
            }
            
            // Check diagonals
            if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                return board[0][0];
            }
            if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                return board[0][2];
            }
            
            return null;
        };
  
  function startGame() {
    let currentPlayer = players[0];
    let game = true;
    while(game) {
        console.log(gameBoard.getGameArea());
        let col = prompt('choose a column');
        let row = prompt("choose a row");

        gameBoard.updateGameArea(row, col, currentPlayer.getSymbol());

        if(checkWinner(gameBoard.getGameArea()) == 'X') {
            return console.log("player 1 wins");
        }
            
        else if (checkWinner(gameBoard.getGameArea()) == 'O') {
            return console.log("player 2 wins");
        }

        if (currentPlayer == players[0]) {
            currentPlayer = players[1];
        }
        else {
            currentPlayer = players[0];
        }
        
        
    }

  }

  return { startGame }
}


const game = createGameFlow();

console.log(game.startGame());