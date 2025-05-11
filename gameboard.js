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

  document.body.appendChild(container);

  const updateGameArea = (row, col, value) => {
    grid[row][col].textContent = value;
  };

  const getGameArea = () => {
    return gameArea;
  };

  return { updateGameArea, getGameArea };
}

















function createGameFlow() {
  const players = [
    createPlayer("Player 1", "X"),
    createPlayer("Player 2", "O"),
  ];
  const gameBoard = createGameboard();

  function checkWinner(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return board[i][0];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }

    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }

    // Check for draw
    let isDraw = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
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

  function startGame() {
    let currentPlayer = players[0];
    let game = true;
    while (game) {
      console.log(gameBoard.getGameArea());
      let col = prompt("choose a column");
      let row = prompt("choose a row");

      gameBoard.updateGameArea(row, col, currentPlayer.getSymbol());

      if (checkWinner(gameBoard.getGameArea()) == "X") {
        return console.log("player 1 wins");
      } else if (checkWinner(gameBoard.getGameArea()) == "O") {
        return console.log("player 2 wins");
      }

      if (currentPlayer == players[0]) {
        currentPlayer = players[1];
      } else {
        currentPlayer = players[0];
      }
    }
  }

  return { startGame };
}