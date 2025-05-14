// create gameboard factory function
function createGameboard() {
  const gameArea = document.createElement("div");
  gameArea.className = "container";

  gameArea.style.display = "grid";
  gameArea.style.gridTemplateColumns = "repeat(3, 1fr)";
  gameArea.style.gridTemplateRows = "repeat(3, 1fr)";
  gameArea.style.gap = "10px";
  gameArea.style.width = "300px";
  gameArea.style.height = "300px";

  const grid = [];
  for (let row = 0; row < 3; row++) {
    const rowCells = [];
    for (let col = 0; col < 3; col++) {
      const i = row * 3 + col;
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.style.background = "lightgray";
      cell.style.display = "flex";
      cell.style.alignItems = "center";
      cell.style.justifyContent = "center";
      cell.style.border = "1px solid black";
      gameArea.appendChild(cell);
      rowCells.push(cell);
    }
    grid.push(rowCells);
  }

  document.body.appendChild(gameArea);

  const updateGameArea = (row, col, value) => {
    grid[row][col].textContent = value;
  };

  const getGameArea = () => {
    return gameArea;
  };

  const getGrid = () => {
    return grid;
  };

  const setupEventListeners = (game) => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        grid[row][col].addEventListener("click", () => {
          const currentPlayer = game.getCurrentPlayer();
          if (!grid[row][col].textContent) {
            grid[row][col].textContent = currentPlayer.getSymbol();
          } else {
            return;
          }
            

          if (game.checkWinner(grid) == "X") {
            return console.log("player 1 wins");
          } else if (game.checkWinner(grid) == "O") {
            return console.log("player 2 wins");
          } else if (game.checkWinner(grid) == "draw") {
            return console.log("draw");
          }

          game.changeCurrentPlayer();
        });
      }
    }
  };

  return { updateGameArea, getGameArea, getGrid, setupEventListeners };
}

// create player factory function
function createPlayer(name, symbol) {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
}

// create game flow factory function
function createGameFlow() {
  const players = [
    createPlayer("Player 1", "X"),
    createPlayer("Player 2", "O"),
  ];
  const gameBoard = createGameboard();

  let currentPlayer = players[0];


  const getCurrentPlayer = () => {
    return currentPlayer;
  };

  const changeCurrentPlayer = () => {
    if (currentPlayer == players[0]) {
      currentPlayer = players[1];
    } else {
      currentPlayer = players[0];
    }
  }

  // Create game instance object
  

    const checkWinner = (board) => {
      // Check rows
      for (let i = 0; i < 3; i++) {
        if (
          board[i][0].textContent &&
          board[i][0].textContent === board[i][1].textContent &&
          board[i][1].textContent === board[i][2].textContent
        ) {
          return board[i][0].textContent;
        }
      }

      // Check columns
      for (let i = 0; i < 3; i++) {
        if (
          board[0][i].textContent &&
          board[0][i].textContent === board[1][i].textContent &&
          board[1][i].textContent === board[2][i].textContent
        ) {
          return board[0][i].textContent;
        }
      }

      // Check diagonals
      if (
        board[0][0].textContent &&
        board[0][0].textContent === board[1][1].textContent &&
        board[1][1].textContent === board[2][2].textContent
      ) {
        return board[0][0].textContent;
      }
      if (
        board[0][2].textContent &&
        board[0][2].textContent === board[1][1].textContent &&
        board[1][1].textContent === board[2][0].textContent
      ) {
        return board[0][2].textContent;
      }

      // Check for draw
      let isDraw = true;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!board[i][j].textContent) {
            isDraw = false;
            break;
          }
        }
      }
      if (isDraw) {
        return "draw";
      }

      return null;
    }

  const gameInstance = {
    getCurrentPlayer,
    checkWinner,
    changeCurrentPlayer,
  };

  // Set up event listeners after game is initialized
  gameBoard.setupEventListeners(gameInstance);

  return { getCurrentPlayer, checkWinner, changeCurrentPlayer };
}


function displayButtons() {

}



const game = createGameFlow();
